import {
  AzureOpenAiChatClient,
  AzureOpenAiChatCompletionToolType
} from '@sap-ai-sdk/foundation-models';
import * as cds from '@sap/cds';
import { ApplicationService } from '@sap/cds';
import { Sender } from './entities.js';

export default class ChatService extends ApplicationService {
  init() {
    const { Chat, Record, Report } = require('#cds-models/ChatService');
    //
    // Action newRecord
    //
    const { Records, Reports, ReportFields, Parameters } = this.entities;
    const { newRecord } = Chat.actions;

    this.on(newRecord, async req => {
      //   const chatId:any = req.data.chatid

      const chat = await SELECT.one.from(req.subject);

      //   if (!Chat) throw req.reject(404, 'chat "${chatId}" does not exist;');
      const records = await SELECT.from(Records)
        .where({
          chat_ID: chat.ID
        })
        .orderBy('createdAt');

      let messages: any;

      if (records.length != 0) {
        messages = records.map((record: { role: string; content: string }) => ({
          role:
            record.role === Sender.Assistant ? Sender.Assistant : Sender.User,
          content: record.content.trim().replace(/\n/g, ' ')
        }));
      } else {
        const prompt_report = 'prompt_report_' + req.locale;

        const para = await SELECT.one
          .from(Parameters)
          .columns('value')
          .where({ name: prompt_report });

        if (!para) {
          req.reject(404, 'Maintain_Parameter', [prompt_report]);
        }
        
        messages = [
          {
            role: Sender.User,
            content: para.value.trim().replace(/\n/g, ' ')
          }
        ];
      }

      messages.push({
        role: Sender.User,
        content: req.data.content?.trim().replace(/\n/g, ' ')
      });

      let Newrecord: any = {
        chat_ID: chat.ID,
        role: Sender.User,
        content: req.data.content?.trim().replace(/\n/g, ' ')
      };

      await cds.run(INSERT(Newrecord).into(Records));

      console.log(messages);
      const response = await new AzureOpenAiChatClient('gpt-4o').run({
        messages
      });

      if (!chat.title) {
        const Tooltype: AzureOpenAiChatCompletionToolType = 'function';

        const prompt_repname = 'prompt_repname' + req.locale;

        const para = await SELECT.one
          .from(Parameters)
          .columns('value')
          .where({ name: prompt_repname });
        
        let func_json

        if (!para) {
          func_json = {
            name: 'get_report_name',
            description:
              '获取报表名称`report_name`,比如采购订单报表，也可能叫采购订单表',
            parameters: {
              type: 'object',
              properties: {
                ReportName: {
                  type: 'string',
                  description: '<报表名称>'
                }
              }
            }
          };
        } else {
          func_json = para.value.trim().replace(/\n/g, ' ');
          func_json = JSON.parse(func_json);
        }
        const tools = [
          {
            type: Tooltype,
            function: func_json
          }
        ];
        let get_report_mes: any = [
          {
            role: Sender.User,
            content: req.data.content?.trim().replace(/\n/g, ' ')
          }
        ];

        const tool_response = await new AzureOpenAiChatClient('gpt-4o').run({
          messages: get_report_mes,
          tools //,tool_choice: 'required'
        });

        if (tool_response.getFinishReason() == 'tool_calls') {
          let Reportjson: any =
            tool_response.data.choices[0].message?.tool_calls?.[0].function
              .arguments;

          let Title = JSON.parse(Reportjson).ReportName;
          console.log(Title);

          const succeeded = await UPDATE(req.subject).with({
            title: Title
          });

          console.log(succeeded);
        }
      }

      Newrecord = {
        chat_ID: chat.ID,
        role: Sender.Assistant,
        content: response.getContent//()?.trim().replace(/\n/g, ' ')
      };
      console.log(Newrecord);

      // let insertrecord = await INSERT.into(Records).entries(Newrecord);
      // return insertrecord
      return await this.run(INSERT(Newrecord).into(Records));
    });

    //
    // Action adopt
    //
    const { adopt } = Record.actions;
    this.on(adopt, async req => {
      const Tooltype: AzureOpenAiChatCompletionToolType = 'function';

      const prompt_json = 'prompt_json_' + req.locale;

      const para = await SELECT.one
        .from(Parameters)
        .columns('value')
        .where({ name: prompt_json });

      let func_json;

      if (!para) {
        req.reject(404, 'Maintain_Parameter', [prompt_json]);
      } else {
        const func_string = para.value.trim().replace(/\n/g, ' ');
        func_json = JSON.parse(func_string);
      }
      const tools = [
        {
          type: Tooltype,
          function: func_json
        }
      ];

      // let testmes =
      //   '以下是根据用户输入的“采购报表”生成的SAP报表概要设计书' +
      //   '| 显示区域分类(category) | 字段位置(TabFdPos) | 项目名称(ParamText)         | 项目种类(FieldType) | 显示(Display) | 可输入(Enterable) | 必填(Obligatory) | 搜索帮助(ValueHelp) | 目标实体描述(ToEntityText)     | 目标实体(ToEntity)       | 目标字段说明(ToFieldText)           | 目标字段名(ToField)     | 序号(Seq) |' +
      //   '|-------------------------|---------------------|-----------------------------|----------------------|----------------|--------------------|------------------|---------------------|-------------------------------|--------------------------|-------------------------------------|-------------------------|-----------|' +
      //   '| 选择项目               | 1                   | 采购组织                   | TextBox             | X              | X                  | X                | X                   | 采购组织数据                 | I_PURCHASEORGANIZATION   | 采购组织                          | PURCHASE_ORG           | 1         |' +
      //   '| 选择项目               | 2                   | 采购组                     | TextBox             | X              | X                  |                  | X                   | 采购组数据                   | I_PURCHASINGGROUP        | 采购组                            | PURCH_GROUP            | 2         |' +
      //   '| 选择项目               | 3                   | 供应商编号                 | TextBox             | X              | X                  |                  | X                   | 供应商主数据                 | I_SUPPLIER               | 供应商编号                        | SUPPLIER               | 3         |' +
      //   '| 选择项目               | 4                   | 采购日期                   | DatePicker          | X              | X                  |                  |                     | 采购订单数据                 | I_PURCHASEORDER          | 采购日期                          | PURCHASE_DATE          | 4         |' +
      //   '| 一览项目               | 1                   | 采购订单号                 | TextBox             |                |                    |                  |                     | 采购订单数据                 | I_PURCHASEORDER          | 采购订单号                        | PURCHASE_ORDER         | 5         |' +
      //   '| 一览项目               | 2                   | 物料编码                   | TextBox             |                |                    |                  | X                   | 物料主数据                   | I_MATERIAL               | 物料编码                          | MATERIAL               | 6         |' +
      //   '| 一览项目               | 3                   | 物料描述                   | TextArea            |                |                    |                  |                     | 物料主数据                   | I_MATERIAL               | 物料描述                          | MATERIAL_DESC          | 7         |' +
      //   '一览项目               | 4                   | 采购数量                   | TextBox             |                |                    |                  |                     | 采购订单数据                 | I_PURCHASEORDER          | 采购数量                          | QUANTITY               | 8         |' +
      //   '| 一览项目               | 5                   | 单位                       | TextBox             |                |                    |                  |                     | 计量单位数据                 | I_UNITOFMEASURE          | 单位                              | UNIT                   | 9         |' +
      //   '一览项目               | 6                   | 采购金额                   | Currency            |                |                    |                  |                     | 采购订单数据                 | I_PURCHASEORDER          | 采购金额                          | AMOUNT                 | 10        |' +
      //   '| 一览项目               | 7                   | 币种                       | TextBox             |                |                    |                  |                     | 采购订单数据                 | I_PURCHASEORDER          | 币种                              | CURRENCY               | 11        |' +
      //   '| 一览项目               | 8                   | 交货日期                   | DatePicker          |                |                    |                  |                     | 采购订单数据                 | I_PURCHASEORDER          | 交货日期                          | DELIVERY_DATE          | 12        |' +
      //   '| 详细画面Header项目      | 1                   | 采购订单状态               | TextBox             |                |                    |                  |                     | 采购订单数据                 | I_PURCHASEORDER          | 采购订单状态                      | ORDER_STATUS           | 13        |' +
      //   '| 详细画面明细项目        | 1                   | 采购订单明细编号           | TextBox             |                |                    |                  |                     | 采购订单明细数据             | I_PURCHASEORDERITEM      | 采购订单明细编号                  | PURCHASE_ORDER_ITEM    | 14        |' +
      //   '| 详细画面明细项目        | 2                   | 库存地点                   | TextBox             |                |                    |                  |                     | 库存地点数据                 | I_STORAGELOCATION        | 库存地点                          | STORAGE_LOCATION       | 15        |' +
      //   '|详细画面明细项目        | 3                   | 批次号                     | TextBox             |                |                    |                  |                     | 批次主数据                   | I_BATCH                  | 批次号                            | BATCH                  | 16        |' +
      //   '如需调整或补充，请随时告知！';

      const record = await SELECT.one.from(req.subject);

      let messages: any = [
        {
          role: Sender.User,
          content: record.content
          // content: testmes
        }
      ];

      const response = await new AzureOpenAiChatClient('gpt-4o').run({
        messages,
        tools
      });

      if (response.getFinishReason() == 'tool_calls') {
        let Reportjson: any =
          response.data.choices[0].message?.tool_calls?.[0].function.arguments;

        let Report = JSON.parse(Reportjson);

        // let newFields = Report.fields.map( (item: any)=> ({ ...item, report_ID: newReport.ID }));
        let newReport = await this.run(
          INSERT.into(Reports).entries({
            record_ID: record.ID,
            Text: Report.Reports.Text,
            fields: Report.fields
          })
        );

        await this.run(UPDATE(req.subject).with({ isAdopted: true }));
        return newReport;
      }
    });

    const { verify, generateProgram, generatePCL } = Report.actions;
    //
    // Action verify
    //
    this.on(verify, async req => {
      const zye9001 = await cds.connect.to('zui_zye9001_001');
      const { Project } = zye9001.entities;
      const result = await zye9001.run(SELECT(Project));
      // const token = zye9001.run(req.query);

      // zye9001.send({
      //   event: 'GET'
      // })
      console.log(result);
    });
    //
    // Action generateProgram
    //
    this.on(generateProgram, async req => {});
    //
    // Action generatePCL
    //
    this.on(generatePCL, async req => {});
    return super.init();
  }

  // async insert_report(Newrecord: any) {
  //   const { Records } = this.entities;
  //   // Using plain native SQL for such complex queries
  //   // await cds.run(INSERT(Newrecord).into(Records));
  //   cds.tx(async tx => {
  //     await tx.create(Records, Newrecord);
  //     await tx.commit();
  //   });
  // }
}

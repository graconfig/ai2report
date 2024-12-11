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
    const { Chats, Records, Reports, ReportFields, Pcls, Parameters } =
      this.entities;
    const Tooltype: AzureOpenAiChatCompletionToolType = 'function';
    //
    // Action newRecord
    //
    const { newRecord } = Chat.actions;

    this.on(newRecord, async req => {
      //  const chatId:any = req.data.chatid

      const chat = await SELECT.one.from(req.subject);

      //  if (!Chat) throw req.reject(404, 'chat "${chatId}" does not exist;');
      const records = await SELECT.from(Records)
        .where({
          chat_ID: chat.ID
        })
        .orderBy('createdAt');

      let messages: any;

      if (records.length != 0) {
        messages = [
          {
            role: Sender.User,
            content: chat.prompt
          }
        ];

        records.map((record: { role: string; content: string }) =>
          messages.push({
            role:
              record.role === Sender.Assistant ? Sender.Assistant : Sender.User,
            content: record.content
          })
        );
      } else {
        let prompt_report = 'prompt_report_' + req.locale;

        if (req.locale == 'zh_CN') {
          prompt_report = 'prompt_report_zh';
        }

        const para = await SELECT.one
          .from(Parameters)
          .columns('value')
          .where({ name: prompt_report });

        if (!para) {
          req.reject(404, 'Maintain_Parameter', [prompt_report]);
        }

        await UPDATE(req.subject).with({
          prompt: para.value.trim().replace(/\n/g, ' ')
        });

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
        let prompt_repname = 'prompt_repname' + req.locale;

        if (req.locale == 'zh_CN') {
          prompt_repname = 'prompt_repname_zh';
        }
        const para = await SELECT.one
          .from(Parameters)
          .columns('value')
          .where({ name: prompt_repname });

        let func_json;

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
          // console.log(Title);

          await UPDATE(req.subject).with({
            title: Title
          });

          // console.log(succeeded);
        }
      }

      Newrecord = {
        chat_ID: chat.ID,
        role: Sender.Assistant,
        content: response.getContent() //?.trim().replace(/\n/g, ' ')
      };
      console.log(Newrecord);

      return await this.run(INSERT(Newrecord).into(Records));
    });

    //
    // Action adopt
    //
    const { adopt } = Record.actions;
    this.on(adopt, async req => {
      const Tooltype: AzureOpenAiChatCompletionToolType = 'function';

      let prompt_json = 'prompt_json_' + req.locale;

      if (req.locale == 'zh_CN') {
        prompt_json = 'prompt_json_zh';
      }

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
        console.log(Report);
        // let newFields = Report.fields.map( (item: any)=> ({ ...item, report_ID: newReport.ID }));

        const chat = await SELECT.one.from(Chats).where({
          ID: record.chat_ID
        });

        let newReport = await this.run(
          INSERT.into(Reports).entries({
            record_ID: record.ID,
            Text: chat.title === null ? Report.Reports.Text : chat.title,
            fields: Report.fields
          })
        );

        await this.run(UPDATE(req.subject).with({ isAdopted: true }));
        return newReport;
      } else {
        return response.getContent();
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
    this.on(generatePCL, async req => {

      //    拼接message
      const report = await SELECT.one.from(req.subject);

      const fields = await SELECT.from(ReportFields)
        .where({
          report_ID: report.ID
        })
        .orderBy('Seq');

      const fields_string = JSON.stringify(fields);

      let prompt_pcl = 'prompt_pcl_' + req.locale;

      if (req.locale == 'zh_CN') {
        prompt_pcl = 'prompt_pcl_zh';
      }

      let para = await SELECT.one
        .from(Parameters)
        .columns('value')
        .where({ name: prompt_pcl });

      if (!para) {
        req.reject(404, 'Maintain_Parameter', [prompt_pcl]);
      }

      let messages: any = [
        {
          role: Sender.User,
          content: para.value.trim().replace(/\n/g, ' ') + fields_string
        }
      ];
      //   拼接message结束
      let func_pcl = 'func_pcl_' + req.locale;

      if (req.locale == 'zh_CN') {
        func_pcl = 'func_pcl_zh';
      }

      para = await SELECT.one
        .from(Parameters)
        .columns('value')
        .where({ name: func_pcl });

      if (!para) {
        req.reject(404, 'Maintain_Parameter', [func_pcl]);
      }

      const func_string = para.value.trim().replace(/\n/g, ' ');
      const func_json = JSON.parse(func_string);
      const tools = [
        {
          type: Tooltype,
          function: func_json
        }
      ];
      //
      const response = await new AzureOpenAiChatClient('gpt-4o').run({
        messages,
        tools
      });

      if (response.getFinishReason() == 'tool_calls') {
        let pcljson: any =
          response.data.choices[0].message?.tool_calls?.[0].function.arguments;

        let insertpcls = JSON.parse(pcljson).pcl;
        console.log(insertpcls);

        let newpcls = await this.run(
          INSERT(insertpcls).into(Pcls)

          // INSERT.into(Pcls).entries({
          //   record_ID: record.ID,
          //   Text: chat.title === null ? Report.Reports.Text : chat.title,
          //   fields: Report.fields
          // })
        );

        await this.run(UPDATE(req.subject).with({ isPCLGenerated: true }));
        return newpcls;

      } else {
        return response.getContent();
      }

    });
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

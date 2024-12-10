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
    const Tooltype: AzureOpenAiChatCompletionToolType = 'function';

    this.on(newRecord, async (req, res) => {
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

      // const controller = new AbortController();
      // try {

      //   const response = await new AzureOpenAiChatClient('gpt-4o').stream({
      //     messages
      //   },
      //   controller
      // );

      //     // Set headers for event stream.
      //     res.setHeader('Content-Type', 'text/event-stream');
      //     res.setHeader('Connection', 'keep-alive');
      //     res.flushHeaders();

      //     let connectionAlive = true;

      //     // Abort the stream if the client connection is closed.
      //     res.on('close', () => {
      //       controller.abort();
      //       connectionAlive = false;
      //       res.end();
      //     });

      //     // Stream the delta content.
      //     for await (const chunk of response.stream.toContentStream()) {
      //       if (!connectionAlive) {
      //         break;
      //       }
      //       res.write(chunk);
      //     }

      //     // Write the finish reason and token usage after the stream ends.
      //     if (connectionAlive) {
      //       const finishReason = response.getFinishReason();
      //       const tokenUsage = response.getTokenUsage()!;
      //       res.write('\n\n---------------------------\n');
      //       res.write(`Finish reason: ${finishReason}\n`);
      //       res.write('Token usage:\n');
      //       res.write(`  - Completion tokens: ${tokenUsage.completion_tokens}\n`);
      //       res.write(`  - Prompt tokens: ${tokenUsage.prompt_tokens}\n`);
      //       res.write(`  - Total tokens: ${tokenUsage.total_tokens}\n`);
      //     }
      //   } catch (error: any) {
      //     console.error(error);
      //     res
      //       .status(500)
      //       .send('Yikes, vibes are off apparently 😬 -> ' + error.message);
      //   } finally {
      //     res.end();
      //   }
      // });
      // for await (const chunk of response) {
      //   process.stdout.write(chunk.choices[0]?.delta?.content || '')
      // }

      // Newrecord = {
      //   chat_ID: chat.ID,
      //   role: Sender.Assistant,
      //   content: response.getContent() //?.trim().replace(/\n/g, ' ')
      // };
      console.log(Newrecord);

      if (!chat.title) {
        const Tooltype: AzureOpenAiChatCompletionToolType = 'function';

        const prompt_repname = 'prompt_repname' + req.locale;

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

      return await this.run(INSERT(Newrecord).into(Records));
    });

    //
    // Action adopt
    //
    const { adopt } = Record.actions;
    this.on(adopt, async req => {
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
    this.on(generatePCL, async req => {
      const para = await SELECT.from(Parameters)
        .columns(['name', 'value'])
        .where({ name: ['pcl_test', 'prompt_pcl'] });
        
      const pcl = para.filter((para: any) => (para.name = 'prompt_pcl'));


      const func_string = pcl[0].value.trim().replace(/\n/g, ' ');
      const func_json = JSON.parse(func_string);

      const tools = [
        {
          type: Tooltype,
          function: func_json
        }
      ];

      const test = para.filter((para: any) => (para.name = 'pcl_test'));

      let messages: any = [
        {
          role: Sender.User,
          content: test[0].value.trim().replace(/\n/g, ' ')
        }
      ];

      const response = await new AzureOpenAiChatClient('gpt-4o').run({
        messages,
        tools
      });
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

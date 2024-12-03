using {pwc.hand.ai2report as db} from '../../db/schema';

service ChatService @(path:'/ai2report'){

    entity Chats        as projection on db.Chats
        actions {
            action newRecord(content : LargeString) returns Records;
        }

    entity Records      as projection on db.Records
        actions {
            action adopt() returns Reports;
        }

    entity Reports      as projection on db.Reports
        actions {
            action generateProgram();
            action generatePCL();
            action verify()
        }

    entity ReportFields as projection on db.ReportFields;
    entity Parameters   as projection on db.Parameters;
    entity SingleCheck as projection on db.SingleCheck;
    action newChat() returns Chats;

}
using {pwc.hand.ai2report as db} from '../../db/schema';

service ChatService @(path:'/ai2report'){
    
    entity Chats        as projection on db.Chats
        actions {
            action newRecord(content : LargeString) returns Records;
        };

    entity Records      as projection on db.Records
        actions {
            action adopt() returns Reports;
        };
    @cds.query.limit.max: 1000
    @cds.query.limit.default: 100
    entity Reports      as projection on db.Reports
        actions {
            action generateProgram();
            action generatePCL();
            action verify()
        }

    @cds.query.limit.max: 1000
    @cds.query.limit.default: 100
    entity ReportFields as projection on db.ReportFields;
    entity Parameters   as projection on db.Parameters;
    entity SingleCheck as projection on db.SingleCheck;
    entity Category     as projection on db.Category;
    entity FieldType    as projection on db.FieldType;
    action newChat() returns Chats;

}

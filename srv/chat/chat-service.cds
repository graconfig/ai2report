using {pwc.hand.ai2report as db} from '../../db/schema';

service ChatService @(path: '/ai2report') {

    entity Chats        as projection on db.Chats
        actions {
            action newRecord(content : LargeString) returns Records;
        };

    entity Records      as projection on db.Records
        actions {
            action adopt() returns Reports;
        };

    @cds.query.limit.max    : 1000
    @cds.query.limit.default: 100
    entity Reports      as projection on db.Reports
        actions {
            action verify();
            action createProject() returns Boolean;
            action generateProgram() returns Boolean;
            action generatePCL() returns array of Pcls
            
        }

    @cds.query.limit.max    : 1000
    @cds.query.limit.default: 100
    entity ReportFields as projection on db.ReportFields;

    @cds.query.limit.max    : 1000
    @cds.query.limit.default: 100
    entity Pcls         as projection on db.PCLs;

    entity Parameters   as projection on db.Parameters;
    entity SingleCheck  as projection on db.SingleCheck;
    entity ProgramGenerated  as projection on db.ProgramGenerated;
    entity Category     as projection on db.Category;
    entity FieldType    as projection on db.FieldType;
    action newChat() returns Chats;
}

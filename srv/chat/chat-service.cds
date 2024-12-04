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
    action newChat() returns Chats;

}

// annotate ChatService.Reports with @odata.draft.enabled;

// annotate ChatService.Reports with @UI: {
//     Facets        : [
//         {
//             $Type : 'UI.ReferenceFacet',
//             ID    : 'idIdentification',
//             Label : 'Basic',
//             Target: '@UI.Identification'
//         },

//         {
//             ID    : 'Fields',
//             Target: 'fields/@UI.LineItem',
//             $Type : 'UI.ReferenceFacet',
//             Label : 'Fields'
//         },
//     ],
//     LineItem      : [
//         {
//             $Type: 'UI.DataField',
//             Value: ID,
//         },
//         {
//             $Type: 'UI.DataField',
//             Value: Text,
//         },
//         {
//             $Type: 'UI.DataField',
//             Value: ProjectId,
//         },
//         {
//             $Type: 'UI.DataField',
//             Value: DevClass,
//         },
//         {
//             $Type: 'UI.DataField',
//             Value: TrKorr,
//         },
//         {
//             $Type : 'UI.DataFieldForAction',
//             Action: 'ChatService.generatePCL',
//             Label : 'Generate PCL'
//         },
//         {
//             $Type : 'UI.DataFieldForAction',
//             Action: 'ChatService.generateProgram',
//             Label : 'Generate Program'
//         },
//         {
//             $Type : 'UI.DataFieldForAction',
//             Action: 'ChatService.verify',
//             Label : 'Verify'
//         },
//     ],
//     Identification: [
//         {
//             $Type: 'UI.DataField',
//             Value: ID,
//         },
//         {
//             $Type: 'UI.DataField',
//             Value: Text,
//         },
//         {
//             $Type: 'UI.DataField',
//             Value: ProjectId,
//         },
//         {
//             $Type: 'UI.DataField',
//             Value: DevClass,
//         },
//         {
//             $Type: 'UI.DataField',
//             Value: TrKorr,
//         },
//         {
//             $Type : 'UI.DataFieldForAction',
//             Action: 'ChatService.generatePCL',
//             Label : 'Generate PCL'
//         },
//         {
//             $Type : 'UI.DataFieldForAction',
//             Action: 'ChatService.generateProgram',
//             Label : 'Generate Program'
//         },
//         {
//             $Type : 'UI.DataFieldForAction',
//             Action: 'ChatService.verify',
//             Label : 'Verify'
//         }
//     ],
// };

// annotate ChatService.ReportFields with @UI: {LineItem: [
//     {
//         $Type: 'UI.DataField',
//         Value: category
//     },
//     {
//         $Type: 'UI.DataField',
//         Value: TabFdPos
//     },
//     {
//         $Type: 'UI.DataField',
//         Value: ParamText
//     },
//     {
//         $Type: 'UI.DataField',
//         Value: FieldType
//     },
//     {
//         $Type: 'UI.DataField',
//         Value: Display
//     },
//     {
//         $Type: 'UI.DataField',
//         Value: Enterable
//     },
//     {
//         $Type: 'UI.DataField',
//         Value: Obligatory
//     },
//     {
//         $Type: 'UI.DataField',
//         Value: ValueHelp
//     },
//     {
//         $Type: 'UI.DataField',
//         Value: ToEntityText
//     },
//     {
//         $Type: 'UI.DataField',
//         Value: ToEntity
//     },
//     {
//         $Type: 'UI.DataField',
//         Value: ToFieldText
//     },
//     {
//         $Type: 'UI.DataField',
//         Value: ToField
//     }
// ],

// };

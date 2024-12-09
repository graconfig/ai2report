using ChatService from '../../srv/chat/chat-service';

annotate ChatService.Parameters @odata.draft.enabled;


annotate ChatService.Parameters with @(UI.LineItem: [
    {
        $Type: 'UI.DataField',
        Label: 'name',
        Value: name,
    },
    {
        $Type: 'UI.DataField',
        Label: 'value',
        Value: value,
    },
    {
        $Type: 'UI.DataField',
        Label: 'description',
        Value: description,
    },
]);

annotate ChatService.Parameters with @(
    UI.FieldGroup #GeneratedGroup1: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'name',
                Value: name
            },
            {
                $Type: 'UI.DataField',
                Label: 'description',
                Value: description
            }
        ],
    },
    UI.FieldGroup #GeneratedGroup2: {
        $Type: 'UI.FieldGroupType',
        Data : [{
            $Type: 'UI.DataField',
            Label: 'value',
            Value: value
        }],
    },
    UI.Facets                     : [
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet1',
            Label : 'Description Information',
            Target: '@UI.FieldGroup#GeneratedGroup1'
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet2',
            Label : 'Value Information',
            Target: '@UI.FieldGroup#GeneratedGroup2'
        }
    ]
);
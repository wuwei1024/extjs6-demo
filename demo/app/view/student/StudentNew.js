Ext.define('Demo.view.student.StudentNew', {
    extend: 'Ext.window.Window',

    requires: [
        'Demo.view.student.StudentController',
        'Demo.view.student.StudentModel'
    ],

    controller: 'student',
    viewModel: {
        type: 'student'
    },

    width: 320,

    items: [{
        xtype: 'form',
        layout: 'form',
        defaults: {
            labelAlign: 'right',
            allowBlank: false
        },
        reference: 'addForm',
        defaultType: 'textfield',
        items: [
            {
                xtype: 'hidden',
                name: 'id',
                bind: {
                    value: '{student.id}'
                }
            },
            {
                name: 'name',
                bind: {
                    value: {
                        bindTo: '{student.name}',
                        twoWay: false
                    }
                },
                fieldLabel: 'Name'
            },
            {
                name: 'gender',
                bind: {
                    value: {
                        bindTo: '{student.gender}',
                        twoWay: false
                    }
                },
                fieldLabel: 'Gender'
            },
            {
                name: 'course',
                bind: {
                    value: {
                        bindTo: '{student.course}',
                        twoWay: false
                    }
                },
                fieldLabel: 'Course'
            }
        ],
        buttons: [
            {
                text: 'Save',
                formBind: true,
                handler: 'onSaveClick'
            },
            {
                text: 'Cancel',
                handler: 'onCancelClick'
            }
        ]
    }]
});
Ext.define('Demo.view.student.Student', {
    extend: 'Ext.panel.Panel',
    xtype: 'student',

    requires: [
        'Demo.view.student.StudentController',
        'Demo.view.student.StudentModel'
    ],

    controller: 'student',
    viewModel: {
        type: 'student'
    },

    title: 'Students Information',

    tbar: [
        { xtype: 'button', text: 'Refresh', handler: 'refresh' },
        { xtype: 'button', text: 'Add', handler: 'add' },
        { xtype: 'button', text: 'Delete', handler: 'delete' }
    ],

    items: [
        {
            xtype: 'grid',
            id: 'student_grid',
            columns: [
                { text: 'No.', xtype: 'rownumberer', align: 'center', width: 50 },
                { text: 'ID', dataIndex: 'id', align: 'center' },
                { text: 'Name', dataIndex: 'name', align: 'center' },
                { text: 'Gender', dataIndex: 'gender', align: 'center' },
                { text: 'Course', dataIndex: 'course', align: 'center', width: 150 },
                {
                    text: 'AddTime', dataIndex: 'addTime', align: 'center', width: 200,
                    renderer: function (time) {
                        return dateFormat(time,'yyyy-MM-dd HH:mm:ss');
                    }
                }
            ],
            bind: {
                store: '{items}'
            },
            listeners: {
                itemdblclick: 'modify'
            }
        }
    ]
});

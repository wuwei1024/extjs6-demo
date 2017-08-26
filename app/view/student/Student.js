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

    items: [
        {
            xtype: 'grid',
            id: 'student_grid',
            columns: [
                { text: 'No.', xtype: 'rownumberer', align: 'center' , width: 50 },
                { text: 'ID', dataIndex: 'id', align: 'center' },
                { text: 'Name', dataIndex: 'name', align: 'center' },
                { text: 'Course', dataIndex: 'course', align: 'center' }
            ],
            store: {
                fields: ['id', 'name', 'course'],
                data: []
            }
        }
    ]
});

Ext.define('Demo.view.student.StudentModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.student',
    
    requires: [
        'Demo.store.Student'
    ],

    data: {},

    stores: {
        items: {
            type: 'student'
        }
    }
});

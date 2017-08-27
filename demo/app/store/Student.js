Ext.define('Demo.store.Student', {
    extend: 'Ext.data.Store',

    alias: 'store.student',

    fields: ['id', 'name', 'gender', 'course', 'addTime']

});
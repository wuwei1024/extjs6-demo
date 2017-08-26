Ext.define('Demo.view.student.StudentController', {
    extend: 'Demo.view.base.BaseController',
    alias: 'controller.student',

    //初始化
    init: function(){
        var result = this.sendAjaxRequest('getAllStudent');
        Ext.getCmp('student_grid').getStore().setData(result);
    }
});

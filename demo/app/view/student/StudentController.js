Ext.define('Demo.view.student.StudentController', {
    extend: 'Demo.view.base.BaseController',
    alias: 'controller.student',

    //初始化
    init: function () { },

    //刷新数据
    refresh: function () {
        var result = this.sendAjaxRequest('getAllStudent');
        if (result && result.status === 1) {
            Ext.getCmp('student_grid').getStore().setData(result.data);
        }
    },

    //添加数据
    add: function () {
        Ext.create('Demo.view.student.StudentNew', {
            title: 'New Student'
        }).show();
    },

    //修改数据
    modify: function (view, record, item, index, e, eOpts) {
        Ext.create('Demo.view.student.StudentNew', {
            title: 'Modify',
            viewModel: {
                data: {
                    student: record
                }
            }
        }).show();
    },

    //保存新增或修改的数据
    onSaveClick: function () {
        var winTitle = this.getView().getTitle();
        var form = this.lookupReference('addForm');
        if (form.isValid()) {
            var values = form.getValues();
            var params = JSON.stringify(values);
            var action = (winTitle === 'Modify') ? 'updateStudent' : 'addStudent';
            var result = this.sendAjaxRequest(action, params, 'json');
            if (result && result.status === 1) {
                if (winTitle === 'Modify') {//修改
                    Ext.getCmp('student_grid').getSelection()[0].set(values);
                } else {//新增
                    this.refresh();
                }
                this.getView().close();
            } else {
                Ext.Msg.alert('Message', 'Save failed, please try again later!');
            }
        }
    },

    //取消
    onCancelClick: function(){
        this.getView().close();
    },

    //删除数据
    delete: function () {
        var grid = Ext.getCmp('student_grid');
        var selected = grid.getSelection();
        if (selected && selected.length === 1) {
            Ext.MessageBox.confirm('Hint', 'Sure to delete the item?', function (btn) {
                if (btn === 'yes') {
                    var params = {
                        id: selected[0].get('id')
                    };
                    var result = me.sendAjaxRequest('delStudentById', params);
                    if (result && result.status === 1) {
                        var itemStore = grid.getStore();
                        Ext.each(selected, function () {
                            itemStore.remove(this);
                        });
                    } else {
                        Ext.Msg.alert('Message', 'Delete failed, please try again later!');
                    }
                }
            });
        } else {
            Ext.Msg.alert('Message', 'Please select one item at least!');
        }
    }
});

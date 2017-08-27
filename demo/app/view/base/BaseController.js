Ext.define('Demo.view.base.BaseController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.base',

    /**
     * 发送AJAX请求到服务器
     * @param action 服务器action名称
     * @param params 发送至服务器的参数
     * @param paramsType 参数的数据格式
     * @returns {*}
     */
    sendAjaxRequest: function (action, params, paramsType) {
        var result;
        var defaultPostHeader = 'application/x-www-form-urlencoded;charset=UTF-8';
        if(paramsType === 'json'){
            defaultPostHeader = 'application/json;charset=UTF-8';
        }
        Ext.Ajax.request({
            url: 'http://localhost:8181/demo/student/' + action,
            method: 'post',
            params: params,
            async: false,
            dataType: 'json',
            defaultPostHeader: defaultPostHeader,
            success: function (response, opts) {
                result = Ext.decode(response.responseText);
            },
            failure: function (response, opts) {
                console.log(response.status);
            }
        });
        return result;
    }
});

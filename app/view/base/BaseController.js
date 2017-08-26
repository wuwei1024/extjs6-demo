Ext.define('Demo.view.base.BaseController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.base',

    //send ajax request to server
    sendAjaxRequest: function(action, params){
        var result;
        Ext.Ajax.request({
            url: 'http://localhost:8181/demo/student/' + action,
            defaultPostHeader : 'application/x-www-form-urlencoded; charset=UTF-8',  
            method: 'post', 
            params: params,         
            async: false,
            success: function(response, opts) {
                result = Ext.decode(response.responseText);
            },
            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
        return result;
    }
});

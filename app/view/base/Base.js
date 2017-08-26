Ext.define('Demo.view.base.Base',{
    extend: 'Ext.panel.Panel',

    requires: [
        'Demo.view.base.BaseController',
        'Demo.view.base.BaseModel'
    ],

    controller: 'base',
    viewModel: {
        type: 'base'
    },

    html: 'Hello, World!!'
});

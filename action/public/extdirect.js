
Ext.onReady(function() {

    Ext.Direct.addProvider(Ext.app.REMOTING_API);

    mod1.foo(100, 200, function(ret) {
        console.log(ret);
    });

});

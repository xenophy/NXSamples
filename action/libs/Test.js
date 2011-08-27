
NX.define('My.Test', {

    extend: 'NX.WebAction',
    execute: function() {
        console.log("My.Test execute!");
        this.end();
    }

});

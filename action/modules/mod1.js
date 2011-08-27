

module.exports = {

    useTable: false,

    foo : function(a,b, fn) {

        if(fn) {
            fn('foo called.');
        }

    }

};


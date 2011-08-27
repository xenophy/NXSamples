

module.exports = {

    foo: function(fn) {

        var me = this;

        me.query("SELECT * FROM tbl_hoge;", function(err, rs) {
            fn(rs);
        });

    }

};


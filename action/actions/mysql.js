
module.exports = {

    uses: [{
        name: 'mod_mysql',
        conn: 'default'
    }],

    execute: function() {

        var me = this;

        /*
        me.mod_mysql.query("SELECT * FROM tbl_hoge", function() {


        });
        */

        me.mod_mysql.foo(function(rs) {

            me.dump(rs);

            me.end();
        });


    }

};


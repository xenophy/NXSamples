/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ index


module.exports = ['My.Test',{

    execute: function() {

 //       this.set('bridge', 123);

        this.end();
    }

},{

    uses: [
        'mod1'
    ],

    // {{{ execute

    execute: function() {

        var me = this;


//        console.log(me.result);

        /*
        this.basicAuth(function(user, pw) {

            if(user === "kotsutsumi" && pw === "hoge") {

                me.end();

            } else {

                me.forbidden();

            }

        }, 'Input your id and password.');
        return;

        */


//        this.setTemplate('foo.html');

///        this.mod1.foo();



        // 標準出力

        this.dump('teston');
        this.dump({
            key1: 'value1',
            key2: 'value2'
        });

        this.dump({
            hoge: {
                foo: {
                    bar: 'kotsutsumi'
                }
            }
        });

        this.dump([1,2,3,4,5]);
        this.dump([{
            foo: "bar"
        }], "teston");

        this.set('ret1', this.request.foo);


        var f = function(cb) {

            cb();

        }

        f(function() {

        });

        /*
        NX.Fs.unlink('/tmp/hello', function (err) {
            if (err) throw err;
            dsadsadsa
        });
        */

        // アクション終了
        this.end();

    }

    // }}}

}];

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

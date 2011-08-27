/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ global.action

module.exports = [{

    // {{{ execute

    execute: function() {

        this.end();

        /*
        var me = this;

        this.basicAuth(function(user, pw) {

            me.end();

        });
        */



        /*
        var me = this;
        var res = me.res;
        var req = me.req;

        // ベーシック認証

        var authorization = req.headers.authorization;

        var parts = authorization.split(' '),
            scheme = parts[0],
            credentials = new Buffer(parts[1], 'base64').toString().split(':');

        if(!authorization) {

            res.statusCode = 401;
            res.setHeader('WWW-Authenticate', 'Basic realm="' + 'Authorization Required' + '"');
            res.end('Unauthorized');
            this.abort(false);
            return;

        } else {


        }




        // 標準出力

        this.set('ret2', 'ok');




        // アクション終了
        //this.abort();
        this.end();

//        this.redirect('http://www.xenophy.com/');
        */
    }

    // }}}

},{

    execute: function() {


        this.end();

    }

}];

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

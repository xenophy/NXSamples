/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');

// }}}
// {{{ HTTP Server

NX.Loader.setConfig({
    enabled: true,
    paths: {
        'My': __dirname + '/./libs/'
    }
});

NX.service({
    workers: false,
    enableDaemon: false,
    virtualhost: [{
        server: 'nxtest1.com',
        alias: '*.nxtest1.com',
        port: 3000,
        virtualroot: '{1}',
        root: 'nxtest1'
    }]
});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

/**
 * Created by zhanghd on 13-5-21 上午10:21
 * Copyright 2013 ND, Inc. All rights reserved.
 */
define(function (require, exports, module) {
    'use strict';
    require('../lib/util/core');
    var g = {}, // 全局变量
        helper = {}, // 当前业务辅助函数
        process = {}, // 业务处理
        htmlLayout = {},
        bind = {};  //事件绑定

    g.node = {
        main:$('#main'),
        doc:$(document),
        win:$(window)
    };

    g.config = {
        getUserInfoUrl:'xxx.php'
    };

    g.params = {

    };

    htmlLayout = {
        dialog:function(){
            return 'html';
        }
    };

    helper = {
        formatStr: function () {

        }
    };

    process = {
        init: function () {

        }
    };

    bind = {
        init: function () {
            g.node.on('click',function(){

            });
        }
    };

    return {
        init:process.init
    }

});

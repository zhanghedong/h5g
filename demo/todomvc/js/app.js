/**
 * Created by zhanghd on 13-6-17 下午5:24
 * Copyright 2013 ND, Inc. All rights reserved.
 */
define(function (require, exports, module) {
    var Ember = require('ember');
    window.Todos = window.Todos || Ember.Application.create({
        rootElement:'#todoapp',
        ApplicationController: Ember.Controller.extend()
    });
    return window.Todos;

})

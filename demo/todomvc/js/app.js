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
    Todos.ApplicationRoute = Ember.Route.extend({
        setupController: function(controller) {//初始化
            // `controller` is the instance of ApplicationController
            console.log(controller);
//            controller.set('title', "Hello world!");
//            controller.set('title', "Hello world!");
        }
    });
    Todos.ApplicationController = Ember.Controller.extend({
//        title: 'My First Example'
    });
    return window.Todos;

})

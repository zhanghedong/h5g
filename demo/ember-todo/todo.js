/**
 * Created by zhanghd on 13-6-17 下午2:00
 * Copyright 2013 ND, Inc. All rights reserved.
 */
define(function (require, exports, module) {
    var Ember = require('ember');
    var localstorage = require('localstorage');
    var app = require('../ember-todo/app');
    var store = require('../ember-todo/model/store');
    var todoModel = require('../ember-todo/model/todo');
    var router = require('../ember-todo/router');
    var todosController= require('../ember-todo/controllers/todos');
    var todoView= require('../ember-todo/views/todo');


//    Todos.Router.map(function(){
//        this.resource('todos',{path:'/'}); //自动 创建视觉并且对应模板：data-template-name="todos"
//    })


})

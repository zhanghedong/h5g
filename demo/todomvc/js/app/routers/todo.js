/**
 * Created by zhanghd on 13-6-18 下午6:39
 * Copyright 2013 ND, Inc. All rights reserved.
 */
define(function (require, exports, module) {
    Todos.TodosRoute = Ember.Route.extend({
        model: function () {
//            return Todos.Todo.find();
        }
    });

    Todos.TodosIndexRoute = Ember.Route.extend({
        model: function () {
//            return Todos.Todo.find();
        }
    });

    Todos.TodosActiveRoute = Ember.Route.extend({
        model: function(){
            return Todos.Todo.filter(function (todo) {
                if (!todo.get('isCompleted')) { return true; }
            });
        },
        renderTemplate: function(controller){
            this.render('todos/index', {controller: controller});
        }
    });

    Todos.TodosCompletedRoute = Ember.Route.extend({
        model: function(){
            return Todos.Todo.filter(function (todo) {
                if (todo.get('isCompleted')) { return true; }
            });
        },
        renderTemplate: function(controller){
            this.render('todos/index', {controller: controller});
        }
    });
})

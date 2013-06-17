/**
 * Created by zhanghd on 13-6-17 下午2:23
 * Copyright 2013 ND, Inc. All rights reserved.
 */
define(function (require, exports, module) {
    Todos.Router.map(function () {
        this.resource('todos', { path: '/' }, function () {
            // additional child routes
            this.route('active');
            this.route('completed');
        });
    });

    Todos.TodosRoute = Ember.Route.extend({
        model: function () {
            return Todos.Todo.find();
        }
    });

    Todos.TodosIndexRoute = Ember.Route.extend({
        model: function () {
            return Todos.Todo.find();
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

/**
 * Created by zhanghd on 13-6-17 下午3:18
 * Copyright 2013 ND, Inc. All rights reserved.
 */
define(function (require, exports, module) {
    Todos.TodosController = Ember.ArrayController.extend({
        createTodo: function () {
            // Get the todo title set by the "New Todo" text field
            var title = this.get('newTitle');
            if (!title.trim()) { return; }

            // Create the new Todo model
            var todo = Todos.Todo.createRecord({
                title: title,
                isCompleted: false
            });

            // Clear the "New Todo" text field
            this.set('newTitle', '');

            // Save the new model
            todo.save();
        },

        remaining: function () {
            return this.filterProperty('isCompleted', false).get('length');
        }.property('@each.isCompleted'),

        inflection: function () {
            var remaining = this.get('remaining');
            return remaining === 1 ? 'item' : 'items';
        }.property('remaining'),

        hasCompleted: function () {
            return this.get('completed') > 0;
        }.property('completed'),

        completed: function () {
            return this.filterProperty('isCompleted', true).get('length');
        }.property('@each.isCompleted'),

        clearCompleted: function () {
            var completed = this.filterProperty('isCompleted', true);
            completed.invoke('deleteRecord');

            this.get('store').save();
        },

        allAreDone: function (key, value) {
            if (value === undefined) {
                return !!this.get('length') && this.everyProperty('isCompleted', true);
            } else {
                this.setEach('isCompleted', value);
                this.get('store').save();
                return value;
            }
        }.property('@each.isCompleted')
    });


    Todos.TodoController = Ember.ObjectController.extend({
        isEditing: false,

        editTodo: function () {
            this.set('isEditing', true);
        },

        removeTodo: function () {
            var todo = this.get('model');
            todo.deleteRecord();
            todo.save();
        },

        acceptChanges: function () {
            this.set('isEditing', false);
            this.get('model').save();
        },

        isCompleted: function(key, value){
            var model = this.get('model');

            if (value === undefined) {
                // property being used as a getter
                return model.get('isCompleted');
            } else {
                // property being used as  setter
                model.set('isCompleted', value);
                model.save();
                return value;
            }
        }.property('model.isCompleted')
    });


})

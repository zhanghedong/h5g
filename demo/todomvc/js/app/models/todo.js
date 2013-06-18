/**
 * Created by zhanghd on 13-6-17 下午2:10
 * Copyright 2013 ND, Inc. All rights reserved.
 */
define(function (require, exports, module) {
    Todos.Todo = DS.Model.extend({
        title: DS.attr('string'),
        isCompleted: DS.attr('boolean')
    });

    Todos.Todo.FIXTURES = [
        {
            id: 1,
            title: 'Learn Ember.js',
            isCompleted: true
        },
        {
            id: 2,
            title: '...',
            isCompleted: false
        },
        {
            id: 3,
            title: 'Profit!',
            isCompleted: false
        }
    ];
})

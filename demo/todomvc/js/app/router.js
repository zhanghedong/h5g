/**
 * Created by zhanghd on 13-6-18 上午11:17
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


//    Todos.Router =  Em.Router.extend({
//        root:Ember.Route.extend({
//            index:Em.Route.extend({
//                route:'/',
//                connectOutlet:function(router){
//                    alert('11');
//                    console.log(router);
//
//                }
//            })
//        })
//    })

})

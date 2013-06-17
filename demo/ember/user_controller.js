define(function (require) {
    var Ember = require('ember');
    var init = require('../ember/init');
    var route = require('../ember/route');
    var user = require('../ember/user_model');
    var view = require('../ember/user_view');
    App.UsersRoute = Ember.Route.extend({
        model: function () {
            return App.User.find();
        }
    });
    App.IndexRoute = Ember.Route.extend({
        redirect: function () {
            this.transitionTo('users');
        }
    });

//    return $.each($this[0].attributes, function(index, attr) {
//        // this bit added
//        if(!attr) {
//            return;
//        }
//        if (attr.name.indexOf('data-bindattr') === -1) {
//            return;
//        }
//    })
});

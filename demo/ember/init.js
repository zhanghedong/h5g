define(function (require) {
    var Ember = require('ember');
    window.App =  Ember.Application.create();
    App.Store = DS.Store.extend({
        revision: 12,
        adapter: "DS.FixtureAdapter"
    });
    App.InitTpl = function(tpl){
        $('body').append($.isArray(tpl)?tpl.join(''):tpl);
    }
});
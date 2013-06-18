/*! grunt-spm-build - v0.2.0 - 2013-06-17 18:14 */ define("src/app/config/application-debug", [ "ember-debug" ], function(require) {
    var Ember = require("ember-debug");
    //创建应用
    window.App = Ember.Application.create();
    //自定义store
    App.Store = DS.Store.extend({
        revision: 12,
        adapter: "DS.FixtureAdapter"
    });
    //初始化模板
    App.InitTpl = function(tpl) {
        $("body").append($.isArray(tpl) ? tpl.join("") : tpl);
    };
});

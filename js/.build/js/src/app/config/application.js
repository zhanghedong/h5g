define("src/app/config/application", [ "ember" ], function(require) {
    var Ember = require("ember");
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
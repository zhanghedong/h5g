define(function (require) {
    // App.UserController = Ember.ObjectController.extend({
    var tpl = require('../ember/user_tpl');
    //初始化模板
    App.InitTpl([tpl.users, tpl.user]);
    App.UsersView = Ember.View.extend({
        classNames:'user-wrap'
    });
    App.UserView = Ember.View.extend({
        isEditing: false,
        classNames:'user-detail',
        edit: function () {
            this.set('isEditing', true);
        },
        finishEdit: function () {
            this.set('isEditing', false);
            //this.get('controller.model.transaction').commit();
        }
    });
});

define(function (require) {
    App.Router.map(function () {
        this.resource('users', function () {
            this.resource('user', { path: ':user_id' });
        });
    });
});

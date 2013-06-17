/*! grunt-spm-build - v0.2.0 - 2013-06-13 11:31 */ define("src/app/config/route-debug", [], function(require) {
    App.Router.map(function() {
        this.resource("users", function() {
            this.resource("user", {
                path: ":user_id"
            });
        });
    });
});

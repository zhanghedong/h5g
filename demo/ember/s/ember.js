define(function (require) {
    //http://emberjs.cn/guides/application/
    var Ember = require('ember');
    App = Ember.Application.create({
        LOG_TRANSITIONS: true,//开启路由记录
        title: 'First 11App'
    });

    //模型
    App.Post = {
        find: function (id) {
            return {name: 'zhanghedong' + (id ? id : 0)}
        }
    };
    //路由
    App.PostsRoute = Ember.Route.extend({
        model: function () {
            return App.Post.find();
        }
    });

    //路由
    App.PostRoute = Ember.Route.extend({
        model: function (params) {
            return App.Post.find(params.post_id);
        },
        events: {
            turnItUp: function (level) {
                alert('route=====' + level);
            }
        }
    });

    App.PostController = Ember.ObjectController.extend({
        postName: 'postName', turnItUp: function (level) {//未定义时传到路由 events.turnItUp
            alert(level);
        }
    });
    //路由匹配
    App.Router.map(function () {
        this.route("about");//名字一样可用简写
        this.route("posts");//名字一样可用简写
        this.route("user");//名字一样可用简写
        this.route("favorites", { path: "/favs" });
        this.route("post", {path: '/posts/:post_id'});
//        this.resource('post',{path:'/posts/:post_id'});
    });


    App.AboutRoute = Ember.Route.extend({
        setupController: function (controller) {
            // Set the IndexController's `title`
            controller.set('title', "About");
        }
    });
    App.FavoritesRoute = Ember.Route.extend({
        setupController: function (controller) {
            // Set the IndexController's `title`
            controller.set('fav', "Favorites");
        }
    });

    App.ClickableView = Ember.View.extend({
        click: function (evt) {
            console.log(this.get('controller'));
            this.get('controller').send('turnItUp', 11);
//            alert("ClickableView was clicked!");
        }
    });

//    App.UserController = Ember.ObjectController.extend({
//        postName: 'postName', turnItUp: function (level) {//未定义时传到路由 events.turnItUp
//            alert(level);
//        }
//    });
    // 定义父视图
    App.UserView = Ember.View.extend({
        templateName: 'user',

        firstName: "Albert",
        lastName: "Hofmann"
    });

// 定义子视图
    App.InfoView = Ember.View.extend({
        templateName: 'info',
        template: Ember.Handlebars.compile('<h1 class="abc">title</h1><h2>author</h2><div>body</div>'),
        posts: 25,
        hobbies: "Riding bicycles"
    });

    App.AViewWithLayout = Ember.View.extend({
        name: 'Teddy',
        layoutName: 'my_layout',
        templateName: 'my_content'
    });

    App.PopupView = Ember.View.extend({
        layoutName: 'popup'
    });




//    App.ApplicationRoute = Ember.Route.extend({
//        setupController: function(controller) {
//            // `controller` is the instance of ApplicationController
// l           controller.set('title', "Hello world pig!");
//        }
//    });
//    App.ApplicationController = Ember.Controller.extend({
//        appName: 'My First Example'
//    });
//    App.FavoritesRoute = Ember.Route.extend({
//        model: function() {
//            // the model is an Array of all of the posts
//            return App.Post.find();
//        }
//    });


    //model
//    App.Store =DS.Store.extend({
//        reviser:12,
//        adapter:'App.cAdapter'
//    })


});

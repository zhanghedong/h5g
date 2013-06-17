App = Ember.Application.create();

App.Store = DS.Store.extend({
	revision: 12,
	adapter: 'DS.FixtureAdapter'
});

App.Router.map(function() {
	this.resource('favorites');
	this.resource('contact');
	this.resource('posts', function(){
		this.resource('post',{path: ':post_id'});
	});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ["This demo contains the code for demo as shown in emberJS guides section.",
            "Always make sure that you have compatible version of all your libraries",
            "Good luck!"];
  }
});

App.FavoritesRoute = Ember.Route.extend({
	model: function() {
	return ['Prabhat', 'Ranjan', 'Singh'];
}
});

App.ContactRoute = Ember.Route.extend({
	
});

App.PostsRoute = Ember.Route.extend({
	model: function() {
	return App.Post.find();
}
});

App.PostRoute = Ember.Route.extend({
	
});

App.PostController = Ember.ObjectController.extend({
	isEditing: false,
	doneEditing: function(){
	this.set('isEditing',false);
	this.get('store').commit();
},
	edit: function(){
		this.set('isEditing',true);
}	
});

App.Post = DS.Model.extend({
	title: DS.attr('string'),
	author: DS.attr('string'),
	intro: DS.attr('string'),
	extended: DS.attr('string'),
	publishedAt: DS.attr('date')
});

App.Post.FIXTURES = [{
	id: 1,
	title: "EmberJS",
	author: "Prabhat",
	publishedAt: new Date('05-15-2013'),
	intro: "Please visit [emberJS](http://emberjs.com/) for more details",
	extended: "[Mavuno](http://mavuno.co.in)"
},{
	id: 2,
	title: "NodeJS",
	author: "Prabhat",
	publishedAt: new Date('05-14-2013'),
	intro: "Please visit [nodeJS](http://nodejs.org/) for more details",
	extended: "[Mavuno](http://mavuno.co.in)"
}];

Ember.Handlebars.registerBoundHelper('date',function(date){
	return moment(date).fromNow();
});

var showdown = new Showdown.converter();

Ember.Handlebars.registerBoundHelper('markdown',function(input){
	return new Ember.Handlebars.SafeString(showdown.makeHtml(input));
});
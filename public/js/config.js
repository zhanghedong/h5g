define(function (require, exports, module) {
    window.h5g = {} //全局变量
    var development = true; // 发布时候改为false
    var version = '0.0.1'; // 版本，发布时候修改
    var debug = development ? 2 : false; // 线上为false，本地为2
    var domain = this.location.host;//当前访问的域名
    var plugins = ['shim','text'],map=[],app=[],game=[],impact=[];
    if (development) {
        plugins.push('nocache');
        plugins.push('debug');
        app = ['public/js/app','js/app'];
        game = ['public/js/game','js/game'];
        map.push(function(url){
            //特殊目录处理
            return url;
        });
        map.push(app);
        map.push(game);
    }

   seajs.development = development;
    seajs.config({
        plugins: plugins,
        alias: {
            'jquery1.9': {
                src: 'lib_ext/jquery/jquery-1.9.1.min',
                exports: 'jQuery'
            },
            'jquery2.0': {
                src: 'lib_ext/jquery/jquery-2.0.0.min',
                exports: 'jQuery'
            },
            'handlebars': {
                src: 'lib_ext/handlebars/handlebars',
                exports: 'Handlebars',
                deps: ['jquery2.0']
            },
            'ember': {
                src: 'lib_ext/ember/ember-1.0.0-rc.5',
                exports: 'Ember',
                deps: ['jquery2.0', 'handlebars']
            },
            'emberData': {
                src: 'lib_ext/ember/ember-data-0.13',
                exports: 'DS',
                deps: ['ember']
            },
            'localstorage': {
                src: 'lib_ext/localstorage/localstorage_adapter',
                exports: 'DS',
                deps: ['ember','emberData']
            },
            'zepto': {
                src: 'lib_ext/zepto/zepto.min',
                exports: 'Zepto'
            },
            'touch': {
                src: 'lib_ext/zepto/touch',
                deps: ['zepto']
            },
            'iScroll': {
                src: 'lib_ext/iscroll/iscroll',
                exports: 'iScroll'
            },
            'iScroll-lite': {
                src: 'lib_ext/iscroll/iscroll-lite',
                exports: 'iScroll'
            },
            'dragSwap': {
                src: 'lib_ext/dragswap/zepto.dragswap'
            },
            'angular': {
                src: 'lib_ext/angular/angular.min'
            }
        },
        version: version,
        debug: debug,
        map :map,
//        base: baseUrl,
        charset: 'utf-8'
    });
});
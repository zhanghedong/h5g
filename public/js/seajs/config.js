define(function (require, exports, module) {
    var development = true; // 发布时候改为false
    var version = '0.0.1'; // 版本，发布时候修改
    var debug = development ? 2 : false; // 线上为false，本地为2
    var href = this.location.href; //当前访问的链接
    var getHost = function (url) {
        var host = "null";
        var regex = /.*\:\/\/([^\/]*).*/;
        var match = url.match(regex);
        if (typeof match != "undefined" && null != match)
            host = match[1];
        return host;
    };
    var domain = this.location.host;//当前访问的域名
    var productUrl = 'http://' + domain + '/h5g/public/js'; // 生产环境js代码路径
    var devUrl = 'http://' + domain + '/h5g/js'; // 开发环境js源码路径
    var baseUrl = '';
    if (development) {
        baseUrl = devUrl;
    } else {
        baseUrl = productUrl;
    }
    seajs.config({
        plugins: ['shim', 'nocache', 'debug','text'],
        alias: {
            'jquery1.9': {
                src: 'src/lib/jquery/jquery-1.9.1.min',
                exports: 'jQuery'
            },
            'jquery2.0': {
                src: 'src/lib/jquery/jquery-2.0.0.min',
                exports: 'jQuery'
            },
            'handlebars': {
                src: 'src/lib/handlebars/handlebars',
                exports: 'Handlebars',
                deps: ['jquery2.0']
            },
            'ember': {
                src: 'src/lib/ember/ember-1.0.0-rc.5',
                exports: 'Ember',
                deps: ['jquery2.0', 'handlebars']
            },
            'emberData': {
                src: 'src/lib/ember/ember-data-0.13',
                exports: 'DS',
                deps: ['ember']
            },
            'localstorage': {
                src: 'src/lib/localstorage/localstorage_adapter',
                exports: 'DS',
                deps: ['ember','emberData']
            },
            'zepto': {
                src: 'src/lib/zepto/zepto.min',
                exports: 'Zepto'
            },
            'touch': {
                src: 'src/lib/zepto/touch',
                deps: ['zepto']
            },
            'iScroll': {
                src: 'src/lib/iscroll/iscroll',
                exports: 'iScroll'
            },
            'iScroll-lite': {
                src: 'src/lib/iscroll/iscroll-lite',
                exports: 'iScroll'
            },
            'dragSwap': {
                src: 'src/lib/dragswap/zepto.dragswap'
            },
            'angular': {
                src: 'src/lib/angular/angular.min'
            }
        },
        version: version,
        debug: debug,
        base: baseUrl,
        charset: 'utf-8'
    });
});
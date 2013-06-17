//http://popdevelop.com/2010/08/touching-the-web/
define(function (require) {
    var $ = require('zepto');
//    var $ = require('jquery1.9');
    $.fn.draggable = function() {
        var offset = null,timer;
        var start = function(e) {
            var orig = e.originalEvent?e.originalEvent:e;
            var pos = $(this).position();
            var pageY = orig.changedTouches ? orig.changedTouches[0].pageY : orig.pageY;
            var pageX = orig.changedTouches ? orig.changedTouches[0].pageX : orig.pageX;
            offset = {
                x: pageX - pos.left,
                y: pageY - pos.top
            };
        };
        var moveMe = function(e) {
            e.preventDefault();
            clearTimeout(timer);
            var _this = $(this);
            var orig = e.originalEvent?e.originalEvent:e;
            timer = setTimeout(function(){
                console.log(orig);
                var pageY = orig.changedTouches ? orig.changedTouches[0].pageY : orig.pageY;
                var pageX = orig.changedTouches ? orig.changedTouches[0].pageX : orig.pageX;
                _this.css({
                    top:pageY - offset.y,
                    left: pageX - offset.x
                });
            },100);
        };
        this.bind("touchstart", start);
//        this.bind("mousedown", start);
        this.bind("touchmove", moveMe);
//        this.bind("mousemove", moveMe);
    };
    $(".draggable").draggable();
});

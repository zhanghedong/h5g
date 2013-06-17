define(function(require){
    var touch = require('touch');
    var iScroll = require('iScroll-lite');
    var node = {
        content: $('.content'),
        tap: $('#tap'),
        singleTap: $('#singleTap'),
        doubleTap: $('#doubleTap'),
        longTap: $('#longTap'),
        swipe: $('#swipe'),
        swipeLeft: $('#swipeLeft'),
        swipeRight: $('#swipeRight'),
        swipeUp: $('#swipeUp'),
        swipeDown: $('#swipeDown')
    };

    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    var myScroll = new iScroll('wrapper', { vScrollbar: false });

    node.tap.bind('tap', function(){
        $(this).find('.delete').toggle();
    });

    node.singleTap.bind('singleTap', function(){
        $(this).find('.delete').toggle();
    });

    node.doubleTap.bind('doubleTap', function(){
        $(this).find('.delete').toggle();
    });

    node.longTap.bind('longTap', function(){
        $(this).find('.delete').toggle();
    });

    node.swipe.bind('swipe', function(){
        $(this).find('.delete').toggle();
    });

    node.swipeLeft.bind('swipeLeft', function(){
        $(this).find('.delete').toggle();
    });

    node.swipeRight.bind('swipeRight', function(){
        $(this).find('.delete').toggle();
    });

    node.swipeUp.bind('swipeUp', function(){
        $(this).find('.delete').toggle();
    });

    node.swipeDown.bind('swipeDown', function(){
        $(this).find('.delete').toggle();
    });

});

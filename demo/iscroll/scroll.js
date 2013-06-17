define(function(require){
    var iScroll = require('iScroll-lite');
    var myScroll = new iScroll('wrapper');
    var myScroll1 = new iScroll('wrapper1');
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
})

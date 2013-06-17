define(function(require){
    require('src/lib/util/core');
    var node = $('#tabs');
    var callback = function(data){
        console.log(data)
    };
    node.h5g.tabs({callback:callback})
});

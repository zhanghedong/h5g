/**
 * Created by zhanghd on 13-5-21 上午10:21
 * Copyright 2013 ND, Inc. All rights reserved.
 */
define("src/app/index", [ "../game/game.min", "jquery2.0", "zepto" ], function(require, exports, module) {
    require("../game/game.min");
    require("jquery2.0");
    require("zepto");
    setTimeout(function() {
        ig.main("#canvas", MyGame, 60, 320, 240, 2);
    }, 1e3);
});
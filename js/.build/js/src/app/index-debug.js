/**
 * Created by zhanghd on 13-5-21 上午10:21
 * Copyright 2013 ND, Inc. All rights reserved.
 */
define("src/app/index-debug", [ "../game/game.min-debug", "jquery2.0-debug", "zepto-debug" ], function(require, exports, module) {
    require("../game/game.min-debug");
    require("jquery2.0-debug");
    require("zepto-debug");
    setTimeout(function() {
        ig.main("#canvas", MyGame, 60, 320, 240, 2);
    }, 1e3);
});
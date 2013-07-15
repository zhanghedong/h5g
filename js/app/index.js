/**
 * Created by zhanghd on 13-5-21 上午10:21
 * Copyright 2013 ND, Inc. All rights reserved.
 */
define(function (require, exports, module) {
  require('./config/init');
  require('../game/main');
  require('jquery2.0');
  require('zepto');
  require('./views/view');
  setTimeout(function () {
    ig.main('#canvas', MyGame, 60, 480, 320, 1);
  }, 1000);
})

/**
 * Created by zhanghd on 13-6-17 下午2:10
 * Copyright 2013 ND, Inc. All rights reserved.
 */
define(function (require, exports, module) {
    var DS = require('emberData');
    Todos.Store = DS.Store.extend({
        revision: 12,
        adapter: 'Todos.LSAdapter'
    });

    Todos.LSAdapter = DS.LSAdapter.extend({
        namespace: 'todos-emberjs'
    });
})

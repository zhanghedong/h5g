/**
 * Created by zhanghd on 13-6-17 下午3:34
 * Copyright 2013 ND, Inc. All rights reserved.
 */
define(function (require, exports, module) {
    Todos.EditTodoView = Ember.TextField.extend({
        classNames: ['edit'],
        insertNewline: function () {
            this.get('controller').acceptChanges();
        },

        focusOut: function () {
            this.get('controller').acceptChanges();
        },

        didInsertElement: function () {
            this.$().focus();
        }
    });

})

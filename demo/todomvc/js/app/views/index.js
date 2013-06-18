/**
 * Created by zhanghd on 13-6-18 下午6:18
 * Copyright 2013 ND, Inc. All rights reserved.
 */
define(function (require, exports, module) {
    var headerTpl = require('text!../templates/header.html');
    var mainTpl = require('text!../templates/main.html');
    var footerTpl = require('text!../templates/footer.html');
    var aContainer = Ember.ContainerView.create({
        classNames: ['the-container'],
        childViews: ['headerView','mainView', 'footerView'],
        headerView: Ember.View.create({
            classNames:['header-wrap'],
            template: Ember.Handlebars.compile(headerTpl)
        }),
        mainView: Ember.View.create({
            classNames:['main-wrap'],
            template: Ember.Handlebars.compile(mainTpl)
        }),
        footerView: Ember.View.create({
            classNames:['footer-wrap'],
            template: Ember.Handlebars.compile(footerTpl)
        })
    });
    aContainer.appendTo('#todoapp');
})

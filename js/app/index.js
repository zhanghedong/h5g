/**
 * Created by zhanghd on 13-5-21 上午10:21
 * Copyright 2013 ND, Inc. All rights reserved.
 */
define(function (require, exports, module) {
    'use strict';
    require('../lib/util/core');
    var Person = Class.extend({
        // init是构造函数
        init: function (name) {
            this.name = name;
        },
        getName: function () {
            return this.name;
        }
    });
    // Employee类从Person类继承
    var Employee = Person.extend({
        // init是构造函数
        init: function (name, employeeID) {
            //  在构造函数中调用父类的构造函数
            this._super(name);
            this.employeeID = employeeID;
        },
        getEmployeeID: function () {
            return this.employeeID;
        },
        getName: function () {
            //  调用父类的方法
            return "Employee name: " + this._super();
        }
    });

    var zhang = new Employee("ZhangSan", "1234");
    console.log(zhang.getName());   // "
    console.log(zhang.getEmployeeID());
});

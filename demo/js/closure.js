/*!
 * 闭包
 */

/**
 * 一、变量作用域
 *
 * 1、函数内部可以直接读取全局变量
 * 2、函数外部无法读取函数内的局部变量
 */

var a = 1625;

function fn() {
    console.log(a);
}

fn(); // 1625

//////////////////////////////////////////

function fn1() {
    var a = 1625;
}
console.log(a);


/**
 * 二、如何从外部读取局部变量
 *
 */

function fn2() {
    var n = 1625;

    function fn3() {
        console.log(n);
    }

    return fn3;
}
var result = fn2();
result(); // 1625


/**
 * 三、闭包的概念
 *
 * 闭包就是将函数内部和函数外部连接起来的一座桥梁。
 * 1、理论角度：所有的函数。因为它们都在创建的时候就将上层上下文的数据保存起来了。
 * 2、实践角度：
 *      即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）
 *      在代码中引用了自由变量
 */

/**
 * 四、闭包的用途
 *
 * 对外封闭对内开放,  读取函数内部的变量
 * 另外就是让这些变量的值始终保持在内存中
 */


/**
 * 五、使用闭包的注意点
 *
 * 闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包
 *
 */


/////////////////////
var uniqueInteger = (function () {
    var counter = 0;
    return function () {
        return counter++;
    }
}());
uniqueInteger();//0
//////////////////////////

///////////////////////////
function counter() {
    var n = 0;
    return {
        count: function () {
            return n++
        },
        reset: function () {
            n = 0;
        }
    };
}

var t = counter();
console.log(t.count());
console.log(t.count());
console.log(t.count());
console.log(t.count());
console.log(t.count());
var d = counter();
console.log(d.count());
console.log(d.count());
console.log(d.count());
console.log(d.count());
console.log(d.count());
//////////////////////////////

//////////////////////////////

var data = [];

for (var k = 0; k < 3; k++) {
    data[k] = function () {
        alert(k);
    };
}

data[0](); // 3, 而不是0
data[1](); // 3, 而不是1
data[2](); // 3, 而不是2
//同一个上下文中创建的闭包是共用一个[[Scope]]属性的。因此上层上下文中的变量“k”是可以很容易就被改变的。

/*
var data = [];

for (var k = 0; k < 3; k++) {
    data[k] = (function _helper(x) {
        return function () {
            alert(x);
        };
    })(k); // 传入"k"值
}

// 现在结果是正确的了
data[0](); // 0
data[1](); // 1
data[2](); // 2
//在函数激活时，每次“_helper”都会创建一个新的变量对象，其中含有参数“x”，“x”的值就是传递进来的“k”的值。
*/

//////////////////////////////

//////////////////////////////////
var name = "The Window";
var obj = {
    name: "My Object",
    getNameFunc: function () {
        return function () {
            return this.name;
        };
    }
};
console.log(obj.getNameFunc()());
////////////////////////////////////////////


////////////////////////////////////////////
var name1 = "The Window";
var obj1 = {
    name1: "My Object",
    getNameFunc: function () {
        var that = this;
        return function () {
            return that.name1;
        };
    }
};
console.log(obj1.getNameFunc()());
///////////////////////////////////////////






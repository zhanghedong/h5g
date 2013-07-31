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
 *
 * 1、理论：所有的函数。因为它们都在创建的时候就将上层上下文的数据保存起来了。
 * 2、实践：
 *      即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）
 *      在代码中引用了自由变量( 自由变量是指在函数中使用的，但既不是函数参数也不是函数的局部变量的变量)
 */

//////////计数器1///////////
var uniqueInteger = (function () {
    var counter = 0;
    return function () {
        return counter++;
    }
}());
uniqueInteger();//0

//////////////////////////

///////////计数器2////////////////
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

data[0](); //
data[1](); //
data[2](); //

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
*/
//在函数激活时，每次“_helper”都会创建一个新的变量对象，其中含有参数“x”，“x”的值就是传递进来的“k”的值。


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


////////////////////事件绑定///////////////////////
/*
var el = document.getElementsByTagName('a');

for (var i = 0; i < el.length; i++) {

    el[i].addEventListener('click', function (e) {
        e.preventDefault();
        alert('I am link #' + i);
    }, 'false');
}
*/
///////////////////////////////////////////

var elems = document.getElementsByTagName('a');

for (var i = 0; i < elems.length; i++) {
    (function (lockedInIndex) {
        elems[i].addEventListener('click', function (e) {
            e.preventDefault();
            alert('I am link #' + lockedInIndex);
        }, 'false');
    })(i);
}

//lockedInIndex值是没有改变
///////////////////////////////////////////


/**
 * 四、使用闭包的注意点
 *
 * 闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包
 *
 */


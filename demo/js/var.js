/**
 * Created by zhanghd on 13-7-29 下午5:50
 * Copyright 2013 ND, Inc. All rights reserved.
 *
 * var.js
 */

/**
 *
 * string number boolean
 * null undefined
 *
 * array object
 */

//string
var s1 = 'abcd'; // string 给字符串的声明赋值

//number
var n1 = 123456; // number

//boolean
var isOpen = true;

//null
s = null ; //清除s

//undefined
var tt ; //表示一个未声明的变量，或已声明但没有赋值的变量，或一个并不存在的对象属性。


//array
var arr = [1, 2, 3, 4]; // 推荐

for (var i = 0, j = arr.length; i < j; i++) { //缓存数组长度

}

var arr1 = new Array(1, 2, 3, 4); // [1,2,3,4] 构造函数   尽量避免使用数组构造函数创建新数组
var arr2 = new Array(3); // [] arr2.length = 3


//object 键.值

var obj = {} ; // 推荐

obj.userID = 123;
obj.userName = 'zhang';

var aj = {
    "a":1,
    "b":2
}


JSON.stringify(aj)

//json  json对象  对象字面量




















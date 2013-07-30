/**
 * Created by zhanghd on 13-7-29 下午5:50
 * Copyright 2013 ND, Inc. All rights reserved.
 *
 * var.js
 */

/**
 * string number boolean
 * array object
 * null undefined
 */

//string
var s = new String('abcd'); // object 通过构造函数创建字符串对象
var s1 = 'abcd'; // string 给字符串的声明赋值
console.log(s == s1);
console.log(s === s1);

//number
var n = new Number(123456); // object
var n1 = 123456; // number

//boolean
var isOpen = true;
console.log(isOpen == 1); //
console.log(false == 0); //

//array

var arr = [1, 2, 3, 4]; // 推荐

for (var i = 0, j = arr.length; i < j; i++) { //缓存数组长度

}

var arr1 = new Array(1, 2, 3, 4); // [1,2,3,4] 构造函数   尽量避免使用数组构造函数创建新数组
var arr2 = new Array(3); // [] arr2.length = 3


//object

var obj = {} ; // 推荐
var obj1 = new Object();

obj.userID = 123;
obj.userName = 'zhang';




















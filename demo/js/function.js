/*!
 * 函数
 */

/**
 * JavaScript中的代码只体现为一种形式，就是function。
 *
 * 函数表达式 与 函数声明
 */

function foo(){}   //声明 因为他是程序的一部分


var bar = function bar(){}; //表达式，因为它是赋值表达式的一部分

new function(){}; //表达式，因为它是new表达式

(function foo(){});   //表达式，因为他是包在分组操作符内

(function(){
     function bar(){} //声明, 因为他是函数体的一部分
}());

/**
 * 自执行
 */
function f1(a){} //声明
f1(a);

//function f1(a){}(3);

//function f1(){}
//(1)


(function(){}()); //推荐  () 解析器将代码解析成function表达式而不是function声明
(function(){})(); //
//1 && function(){}();


// 这是一个自执行的函数，函数内部执行自身，递归
function foo() { foo(); }

// 这是一个自执行的匿名函数，因为没有标示名称
// 必须使用arguments.callee属性来执行自己
var foo = function () { arguments.callee() };






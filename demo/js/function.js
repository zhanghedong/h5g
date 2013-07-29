/*!
 * 函数
 */

/*
  函数表达式 与 函数声明
 */

function foo(){}   //声明 因为他是程序的一部分
var bar = function bar(){}; //表达式，因为它是赋值表达式的一部分

new function(){}; //表达式，因为它是new表达式

(function foo(){});   //表达式，因为他是包在分组操作符内

(function(){
     function bar(){} //声明, 因为他是函数体的一部分
}());


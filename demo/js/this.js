/*!
 * this是执行上下文中的一个属性
 */

/**
 * 全局中的this
 *
 * 在全局代码中，this始终是全局对象本身
 */

/////////////////////////////////////
// this.a = 10;
// alert(a);
// b = 20; // var
// alert(this.b);
// var c = 30;
// alert(this.c);
//////////////////////////////////////

/**
 * 函数代码中的this
 *
 * 它不是静态的绑定到一个函数
 * this是进入上下文时确定
 * 在代码运行时的this值是不变的
 */

///////////////////////////////////////
/*
 var foo = {x: 10};

 var bar = {
 x: 20,
 test: function () {
 alert(this === bar); //
 alert(this.x); //
 //  this = foo; // 错误，任何时候不能改变this的值
 //  alert(this.x); //
 }
 };

 //在进入上下文的时候this被当作bar
 bar.test();

 foo.test = bar.test;
 foo.test();
 */
////////////////////////////////////////////


//在通常的函数调用中，this是由激活上下文代码的调用者来提供的，this取决于调用函数的方式。

///////////////////////////////////////////
/*
 var foo = {
 bar: function () {
 console.log(this);
 alert(this === foo);
 }
 };

 foo.bar();

 var exampleFunc = foo.bar;

 alert(exampleFunc === foo.bar); // true

 exampleFunc();
 */

////////////////////////////////////////////////

/**
 * 通过调用方式动态确定this值的经典例子
 */

///////////////////////////////////
/*
 function foo() {
 alert(this.bar);
 }

 var x = {bar: 10};
 var y = {bar: 20};

 x.test = foo;
 y.test = foo;

 x.test();
 y.test();
 */
/////////////////////////////////

/**
 * 作为构造器调用的函数中的this
 */

////////////////////////////////

function A() {
//    console.log(arguments)
//    alert(this); // "a"对象下创建一个新属性
    this.x = 10;
    this.b = function(){
        alert('xx');
    }
}

//var a = new A();
//a.b();

//var b = A;
//console.log(a.x);
//alert(b.x); // 10

////////////////////////////////

/**
 * 手动设置this
 */
/////////////////////////////////


 var b = 10;

 function a(c) {
     alert(this.b);
     alert(c);
 }

 a(20); // this === global, this.b == 10, c == 20

 a.call({b: 20}, 30,54); // this === {b: 20}, this.b == 20, c == 30
 a.apply({b: 30}, [40,2]) // this === {b: 30}, this.b == 30, c == 40

/////////////////////////////////

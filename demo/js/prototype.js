/*!
 * prototype
 */

/**
 * 原型
 *
 * JavaScript 不包含传统的类继承模型，而是使用 prototype 原型模型实现继承
 */


function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log('hello , i`m ' + this.name);
};

//Person.sayHi = function(){
//    alert('hi');
//};

var zhang = new Person('zhang');
var chen = new Person('chen');

console.log(zhang.sayHello == chen.sayHello); //共享prototype sayHello

zhang.sayHello();
chen.sayHello();

chen.sayBye = function(){
    alert('Bye');
};

//chen.sayBye();

/**
 * 原型方式继承
 */

function Employee(name, employeeID) {
    this.name = name;
    this.employeeID = employeeID;

}
Employee.prototype = new Person();

Employee.prototype.getEmployeeID = function () {
    return this.employeeID;
};

var em = new Employee('employee', 123);
em.sayHello();
console.log(em.getEmployeeID());


//更多继续方式：http://www.cnblogs.com/TomXu/archive/2012/04/24/2438050.html
// http://ejohn.org/blog/simple-javascript-inheritance/










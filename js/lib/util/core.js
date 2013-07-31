define(function (require, exports, module) {
    // http://ejohn.org/blog/simple-javascript-inheritance/
    // 自执行的匿名函数创建一个上下文，避免引入全局变量
    (function () {
        // initializing变量用来标示当前是否处于类的创建阶段，
        // - 在类的创建阶段是不能调用原型方法init的
        // fnTest是一个正则表达式，可能的取值为（/\b_super\b/ 或 /.*/）
        // - 对 /xyz/.test(function() { xyz; }) 的测试是为了检测浏览器是否支持test参数为函数的情况
        // - 不过我对IE7.0,Chrome2.0,FF3.5进行了测试，此测试都返回true。
        // - 所以我想这样对fnTest赋值大部分情况下也是对的：fnTest = /\b_super\b/;
        var initializing = false, fnTest = /xyz/.test(function () {
            xyz;
        }) ? /\b_super\b/ : /.*/;
        // 基类构造函数
        // 这里的this是window，所以这整段代码就向外界开辟了一扇窗户 - window.Class
        this.Class = function () {
        };
        // 继承方法定义
        Class.extend = function (prop) {
            // 这个地方很是迷惑人
            // - this具体指向什么不是定义时能决定的，而是要看此函数是怎么被调用的
            // - 我们已经知道extend肯定是作为方法调用的，而不是作为构造函数
            // - 所以这里this指向的不是Object，而是Function（即是Class），那么this.prototype就是父类的原型对象
            // - 注意：_super指向父类的原型对象，我们会在后面的代码中多次碰见这个变量
            var _super = this.prototype;
            // 通过将子类的原型指向父类的一个实例对象来完成继承
            // - 注意：this是基类构造函数（即是Class）
            initializing = true;
            var prototype = new this();
            initializing = false;
            // 我觉得这段代码是经过作者优化过的，所以读起来非常生硬，我会在后面详解
            for (var name in prop) {
                prototype[name] = typeof prop[name] == "function" &&
                    typeof _super[name] == "function" && fnTest.test(prop[name]) ?
                    (function (name, fn) {
                        return function () {
                            var tmp = this._super;
                            this._super = _super[name];
                            var ret = fn.apply(this, arguments);
                            this._super = tmp;
                            return ret;
                        };
                    })(name, prop[name]) : prop[name];
            }
            // 这个地方可以看出，Resig很会伪装
            // - 使用一个同名的局部变量来覆盖全局变量，很是迷惑人
            // - 如果你觉得拗口的话，完全可以使用另外一个名字，比如function F()来代替function Class()
            // - 注意：这里的Class不是在最外层定义的那个基类构造函数
            function Class() {
                // 在类的实例化时，调用原型方法init
                if (!initializing && this.init)
                    this.init.apply(this, arguments);
            }

            // 子类的prototype指向父类的实例（完成继承的关键）
            Class.prototype = prototype;
            // 修正constructor指向错误
            Class.constructor = Class;
            // 子类自动获取extend方法，arguments.callee指向当前正在执行的函数
            Class.extend = arguments.callee;
            return Class;
        };
    })();
});

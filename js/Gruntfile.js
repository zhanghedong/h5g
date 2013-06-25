/*
 * Copyright (c) 2013
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        meta: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd HH:MM") %> */'
        },
        less: {
            development: {
                files: [
                    {
                        expand: true,        // Enable dynamic expansion.
                        cwd: '../less/themes',  // Src matches are relative to this path.
                        src: ['*.less'],     // Actual pattern(s) to match.
                        dest: '.build/less/themes',  // Destination path prefix.
                        ext: '.css'         // Dest filepaths will have this extension.
                    }
                ]
            }
        },
        cssmin: {
            combine: {
                files: [
                    {
                        expand: true,        // Enable dynamic expansion.
                        cwd: '.build/less/app',  // Src matches are relative to this path.
                        src: ['*.css'],     // Actual pattern(s) to match.
                        dest: '../public/themes',  // Destination path prefix.
                        ext: '.css'         // Dest filepaths will have this extension.
                    }
                ]
            }
        },
        watch: {
            scripts: {
                files: ['../less/**/*.less'],
                tasks: ['less', 'cssmin', 'clean']
            }
        },
        transport: {   //  SPM2提供 该插件主要负责提取模块中的依赖
            options: {
                paths: ['.'],
                stripBanners: true,
                banner: '<%=meta.banner%>'
            },
            all: {
                options: {
                    //module id format
                    idleading: 'src/'
                },
                files: [
                    {
                        cwd: 'src',
                        src: ['**/*', '!**/*.html', '!engine/**', '!tools/**', '!lib/**'],
                        filter: 'isFile',
                        dest: '.build/js/src'
                    }
                ]
            }

        },
        concat: {//合并依赖的模块
            options: {
                paths: ['.'],
                include: 'relative',
                stripBanners: true,
                banner: '<%=meta.banner%>'
            },
            all: {
                files: [
                    {
                        expand: true,
                        cwd: '.build/',
                        src: ['**/*.js'],
                        dest: 'dist/',
                        ext: '.js'
                    }
                ]
            }
        },
        uglify: { //压缩
            options: {
                stripBanners: true,
                banner: '<%=meta.banner%>'
            },
            all: {
                files: [
                    {
                        expand: true,
                        cwd: 'dist/',
                        src: ['**/*.js', '!**/*-debug.js'],
                        dest: 'dist/',
                        ext: '.js'
                    }
                ]
            }
        },
        copy: {//
            all: {
                files: [
                    {
                        expand: true,
                        cwd: 'dist/js',
                        src: ['**/*.js', '!**/*-debug.js'],//
                        dest: '../public/js/',
                        filter: 'isFile'}
                ]
            }
        },
        jshint: {
            options: {
                indent: 4, // 空格缩进数
                smarttabs: false, // 不允许tab和space混用
                camelcase: true, // 变量必须使用驼峰或者全部大写以下划线分割，例如 helloWorld, HELLO_WORLD
                asi: true, // 不能缺失;
                lastsemic: false, // 不允许缺失最后的;
                laxcomma: false, // 不允许JSON前置逗号风格
                debug: true, // 允许使用debugger语句
                strict: false, // 不需要强制严格模式
                curly: true, // 循环和条件语句中的语句块必须放在{}
                eqeqeq: true, // 相等比较需要用 === 或 !==
                eqnull: true, // null允许用==判断相等
                newcap: false, // 构造函数必须大写，这个不要求
                noarg: false, // 允许使用argument.callee 和 argument.caller
                nonew: false, // 允许不做赋值的构造函数
                noempty: false, // 允许使用空函数
                plusplus: false, // 允许使用++和--
                latedef: true, // 局部变量必须先声明再使用
                undef: true, // 禁止使用未声明的变量
                proto: true, // 允许使用 __proto__
                loopfunc: true, // 允许在循 环中使用function
                browser: true, // 浏览器环境，支持除了alert/console外的全局变量
                globals: { // 排除的全局变量
                    seajs: true,
                    define: true,
                    module: true
                },
                trailing: true, // 不允许行尾有空白
                devel: false, // 不开启alert/console全局变量支持
                unused: false, // 允许变量声明后不使用，常见于一些函数调用上的参数没有使用
                quotmark: 'single', // 字符串引号必须使用单引号
                sub: true, // 允许使用[]来访问对象属性
                boss: true, // 允许if/while/for中使用赋值语句
                immed: false, // 允许使用匿名函数并立即执行
                forin: false, // 允许for in中不强制hasOwnProperty检测
                bitwise: false, // 允许位运算
                es5: true, // 允许使用ES5特性
                evil: false // 不允许使用eval和new Function
            }
        },
        clean: { //清除
            spm: ['.build', 'dist']
        }
    });
    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['less', 'cssmin', 'transport', 'concat', 'uglify', 'copy', 'watch']);//, 'clean'
};
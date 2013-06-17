/*
 * Copyright (c) 2013
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        meta: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd HH:MM") %> */'
        },
        less:{
            development: {
                files: [{
                    expand: true,        // Enable dynamic expansion.
                    cwd: '../less/themes',  // Src matches are relative to this path.
                    src: ['*.less'],     // Actual pattern(s) to match.
                    dest: '.build/less/themes',  // Destination path prefix.
                    ext: '.css'         // Dest filepaths will have this extension.
                }]
            }
        },
        cssmin:{
            combine:{
                files: [{
                    expand: true,        // Enable dynamic expansion.
                    cwd: '.build/less/app',  // Src matches are relative to this path.
                    src: ['*.css'],     // Actual pattern(s) to match.
                    dest: '../public/themes',  // Destination path prefix.
                    ext: '.css'         // Dest filepaths will have this extension.
                }]
            }
        },
        watch:{
            scripts:{
                files: ['../less/**/*.less'],
                tasks:['less','cssmin','clean']
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
                        src: ['**/*', '!**/*.html','!engine/**','!tools/**','!lib/**'],
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
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['less','cssmin','transport', 'concat', 'uglify', 'copy','watch']);//, 'clean'
};
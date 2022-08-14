const { src, dest, parallel } = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const htmlmin = require("gulp-htmlmin");


//**************release***********************
//----------------------layui-------------------
function layuicss() {
    return src('src/css/**/*.css')
        .pipe(minifyCSS())
        .pipe(dest('wwwroot/js/css'))
}

function layercopy() {
    return src('src/css/modules/layer/default/*.*')
        .pipe(dest('wwwroot/js/css/modules/layer/default'))
}

function fontcopy() {
    return src('src/font/*.*')
        .pipe(dest('wwwroot/font'))
}

function layuimodjs() {
    return src('src/javascript/modules/*.js')
        .pipe(uglify())
        .pipe(dest('wwwroot/js/modules'))
}

function ext_modulesjs() {
    return src('src/javascript/ext_modules/**/*.js')
        .pipe(uglify())
        .pipe(dest('wwwroot/js/ext_modules'))
}
//--------------------base--------------
function basecss() {
    return src('src/css/base.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(dest('wwwroot/css'))
}
function basejs() {
    return src(['src/javascript/ysz_config.js',
        'src/javascript/layui.js',
        'src/javascript/ysz.js',
        'src/javascript/ysz/**/*.js'
    ])
        .pipe(uglify())
        .pipe(concat('base.js'))
        .pipe(dest('wwwroot/js'))
}

function htmlcopy() {
    return src('src/**/*.html')
        .pipe(htmlmin())
        .pipe(dest('wwwroot'))
}

exports.release = parallel(layuicss, layercopy, fontcopy, layuimodjs, ext_modulesjs,
    basecss, basejs,
    htmlcopy);


//**************debug***********************
//----------------------layui-------------------
function layuicss_debug() {
    return src('src/css/**/*.css')
        .pipe(dest('wwwroot_debug/js/css'))
}

function layercopy_debug() {
    return src('src/css/modules/layer/default/*.*')
        .pipe(dest('wwwroot_debug/js/css/modules/layer/default'))
}

function fontcopy_debug() {
    return src('src/font/*.*')
        .pipe(dest('wwwroot_debug/font'))
}

function layuimodjs_debug() {
    return src('src/javascript/modules/*.js')
        .pipe(dest('wwwroot_debug/js/modules'))
}

function ext_modulesjs_debug() {
    return src('src/javascript/ext_modules/**/*.js')
        .pipe(dest('wwwroot_debug/js/ext_modules'))
}
//--------------------base--------------

function basecss_debug() {
    return src('src/css/base.less')
        .pipe(less())
        .pipe(dest('wwwroot_debug/css'))
}

function basejs_debug() {
    return src(['src/javascript/ysz_config.js',
        'src/javascript/layui.js',
        'src/javascript/ysz.js',
        'src/javascript/ysz/**/*.js'
    ])
        .pipe(concat('base.js'))
        .pipe(dest('wwwroot_debug/js'))
}

function htmlcopy_debug() {
    return src('src/**/*.html')
        .pipe(dest('wwwroot_debug'))
}
exports.debug = parallel(layuicss_debug, layercopy_debug, fontcopy_debug, layuimodjs_debug, ext_modulesjs_debug,
    basecss_debug, basejs_debug,
    htmlcopy_debug);
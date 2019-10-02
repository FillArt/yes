"use strict";

const gulp = require('gulp'),
    jade = require('gulp-jade'),
    prefix = require('gulp-autoprefixer'),
    browserSync = require('browser-sync');

var less = require('gulp-less'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    rename = require("gulp-rename");

const paths = {
    root: '',
    less: './build/less',
    jade: './build/jade',
    css: './css',
    js: './js'
};

gulp.task('browser-sync', ['less', 'jade'], function() {
    browserSync({
        server: true,
        notify: false,
        browser: false
    });
});

gulp.task('less', function () {
    return gulp.src(paths.less + '/style.less')
        .pipe(less())
        .pipe(concat('style.css'))
        //.pipe(minifyCSS())
       // .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(paths.css));;


});

gulp.task('jade', function () {
    return gulp.src('build/jade/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest(paths.root));
});

gulp.task('jade-rebuild', ['jade'], function() {
    browserSync.reload();
});

gulp.task('browser-reload', function() {
    browserSync.reload();
});

gulp.task('watch', function() {
    gulp.watch(paths.less + '/*.less', ['less']);
    gulp.watch(paths.css + '/*.css', ['browser-reload']);
    gulp.watch(paths.jade + '/**/*.jade', ['jade-rebuild']);
    gulp.watch(paths.js + '/*.js', ['browser-reload']);
});

gulp.task('default', ['browser-sync', 'watch']);
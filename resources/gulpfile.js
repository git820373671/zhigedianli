/**
 * Created by banYing on 2017/6/12.
 */
var gulp = require('gulp'),

  less = require('gulp-less'),

  cssMin = require('gulp-minify-css');

gulp.task('createdCss', function () {
  gulp.src('src/assets/css/style.less')
    .pipe(less())
    .pipe(cssMin())
    .pipe(gulp.dest('src/assets/css'));
});

gulp.task('autoCss', function () {
  gulp.watch('src/assets/css/*.less', ['createdCss'])
});


gulp.task('default', ['createdCss', 'autoCss']);

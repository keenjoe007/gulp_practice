var gulp = require('gulp');
var sass = require('gulp-sass');
var styledocco = require('gulp-styledocco');
var watch = require('gulp-watch');
var minifyCSS = require('gulp-minify-css');

gulp.task('sass', function(){
  return gulp.src('./assets/styles/sass/*.sass')
  .pipe(sass({errLogToConsole: true,
              sourceComments : 'normal'
  }))
  .pipe(gulp.dest('./assets/styles/css/'));
});

gulp.task('styledocco', function(){
  gulp.src('./assets/styles/sass/*.sass')
  .pipe(styledocco({
    out: './styleguide/',
    name: 'gulp-practice-styledocco'
  }))
});

gulp.task('minifyCSS', ['sass'], function(){
  gulp.src('./assets/styles/css/*.css')
  .pipe(minifyCSS())
  .pipe(gulp.dest('./assets/styles/css/'));
});

gulp.task('watch', function(){
  gulp.watch('./assets/styles/sass/', ['sass']);
});

gulp.task('default', ['minifyCSS', 'styledocco']);
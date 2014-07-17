// http://blog.ponyfoo.com/2014/01/27/my-first-gulp-adventure
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('lint', function () {
  gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('build', ['lint'], function () {
  gulp.src('./src/jquery.slimscroll.js')
    .pipe(gulp.dest('./dist'))
    .pipe(rename('jquery.slimscroll.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['build'], function() {
  return gulp.watch('src/*.js', ['build']);
});

gulp.task('default', ['build']);

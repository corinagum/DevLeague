var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var connect = require('gulp-connect');

gulp.task('connect', function () {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('sass', function () {
  return gulp.src('./scss*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.public/css'));
});

gulp.task('livereload', function () {
  gulp.src('.public/**/*')
    .pipe(connect.reload());
});

gulp.task('build', function() {
  gulp.src('./src/app.js')
        .pipe(browserify({
          insertGlobals : true
        }))
        .pipe(gulp.dest('./public/js/build'));
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('.public/**/*.{css,js}', ['livereload']);
  gulp.watch('./src/**/*.js', ['build', 'livereload']);
  gulp.watch('./public/css/**/*.css', ['livereload']);
});

gulp.task('default', ['connect', 'build', 'watch', 'sass']);
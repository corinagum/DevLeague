var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');

//sass task
gulp.task('sass', function () {
  return gulp.src('scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

//es6 task
gulp.task('babel', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*js', ['babel']);
  gulp.watch('scss/styles.css', ['sass']);
});

gulp.task('dev', ['sass', 'babel', 'watch']);
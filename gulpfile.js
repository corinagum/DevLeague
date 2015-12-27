var gulp = require('gulp');
var babel = require('gulp-babel');

//es6 task

gulp.task('default', function () {
  return gulp.src('src/test.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});




//sass task
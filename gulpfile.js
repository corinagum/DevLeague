var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('build', function() {
  gulp.src('./build/app.js')
        .pipe(browserify({
          insertGlobals : true
        }))
        .pipe(gulp.dest('./js/build'));
});

gulp.task('default', ['build']);
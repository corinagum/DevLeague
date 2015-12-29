var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('build', function() {
  gulp.src('./build/app.js')
        .pipe(browserify({
          insertGlobals : true
        }))
        .pipe(gulp.dest('./js/build'));
});

gulp.task('watch', function () {
  gulp.watch('./js/*', ['build', 'livereload']);
  gulp.watch('./css/*', ['livereload']);
});

gulp.task('default', ['build']);
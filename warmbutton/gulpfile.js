var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

<<<<<<< HEAD
gulp.task('connect', function(){
  connect.server({
    root: 'public',
    livereload: true
  });
});

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/css'));
});

gulp.task('livereload', function (){
  gulp.src('./public/**/*')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('default', ['connect', 'watch', 'sass']);
=======
var PathTo = {
  SassFiles: './sass/**/*.scss',
  PublicFolder: './public',
  PublicCss: './public/styles',
  PublicCssFiles: './public/styles/*.css'
};

gulp.task('watch-files', function (){
  gulp.watch(PathTo.SassFiles, ['compile-sass']);
  gulp.watch(PathTo.PublicCssFiles, ['html']);
});

gulp.task('compile-sass', function (){
  return gulp
          .src(PathTo.SassFiles, ['compile-sass'])
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest(PathTo.PublicCss));
});

gulp.task('html', function (){
  return gulp.src('./public/index.html')
    .pipe(connect.reload());
});

gulp.task('public-server', function (){
  connect.server({
    root: './public',
    port: 8282,
    livereload: true
  });
});

gulp.task('default', ['compile-sass', 'watch-files', 'public-server']);
>>>>>>> 3e9951ad927648c4ae300b152e05ac010537dd8f

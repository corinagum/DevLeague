# Gulp + SCSS + LiveReload

This Gist outlines the gulp workflow that will:

1. watch for any scss changes, then compiles scss source into css
2. watch for any changes in the public directory, and trigger live-reload
3. serve static content in `public/`

This Gist also assumes you already know how to install npm modules, gitignore, create directories and create files via the command line.

---

## globally install npm

First, make sure you have all the required dependencies. If you do not have npm or gulp installed globally, you need to install them. If you already have these installed, skip to the next step.

_to install npm_
`brew install npm`

_to install gulp_
`npm install -g gulp`

---

## set up gulp + scss + livereload for your project

### set up node modules

1. run `npm init` to initialize your project with a `package.json` file
2. set up your `.gitignore` file to ignore `node_modules`
3. install and save required dependencies:
  - `npm install -D gulp`
  - `npm install -D gulp-sass`
  - `npm install -D gulp-connect`

### set up the project directories

1. set up a `scss` source directory in the root directory.
2. set up scss source file `styles.scss` and an empty `partials` directory in the scss directory
3. set up the output directory `public` in the root directory.
4. set up the compiled `css` directory inside the public directory.
5. set up root html5 template file `public/index.html`
6. add the markup for a basic html5 template in `public/index.html`. (Use Emmett and it will take 2 keystrokes!!)
7. in the index file head, load `/css/styles.css`
8. include an `h1` element in the body with the content of `Hello SCSS!`

![Directory Structure](http://gomagames.com/scss-day.png "SCSS-Day")

### set up your gulpfile

12. set up a Gulpfile `touch gulpfile.js`
13. set up the Gulpfile tasks. Contents of gulpfile.js:

```
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

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
```

### test scss and the gulp task

14. In the `scss/styles.scss` file, write the "Hello World" of SCSS (we are checking if variables work. If #333333 loads as the background color, variables are working, and thus, sass is working).

    ````
    $dark-color : #333333;

    body {
      background: $dark-color;
    }
    ````
15. run `gulp` in your terminal
16. open the compiled `styles.css` file in SublimeText (/public/css/styles.css)
17. check if it is proper css
18. open a browser `open localhost:8080`
19. you should see a dark grey background and your single black h1 text

### test livereload

1. while you terminal, browser, and sublime text are all visible, add the following to your `styles.scss`

 ````
 h1 {
   color: #F1F1F1;
 }
 ````
2. **_note_** livereload will only track files that it _sees_ when you first start the gulp task. including the initial generated css files, after the first time you compile, you'll have to *restart gulp!*
3. once you save this file, your browser should automatically refresh, and your h1 element should be white.

### viewport

In order for the webpage to render and scale properly on mobile devices, add this meta tag to your `public/index.html` file in the the `<head>` element

````
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
````

---

## workflow

Once gulp sass and livereload are wired up correctly, commit your new files

While you work, make sure to keep your "gulp" terminal running and visible, if your sass source is invalid, it will crash the watching gulp process, and you will want to see the error message that will output in that terminal. Then you can restart your `gulp` watcher after fixing your errors.

Anytime you add new files to your `public/` directory (like images or javascript), you may need to kill then restart your gulp task
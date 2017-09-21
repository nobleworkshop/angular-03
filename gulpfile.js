var gulp = require("gulp"); 
var runSequence = require('run-sequence');
var browserSync = require("browser-sync").create();
var clean = require('gulp-clean'); // Удаление файлов


/* ------------------------------------
  SERVER
------------------------------------ */
gulp.task("server", function () {
  browserSync.init({
    // notify: false,
    // port: 1000,
    server: { baseDir: './app/' }
  });
});



/* ------------------------------------
  GULP - DEFAULT TASK 
------------------------------------ */
gulp.task('default', function() {
    runSequence(
      // ['less', 'pug'],
      // ['scss', 'pug'],
      ['server']
    )
});






/* ------------------------------------
  DIST TASKS
------------------------------------ */

// Очищаем папку dist
gulp.task('clean', function() {
    return gulp.src('./docs/')
    .pipe(clean({force: true}));
});

gulp.task('copy', function() {
    gulp.src('./app/**/*.*')
    .pipe(gulp.dest('./docs/'))
});

gulp.task("server-dist", function () {
  browserSync.init({
    // notify: false,
    // port: 1000,
    server: { baseDir: './docs/' }
  });
});


gulp.task('dist', function() {
    runSequence(
      ['clean'],
      ['copy'],
      ['server-dist']
    )
});



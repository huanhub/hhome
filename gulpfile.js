var gulp = require('gulp');


gulp.task('copyfiles', 'copy base file from bower', function(){
  gulp.src('bower_components/jquery/dist/jquery.js')
    .pipe(gulp.dest('src/js/'));
  gulp.src('bower_components/semantic/semantic.js')
    .pipe(gulp.dest('src/js/'));
  gulp.src('bower_components/semantic/semantic.css')
    .pipe(gulp.dest('src/css/'));
});

var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
// TODO 6.3a - include browserSync

gulp.task('minify', function() {
  gulp.src('js/main.js')
  .pipe(uglify())
  .pipe(gulp.dest('build'));
});

gulp.task('processCSS', function() {
  gulp.src('styles/main.css')
  .pipe(autoprefixer())
  .pipe(gulp.dest('build'));
});

gulp.task('default', ['serve']);

gulp.task('watch', function() {
  gulp.watch('styles/*.css', ['processCSS']);
  gulp.watch('js/*.js', ['minify']);
});

gulp.task('serve', ['processCSS', 'minify'], function() {
  browserSync.init({
    server: '.',
    port: 3000
  });
  gulp.watch('styles/*.css', ['processCSS']).on('change', browserSync.reload);
  gulp.watch('js/*.js', ['minify']).on('change', browserSync.reload);
  gulp.watch('*.html').on('change', browserSync.reload);
});

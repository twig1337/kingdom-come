var gulp = require('gulp'),
  scss = require('gulp-sass'),
  connect = require('gulp-connect');

var jsSources = ['scripts/*.js'],
  scssSources = ['styles/*.scss'],
  htmlSources = ['**/*.html'];

gulp.task('scss', function() {
  gulp.src(scssSources)
    .pipe(scss({style: 'expanded'}))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  gulp.src(htmlSources)
    .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch(scssSources, ['scss']);
  gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('default', ['html', 'js', 'scss', 'connect', 'watch']);
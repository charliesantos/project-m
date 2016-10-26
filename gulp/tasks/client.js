const gulp = require('gulp');
const uglify = require('gulp-uglify');
const config = require('../config').uglify;

gulp.task('client', ['browserify','html', 'stylus', 'images'], function() {
  return gulp.src(config.src)
    .pipe(uglify())
    .pipe(gulp.dest(config.dest));
});
const gulp = require('gulp');
const gulpBabel = require('gulp-babel');
const config = require('../config').server;

gulp.task('server', function() {
  return gulp.src(config.src)
    .pipe(gulpBabel())
    .pipe(gulp.dest(config.dest));
});
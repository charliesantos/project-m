const gulp = require('gulp');
const config = require('../config').res;

gulp.task('res', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
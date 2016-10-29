var destClient = 'compiled/client';
var srcClient = 'client';
var gutil = require('gulp-util');

module.exports = {
  browserify: {
    src: srcClient + '/app.js',
    dest: destClient + '/',
    outputName: 'app.js'
  },
  html: {
    src: srcClient + '/index.html',
    dest: destClient
  },
  uglify: {
    src: destClient + '/app.js',
    dest: destClient + '/'
  },
  stylus: {
    src: srcClient + '/styles/main.styl',
    dest: destClient
  },
  images: {
    src: srcClient + '/images/*.*',
    dest: destClient + '/images/'
  },
  res: {
    src: srcClient + '/res/*.*',
    dest: destClient + '/res/'
  },
  server: {
    src: 'server/**/*.js',
    dest: 'compiled/server'
  }
};
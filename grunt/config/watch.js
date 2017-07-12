// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
  grunt: {
    options: {
      reload: true
    },
    files: ['Gruntfile.js']
  },
  sass: {
    files: ['<%= paths.scss %>**/*.scss'],
    tasks: ['sass', 'cssmin', 'copy:dist'],
    options: {
      livereload:true
    }
  },
  js: {
    files: ['<%= paths.js %>**/*.js'],
    tasks: ['concat', 'copy:dist'],
    options: {
      livereload: true
    }
  },
  copy: {
    files: ['<%= paths.doc %>html/**/*.html'],
    tasks: ['copy:dist'],
    options: {
      livereload: true
    }
  }
};

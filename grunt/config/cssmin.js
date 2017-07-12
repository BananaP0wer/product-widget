// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= paths.dist %>css',
      src: ['*.css', '!*.min.css'],
      dest: '<%= paths.dist %>css',
      ext: '.min.css'
    }]
  },
  combine: {
    files: {
      '<%= paths.dist %>css/productWidgetDemoApp.min.css': ['<%= paths.dist %>css/productWidgetDemoApp.css']
    }
  }
};

// https://github.com/gruntjs/grunt-contrib-sass
module.exports = {
  dist: {
    options: {
      loadPath: ['<%= paths.sassLoad %>'],
      lineNumbers: true,
      bundleExec: true
    },
    files: {
      '<%= paths.dist %>css/productWidgetDemoApp.css': [
        "scss/productWidgetDemoApp.scss"
      ]
    }
  }
};

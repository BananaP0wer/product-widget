// https://github.com/gruntjs/grunt-contrib-concat

module.exports = {
  dist: {
    files: {
      '<%= paths.dist %>js/productWidgetDemoApp.js': ['js/*.js'],
      '<%= paths.dist %>js/vendor.js': [
        'bower_components/angular/angular.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js'
      ]
    }
  }
};

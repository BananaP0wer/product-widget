module.exports = function(grunt) {

  var project = {
    paths: {
      get config() {
        return this.grunt + 'config/';
      },
      dist: 'dist/',
      grunt: 'grunt/',
      js: 'js/',
      sassLoad: __dirname + '/scss',
      scss: 'scss/',
      vendor: 'bower_components/'
    },
    files: {
      get config() {
        return project.paths.config + '*.js';
      },
      grunt: 'Gruntfile.js',
      js: [
        'js/rpcResource.service.js',
        'js/productWidget.component.js',
        'js/contentItem.component.js',
        'js/productWidgetDemoApp.js'
      ],
      scss: ['scss/main.scss']
    },
    pkg: grunt.file.readJSON('package.json')
  };

  // Load Grunt configurations and tasks
  require('load-grunt-config')(grunt, {
    configPath: require('path').join(process.cwd(), project.paths.config),
    data: project
  });
};

// https://github.com/gruntjs/grunt-contrib-copy
module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= paths.scss %>',
      src: '**/*.scss',
      dest: '<%= paths.dist %>scss/',
      filter: 'isFile'
    },{
      src: ['README.md', 'LICENSE', 'bower.json', 'package.json'],
      dest: '<%= paths.dist %>'
    },
      {expand:true, cwd: 'data/', src: '**/*.js', dest: 'dist/data/', filter: 'isFile'},
      {expand:true, cwd: 'html/', src: '**/*.html', dest: 'dist/', filter: 'isFile'},
      {expand:true, cwd: 'image/', src: '**/*.*', dest: 'dist/image/', filter: 'isFile'}
    ]
  }
};

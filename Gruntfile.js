module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    stylus: {
      compile: {
        options: {
          paths: [
            'node_modules/rupture',
            'node_modules/jeet/stylus'
          ],
        },
        files: {
          'styles/css/app.css': 'styles/stylus/app.styl'
        }
      }
    },

    watch: {
      scripts: {
        files: ['styles/stylus/**/*.styl'],
        tasks: ['stylus'],
        options: {
          spawn: false,
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev', ['watch']);

};
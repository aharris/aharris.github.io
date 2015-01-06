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
          compress: false
        },
        files: {
          'css/demo.css': 'stylus/demo.styl'
        }
      }
    },

    watch: {
      styles: {
        files: ['stylus/**/*.styl'],
        tasks: ['stylus'],
        options: {
          spawn: false,
        },
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('blog', ['watch']);

};
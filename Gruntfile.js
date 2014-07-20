module.exports = function(grunt) {

  grunt.initConfig({

    exec: {
      traceur: './node_modules/.bin/traceur --annotations=true --dir src/ lib/ --modules=commonjs',
      clean: 'rm -rf lib/',
      run: 'node ./index.js'
    },

    watch: {
      compile: {
        files: ['src/**/*.js'],
        tasks: ['exec:traceur'],
        options: {
          atBegin: true
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('compile', ['exec:clean', 'exec:traceur']);
  grunt.registerTask('run', ['compile', 'exec:run']);
  grunt.registerTask('default', ['run']);

};

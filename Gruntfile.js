module.exports = function(grunt) {
    grunt.initConfig({
      less: {
  			options: {
  				paths: ["css"],
                compress : true,
  				plugins: [
  					new (require('less-plugin-autoprefix'))({browsers: ["chrome > 10", "firefox > 10", "ie > 7", "android > 2", "ios > 5"]}),
  				]
  			},
  			build: {
                files: [{
					expand: true,
					flatten: false,
					cwd: 'style/',
					ext: '.css',
					src: ['**/*.less'],
					filter: 'isFile',
					dest: 'style/build'
				}]
  			}
      },
      watch: {
  			css: {
  				files: ['style/*.less'],
  				tasks: ['less:build']
  			},
  			options: {
  				atBegin: true
  			}
      }
    });
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', [
		'less',
		'watch'
	]);
};

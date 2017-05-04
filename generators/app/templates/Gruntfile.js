'use strict';
module.exports = function(grunt) {
	grunt.initConfig({});
  require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);
	require('./grunt/jshint')(grunt);
	require('./grunt/clean')(grunt);
	require('./grunt/copy')(grunt);
	require('./grunt/uglify')(grunt); 
  require('./grunt/imagemin')(grunt); 
  require('./grunt/concat')(grunt); 
  require('./grunt/cssmin')(grunt);
  require('./grunt/grunt-spritesmith')(grunt);
	grunt.registerTask('serve', function() {
		grunt.task.run(['clean','jshint','imagemin','sprite','concat','uglify','cssmin']);
	});
};
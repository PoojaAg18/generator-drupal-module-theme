'use strict';
module.exports = function(grunt) {
	grunt.config.set('imagemin', {
   	  dynamic: {                       
      files: [{
			cwd: 'src/themes/',
			dest: 'src/themes/',
			src: ['**/**/*.{png,jpg,gif}'],
			expand: true
       }]
		}
	});
};
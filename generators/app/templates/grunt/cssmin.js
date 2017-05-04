'use strict';
module.exports = function(grunt) {
	grunt.config.set('cssmin', {
	dist1: {
			options: {
				mangle: true,
				preserveComments: 'no',
				sourceMap: false
			},
			cwd: 'dist/themes/concat',
			dest: 'dist/themes/minified',
			src: '*.css',
			ext: '_minified.css',
			expand: true
		},
  dist2: {
   	options: {
				mangle: true,
				preserveComments: 'no',
				sourceMap: false
			},
			cwd: 'dist/modules/custom/concat/',
			dest: 'dist/modules/custom/minified/',
			src: '*.css',
			ext: '_minified.css',
			expand: true
		}
	});
};
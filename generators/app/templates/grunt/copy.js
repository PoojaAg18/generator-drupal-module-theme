'use strict';
module.exports = function(grunt) {
	grunt.config.set('copy', {
    minified_module_css : {
			cwd: 'dist/modules/custom/minified',
			src: '*.css',
			dest: 'src/modules/custom/minified/',
			expand: true
		},
     minified_module_js : {
			cwd: 'dist/modules/custom/minified',
			src: '*.js',
			dest: 'src/modules/custom/minified/',
			expand: true
		},
     minified_theme_css : {
			cwd: 'dist/themes/minified',
			src: '*.css',
			dest: 'src/themes/minified/',
			expand: true
		},
     minified_theme_js : {
			cwd: 'dist/themes/minified',
			src: '*.js',
			dest: 'src/themes/minified/',
			expand: true
		},
    sprite_images_themes : {
			cwd: 'dist/themes/sprites',
			src: '*.js',
			dest: 'src/themes/sprites/',
			expand: true
		},
    sprite_images_modules : {
			cwd: 'dist/modules/custom/sprites',
			src: '*',
			dest: 'src/modules/custom/sprites/',
			expand: true
		}
	});
};
'use strict';
module.exports = function(grunt) {
	grunt.config.set('sprite', {
    dist1:{
        src: 'src/themes/**/**/*.png',
        destImg: 'dist/themes/sprites/img/spritesheet.png',
        destCSS: 'dist/themes/sprites/css/sprites.css'
    },
    dist2:{
        src: 'src/modules/custom/**/**/*.png',
        destImg: 'dist/modules/custom/sprites/img/spritesheet.png',
        destCSS: 'dist/modules/custom/sprites/css/sprites.css'
    }
	});
};
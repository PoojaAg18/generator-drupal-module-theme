'use strict';
module.exports = function(grunt) {
	grunt.config.set('concat', {
   		dist1: {
	  	options: {
        banner: "'use strict';\n",
        process: function(src, filepath) {
          return '// Source: ' + filepath + '\n' +
            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
        },
    },
		
			src: 'src/themes/**/**/*.js',
      dest: 'dist/themes/concat/concat.js'
		},
     dist2 : { 
      src: 'src/themes/**/**/*.css',
      dest: 'dist/themes/concat/concat.css'
    },
     dist3: {
				options: {
        banner: "'use strict';\n",
        process: function(src, filepath) {
          return '// Source: ' + filepath + '\n' +
            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
        },
        },
       src: 'src/modules/custom/**/**/*.js',
       dest: 'dist/modules/custom/concat/concat.js'
    },
    dist4 : { 
       src: 'src/modules/custom/**/**/*.css',
       dest: 'dist/modules/custom/concat/concat.css'
    }
	});
};
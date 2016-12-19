const os = require('os');
module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		electron: {
		    build: {
		        options: {
		            name: 'electron-template',
		            dir: './',
		            out: 'dist',
		            version: '1.3.5',
		            platform: os.platform(),
		            arch: os.arch(),
					overwrite : true
		        }
		    },
		    buildAll: {
		        options: {
		            name: 'electron-template',
		            dir: './',
		            out: 'dist',
		            version: '1.3.5',
		            platform: 'all',
		            arch: 'all',
					overwrite : true
		        }
		    }
		}
	});
	grunt.registerTask('default', ['electron']);
};

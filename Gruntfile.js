module.exports = function(grunt) {
	grunt.initConfig({
		connect: {
			server: {
				options: {
					base: '',
					port: 9999
				}
			}
		},

		'saucelabs-qunit': {
			all: {
				options: {
		    			username: 'zzawaideh',
		    			key: '6c133591-a7d0-4959-bf19-2757c354e3d4',
		    			urls: ['http://127.0.0.1:9999/tests/test.html'],
		    			build: process.env.TRAVIS_JOB_ID,
		    			concurrency: 2,
		    			testname: 'qunit tests',
		    			browsers: [{
						browserName: 'chrome',
						platform: 'linux'
		    			}]
				}
	    		}
		},
		watch: {}
	});

    	// Load dependencies
	for (var key in grunt.file.readJSON('package.json').devDependencies) {
		if (key !== 'grunt' && key.indexOf('grunt') === 0) grunt.loadNpmTasks(key);
	}

	grunt.registerTask('default', ['connect', 'watch']);
	grunt.registerTask('test', ['connect', 'saucelabs-qunit']);
};

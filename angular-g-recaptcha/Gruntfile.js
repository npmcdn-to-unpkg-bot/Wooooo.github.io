module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    ngdocs: {
        options: {
            dest: 'docs',
            scripts: [
                './bower_components/angular-g-recaptcha/angular-g-recaptcha.js',
                './bower_components/angular/angular.js',
                './bower_components/angular-animate/angular-animate.js'
            ],
            html5Mode: false,
            startPage: '/api',
            titleLink: "/api",
            bestMatch: true,
            analytics: {
                  account: 'UA-69569159-2'
            }
        },
    
        api: {
            src: ['./bower_components/angular-g-recaptcha/angular-g-recaptcha.js'],
            title: 'API Documentation'
        }
            // discussions: {
            //       shortName: 'my',
            //       url: 'http://my-domain.com',
            //       dev: false
            // }
            // },
            // tutorial: {
            // src: ['content/tutorial/*.ngdoc'],
            // title: 'Tutorial'
            // },
            // api: {
            // src: ['src/**/*.js', '!src/**/*.spec.js'],
            // title: 'API Documentation'
    }
    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-ngdocs');

  // Default task(s).
  grunt.registerTask('default', ['ngdocs']);

};
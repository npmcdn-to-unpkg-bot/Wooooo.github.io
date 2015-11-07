module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    ngdocs: {
        options: {
            dest: 'docs',
            scripts: [
                '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.min.js',
                '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular-animate.min.js',
                './bower_components/angular-g-recaptcha/angular-g-recaptcha.js',
                './scripts/ssl.js'
            ],
            html5Mode: false,
            startPage: '/api',
            titleLink: "https://wooooo.github.io/angular-g-recaptcha",
            bestMatch: true,
            analytics: {
                  account: 'UA-69569159-2'
            },
            title: 'Gre',
            navTemplate: 'templates/nav.html'
        },
    
        api: {
            src: ['./bower_components/angular-g-recaptcha/angular-g-recaptcha.js'],
            title: 'API Reference'
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
            // }
    }
    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-ngdocs');

  // Default task(s).
  grunt.registerTask('default', ['ngdocs']);

};
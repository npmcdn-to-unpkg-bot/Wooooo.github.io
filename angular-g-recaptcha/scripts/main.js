'use strict';

requirejs.config({
    paths: {
        
        //angular official libraries
        'angular':              '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0-beta.1/angular.min',
        
        //angular unofficial libraries
        'ui-router' :           '//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min',
        
        'angular-g-recaptcha' : '../bower_components/angular-g-recaptcha/angular-g-recaptcha.min'
    },
    
    shim: {
        'angular': {
            exports: 'angular'
        },
        'ui-router': {
            deps: ['angular']
        },
        'angular-g-recaptcha': {
            deps: ['angular']
        }
    }
});

require(['angular', 'app'], function(angular, app) {
    angular.element(document).ready(function(){
        angular.bootstrap(document, [app.name]);
    });
})
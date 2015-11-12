define(function(require) {
    var angular = require('angular');
    
    var app = angular.module('analytics', [])
    .run(function($rootScope, $location, $window) {
        $rootScope.$on('$routeChangeSuccess', function() {
            $window.ga('send', 'pageview', { page: $location.url() });
        });
    });
    
    return app;
});
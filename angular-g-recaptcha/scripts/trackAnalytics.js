define(function(require) {
    var angular = require('angular');
    
    var app = angular.module('analytics', [])
    .run(function($rootScope, $location, $window) {
        $rootScope.$on('$locationChangeSuccess', function() {
            $window.ga('send', 'pageview', { page: $location.path() });
        });
    });
    
    return app;
});
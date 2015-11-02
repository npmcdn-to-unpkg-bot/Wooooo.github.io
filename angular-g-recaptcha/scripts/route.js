define(function(require){
    'use strict';
    
    var router = angular.module('router', [])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
        .state('home', {
            url: '/',
            controller: 'homeCtrl',
            templateUrl: 'pages/home.html'
            
        });
        
        $urlRouterProvider
        .otherwise('/');
    });
    return router;
})
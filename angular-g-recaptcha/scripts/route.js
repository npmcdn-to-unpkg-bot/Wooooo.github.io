define(function(require){
    'use strict';
    
    var angular = require('angular');
    
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
define(function(require){
    'use strict';
    
    var angular = require('angular');
    
    var ctrl = angular.module('ctrl', [])
    .controller('homeCtrl', function($grecaptcha, $document, $scope){
        $scope.greInfo = {};
        
        $scope.$on('greInfo', function(greInfo) {
            if(!!greInfo) {
                greInfo.promise.then(function(gre){
                    $scope.reset = function() {
                        gre.reset();
                    }
                    
                    $scope.getResponse = function() {
                        alert(gre.getResponse());
                    }
                });
            }    
        });
    });
    
    
    return ctrl;
})
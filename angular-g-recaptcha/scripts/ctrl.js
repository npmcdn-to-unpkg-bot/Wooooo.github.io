define(function(require){
    'use strict';
    
    var angular = require('angular');
    
    var ctrl = angular.module('ctrl', [])
    .controller('homeCtrl', function($grecaptcha, $document, $scope){
        $scope.greInfo = {};
        
        $scope.$watch('greInfo', function(greInfo) {
            if(!!greInfo) {
                greInfo.promise.then(function(gre){
                    $scope.reset = function() {
                        gre.reset();
                        $scope.response = undefined;
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
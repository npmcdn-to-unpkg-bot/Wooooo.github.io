define(function(require){
    'use strict';
    
    var angular = require('angular');
    
    var ctrl = angular.module('ctrl', [])
    .controller('homeCtrl', function($grecaptcha, $document, $scope){
        var target = angular.element($document[0].querySelector('.g-recaptcha'));
        var _widgetId = undefined;
        
        $scope.response = undefined;
        
        var callback = function(response){
            $scope.response = response; 
        };
        
        var expiredCallback = function(){
            $scope.response = undefined;
        }
        
        
        $grecaptcha.init().then(function(){
            target.empty();
            
            $grecaptcha.render(target[0], {callback: callback, 'expired-callback': expiredCallback}).then(function(widgetId){
                _widgetId = widgetId;
            })
        })
        
        $scope.reset = function(){
            $grecaptcha.reset(_widgetId);
            $scope.response = undefined;
        };
        
        $scope.getResponse = function(){
            var res = $grecaptcha.getResponse(_widgetId);
            
            alert( res == '' ? 'There is no repsonse yet!' : res );
        }
    });
    
    
    return ctrl;
})
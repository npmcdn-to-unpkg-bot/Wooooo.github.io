define(function(require){
    'use strict';
    
    require('ui-router');
    require('angular-g-recaptcha');
    
    var angular = require('angular');
    
    var app = angular.module('gre', [
            //angular official libraries
            
            //angular unofficial libraries
            'ui.router',
            'wo.grecaptcha',  
            
            
            //custom
            require('route').name,
            require('ctrl').name
        ]
    )
    .constant('recaptchaSitekey', '6LepGxATAAAAAAwnyeRvc6JQLuyXzXBBi3G-d1s_')
    .config(function($grecaptchaProvider, recaptchaSitekey){
        $grecaptchaProvider.setSitekey(recaptchaSitekey);
    });
    
    
    return app;
})
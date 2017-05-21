( function() {
    'use strict';

    function SplashSectionController() {
        var vm = this;

        vm.$onInit = function() {
        }
    }

    angular.module( 'components' )

    .controller( 'SplashSectionController', [ SplashSectionController ] );
} )();
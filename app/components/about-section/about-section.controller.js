( function() {
    'use strict';

    function AboutSectionController() {
        var vm = this;

        vm.$onInit = function() {
        }
    }

    angular.module( 'components' )

    .controller( 'AboutSectionController', [ AboutSectionController ] );
} )();
( function() {
    'use strict';

    function ContactsSectionController() {
        var vm = this;

        vm.$onInit = function() {
        }
    }

    angular.module( 'components' )

    .controller( 'ContactsSectionController', [ ContactsSectionController ] );
} )();
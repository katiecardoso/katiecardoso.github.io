( function() {
    'use strict';

    function FootbarController($filter) {
        var vm = this;

        vm.$onInit = function() {
        }
    }

    angular.module( 'components' )

    .controller( 'FootbarController', [ '$filter', FootbarController ] );
} )();
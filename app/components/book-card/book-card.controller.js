( function() {
    'use strict';

    function BookCardController( $filter ) {
        var vm = this;

        vm.$onInit = function() {
        }
    }

    angular.module( 'components' )

    .controller( 'BookCardController', [ '$filter', BookCardController ] );
} )();
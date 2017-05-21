( function() {
    'use strict';

    function BookCardController( $filter ) {
        var vm = this;

        vm.$onInit = function() {
            console.log( 'received book: ' + angular.toJson( vm.book ) );
        }
    }

    angular.module( 'components' )

    .controller( 'BookCardController', [ '$filter', BookCardController ] );
} )();
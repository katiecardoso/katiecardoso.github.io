( function() {
    'use strict';

    function NavbarController($filter) {
        var vm = this;

        vm.$onInit = function() {
            console.log( 'welcome @ ' + $filter( 'date' )( new Date(), "yyyy-MM-dd'T'HH:mm:ss.sssZ" ) );
        }
    }

    angular.module( 'components' )

    .controller( 'NavbarController', [ '$filter', NavbarController ] );
} )();
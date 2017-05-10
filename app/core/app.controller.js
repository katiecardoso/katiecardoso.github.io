( function() {
    'use strict';

    angular.module( 'core' )

    .controller( 'AppController', [ '$filter', '$state', function( $filter, $state ) {
        var vm = this;

        vm.$onInit = function() {
            console.log( 'welcome @ ' + $filter( 'date' )( new Date(), "yyyy-MM-dd'T'HH:mm:ss.sssZ" ) );
        }
    } ] );
} )();
( function() {
    'use strict';

    angular.module( 'root', [ 'core', 'components', 'templates', 'ui.router', 'ui.bootstrap', 'angular-loading-bar' ] )

    .run( function( $trace ) {
        $trace.enable( "TRANSITION" );
    } )

    .config( function( $httpProvider, $locationProvider, cfpLoadingBarProvider ) {
        // removes '!' after '#' in url -- angular 1.6 defaults to this now, should figure out why
        $locationProvider.hashPrefix( '' );

        cfpLoadingBarProvider.includeSpinner = false;

        // cors related stuff
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    } );
} )();
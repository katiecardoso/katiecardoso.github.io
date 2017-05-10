( function() {
    'use strict';

    var app = {
            templateUrl : './app.html',
            controller : 'AppController',
            bindings : {}
    };

    angular.module( 'core' )

    .component( 'app', app )

    .config( function( $stateProvider, $urlRouterProvider ) {
        $stateProvider

        .state( 'app', {
                component : 'app',
                url : '/'
        } );
        
        $urlRouterProvider.otherwise( '/' );
    } );
} )();
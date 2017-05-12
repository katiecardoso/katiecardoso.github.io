( function() {
    'use strict';

    var navbar = {
            templateUrl : './navbar.html',
            controller : 'NavbarController'
    };

    angular.module( 'components' )

    .component( 'navbar', navbar );
} )();
( function() {
    'use strict';

    var footbar = {
            templateUrl : './footbar.html',
            controller : 'FootbarController'
    };

    angular.module( 'components' )

    .component( 'footbar', footbar );
} )();
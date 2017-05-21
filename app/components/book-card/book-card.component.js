( function() {
    'use strict';

    var bookCard = {
            templateUrl : './book-card.html',
            controller : 'BookCardController',
            bindings : {
                book : '<'
            }
    };

    angular.module( 'components' )

    .component( 'bookCard', bookCard );
} )();
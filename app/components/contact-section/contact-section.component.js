( function() {
    'use strict';

    var contactSection = {
            templateUrl : './contact-section.html',
            controller : 'ContactsSectionController'
    };

    angular.module( 'components' )

    .component( 'contactSection', contactSection );
} )();
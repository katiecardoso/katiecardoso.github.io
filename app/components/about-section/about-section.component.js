( function() {
    'use strict';

    var aboutSection = {
            templateUrl : './about-section.html',
            controller : 'AboutSectionController'
    };

    angular.module( 'components' )

    .component( 'aboutSection', aboutSection );
} )();
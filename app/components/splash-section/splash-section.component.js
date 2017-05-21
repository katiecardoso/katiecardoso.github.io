( function() {
    'use strict';

    var splashSection = {
            templateUrl : './splash-section.html',
            controller : 'SplashSectionController'
    };

    angular.module( 'components' )

    .component( 'splashSection', splashSection );
} )();
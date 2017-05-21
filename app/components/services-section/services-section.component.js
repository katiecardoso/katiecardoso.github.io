( function() {
    'use strict';

    var servicesSection = {
            templateUrl : './services-section.html',
            controller : 'ServicesSectionController'
    };

    angular.module( 'components' )

    .component( 'servicesSection', servicesSection );
} )();
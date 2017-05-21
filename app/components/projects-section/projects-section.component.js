( function() {
    'use strict';

    var projectsSection = {
            templateUrl : './projects-section.html',
            controller : 'ProjectsSectionController'
    };

    angular.module( 'components' )

    .component( 'projectsSection', projectsSection );
} )();
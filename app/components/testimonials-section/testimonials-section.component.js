( function() {
  'use strict';

  var testimonialsSection = {
    templateUrl: './testimonials-section.html',
    controller: 'TestimonialsSectionController'
  };

  angular.module( 'components' )

    .component( 'testimonialsSection', testimonialsSection );
} )();

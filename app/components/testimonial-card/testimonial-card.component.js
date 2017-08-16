( function() {
  'use strict';

  var testimonialCard = {
    templateUrl: './testimonial-card.html',
    controller: 'TestimonialCardController',
    bindings: {
      testimonial: '<'
    }
  };

  angular.module( 'components' )

    .component( 'testimonialCard', testimonialCard );
} )();

( function() {
  'use strict';

  function TestimonialCardController( $filter ) {
    var vm = this;

    vm.$onInit = function() {}

    vm.testimonialAuthor = function() {
        return '  - ' + vm.testimonial.author;
    }
  }

  angular.module( 'components' )

    .controller( 'TestimonialCardController', [ '$filter', TestimonialCardController ] );
} )();

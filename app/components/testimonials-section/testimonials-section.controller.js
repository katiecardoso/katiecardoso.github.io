( function() {
  'use strict';

  function TestimonialsSectionController( TestimonialsSectionService ) {
    var vm = this;

    vm.$onInit = function() {
      vm.testimonials = [ TestimonialsSectionService.stacyTornio,
        TestimonialsSectionService.marenHorjus,
        TestimonialsSectionService.johnnyMolloy
      ];
    }
  }

  angular.module( 'components' )

    .controller( 'TestimonialsSectionController', [ 'TestimonialsSectionService', TestimonialsSectionController ] );
} )();

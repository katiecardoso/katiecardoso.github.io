( function() {
    'use strict';

    function ProjectsSectionController() {
        var vm = this;

        vm.$onInit = function() {
            vm.projects = [ {
                    title : "Sample Title One",
                    blurb : "This is the sample blurb for the first book.",
                    thumbnail : "http://placecorgi.com/250"
            }, {
                    title : "Sample Title Two",
                    blurb : "This is the sample blurb for the second book.",
                    thumbnail : "http://placecorgi.com/250"
            }, {
                    title : "Sample Title Three",
                    blurb : "This is the sample blurb for the third book.",
                    thumbnail : "http://placecorgi.com/250"
            } ];
        }
    }

    angular.module( 'components' )

    .controller( 'ProjectsSectionController', [ ProjectsSectionController ] );
} )();
( function() {
    'use strict';

    function ProjectsSectionController( ProjectsSectionService ) {
        var vm = this;

        vm.$onInit = function() {
            vm.projects = [ ProjectsSectionService.aroundAGreekTable,
                    ProjectsSectionService.backpackerNationalParksCoastToCoast,
                    ProjectsSectionService.barefootHome,
                    ProjectsSectionService.bridalBible,
                    ProjectsSectionService.campingActivityBookForFamilies,
                    ProjectsSectionService.diyBride,
                    ProjectsSectionService.familiesOnFoot,
                    ProjectsSectionService.hotDog,
                    ProjectsSectionService.kidsOutdoorAdventureBook,
                    ProjectsSectionService.prairieGirl,
                    ProjectsSectionService.spoonfulOfPromises,
                    ProjectsSectionService.wineocology ];
        }
    }

    angular.module( 'components' )

    .controller( 'ProjectsSectionController', [ 'ProjectsSectionService', ProjectsSectionController ] );
} )();
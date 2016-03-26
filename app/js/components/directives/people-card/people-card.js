(function() {
    'use strict';

    angular
        .module('peoples-components')
        .directive('peopleCard', peopleCardDirective);

    function peopleCardDirective() {
        return {
            scope: {
                people: '<',
                describe: '='
            },
            templateUrl: './js/components/directives/people-card/people-card.html'
        };
    }
})();

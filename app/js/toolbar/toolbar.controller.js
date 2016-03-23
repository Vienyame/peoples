(function() {
    'use strict';

    angular
        .module('peoplesApp')
        .controller('PeopleToolBar', ToolbarController);

    ToolbarController.$inject = ['$scope', '$location'];

    function ToolbarController($scope, $location) {
        activate();

        function activate() {
            $scope.active = '';
            if ($location.url() === '/people') {
                $scope.active = 'active';
            }
        }

    }
})();

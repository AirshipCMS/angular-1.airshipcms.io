(function(angular) {
  'use strict';
  angular.module('app', ['ngRoute'])
    .config(function($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);

      $routeProvider
        .when("/", {
          templateUrl: 'assets/scripts/root.html',
          controller: 'RootController'
        })
        .when("/styling", {
          templateUrl: ''
        })
        .when("/airship-schema", {
          templateUrl: ''
        })
        .when("/angular-tutorial", {
          templateUrl: ''
        })
        .when("/elements", {
          templateUrl: ''
        })
        .when("/setup", {
          templateUrl: ''
        });
    })
    .controller('RootController', ['$scope', function($scope) {
      $scope.message = 'hello world'
    }])
})(window.angular);
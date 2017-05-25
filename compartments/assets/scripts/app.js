(function(angular) {
  'use strict';
  angular.module('app', ['ngRoute'])
    .config(function($locationProvider) {
      $locationProvider.html5Mode(true);
    })
    .controller('Controller', ['$scope', function($scope) {
      $scope.message = 'hello world'
    }])
    .controller('NavController', ['$scope', '$location', function($scope, $location) {
      $scope.routes = [
        { name: 'Setup', route: '/setup' },
        { name: 'Styling', route: '/styling' },
        { name: 'Airship Schema', route: '/airship-schema' },
        { name: 'Angular Tutorial', route: '/angular-tutorial' },
        { name: 'Elements', route: '/elements' },
      ];

      $scope.navigate = function(route) {
        $location.path(route)
      }
    }])
})(window.angular);
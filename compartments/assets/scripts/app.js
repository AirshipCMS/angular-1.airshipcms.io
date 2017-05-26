(function(angular) {
  'use strict';
  angular.module('app', ['ngRoute'])
    .config(function($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);

      $routeProvider
        .when("/", {
          templateUrl: 'assets/scripts/setup.html',
          controller: 'SetupController'
        })
        .when("/styling", {
          templateUrl: 'assets/scripts/styling.html',
          controller: 'StylingController'
        })
        .when("/airship-schema", {
          templateUrl: ''
        })
        .when("/angular-tutorial", {
          templateUrl: ''
        })
        .when("/elements", {
          templateUrl: '/assets/scripts/elements.html',
          controller: 'ElementsController'
        })
    })
    .controller('SetupController', ['$scope', '$http', function($scope, $http) {
      $http.get('http://angular-1.airshipcms.io/api/pages/__root__')
        .then(function(res) {
          console.log(res)
          $scope.title = res.data.name;
          res.data.fields.forEach(function(field) {
            switch(field.variable_name) {
              default:
                $scope[field.variable_name] = field.value;
                break;
            }
          })
        })
    }])
    .controller('ElementsController', ['$scope', '$http', function($scope, $http) {
      $http.get('http://angular-1.airshipcms.io/api/aerostat_collection/elements?limit=20&sort=sorting_position')
        .then(function(res) {
          $scope.elements = res.data.map(function(element) {
            element.fields.forEach(function(field) {
              switch(field.variable_name) {
                default:
                  element[field.variable_name] = { value: field.value };
                  break;
              }
            });
            return element
          });
        })
    }])
    .controller('StylingController', ['$scope', function($scope) {
    }])
})(window.angular);
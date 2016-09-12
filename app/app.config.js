'use strict';

angular.
  module('characterListApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/characters', {
          template: '<char-list></char-list>'
        }).
        otherwise('/characters');
    }
  ]);

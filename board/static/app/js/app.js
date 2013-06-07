'use strict';


// Declare app level module which depends on filters, and services
angular.module('BoardApp', ['BoardApp.filters', 'BoardApp.services',
 'BoardApp.directives', 'BoardApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/projects', {templateUrl: 'partials/ProjectList.html', controller: 'ProjectController'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);

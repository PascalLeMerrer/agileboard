'use strict';


// Declare app level module which depends on filters, and services
angular.module('BoardApp', ['BoardApp.controllers']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/projects',    {templateUrl: 'partials/ProjectList.html'   });
        $routeProvider.when('/project',     {templateUrl: 'partials/Project.html'       });
        $routeProvider.when('/view2',       {templateUrl: 'partials/partial2.html'      });
        $routeProvider.otherwise({redirectTo: '/projects'});
    }]);
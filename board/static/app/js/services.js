'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('BoardApp.services', ['ngResource']).
    value('version', '0.1').
    factory('ProjectService', ['$resource', function($resource){
        return $resource('/projects/?:format', {}, {
    getProjects: {method:'GET', params:{format:'json'}, isArray:true}
  });
}]);

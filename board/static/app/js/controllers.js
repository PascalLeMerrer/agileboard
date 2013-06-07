'use strict';

/* Controllers */

angular.module('BoardApp.controllers', []).
  controller('ProjectController', ['$scope', 'ProjectService', function ($scope, ProjectService) {
    $scope.projects = ProjectService.getProjects()
  }])
  .controller('MyCtrl2', [function() {

  }]);
// ProjectController.$inject = ['$scope'];
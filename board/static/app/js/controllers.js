'use strict';

/* Controllers */

angular.module('BoardApp.controllers', []).
  controller('ProjectController', ['$scope', function ($scope) {
    $scope.projects = [{name: "MonPremierProjet"}, {name: "the big One"}]
  }])
  .controller('MyCtrl2', [function() {

  }]);
// ProjectController.$inject = ['$scope'];
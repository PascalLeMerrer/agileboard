'use strict';

/* Controllers */
console.log('controller.js');

angular.module('BoardApp.controllers', ['ngCookies'])
  .controller('ProjectController', ['$scope', '$http', '$cookies', function ($scope, $http, $cookies) {

    var userId = false;
    $http.get('/users/current')
      .success( function(data, status, headers, config)
        {
          userId = data.id;
          $http.get('/projects/', {user: "http://localhost:8000/users/" + userId, title: title})
            .success( function(project_data, project_status, project_headers, project_config)
              {
                $scope.projects = project_data;
              })
            .error( function (project_data, project_status, project_headers, project_config)
              {
                alert("can't load projects for user " +  userId);
              });
        }
      )
      .error( function(data, status, headers, config)
        {
          alert("can't get user id");
        }
      );

    $scope.createProject = function(){
        var title = $scope.title;
        var token = $cookies.csrftoken;
        if(title && title.length && userId)
        {
            $http({    method:  'POST',
                       url:     '/projects/',
                       data:    { user: "http://localhost:8000/users/" + userId + '/', title: title },
                       headers: { "X-CSRFToken": token }
                })
              .success( function(data, status, headers, config){
                alert('Project ' + data.title + ' created');
              })
              .error( function(data, status, headers, config){
                alert('error: ' + data.detail);
              } );
        }

    }
  }]);
// ProjectController.$inject = ['$scope', '$http', '$cookies'];
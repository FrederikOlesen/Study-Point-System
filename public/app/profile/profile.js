'use strict';

angular.module('myAppRename.profile', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/student', {
      templateUrl: 'app/student/profile.html',
      controller: 'View2Ctrl'
    });
  }])
  .controller('View2Ctrl', ['$scope', '$http', function ($scope, $http) {
      $http({
        method: 'GET',
        url: 'userApi/findone/'+$scope.username

      }).
          success(function (data) {
            $scope.students = data;
          }).
          error(function (data) {
            $scope.error = data;
          });





  }]);
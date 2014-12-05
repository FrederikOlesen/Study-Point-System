'use strict';

angular.module('myAppRename.documentation', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/documentation', {
    templateUrl: 'app/documentation/documentation.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', function ($scope, $http) {
    $http({
      method: 'GET',
      url: 'adminApi/user'
    }).
      success(function (data, status, headers, config) {
        $scope.users = data;
         $scope.error = null;
      }).
      error(function (data, status, headers, config) {
        if(status == 401){
          $scope.error ="You are not authenticated to request these data";
            return;
        }
        $scope.error = data;
      });
});




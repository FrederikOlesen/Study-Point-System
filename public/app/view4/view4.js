'use strict';

angular.module('myAppRename.view4', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view4', {
            templateUrl: 'app/view4/view4.html',
            controller: 'View4Ctrl'
        });
    }])

    .controller('View4Ctrl', function ($scope, $http) {
        $scope.increase = function(id, points) {
            $scope.points = points + 1;
            points = points + 1;
        $http({
            url: 'adminApi/students/',
            method: "POST",
            data: {'id': id, 'points': points}
        })
        }
        $scope.decrease = function(id, points) {
            $scope.points = points - 1;
            points = points - 1;
            $http({
                url: 'adminApi/students/',
                method: "POST",
                data: {'id': id, 'points': points}
            })
        }
    $http({
        method: 'GET',
        url: 'adminApi/students/'

    }).
        success(function (data, status, headers, config) {
            $scope.students = data;
        }).
        error(function (data, status, headers, config) {
            $scope.error = data;
        });
});



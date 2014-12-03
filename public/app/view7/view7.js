/**
 * Created by Mads on 02-12-2014.
 */
'use strict';

angular.module('myAppRename.view7', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view7', {
            templateUrl: 'app/view7/view7.html',
            controller: 'View7Ctrl'
        });
    }])

    .controller('View7Ctrl', function ($scope, $http) {

        $http({
            method: 'GET',
            url: 'adminApi/students/'

        }).
            success(function (data) {
                $scope.students = data;
            }).
            error(function (data) {
                $scope.error = data;
            });

        $http({
            method: 'DELETE',
            url: 'adminApi/students/'

        }).
            success(function (data) {
                $scope.students = data;
            }).
            error(function (data) {
                $scope.error = data;
            });
    })
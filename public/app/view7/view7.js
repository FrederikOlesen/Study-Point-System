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

        $scope.deleteperson = function (username) {

            console.log("Username: " + username);

            var student = {username: username}

            var student1 = JSON.stringify(student);

            $http.delete('adminApi/deleteperson/' + username)
                .success(function (data, status, headers, config) {
                    console.log("Test")
                })
                .error(function (data, status, headers, config) {
                    console.log("")
                });
        }
    })



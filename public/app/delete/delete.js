/**
 * Created by Mads on 02-12-2014.
 */
'use strict';

angular.module('myAppRename.delete', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/delete', {
            templateUrl: 'app/delete/delete.html',
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
                .success(function () {
                    console.log("Test")
                })
                .error(function () {
                    console.log("")
                });
        }

    })



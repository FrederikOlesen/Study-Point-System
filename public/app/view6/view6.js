'use strict';

angular.module('myAppRename.view6', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view6', {
            templateUrl: 'app/view6/view6.html',
            controller: 'View6Ctrl'
        });
    }])

    .controller('View6Ctrl', function ($scope, $http) {


        $scope.viewstudent = function () {

            console.log("Class " + $scope.classstudent);
            console.log("Name " + $scope.namestudent);
            console.log("Username " + $scope.usernamestudent);
            console.log("Password " + $scope.passwordstudent);

            //var array;
            //$http({
            //    method: 'GET',
            //    url: 'adminApi/students/'
            //
            //
            //
            //}).
            //    success(function (data, status, headers, config) {
            //        array = data;
            //    }).
            //    error(function (data, status, headers, config) {
            //        array = data;
            //    });
            //
            //console.log(array);


            var student = {
                username: $scope.usernamestudent,
                name: $scope.namestudent,
                points: 0,
                class: $scope.classstudent

            }

            var login = {
                username: $scope.usernamestudent,
                password: $scope.passwordstudent,
                role: "STUDENT"
            }

            console.log(student)

            $http.put('/adminApi/addtostudent', student)
                .success(function () {

                })
                .error(function (err) {
                    console.log("fejl");
                });

            $http.post('adminApi/addusers', login)
                .success(function (data, status, headers, config) {
                    console.log("Test")
                })
                .error(function (data, status, headers, config) {
                    console.log("")
                });
        }


    })
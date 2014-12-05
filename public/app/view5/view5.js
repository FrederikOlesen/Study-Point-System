/**
 * Created by Michael on 27-11-2014.
 */

'use strict';

angular.module('myAppRename.view5', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view5', {
            templateUrl: 'app/view5/view5.html',
            controller: 'View5Ctrl'
        });
    }])

    .controller('View5Ctrl', function ($scope, $http) {

        $scope.addteacher = function () {

            console.log("Name " + $scope.nameteacher);
            console.log("Username " + $scope.usernameteacher);
            console.log("Password " + $scope.passwordteacher);

            var teacher = {
                name: $scope.nameteacher,
                username: $scope.usernameteacher

            }

            var login = {
                username: $scope.usernameteacher,
                password: $scope.passwordteacher,
                role: "TEACHER"
            }

            console.log(teacher)

            $http.put('/adminApi/addtoteacher', teacher)
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
        $scope.checkuser = function () {

            $http.get('/adminApi/checkusername/' + $scope.usernamestudent).
                success(function (data, status, headers, config) {
                    console.log(data)
                    $scope.check = data;

                    if (data == "false") {
                        console.log("Jeg kommer herind")
                        $scope.addstudent();
                    }
                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        }
        $scope.addstudent = function () {

            console.log("Class " + $scope.classstudent);
            console.log("Name " + $scope.namestudent);
            console.log("Username " + $scope.usernamestudent);
            console.log("Password " + $scope.passwordstudent);

            var student = {
                username: $scope.usernamestudent,
                name: $scope.namestudent,
                points: 0,
                class: $scope.classstudent,
                semester: $scope.semesterstudent

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
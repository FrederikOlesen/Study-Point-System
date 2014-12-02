'use strict';

angular.module('myAppRename.view6', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view6', {
            templateUrl: 'app/view6/view6.html',
            controller: 'View6Ctrl'
        });
    }])

    .controller('View6Ctrl', function ($scope, $http) {


        $scope.newpassword = function () {

            console.log("Class " + $scope.classstudent);
            console.log("Name " + $scope.namestudent);
            console.log("Username " + $scope.usernamestudent);
            console.log("Password " + $scope.passwordstudent);


            var login = {
                username: $scope.profileuser,
                password: $scope.oldpass,
                confirmedpassword: $scope.newpass
            }

            console.log(login)

            $http.put('/adminApi/changepassword', login)
                .success(function () {

                })
                .error(function (err) {
                    console.log("fejl");
                });

        }


    })
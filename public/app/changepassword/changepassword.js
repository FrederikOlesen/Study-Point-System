'use strict';

angular.module('myAppRename.changepassword', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/changepassword', {
            templateUrl: 'app/changepassword/changepassword.html',
            controller: 'View6Ctrl'
        });
    }])

    .controller('View6Ctrl', function ($scope, $http) {


        $scope.newpassword = function () {


            var login = {
                username: $scope.username,
                password: $scope.oldpass,
                confirmedpassword: $scope.newpass
            }



            $http.put('/adminApi/changepassword', login)
                .success(function () {

                })
                .error(function (err) {
                    console.log("fejl");
                });

        }


    })
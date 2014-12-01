/**
 * Created by Michael on 27-11-2014.
 */

'use strict';

angular.module('myAppRename.view5', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view5', {
            templateUrl: 'app/view5/view5.html',
            controller: 'View5Ctrl'
        });
    }])

    .controller('View5Ctrl', function ($scope, $http) {


        $scope.viewstudent = function(){
            console.log("Study :"+$scope.studystudent);
            console.log("Class "+$scope.classstudent);
            console.log("Name "+$scope.namestudent);
            console.log("Username "+$scope.usernamestudent);
            console.log("Password "+$scope.passwordstudent);

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


            var student = {username: $scope.usernamestudent, name: $scope.namestudent, points: 0, class: $scope.classstudent, semester: $scope.semesterstudent}
            console.log(student)

            $http.put('/adminApi/addtostudent', student)
                .success(function () {

                })
                .error(function (err) {
                    console.log("fejl");
                });
        }



    })
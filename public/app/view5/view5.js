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


        $scope.view = function(){
            console.log("Study :"+$scope.classdata);
            console.log("Class "+$scope.classdata2);
            console.log("Name "+$scope.data4);
            console.log("Username "+$scope.data5);
            console.log("Password "+$scope.data6);

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


            var student = {id: 6, name: $scope.data4, points: 0, class: $scope.classdata2, semester: $scope.classdata3}
            console.log(student)

            $http.put('/adminApi/addtostudent', student)
                .success(function () {

                })
                .error(function (err) {
                    console.log("fejl");
                });
        }



    })
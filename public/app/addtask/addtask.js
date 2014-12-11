/**
 * Created by Michael on 03-12-2014.
 */
'use strict';

angular.module('myAppRename.addtask', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/addtask', {
            templateUrl: 'app/addtask/addtask.html',
            controller: 'addtaskCtrl'
        });
    }])

    .controller('addtaskCtrl', function ($scope, $http) {

        $http({
            method: 'GET',
            url: 'adminApi//getperiods/'

        }).
            success(function (data) {
                $scope.period = data;
                console.log($scope.period);
            }).
            error(function (data) {
                $scope.error = data;
            });


       $scope.addtask = function(){


           var task = {
               name : $scope.nametaskmodel,
               maxpoint: $scope.maxpointmodel

           }
           console.log(task);

           $http.put('/adminApi/addtask', task)
               .success(function () {

                   $http({
                       url: 'adminApi/addtasktoperiode/',
                       method: "POST",
                       data: {'periodname': $scope.periodmodel, 'nametask': $scope.nametaskmodel}
                   });

               })
               .error(function (err) {
                   console.log("fejl");
               });


        }
    })
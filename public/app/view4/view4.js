'use strict';

angular.module('myAppRename.view4', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view4', {
            templateUrl: 'app/view4/view4.html',
            controller: 'View4Ctrl'
        });
    }])

    .filter('myfilter', function() {
        return function (collection) {
            var output = [];

            collection.forEach(function(item) {
                if(output.filter(function(x) {return x.class === item.class;}).length <= 0) {
                    output.push(item);
                }
            });
            return output;
        }
    })


    .controller('View4Ctrl', function ($scope, $http) {

        $scope.increase = function(username, points,data) {
            if(data==undefined)
            {data = 1}
            if (data>100){
                data=100;
            }
            console.log(data)
            points = points + data;
            $http({
                url: 'adminApi/students/',
                method: "POST",
                data: {'username': username, 'points': points}
            });
            for(var i = 0; i < $scope.students.length; i++) {
                if($scope.students[i].username === username) {
                    $scope.students[i].points += data;
                    break;
                }
            }
        };
        $scope.decrease = function(username, points, data) {
            if(data == undefined) {
                data = 1}

            points = points - data;
            $http({
                url: 'adminApi/students/',
                method: "POST",
                data: {'username': username, 'points': points}
            });
            for(var i = 0; i < $scope.students.length; i++) {
                if($scope.students[i].username === username) {
                    $scope.students[i].points -= data;
                    break;
                }
            }
        };
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


        $scope.getClasses =  function() {
            var output = [];
            if(!angular.isUndefined($scope.students)) {
            $scope.students.forEach(function(item) {
                if(output.filter(function(x) {return x === item.class;}).length <= 0) {
                    output.push(item.class);
                }
            });
            return output;
        };
        }
    });
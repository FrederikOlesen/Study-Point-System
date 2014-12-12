'use strict';

angular.module('myAppRename.overview', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/overview', {
            templateUrl: 'app/overview/overview.html',
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
                };
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
                $http({
                    method: 'GET',
                    url:'adminApi/semesterclassnew/'
                }).
                    success(function(data) {
                        $scope.semesterclass = data;

                        var studentarray = [];
                        for(var i = 0; i < $scope.semesterclass.length; i++) {
                            for(var j = 0; j < $scope.semesterclass[i].students.length; j++) {
                                studentarray.push($scope.semesterclass[i].students[j]);
                            }
                        }
                        console.log(studentarray);
                        var studentoverviewtest = [];
                        for(var i = 0; i < studentarray.length; i++) {


                        }


                        var studentoverview = [{
                            "username": $scope.students[2].username,
                            "name": $scope.students[2].name,
                            "points": $scope.students[2].points,
                            "class": $scope.semesterclass[0].semesterclassname
                        },
                            {"username": $scope.students[3].username,
                                "name": $scope.students[3].name,
                                "points": $scope.students[3].points,
                                "class": $scope.semesterclass[1].semesterclassname
                            }];

                        $scope.semesterclass = studentoverview;


                    }).
                    error(function(data) {
                        $scope.error = data;
                    });


            }).
            error(function (data) {
                $scope.error = data;
            });


        $scope.getClasses =  function() {
            var output = [];
            if(!angular.isUndefined($scope.semesterclass)) {
                $scope.semesterclass.forEach(function(item) {
                    if(output.filter(function(x) {return x === item.class;}).length <= 0) {
                        output.push(item.class);
                    }
                });
                return output;
            };
        }
    });
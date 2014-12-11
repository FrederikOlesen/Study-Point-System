/**
 * Created by Michael on 03-12-2014.
 */
'use strict';

angular.module('myAppRename.period', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/period', {
            templateUrl: 'app/period/period.html',
            controller: 'View8Ctrl'
        });
    }])

    .controller('View8Ctrl', function ($scope, $http) {

        $http({
            method: 'GET',
            url: 'adminApi/semesterclassnew/'

        }).
            success(function (data) {
                $scope.semesterclass = data;
                console.log($scope.semesterclass);
            }).
            error(function (data) {
                $scope.error = data;
            });



            $scope.addperiodsemesterclass = function() {




                var period = {
                    name: $scope.nameperiodmodel,
                    description: $scope.descriptionperiodmodel,
                    startDate: $scope.startperiodmodel,
                    endDate: $scope.endperiodmodel,
                    maxPoint: $scope.maxpointsmodel,
                    requiredPoint: $scope.requiredpointsmodel,
                    tasks: []
                }

                $http.put('/adminApi/addperiod', period)
                    .success(function () {
                        $http({
                            url: 'adminApi/addperiodtosemesterclassnew/',
                            method: "POST",
                            data: {'semesterclass': $scope.semesterclassmodel, 'nameperiod': $scope.nameperiodmodel}
                        });
                    })
                    .error(function (err) {
                        console.log("fejl");
                    });
        }



    })
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



    })
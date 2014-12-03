/**
 * Created by Michael on 03-12-2014.
 */
'use strict';

angular.module('myAppRename.view8', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view8', {
            templateUrl: 'app/view8/view8.html',
            controller: 'View8Ctrl'
        });
    }])

    .controller('View8Ctrl', function ($scope, $http) {



    })
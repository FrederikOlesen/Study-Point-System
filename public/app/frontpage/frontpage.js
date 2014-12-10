'use strict';

angular.module('myAppRename.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/frontpage', {
    templateUrl: 'app/frontpage/frontpage.html'
  });
}])

.controller('View1Ctrl', function() {
});
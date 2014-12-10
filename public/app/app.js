'use strict';

// Declare app level module which depends on views, and components
angular.module('myAppRename', [
  'ngRoute',
  'myAppRename.controllers',
  'myAppRename.directives',
  'myAppRename.services',
  'myAppRename.factories',
  'myAppRename.filters',
  'myAppRename.view1',
  'myAppRename.profile',
  'myAppRename.documentation',
  'myAppRename.overview',
  'myAppRename.changepassword',
  'myAppRename.delete',
  'myAppRename.period',
  'myAppRename.adduser'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/frontpage'});
}])
.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });




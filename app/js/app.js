'use strict';

var myApp = angular.module('myApp', ['ng', 'seo']);

// routes
myApp.config(function ($routeProvider,$locationProvider){
  $locationProvider.hashPrefix('!');
  //$locationProvider.html5Mode(true);
  $routeProvider
  .when('/work',{
    controller:'WorkController',
    templateUrl:'app/partials/work.html'
  })
  .when('/contact',{
    controller:'MainController',
    templateUrl:'app/partials/contact.html'
  })
  .when('/',{
    controller:'MainController',
    templateUrl:'app/partials/me.html'
  })
  .otherwise({redirectTo:'/'});
});
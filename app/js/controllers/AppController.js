'use strict';

myApp.controller('AppController', function($scope, $location) {

	$scope.slug = function(text) {
		return text
		.toLowerCase()
		.replace(/[^\w ]+/g,'')
		.replace(/ +/g,'-')
		;
	};

	$scope.routeIs = function(routeName) {
		return $location.path() === routeName;
	};

	$scope.menus =
	[{link:"", icon:"home"},
	{link:"work", icon:"flask"},
	{link:"contact", icon:"envelope"}];

});
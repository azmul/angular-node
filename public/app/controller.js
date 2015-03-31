'use strict';
/**
*  Module
* Description
*/
var app = angular.module('AppController', []);

app.controller('HomeCtrl',['$scope', function ($scope) {
     $scope.title = 'Home page';

     $scope.hoverIn = function (){
     	this.dropdown = true;
     }
     $scope.hoverOut = function (){
     	this.dropdown = false;
     }
   
	 
}]);

app.controller('ContactCtrl', ['$scope','$http', function ($scope, $http) {
	 $scope.title = 'Contact Page';

	 $http.get('data/data.json')
	      .success(function(response){
	                                 $scope.names = response;
	                                 });
}]);


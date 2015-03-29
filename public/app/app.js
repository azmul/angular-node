'use strict';

//Define an angular module for our app
var app = angular.module('App', [
                               'ngRoute',
                               'AppController',
                               'ngResource',
                               'ui.bootstrap'
                              ]);
 
// Defined Route
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeCtrl'
                  }).

      when('/contact', {
                    templateUrl: 'templates/contact.html',
                    controller: 'ContactCtrl'
                  }).       
                   
      otherwise({
        redirectTo: '/'
      });  
        
}]);





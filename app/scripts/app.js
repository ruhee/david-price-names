'use strict';

/**
 * @ngdoc overview
 * @name davidPriceNicknamesApp
 * @description
 * # davidPriceNicknamesApp
 *
 * Main module of the application.
 */
angular
  .module('davidPriceNicknamesApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

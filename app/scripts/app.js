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
      .when('/press', {
        templateUrl: 'views/press.html',
        controller: 'PressCtrl',
        controllerAs: 'press'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

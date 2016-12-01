'use strict';

/**
 * @ngdoc overview
 * @name simyoApp
 * @description
 * # simyoApp
 *
 * Main module of the application.
 */
 var app = angular
  .module('simyoApp', [
    'ngResource',
    'ngRoute'
  ]);
  app
  .config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/pessoa', {
        templateUrl: 'views/pessoa/pessoa.html',
        controller: 'pessoaCtrl',
        controllerAs: 'pessoa'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

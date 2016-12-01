'use strict';

/**
 * @ngdoc function
 * @name simyoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simyoApp
 */
angular.module('simyoApp')
  .controller('MainCtrl', function ($rootScope, $location) {
    $rootScope.activetab = $location.path();
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  
  .controller('', function ($rootScope, $location) {
    $rootScope.activetab = $location.path();
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

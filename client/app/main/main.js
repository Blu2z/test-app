'use strict';

angular.module('doItApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>'
      })
      .state('catalog', {
        url: '/catalog',
        template: '<cat></cat>'
      })
      .state('admin', {
        url: '/admin',
        template: '<admin></admin>'
      });
  });

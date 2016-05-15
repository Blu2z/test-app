'use strict';

angular.module('doItApp', [
  'ui-notification',
  'ui.router'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .config(function(NotificationProvider) { 
    NotificationProvider.setOptions({ 
      delay: 1500, 
    });
  });

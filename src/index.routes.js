(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('root', {
        url: '/',
        views: {
          'content': {
            templateUrl: 'views/StripeToken/StripeToken.html',
            controller: 'StripeTokenCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('app', {
        url: '/app',
        views: {
          'content': {
            templateUrl: 'views/StripeApp/StripeApp.html',
            controller: 'StripeAppCtrl',
            controllerAs: 'vm'
          }
        }
      });

    $urlRouterProvider.rule(function($injector, $location) {
      var path = $location.url();
      // check to see if the path already has a slash where it should be
      if ('/' === path[path.length - 1] || path.indexOf('/?') > -1) {
        return;
      }
      if (path.indexOf('?') > -1) {
        return path.replace('?', '/?');
      }
      return path + '/';
    });

    $locationProvider.html5Mode(true);

  }

})();

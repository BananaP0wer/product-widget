(function(angular) {
  'use strict';

  var dependencies = [
    'ui.router',
    'rpcResourceService',
    'loadedPage',
    'productWidget',
    'contentItem'
  ];

  function routerConfig($locationProvider, $stateProvider, $urlServiceProvider) {
    $urlServiceProvider.rules
      .otherwise({ state: 'loaded' });

    $stateProvider
      .state('loaded', {
        url: '/loaded',
        component: 'loadedPage',
        bindings: {
          productContent: 'resolveProductContentData'
        },
        resolve: {
          resolveProductContentData: ['rpcResourceService', function(rpcResourceService) {
            return rpcResourceService.productContent.get().$promise;
          }]
        }
      });
  }

  angular.module('productWidgetDemoApp', dependencies)
    .config([
      '$locationProvider',
      '$stateProvider',
      '$urlServiceProvider',
      routerConfig
    ])
    .config(['$animateProvider', function($animateProvider) {
      $animateProvider.classNameFilter(/\bangular-animated\b/);
    }])
    .run([
      '$document',
      '$location',
      '$rootScope',
      '$transitions',
      run
    ]);

  function run($document, $location, $rootScope, $transitions) {

  }

})(angular);

(function(angular) {
  'use strict';

  angular.module('contentItem', [])
    .component('contentItem', {
      bindings: {
        contentItem: '<'
      },
      templateUrl: '/templates/content-item'
    });

})(angular);

(function(angular) {
  'use strict';

  angular.module('loadedPage', [])
    .component('loadedPage', {
      bindings: {
        productContent: '<'
      },
      template: '<product-widget product-content="$ctrl.productContent"></product-widget>'
    });

})(angular);

(function(angular) {
  'use strict';

  function productWidgetController($element) {
    var ctrl = this;

    function shiftIndex(index) {
      var listSize = ctrl.contentList.length;
      if (index >= listSize) {
        return index - listSize;
      }

      if (index < 0) {
        return index + listSize;
      }

      return index;
    }

    function updateShownIndex(index) {
      var prevItemIndex;
      var nextItemIndex;

      index = shiftIndex(index);
      prevItemIndex = shiftIndex(index - 1);
      nextItemIndex = shiftIndex(index + 1);

      ctrl.shownContentIndex = index;
      ctrl.shownContent = ctrl.contentList[index];
      ctrl.prevTitle = ctrl.contentList[prevItemIndex].title;
      ctrl.nextTitle = ctrl.contentList[nextItemIndex].title;
    }

    ctrl.$onInit = function() {
      ctrl.expanded = true;
      ctrl.contentList = ctrl.productContent.content;
      ctrl.contentList.forEach(function(item) {
        item.description = item.description.replace(/<br \/>/gi, '\r\n');
      });
      updateShownIndex(0);
    };

    ctrl.toggleWidget = function(e) {
      e.preventDefault();
      ctrl.expanded = !ctrl.expanded;
    };

    ctrl.goPrev = function(e) {
      e.preventDefault();
      updateShownIndex(--ctrl.shownContentIndex);
    };

    ctrl.goNext = function(e) {
      e.preventDefault();
      updateShownIndex(++ctrl.shownContentIndex);
    };
  }

  angular.module('productWidget', [])
    .component('productWidget', {
      bindings: {
        productContent: '<'
      },
      templateUrl: '/templates/product-widget',
      controller: ['$element', productWidgetController]
    });

})(angular);

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

(function(angular) {
  'use strict';

  function rpcResourceService($resource) {
    var serviceApi = this;

    serviceApi.productContent = $resource('/data/product-content', {
      get: {
        method: 'GET'
      }
    });

    return serviceApi;
  }

  angular.module('rpcResourceService', ['ngResource'])
    .factory('rpcResourceService', ['$resource', rpcResourceService]);

})(angular);

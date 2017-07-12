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

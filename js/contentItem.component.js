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

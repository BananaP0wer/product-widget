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

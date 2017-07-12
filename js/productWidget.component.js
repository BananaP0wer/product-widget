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

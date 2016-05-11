(function() {
  'use strict';

  angular
    .module("utils.codehangar")
    .directive("appheader", directive);

  function directive() {
    return {
      restrict: 'A',
      scope: {
        fixed: '@'
      },
      templateUrl: 'components/AppHeader/AppHeader.html',
      controller: controller,
      controllerAs: 'vm',
      bindToController: true
    }
  }

  function controller() {
    var vm = this;

    vm.init = function() {
      console.log('app header')
    };
    vm.init();
  }
})();

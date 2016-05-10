(function() {
  'use strict';

  angular
    .module("utils.codehangar")
    .directive("footer", directive);

  function directive() {
    return {
      restrict: 'A',
      scope: {
        fixed: '@'
      },
      templateUrl: 'components/Footer/Footer.html',
      controller: controller,
      controllerAs: 'vm',
      bindToController: true
    }
  }

  function controller() {
    var vm = this;

    vm.init = function() {
    };
    vm.init();
  }
})();

(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .config(appConfig);

  appConfig.$inject = ['stripeProvider'];

  function appConfig(stripeProvider) {

    stripeProvider.setPublishableKey('pk_test_WyLrQ3kjjKbCpvuHfdWfC7py');

  }

})();

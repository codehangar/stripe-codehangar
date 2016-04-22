(function() {
  'use strict';

  angular
    .module('utils.codehangar', [
      'ui.router',
      'ui.bootstrap',
      'angular-stripe',
    ]);

  angular
    .module('utils.codehangar')
    .run(run);

  run.$inject = ['$http'];

  function run($http) {
    $http.defaults.headers.common['Content-Type'] = 'application/json';
  }
})();

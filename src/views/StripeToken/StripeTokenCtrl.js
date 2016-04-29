(function() {
  'use strict';

  angular
    .module('utils.codehangar')
    .controller('StripeTokenCtrl', controller);

  controller.$inject = ['CardHistory', 'StripeCards', 'stripe'];

  function controller(CardHistory, StripeCards, stripe) {
    var vm = this;

    vm.selectPreset = function(selectedPreset) {

      if (selectedPreset) {
        analytics.track('stripe.selectPreset', {
          "number": selectedPreset.number,
          "cvc": selectedPreset.cvc,
          "exp_month": selectedPreset.exp_month,
          "exp_year": selectedPreset.exp_year
        });
      } else {
        selectedPreset = vm.cards[0];
      }

      vm.selectedPreset = selectedPreset;
      vm.card = angular.copy(selectedPreset);
    };

    vm.checkout = function(card) {

      // CardHistory.add(card);
      vm.stripeError = null;
      vm.stripeResponse = null;

      var payload = {
        "number": card.number,
        "cvc": card.cvc,
        "exp_month": card.exp_month,
        "exp_year": card.exp_year
      }

      analytics.track('stripe.checkout', payload);

      stripe.card.createToken(payload)
        .then(function(response) {
          vm.stripeResponse = response;
        })
        .catch(function(err) {
          vm.stripeError = err;

          if (err.type && /^Stripe/.test(err.type)) {
            console.log('Stripe error: ', err.message);
          } else {
            console.log('Other error occurred, possibly with your API', err.message);
          }
        });
    }

    vm.init = function() {
      vm.cards = StripeCards.cards;
      vm.selectPreset();
    };
    vm.init();
  }
})();

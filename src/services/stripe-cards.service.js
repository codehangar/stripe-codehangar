(function() {
  'use strict';

  angular
    .module("utils.codehangar")
    .factory("StripeCards", service);

  service.$inject = [];

  function service() {

    // https://stripe.com/docs/testing
    var cards = [{
        number: '4242424242424242',
        type: 'Visa',
        result: 'success',
        description: 'In test mode, you can use this card to simulate a successful transaction'
      }, {
        number: '4012888888881881',
        type: 'Visa',
        result: 'success',
        description: 'In test mode, you can use this card to simulate a successful transaction'
      }, {
        number: '4000056655665556',
        type: 'Visa (debit)',
        result: 'success',
        description: 'In test mode, you can use this card to simulate a successful transaction'
      }, {
        number: '5555555555554444',
        type: 'MasterCard',
        result: 'success',
        description: 'In test mode, you can use this card to simulate a successful transaction'
      }, {
        number: '5200828282828210',
        type: 'MasterCard (debit)',
        result: 'success',
        description: 'In test mode, you can use this card to simulate a successful transaction'
      }, {
        number: '5105105105105100',
        type: 'MasterCard (prepaid)',
        result: 'success',
        description: 'In test mode, you can use this card to simulate a successful transaction'
      }, {
        number: '378282246310005',
        type: 'American Express',
        result: 'success',
        description: 'In test mode, you can use this card to simulate a successful transaction'
      }, {
        number: '371449635398431',
        type: 'American Express',
        result: 'success',
        description: 'In test mode, you can use this card to simulate a successful transaction'
      }, {
        number: '6011111111111117',
        type: 'Discover',
        result: 'success',
        description: 'In test mode, you can use this card to simulate a successful transaction'
      }, {
        number: '6011000990139424',
        type: 'Discover',
        result: 'success',
        description: 'In test mode, you can use this card to simulate a successful transaction'
      }, {
        number: '30569309025904',
        type: 'Diners Club',
        result: 'success',
        description: 'In test mode, you can use this card to simulate a successful transaction'
      }, {
        number: '38520000023237',
        type: 'Diners Club',
        result: 'success',
        description: 'In test mode, you can use this card to simulate a successful transaction'
      }, {
        number: '3530111333300000',
        type: 'JCB',
        result: 'success',
        description: 'In test mode, you can use this card to simulate a successful transaction'
      }, {
        number: '3566002020360505',
        type: 'JCB',
        result: 'success',
        description: 'In test mode, you can use this card to simulate a successful transaction'
      },
      // Special Cards
      {
        number: '4000000000000077',
        type: 'Visa',
        result: 'success',
        description: 'Charge will succeed and funds will be added directly to your available balance (bypassing your pending balance).'
      }, {
        number: '4000000000000093',
        type: 'Visa',
        result: 'success',
        description: 'Charge will succeed and domestic pricing will be used (other test cards use international pricing). This card is only significant in countries with split pricing.'
      }, {
        number: '4000000000000010',
        type: 'Visa',
        result: 'success-error',
        description: 'With default account settings, charge will succeed but address_line1_check and address_zip_check will both fail.'
      }, {
        number: '4000000000000028',
        type: 'Visa',
        result: 'success-error',
        description: 'With default account settings, charge will succeed but address_line1_check will fail.'
      }, {
        number: '4000000000000036',
        type: 'Visa',
        result: 'success-error',
        description: 'With default account settings, charge will succeed but address_zip_check will fail.'
      }, {
        number: '4000000000000044',
        type: 'Visa',
        result: 'success-error',
        description: 'With default account settings, charge will succeed but address_zip_check and address_line1_check will both be unavailable.'
      }, {
        number: '4000000000000101',
        type: 'Visa',
        result: 'success-error',
        description: 'With default account settings, charge will succeed unless a CVC is entered, in which case cvc_check will fail and the charge will be declined.'
      }, {
        number: '4000000000000341',
        type: 'Visa',
        result: 'success',
        description: 'Attaching this card to a Customer object will succeed, but attempts to charge the customer will fail.'
      }, {
        number: '4000000000000002',
        type: 'Visa',
        result: 'error',
        description: 'Charge will be declined with a card_declined code.'
      }, {
        number: '4100000000000019',
        type: 'Visa',
        result: 'error',
        description: 'Charge will be declined with a card_declined code and a fraudulent reason.'
      }, {
        number: '4000000000000127',
        type: 'Visa',
        result: 'error',
        description: 'Charge will be declined with an incorrect_cvc code.'
      }, {
        number: '4000000000000069',
        type: 'Visa',
        result: 'error',
        description: 'Charge will be declined with an expired_card code.'
      }, {
        number: '4000000000000119',
        type: 'Visa',
        result: 'error',
        description: 'Charge will be declined with a processing_error code.'
      }
    ];

    angular.forEach(cards, function(card) {
      angular.extend(card, {
        cvc: '123',
        exp_month: moment().format('MM'),
        exp_year: moment().add(1, 'y').format('YYYY')
      });
    });

    this.cards = cards;

    return this;

  }
})();

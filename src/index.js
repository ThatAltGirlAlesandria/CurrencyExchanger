import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {} from '.currencyExchange.js';
import {} from '.currencyExchange.js';

function currencyExchange(usdBase) {
  Currency.currencyExchange()
    .then(function(response) {
      if (response.usdConversion) {
        printResponse(response);
      } else {
        throwError(response);
      }
    });
}

function printResponse(response) {
  let amount = document.querySelector('#USD').ariaValueMax;
  let secondCurrency = document.querySelector('second-currency');
}
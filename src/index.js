import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Currency} from '.currencyExchange.js';

function exchange(inputUSD) {
  Currency.exchange()
    .then(function(response) {
      if (response.usd_conversion) {
        printResponse(response);
      } else {
        printError(response);
      }
    });
}

function printResponse(response) {
  let userInput = document.querySelector('#USD').value;
}
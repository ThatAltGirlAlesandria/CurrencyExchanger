import './css/styles.css';
import { CurrencyExchange } from './currencyExchange.js';

function handleFormSubmission(e) {
  e.preventDefault();
  let inputUSD = document.querySelector('#USD').value;
  let targetCurrency = document.querySelector('#secondCurrency').value;
  exchange(inputUSD, targetCurrency);
}

function exchange(inputUSD, targetCurrency) {
  CurrencyExchange.exchange(inputUSD, targetCurrency)
    .then(function(response) {
      if (response.error) {
        errorResponse(response.error);
      } else {
        console.log(response);
        printResponse(response);
      }
    })
    .catch(function(error) {
      console.log(error);
      errorResponse(error);
    });
}

function printResponse(response) {
  if (response.conversion_result && response.conversion_result) {
    let conversionRate = parseFloat(response.conversion_result);
    document.querySelector('#exchangeOutput').innerText = conversionRate.toFixed(2);
  } else {
    document.querySelector('#exchangeOutput').innerText = 'The selected currency is not supported by this database currently. Please check back later for updates. Sorry for any inconvenience. Management.';
  }
}

function errorResponse(error) {
  document.querySelector('#exchangeOutput').innerText = `Sorry, we've encountered an error. Please check the code and let us know if we can help you any further. Management. ${error}`;
}

document.querySelector('#exchangeInput').addEventListener('submit', handleFormSubmission);

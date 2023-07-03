import './css/styles.css';
import { CurrencyExchange } from './currencyExchange.js';

function handleFormSubmission(e) {
  e.preventDefault();
  let inputUSD = document.querySelector('#USD').value;
  exchange(inputUSD);
}

function exchange(inputUSD) {
  CurrencyExchange.exchange(inputUSD)
    .then(function(response) {
      if (response.error) {
        errorResponse(response.error);
      } else {
        console.log(response); // Log the response for debugging purposes
        printResponse(response);
      }
    })
    .catch(function(error) {
      console.log(error); // Log the error for debugging purposes
      errorResponse(error);
    });
}

function printResponse(response) {
  let userInput = parseFloat(document.querySelector('#USD').value);
  let exchangeOptions = document.querySelector('#secondCurrency').value;

  if (response.usd_conversion && response.usd_conversion[exchangeOptions]) {
    let conversionRate = parseFloat(response.usd_conversion[exchangeOptions]);
    let convertedAmount = userInput * conversionRate;

    document.querySelector('#exchangeOutput').innerText = convertedAmount.toFixed(2);
  } else {
    document.querySelector('#exchangeOutput').innerText = 'The selected currency is not supported by this database currently. Please check back later for updates. Sorry for any inconvenience. Management.';
  }
}

function errorResponse(error) {
  document.querySelector('#exchangeOutput').innerText = `Sorry, we've encountered an error. Please check the code and let us know if we can help you any further. Management. ${error}`;
}

document.querySelector('#exchangeInput').addEventListener('submit', handleFormSubmission);

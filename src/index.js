import './css/styles.css';
import {CurrencyExchange} from './currencyExchange.js';

function exchange(inputUSD) {
  CurrencyExchange.exchange(inputUSD)
    .then(function(response) {
      if (response.usd_conversion) {
        printResponse(response);
      } else {
        errorResponse(response);
      }
    });
}

function printResponse(response, e) {
  e.preventDefault();
  let userInput = document.querySelector('#USD').value;
  let exchangeUSDForm = document.querySelector('#secondCurrency');
  let exchangeOptions = document.querySelector('#secondCurrency').value;
  let conversionOptions = [];

  for (let option of exchangeUSDForm.options) {
    conversionOptions.push(option.value);
  }
  let conversionResults = [];
  conversionOptions.forEach (function(option){
    if (exchangeOptions !== option) {
      conversionResults.push(option);
    }
  });
  if (conversionOptions.length === conversionResults.length) {
    document.querySelector('#exchangeOutput').innerText = 'The selected currency is not supported by this database currently. Please check back later for updates. Sorry for any inconvenience. Management.';
  } else {
    document.querySelector('#exchangeOutput').innerText = userInput * (response.usd_conversion['${exchangeOptions}']);
  }
}

function errorResponse(error, e) {
  e.preventDefault();
  document.querySelector('#exchangeOutput').innerText = `Sorry we've run into an error. Please check the code and let us know if we can help you any further. Management. ${error}`;
}

let handleFormSubmission = () => {
  let inputUSD = document.querySelector('#USD').value;
  exchange(inputUSD);
};

document.querySelector('#chaChing').addEventListener("submit", handleFormSubmission);
import {CurrencyExchange} from '../src/currencyExchange.js';

describe('CurrencyExchange', () => {
  test(`Should be able to exchange USD to the user's preference`, () => {
    const inputUSD = 1;

    return CurrencyExchange.exchange(inputUSD)
      .then((response) => {
        expect(response.usd_conversion.NZD).toEqual(1.63);
      });
  });
});
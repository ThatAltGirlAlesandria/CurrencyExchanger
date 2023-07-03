import {CurrencyExchange} from '../src/currencyExchange.js';

describe('CurrencyExchange', () => {
  test(`Should be able to exchange USD to the user's preference`, async () => {
    const inputUSD = 1;

    const response = await CurrencyExchange.exchange(inputUSD);
    expect(response.usd_conversion.NZD).toEqual(1.63);
  });
});
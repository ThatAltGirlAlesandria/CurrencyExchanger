import {CurrencyExchange} from './../src/currencyExchange.js';

describe('CurrencyExchange', () => {
  test('Should be able to exchange USD to the users preference.', () => {
    expect(exchange().usd_conversion.NZD).toEqual(1.63);
  });
});
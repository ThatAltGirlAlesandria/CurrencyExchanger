export class CurrencyExchange {
  static async exchange(inputUSD, targetCurrency){
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${targetCurrency}/${inputUSD}`)
      .then(function (response){
        if(!response.ok) {
          let errorResponse = `${response.status} ${response.statusText}`;
          throw new Error(errorResponse);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        return error;
      });
  }
}

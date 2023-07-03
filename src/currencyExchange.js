export default class currencyExchange {
  static async exchange(inputUSD){
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${inputUSD}`)
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
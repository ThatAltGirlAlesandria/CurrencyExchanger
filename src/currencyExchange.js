export default class Currency {
  static async exchange(){
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
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
    })
  }
}
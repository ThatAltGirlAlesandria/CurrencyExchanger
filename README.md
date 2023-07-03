# _CurrencyExchanger_

#### By _Alesandria Wild_

##### The application will allow users to input the amount they want to be converted from USD into another currency using Web APIs

## Technologies Used

* JavaScript
* ESLint
* webpack
* webpack plugin
* webpack-cli
* Jest
* Babel
* Test-Driven Development
* npm
* Dillinger.io
* GitHub
* MDN

## Description

This application utilizes the Web API called ExchangeRate-API. This program allows users to input any currency they want and convert it into another. My website utilizes this tool, however, only allows users to convert from USD to another currency. I may add more options later. 

## Setup/Installation Requirements

To access the code in a text editor:

#### To access the code in a source code editor: 
Open gitBash in the directory you desire.
```bash
$ git clone https://github.com/ThatAltGirlAlesandria/GalacticAge.git
$ cd GalacticAge
$ code .
```
After cloning the repo to your desired location go to https://exchangerate-api.com/ and sign up for a free account.
Once you have a free account you can access your API Key in your dashboard.
Go back to your gitBash and do the following steps.
```bash
$ touch .env
$ code .
```
In the .env file, you will place the API key by using this method API_KEY={Your_API_KEY_FROM_YOUR_DASHBOARD}.
Save the file and don't forget to add .env to your .gitignorefile so your API Key isn't shared with internet strangers.
#### To install the required environment after cloning from the above link:
```bash
$ npm init -y
$ npm install
$ npm run build
$ npm run test
$ npm run lint
```



For GitHub page direct link [will update soon](https://thataltgirlalesandria.github.io/WillUpdateSoon/)
___
## Known Bugs

Not fetching API at this time.

## License
 MIT License
Copyright (c) _2023_ _Alesandria Wild_

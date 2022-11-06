const Client = require('./../src/client.js').Client;

// Credentials

var login = '****';
var password = '****';

var client = new Client(login, password);

var callTo = '+380631010121';
var poolID = '8';
var useSixDigits = false;

client.callViaLastDigits(callTo, poolID, useSixDigits).then(function (data) {
    console.log(data);
});

// Output will be like the following

/*
{ call_id: '16951026', number: '0442273180', code: '3180' }

or

{ call_id: '16951079', number: '0442213837', code: '213837' }
*/

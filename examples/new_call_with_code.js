const Client = require('./../src/client.js').Client;

// Credentials

var login = '****';
var password = '****';

var client = new Client(login, password);

var callTo = '+380631010121';
var code = '2310w';
var lang = 'uk'; // uk or ru

client.callWithCode(callTo, code, lang).then(function (data) {
    console.log(data);
});

// Output will be like the following

/*
{ call_id: '16951531' }
*/

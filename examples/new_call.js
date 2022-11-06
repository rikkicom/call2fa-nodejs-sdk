const Client = require('./../src/client.js').Client;

// Credentials

var login = '****';
var password = '****';

var client = new Client(login, password);

var callTo = '+380631010121';
var callbackURL = 'http://httpbin.org/post';

client.call(callTo, callbackURL).then(function (data) {
    console.log(data);
});

// Output will be like the following

/*
{ call_id: '16950587' }
*/

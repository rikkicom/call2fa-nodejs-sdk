# NodeJS SDK for Call2FA

This is a library you can use for Rikkicom's service named as Call2FA (a phone call as the second factor in an authorization pipeline).

## Installation

Just copy the source code of the client to your project.

## Example

This simple code makes a new call to the +380631010121 number:

```js
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
```

More examples are in the `examples` folder.

- Documentation: https://api.rikkicom.io/docs/en/call2fa/
- Documentation (in Ukrainian): https://api.rikkicom.io/docs/uk/call2fa/
- Documentation (in Russian): https://api.rikkicom.io/docs/ru/call2fa/

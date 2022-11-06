const Client = require('./../src/client.js').Client;

// Credentials

var login = '***';
var password = '***';

var callID = '19999999';

var client = new Client(login, password);

client.info(callID).then(function (data) {
    console.log(data);
});

// Output will be like the following

/*
{
  id: '19999999',
  state: 'finished',
  phone_number: '+380 XX YYY ZZZZ',
  callback_url: 'https://example.com',
  ivr_answer: '1',
  is_called: true,
  is_callback_sent: true,
  is_error: false,
  error_info: '',
  created_at: '2022-11-05T23:39:03.000000+0200',
  created_at_unix: 1667684343,
  finished_at: '2022-11-05T23:39:16.000000+0200',
  finished_at_unix: 1667684356,
  called_at: '2022-11-05T23:39:03.000000+0200',
  called_at_unix: 1667684343,
  answer_at: '2022-11-05T23:39:15.000000+0200',
  answer_at_unix: 1667684355,
  region_code: 'UA',
  phone_number_raw: '0XXXXXYYYYY'
}
*/

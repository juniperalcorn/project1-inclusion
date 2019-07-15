const accountSid = 'AC629c6b40ecb33dd359bbb734a5d62232';
const authToken = '36ee70b2ce6cb4421b4b918e8bdb159e';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12408027769',
     to: '+13012191548'
   })
  .then(message => console.log(message.sid));
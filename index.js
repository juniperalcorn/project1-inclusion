const http = requpre('http')
const express = require('express')
const MessagingResponse = require('twilio').twiml.MessagingResponse

const app = express()

//Twilio

app.post('/sms', (req, res) =>{
    const twiml = new MessagingResponse();
    twiml.message('Your reservation is confirmed!')

    res.writeHead(200, {'Content-Type': 'text/xml'})
    res.end(twiml.toString())
})

http.createServer(app).listen(3001, () =>{
    console.log('Express server listening on porn 3001')
})


app.get('/', function (req, res) {
    res.send('Hello World!');
  });

app.listen(3000, function(){
    console.log('Restaurant bot listening on Port 3000!')
})
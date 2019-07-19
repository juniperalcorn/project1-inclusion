const http = require('http')
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
    console.log('Express server listening on port 3001')
})


// app.get('/', function (req, res) {
//     res.send('Hello World!');
//   });


  //import models
  const { Name, Reservations } = require('./models')

  app.get('/', async (req, res) => {
    try {
      const res = await Reservations.findAll({ raw: true })
      res.json({
        reservations
      })
    } catch (e) {
      res.status(500).json({
        message: e.message
      })
    }
  })
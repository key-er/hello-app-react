const express = require('express')
const app = express()
app.use('/', express.static(__dirname + '/../client/dist'))
const models = require('./models.js')

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.get('/info', (req, res) => {
  // should check the session cookie/token first
    // if it is there then get the relavant data from database for that user and show
    // else redirect to the login page
  res.send('you came to info - a protected page')
})


// app.get('/login', (req, res) => {
//   console.log(' req came to get /login and the req.body')
//   res.send('try to login first')

// })


app.post('/login', (req, res) => {
  console.log(' req came to post /login and the req.body')
  console.log(req.body)
  // validates the account
  // send back the session cookie with set expiration time
  // if user not found then redirect to signup page
  models.validateUser(req.body.email, req.body.password, (exists) => {
    if (exists) {
      // send session cookie
      ('user FOUND')
      res.send('your mock cookie')
    } else {
      ('user NOT FOUND')
      res.sendStatus(404)
    }
  })
})


app.get('/home', (req, res) => {
  console.log(' req came to get /signup and the req.body')
  // should serve open public page
  res.send('render home')
})



app.get('/signup', (req, res) => {
  console.log(' req came to get /signup and the req.body')
  // should serve a signup page
  res.send('render signup')
})


app.post('/signup', (req, res) => {
  console.log(' req came to post /signup and the req.body')
  console.log(req.body)
  // encrypt this password and then save to db
  // send back the session cookie with set expiration time
  models.createUser(req.body.email, req.body.password, (err, result) => {
    if (err === 'duplicate error') {
      res.status(403).send('render signup')
    } else {
      res.send('render login')
    }
  })

})


let port = 5000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}!`)
})
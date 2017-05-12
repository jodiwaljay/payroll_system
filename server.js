'use strict'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Message = require('./models/message');

//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set
//it up, or 3001
var port = 3001;
//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers',
   'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

   //and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});
//now we can set the route path & initialize the API
router.get('/', (req, res) => {
  Message.find(function (err, Messages) {
    if (err) return console.error(err);
    res.send(Messages);
  });
});

router.post('/', (req, res) => {
  console.log(req.body);
  var newMessage = new Message(req.body);
  newMessage.save((err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});

//Use our router configuration when we call /api
app.use('/database_handle', router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log('api running on port ${port}');
});

mongoose.connect('mongodb://localhost/my');

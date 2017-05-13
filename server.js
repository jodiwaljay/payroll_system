'use strict'
//first we import our dependencies…
var express = require('express');
var bodyParser = require('body-parser');


var app = express();

// route file for employee database handling
var employeeRoute = require('./Routes/employee');

//set our port to either a predetermined port number if you have set it up, or 3001
var port = 3001;

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

//Sending all employee related database requests to employeeRoute defined above
app.use('/database_handle', employeeRoute);

//starts the server and listens for requests
app.listen(port, function() {
 console.log('api running on port ${port}');
});

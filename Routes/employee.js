var uri = 'mongodb://localhost/mydatabase';
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Message = require('../models/message');

mongoose.connect(uri);

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

module.exports = router;

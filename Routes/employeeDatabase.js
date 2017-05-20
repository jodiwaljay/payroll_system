var uri = 'mongodb://localhost/mydatabase';
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var EmployeeModel = require('../models/employeeSchema');

//mongoose.connect(uri);

router.get('/', (req, res) => {
  EmployeeModel.find(function (err, Employees) {
    if (err) return console.error(err);
    res.send(Employees);
  });
});

router.post('/', (req, res) => {
  console.log(req.body);

  var NewEmployeeRecord = new EmployeeModel(req.body);
  NewEmployeeRecord.save((err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});

module.exports = router;

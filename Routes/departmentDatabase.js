var uri = 'mongodb://localhost/mydatabase';
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var departmentModel = require('../models/department');

mongoose.connect(uri);

router.get('/', (req, res) => {
  departmentModel.find(function (err, Departments) {
    if (err) return console.error(err);
    res.send(Departments);
  });
});

router.post('/', (req, res) => {
  console.log(req.body);
  
  var newDepartment = new departmentModel(req.body);
  newDepartment.save((err, doc) => {
    if (err) {
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});

module.exports = router;

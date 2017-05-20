var mongoose = require('mongoose');
var departmentModel = require('./department')
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({

  empName: {
    type: String,
  },

  empCode: {
    type: String,
  },

  department:{
    type: Object
  }

});

var UserSchema = new Schema({
  username: String,
  employees: [EmployeeSchema]
});


var EmployeeModel = mongoose.model('EmployeeRecords', EmployeeSchema);

module.exports = EmployeeModel;

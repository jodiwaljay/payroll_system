var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DepartmentSchema = new Schema({
  departmentName: {
    type: String,
  }
});

var Department = mongoose.model('Department', DepartmentSchema);

module.exports = Department;

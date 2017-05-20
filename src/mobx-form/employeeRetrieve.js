import React, { Component } from 'react';
import axios from 'axios';
import './form.css'

class EmployeeRecords extends Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = {content:'', createDept:false};
  }

  onButtonClick(){
    axios.get('http://localhost:3001/employee_database_handle')
    .then(res => {
      console.log(res.data);
      this.setState({content: JSON.stringify(res.data) });
    })
    .catch(err => {
      console.error(err);
    });
  }

  render() {

    return (
      <div className="app-container">
      <button onClick={this.onButtonClick}>
        Retrieve All Employees
      </button><br></br>
      <p>{this.state.content}</p>
      </div>
    );
  }
}

export default EmployeeRecords;

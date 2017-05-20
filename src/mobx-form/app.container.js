import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import LoginForm from './login/login-form.component';
import LoginStore from './login/login.store';
import axios from 'axios';
import './form.css'

@inject(() => ({
  store: new LoginStore(),
}))

@observer
class App extends Component {
  render() {
    let {store} = this.props;
    console.log(store.form);
    if(this.props.OldEmployee){
      let {OldEmployee} = this.props;

      store.fields.empName.value = OldEmployee.empName;
      store.fields.empCode.value = OldEmployee.empCode;
      store.fields.department.value = OldEmployee.department;

    }

    return (
      <div className="app-container">
        <LoginForm onSubmit={this.onSubmitForm}
                   form={store.form}
                   urlDeptSync='http://localhost:3001/database_handle'
                   onInputChange={store.onInputChange}
                   onDropdownChange={store.onDropdownChange}/>
      </div>
    );
  }

  onSubmitForm = (arg) => {
    let NewEmployeeRecord = {empName: arg.empName.value, empCode: arg.empCode.value, department: arg.department.option};

    if(this.props.OldEmployee){
      //this.updateEmployeeDatabase(NewEmployeeRecord, this.props.OldEmployee);
    }
    else{
      this.createNewEmployee(NewEmployeeRecord);
    }
      console.log('submitted!', arg.department.option)
  }

  createNewEmployee(NewEmployeeRecord){
    axios.post('http://localhost:3001/employee_database_handle',NewEmployeeRecord)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
    console.error(err);
    });
  }
}

export default App;

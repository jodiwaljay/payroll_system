import React from 'react';
import ReactDOM from 'react-dom';

import LoginControl, {LoginButton} from './App';
import element from './visibility_elem';
import NewEmployeeForm from './complex_components/employee_reg_form';
import TestForm from './mobx-form/app.container';
import EmployeeRecords from './mobx-form/employeeRetrieve';
import './index.css';

function combine(props){
  return (
    <div>
      {/*<LoginControl />
      {element }
      <LoginButton name='Click Me'/>
      <NewEmployeeForm />*/}
      <TestForm />
      <EmployeeRecords />
    </div>
  );
}

ReactDOM.render(
  React.createElement(combine),   // created an object or element of class combine defined above
  document.getElementById('root')
);

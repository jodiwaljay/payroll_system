import React from 'react';
import ReactDOM from 'react-dom';

import LoginControl, {LoginButton} from './App';
import element from './visibility_elem';
import NewEmployeeForm from './complex_components/employee_reg_form';
import './index.css';

function combine(props){
  return (
    <div>
      <LoginControl />  {/*class itself (LoginControl)*/}
      {element }        {/* Object or element of class Welcome (Defined in visibility_elem)*/}
      <LoginButton name='Click Me'/>
      <NewEmployeeForm />
    </div>
  );
}

ReactDOM.render(
  React.createElement(combine),   // created an object or element of class combine defined above
  document.getElementById('root')
);

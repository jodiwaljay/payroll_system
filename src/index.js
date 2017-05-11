import React from 'react';
import ReactDOM from 'react-dom';

import LoginControl from './App';
import element from './visibility_elem';
import './index.css';

function combine(props){
  return (
    <div>
      <LoginControl />  {/*class itself (LoginControl)*/}
      {element }        {/* Object or element of class Welcome (Defined in visibility_elem)*/}
    </div>
  );
}

ReactDOM.render(
  React.createElement(combine),   // created an object or element of class combine defined above
  document.getElementById('root')
);

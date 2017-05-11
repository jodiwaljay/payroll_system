import React, { Component } from 'react';
import './App.css';

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {createDept:false};
  }

  handleClick() {
    this.setState({createDept:true});
  }

  render() {
    const createDept = this.state.createDept;

    let content = null;
    if (!createDept) {
      content = <LoginButton name='Add a new Department' onClick={this.handleClick} />;
    } else {
      content = <div>
        <TextField name='text box' onClick={this.handleClick} /><br></br>
        <LoginButton name='Create Department' onClick={this.handleClick} />
      </div>;
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.name}
    </button>
  );
}

function TextField(props) {
  return (
    <input name={props.name}/>
  );
}

export default LoginControl;

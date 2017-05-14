import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import LoginForm from './login/login-form.component';
import LoginStore from './login/login.store';
import './form.css'

@inject(() => ({
  store: new LoginStore(),
}))
@observer
class App extends Component {
  render() {
    let {store} = this.props;
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
    console.log('submitted!', arg)
  }
}

export default App;

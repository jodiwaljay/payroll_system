import React, { Component, PropTypes } from 'react'
import FormInput from './../common/form-input'
import FormDropdown from './../common/form-dropdown'
import axios from 'axios'
import AddDept from './createDept'

import { observer } from 'mobx-react'
import './login-form.component.css'

@observer
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.updateDeptDatabase = this.updateDeptDatabase.bind(this);
    this.state = {options:[], createDept:false};
  }

  render() {
    const {form, onInputChange, onDropdownChange} = this.props;
    const {fields, meta} = form;


    return (
      <form className="login-form" onSubmit={this.submit}>
        <h3 className="login-form__title">Login</h3>
        <div className="login-form__field">
          <FormInput type="email"
                 name="email"
                 value={fields.email.value}
                 error={fields.email.error}
                 onChange={onInputChange}
                 placeholder="Email"/>
        </div>
        <div className="login-form__field">
          <FormInput type="password"
                 name="password"
                 value={fields.password.value}
                 error={fields.password.error}
                 onChange={onInputChange}
                 placeholder="Password"/>
        </div>

        <div >
        <div>
          <FormDropdown
                 placeholder="Select Department"
                 name="department"
                 value={fields.department.option.label || 'Select Department'}
                 error={fields.department.error}
                 onChange={onDropdownChange}
                 options={this.state.options}
                 />
        </div>
        <AddDept onAddingDept={this.updateDeptDatabase} urlDeptSync={this.props.urlDeptSync}/>


        </div>

        {meta.error ? <div className="login-form__error">
          {meta.error}
        </div> : null}

        <input className="login-form__submit"
               disabled={!meta.isValid}
               value="Continue"
               type="submit"/>
      </form>
    )
  }
  submit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.props.form.fields.email.value)
  }

  componentWillMount(){
    this.updateDeptDatabase();
  }

  updateDeptDatabase(){
    console.error('something');
    axios.get(this.props.urlDeptSync)
    .then(res => {
      console.log(res.data);
      this.setState(
        { options: res.data.map(function(option){ return {id:option['_id'], label:option['content']}; }) }
      );

    })
    .catch(err => {
      console.error(err);
    });
  }
}
LoginForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onDropdownChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  form: PropTypes.shape({
    fields: PropTypes.objectOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        error: PropTypes.any,
    })).isRequired,
    meta: PropTypes.shape({
        isValid: PropTypes.bool.isRequired,
        error: PropTypes.any
    }).isRequired
  }).isRequired
};

export default LoginForm

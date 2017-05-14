import React, { PropTypes } from 'react';
import classNames from 'classnames'
import Dropdown from 'react-dropdown'
import './form-input.css'

let getFormInputClasses = ({error}) => {
  return classNames('form-input', {
    'form-input--error': !!error,
  })
};

let FormDropdown = (props) => {
  let {error, onChange...rest} = props;
  type = type || 'text';
  const defaultOption = {value:'select', label:'select'};
  if(props.options[0]){
    defaultOption = props.options[0];
  }
  const defaultOption = props.options[0];
  return (
    <span className={getFormInputClasses(props)}>
      <Dropdown {...rest}
             className="form-dropdown"
             options={options}
             onChange={(e) => onChange(e.target.value, e.target.label)}/>
      {error ? <div className="form-input__error">
        {error}
      </div> : null}
    </span>
  )
};
FormDropdown.PropTypes = {
  onChange: PropTypes.func.isRequired,
  options:PropTypes.array,
  error: PropTypes.string,
  placeholder: PropTypes.string.isRequired
};

export default FromDropdown

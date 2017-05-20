import React, { PropTypes } from 'react'
import classNames from 'classnames'
import Dropdown from 'react-dropdown'
import './form-dropdown.css'

let getFormInputClasses = ({error}) => {
  return classNames('form-drop', {
    'form-drop--error': !!error,
  })
};

let FormDropdown = (props) => {
  let {name, error, onChange, ...rest} = props;

  return (
    <span className={getFormInputClasses(props)}>
      <Dropdown {...rest}
             className="form-dropdown"
             onChange={(option) => onChange(name, option)}/>
      {error ? <div className="form-input__error">
        {error}
      </div> : null}
    </span>
  )
};
FormDropdown.PropTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options:PropTypes.array,
  error: PropTypes.string,
  placeholder: PropTypes.string.isRequired
};

export default FormDropdown

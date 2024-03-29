import {action, toJS} from 'mobx'
import Validator from 'validatorjs';


class FormStore {
  getFlattenedValues = (valueKey = 'value') => {
    let data = {};
    let form = toJS(this.form).fields;
    Object.keys(form).map(key => {
      data[key] = form[key][valueKey]
    });
    return data;
  };

  @action
  onInputChange = (field, value) => {
    this.form.fields[field].value = value;
    var validation = new Validator(
      this.getFlattenedValues('value'),
      this.getFlattenedValues('rule'));
    this.form.meta.isValid = validation.passes();
    this.form.fields[field].error = validation.errors.first(field)
  };

  @action
  onDropdownChange = (field, option) => {
    //this.form.meta.isValid = false;
    this.form.fields[field].option = option;
  };


  @action
  setError = (errMsg) => {
    this.form.meta.error = errMsg
  }
}

export default FormStore

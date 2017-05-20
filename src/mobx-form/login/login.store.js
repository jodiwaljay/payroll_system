import { observable } from 'mobx'
import GenericFormStore from './../common/generic-form.store'

class LoginStore extends GenericFormStore {

  @observable
  form = {
    fields: {
      empName: {
        value: '',
        error: null,
        rule: 'required'
      },
      empCode: {
        value: '',
        error: null,
        rule: 'required'
      },

      department: {
        option: {},
        error: null,
        rule: ''
      }

    },
    meta: {
      isValid: false,
      error: null,
    },
  }


}

export default LoginStore

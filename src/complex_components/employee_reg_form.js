import {Form, Field} from 'simple-react-forms';
import React, {Component} from 'react';
import Select from 'react-select';

import axios from 'axios';

class NewEmployeeForm extends Component {

  constructor(props) {
    super(props);
    this.updateDeptDatabase = this.updateDeptDatabase.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.state = {url:'http://localhost:3001/database_handle',deptData:[]};
  }

  componentWillMount(){
    this.updateDeptDatabase();
  }

  updateDeptDatabase(){
    axios.get(this.state.url)
    .then(res => {
      console.log(res.data);
      this.setState(
        { deptData: res.data.map(function(elem){ return {id:elem['_id'], label:elem['content']}; }) }
      );
    })
    .catch(err => {
      console.error(err);
    });
  }

  onFormSubmit() {

    console.log(this.refs['simpleForm'].getFormValues());

  }

  render () {

    return (
    <div>
      <Form ref='simpleForm'>
          <Field
            name='city'
            label='Select City'
            element= {
              <Select
                options={this.state.deptData}
                valueAccessor={(selectedValue) => selectedValue.id}
              />
            }
          />
      </Form>

      <button onClick={this.onFormSubmit}> Submit </button>
    </div>

    );
  }
}

export default NewEmployeeForm;

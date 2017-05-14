import React, { Component, PropTypes } from 'react'
import axios from 'axios'
import LoginForm from './login-form.component'

class AddDept extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.state = {createDept:false};
  }
  render(){
    const createDept = this.state.createDept;
    let content = null;
    if (!createDept) {
      content = <LoginButton name='Add a new Department' onClick={this.handleClick} />;
    } else {
      content = <div>
        <TextField value={this.state.deptText} name='text box' onChange={this.handleComment} /><br></br>
        <LoginButton name='Create Department' onClick={this.handleCommentSubmit} />
      </div>;
    }

    return(content);
  }

  handleClick() {
    this.setState({createDept:true});
  }

  handleComment(e) {
    this.setState({deptText:e.target.value});
  }

  handleCommentSubmit() {
    if(this.state.deptText){
    const comment = {content:this.state.deptText};
    console.log(this.props.urlDeptSync);
    axios.post(this.props.urlDeptSync,comment)
    .then(res => {
      this.setState({ data: res, deptText:' ' });
      if(this.props.onAddingDept){ this.props.onAddingDept(); }

      console.error(res);
    })
    .catch(err => {
    console.error(err);
    });
  }
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
    <input name={props.name} value={props.value} onChange={props.onChange}/>
  );
}

export default AddDept

class ActionButton extends Component {
  constructor(props) {
    super(props);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.retrieveAllData = this.retrieveAllData.bind(this);
    this.state = {createDept:false, url:'http://localhost:3001/database_handle'};
  }

  handleCommentSubmit() {
    const text = this.state.deptText;
    const comment = {content:this.state.deptText};
    console.log(this.state.deptText);
    axios.post(this.state.url,comment)
    .then(res => {
      this.setState({ data: res });
      console.error(res);
    })
    .catch(err => {
    console.error(err);
    });
  }

  handleClick() {
    this.setState({createDept:true});
  }

  handleComment(e) {
    this.setState({deptText:e.target.value});
  }

  retrieveAllData(){
    this.setState({allData:'loading'});
    axios.get(this.state.url)
    .then(res => {
      this.setState({allData:JSON.stringify(res.data)});
    })
    .catch(err => {
    console.error(err);
    });

  }

  render() {
    const createDept = this.state.createDept;

    let content = null;

    if (!createDept) {
      content = <LoginButton name='Add a new Department' onClick={this.handleClick} />;
    } else {
      content = <div>
        <TextField name='text box' onChange={this.handleComment} /><br></br>
        <LoginButton name='Create Department' onClick={this.handleCommentSubmit} />
      </div>;
    }

    return (
      <div>
        {content}
        <br></br>
        <LoginButton name='Retrieve All Data' onClick={this.retrieveAllData} />
        <p>{this.state.allData}</p>
      </div>
    );
  }
}

function TextField(props) {
  return (
    <input name={props.name} onChange={props.onChange}/>
  );
}

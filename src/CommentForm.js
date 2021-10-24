import React, {Component} from 'react';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: '',

      comment: {
        name: '',
        message: '',
      },
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleFieldChange = (event) => {
    const {value, name} = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value,
      },
    });
  };

  onSubmit(e) {
    e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({error: 'All fields are required.'});
      return;
    }

    this.setState({error: '', loading: true});

    let {comment} = this.state;
    fetch('http://localhost:1234', {
      method: 'post',
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((res) => {
        comment.time = res.time;
        this.props.addComment(comment);

        this.setState({
          loading: false,
          comment: {...comment, message: ''},
        });
      })
      .catch((err) => {
        comment.time = "October 24, 2021";
        this.props.addComment(comment);

        this.setState({
          loading: false,
          comment: {...comment, message: '',name:''},
          
        });
      });
  }

 
  isFormValid() {
    return this.state.comment.name !== '' && this.state.comment.message !== '';
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <React.Fragment>
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form-group" style={{backgroundColor: '#5fc884'}}>
            <input
              onChange={this.handleFieldChange}
              value={this.state.comment.name}
              className="form-control"
              placeholder="Anonymous  Name"
              name="name"
              type="text"
              style={{marginBottom:8}}
            />
          </div>

          <div className="form-group">
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.message}
              className="form-control"
              placeholder="Your Comment"
              name="message"
              rows="5"
              style={{marginBottom:8}}
            />
          </div>

          {this.renderError()}

          <div className="form-group">
            <button disabled={this.state.loading} className="btn btn-primary" style={{justifyContent:'center',width:'100%',marginBottom:10}}>
              Comment &#10148;
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

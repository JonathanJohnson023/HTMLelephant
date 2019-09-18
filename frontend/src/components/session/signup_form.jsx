import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  // componentWillReceiveProps(nextProps) {
  //     if (nextProps.signedIn === true) {
  //         this.props.history.push('/login');
  //     }

  //     // this.setState({ errors: nextProps.errors })
  // }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user).then(() => {
      if(Object.values(this.props.errors).length > 0){
          return;
      } else {
        this.props.closeModal();
      }
    })
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.props.errors[error]}</li>
        ))}
      </ul>
    );
  }

  clearErrors() {}

  render() {
    return (
      <div
        className="modal-form"
        // onClick={this.props.closeModal} to close the splash if a user clicks outside of the splash
      >
        <form onSubmit={this.handleSubmit}>
          <div className="modal-form-form" id='modal-signup-form'>
            
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            
            <input
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />
            <br />
            <input id='modal-button' type="submit" value="Submit" />
            <div className='form-errors'>
              {this.renderErrors()}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
import React from 'react';
import { withRouter } from 'react-router'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formType: this.props.formType
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);  
    this.props.processForm(user)
    // .then(() => {  this.props.history.push('/h')    }); 
  }

  update(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    }
  }

  render() {
    let { errors, formType } = this.props;
    // const errorsLi = errors.session.map(error => {
    //   return <li>{error}</li>
    // })
    return (
      <form id='session-form' onSubmit={this.handleSubmit}>
        
        <input className='session-form-element' type="text" id="email" value={this.state.email} placeholder="Email" onChange={this.update('email')} />
        <input className='session-form-element' type="password" id="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />

        
        <button className='session-form-element'>{this.state.formType}</button>
      
      </form>
      )
    } 
  
}

export default withRouter(SessionForm);


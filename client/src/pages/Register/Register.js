import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

class Register extends Component {
  static contextType = AuthContext;

  state = {
    redirectToReferrer: false,
    error: ""
  }

  handleSubmit = (email, password, fullName, phone, position) => {
    API.Users.register(email, password, fullName, phone, position)
      .then(response => {
        this.setState({ redirectToReferrer: true })
      })
      .catch(err => {
        if (err.response.status === 401) {
          this.setState({ error: "Sorry, that email/password combination is not valid. Please try again." });
        }
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/home" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className='Login'>
        <div className='row'>
          <div className='col'>
            <div className='navbar-brand logo' to='#'>Register Account</div>
          </div>
        </div>
        {this.state.error &&
          <div className='row'>
            <div className='col'>
              <div className='alert alert-danger mb-3' role='alert'>
                {this.state.error}
              </div>
            </div>
          </div>}
        <div className='row'>
          <div className='col'>
            <RegisterForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

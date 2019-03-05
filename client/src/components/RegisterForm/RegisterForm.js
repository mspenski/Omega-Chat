import React, { Component } from 'react';

class RegisterForm extends Component {
  state = {
    email: '',
    password: '',
    fullName: '',
    phone: '',
    position: ''
  };

  handleInputChange = event => {
    let { name, value } = event.target;
    if (event.target.name === 'phone') {
      if (event.target.value.length < 13) {
        if (event.target.value.length === 3 || event.target.value.length === 7) {
          value += '-'
        }
        this.setState({
          [name]: value
        });
      }
    } else {
      this.setState({
        [name]: value
      });
    }


  }

  handleSubmit = event => {
    const { email, password, fullName, phone, position } = this.state;


    this.props.onSubmit(email, password, fullName, phone, position);
    event.preventDefault();
  }

  render() {
    const { email, password, fullName, phone, position } = this.state;

    return (
      <div className='RegisterForm'>
        <div className='card'>
          <div className='card-body'>
            <form className='LoginForm' onSubmit={this.handleSubmit}>
              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text">Email</span>
                </div>
                <input
                  className='form-control'
                  id='email'
                  type='email'
                  name='email'
                  placeholder='email@provider.com'
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text">PW</span>
                </div>
                <input
                  className='form-control'
                  id='password'
                  type='password'
                  name='password'
                  placeholder='password'
                  value={password}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text">Name</span>
                </div>
                <input
                  className='form-control'
                  id='fullName'
                  type='text'
                  name='fullName'
                  placeholder='Full Name'
                  value={fullName}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text">#</span>
                </div>
                <input
                  className='form-control'
                  id='phone'
                  type='text'
                  name='phone'
                  placeholder='ex. XXX-XXX-XXXX'
                  value={phone}
                  onKeyUp={this.onKeyUp}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text">Position</span>
                </div>
                <input
                  className='form-control'
                  id='position'
                  type='text'
                  name='position'
                  placeholder='Position (if applicable)'
                  value={position}
                  onChange={this.handleInputChange}
                />
              </div>



              <button className='btn btn-primary' type='submit'>Register</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterForm;


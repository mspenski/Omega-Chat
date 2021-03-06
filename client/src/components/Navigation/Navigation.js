import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';

import './Navigation.css';

class Navigation extends Component {
  static contextType = AuthContext;

  state = {
    collapsed: true
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { user } = this.context;
    const { collapsed } = this.state;
    const targetClass = `collapse navbar-collapse ${!collapsed && 'show'}`;
    const togglerClass = `navbar-toggler ${collapsed && 'collapsed'}`;

    return (
      <div className='Navigation'>
        <nav className='navbar navbar-expand-lg navbar-light mb-3'>
          <Link className='navbar-brand logo' to='#'>Ωmega Chat</Link>
          <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className={targetClass} id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/' onClick={this.toggleCollapse}><i className="fas fa-home"></i> Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/roster' onClick={this.toggleCollapse}>Roster</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/calendar' onClick={this.toggleCollapse}>Calendar</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/messageboard' onClick={this.toggleCollapse}>Message Board</Link>
              </li>
              {/* {user &&
                <li className='nav-item'>
                  <Link className='nav-link' to='/secret' onClick={this.toggleCollapse}>Secret</Link>
                </li>} */}
            </ul>
            <ul className='navbar-nav'>
              {user
                ? <AuthDropdown onClick={this.toggleCollapse} />
                : <>
                  <li className='nav-item'><Link className='nav-link' to='/login' onClick={this.toggleCollapse}>Login</Link></li>
                  <li className='nav-item'><Link className='nav-link' to='/register' onClick={this.toggleCollapse}>Register</Link></li>
                </>}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;

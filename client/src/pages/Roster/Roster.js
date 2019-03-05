import React, { Component } from 'react';
import API from '../../lib/API.js'
import './Roster.css';

class Roster extends Component {

  state = {
    users: []
  }

  componentDidMount = () => {
    this.getUsers();
  }

  getUsers = () => {
    API.Users.getRoster()
      .then(res => this.setState({ users: res.data }))

  }

  render() {
    console.log(this.state)
    return (
      <div className="container">
        <br></br>

        <div className="container">
          <div className='navbar-brand logo' to='#'>The Brotherhood</div>
          <br></br>
          <br></br>
          <br></br>

          <div className="container">
            <table className="table table-bordered table-hover" id="roster">
              <thead>
                <tr>
                  <th scope="col" id="roster-name">Name</th>
                  <th scope="col" id="roster-position">Position</th>
                  <th scope="col" id="roster-phone">Phone</th>
                  <th scope="col" id="roster-email">Email</th>
                </tr>
              </thead>
              <tbody>
                {/* db results go here */}
                {this.state.users.map(user => (
                  <tr key={user.email}>
                    <td>{user.fullName}</td>
                    <td>{user.position}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>


    );
  }
}

export default Roster;




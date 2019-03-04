import React, { Component } from 'react';
import API from '../../lib/API.js'
import './Roster.css';
<<<<<<< HEAD
 
=======
// // import Particles from 'react-particles-js';

// class App extends Component{

//     render(){
//         return (
//             <Particles 
//                 params={{
//                     polygon: {
//                         enable: true,
//                         type: 'inside',
//                         move: {
//                             radius: 10
//                         },
//                         url: 'path/to/svg.svg'
//                     }
//                 }} />
//         );
//     };

// }


>>>>>>> 8f3e6c3120f643c51e709af29801bd1c5a6e74c7


class Roster extends Component {

  state = {
    users: []
  }

  componentDidMount = () => {
    this.getUsers();
  }

<<<<<<< HEAD
       <div className="row">
          <div className="col-sm-2">
            <div className="card">
            <br></br>
              <p class="aligncenter">
                <img src={mitchell} height="100px" width="100px" alt="Treasurer" />
              </p>
              <div className="container">
                <h6>Mitchell Spenski</h6>
                <p className="title">Treasurer</p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card">
            <br></br>
            <p class="aligncenter">
                <img src={mitchell} height="100px" width="100px"  alt="External VP" />
              </p>
              <div className="container">
                <h6>Mitchell Spenski</h6>
                <p className="title">External VP</p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card">
            <br></br>
            <p class="aligncenter">
                <img src={mitchell} height="100px" width="100px" alt="President" />
              </p>
              <div className="container">
                <h6>Mitchell Spenski</h6>
                <p className="title">President</p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card">
            <br></br>
            <p class="aligncenter">
                <img src={mitchell} height="100px" width="100px" alt="Internal VP" />
              </p>
              <div className="container">
                <h6>Mitchell Spenski</h6>
                <p className="title">Internal VP</p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card">
            <br></br>
            <p class="aligncenter">
                <img src={mitchell} height="100px" width="100px" alt="Secretary" />
              </p>
              <div className="container">
                <h6>Mitchell Spenski</h6>
                <p className="title">Secretary</p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card">
            <br></br>
            <p class="aligncenter">
                <img src={mitchell} height="100px" width="100px" alt="Rush Chair" />
              </p>
              <div className="container">
                <h6>Mitchell Spenski</h6>
                <p className="title">Rush Chair</p>
              </div>
            </div>
          </div>
        </div>
        
=======
  getUsers = () => {
    API.Users.getRoster()
      .then(res => this.setState({ users: res.data }))
>>>>>>> 8f3e6c3120f643c51e709af29801bd1c5a6e74c7

  }

  render() {
    console.log(this.state)
    return (
      <div className="container">
        <br></br>

<<<<<<< HEAD
        <div className="flexbox">
        <div className='navbar-brand logo' to='#'>The Brotherhood</div>
        <br></br>
        <br></br>
        <br></br>
=======
        <div className="container">
          <div className='navbar-brand logo' to='#'>The Brotherhood</div>
          <br></br>
          <br></br>
          <br></br>
>>>>>>> 8f3e6c3120f643c51e709af29801bd1c5a6e74c7

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

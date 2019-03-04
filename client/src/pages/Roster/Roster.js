import React, { Component } from 'react';
import mitchell from './images/mitchell.png';
import Leadership from './images/LeadershipTeam.png';
import Brotherhood from './images/TheBrotherhood.png';
import './Roster.css';
import Particles from 'react-particles-js';
 
class App extends Component{
  
    render(){
        return (
            <Particles 
                params={{
                    polygon: {
                        enable: true,
                        type: 'inside',
                        move: {
                            radius: 10
                        },
                        url: 'path/to/svg.svg'
                    }
                }} />
        );
    };
 
}


class Roster extends Component {
  

  render() {
    return (

      <div className="container">
        <br></br>
        <div className='navbar-brand logo' to='#'>Leadership Team</div>
        <br></br>
        <br></br>
        <img src={Leadership} height="50px" width="650px" alt="Leadership" />
        <br></br>
        <br></br>
        <br></br>

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


        <br></br>
        <br></br>

        <div className="container">
        <div className='navbar-brand logo' to='#'>The Brotherhood</div>
        <br></br>
        <br></br>
        <img src={Brotherhood} height="50px" width="650px" alt="Brotherhood" />
        <br></br>
        <br></br>
        <br></br>

        <div class="container">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Steve Shannon</th>
                <td>Freshman</td>
                <td>919-265-9477</td>
                <td>sshann30@gmail.com</td>
              </tr>
              <tr>
                <th scope="row">Brandon Wiggins</th>
                <td>Sophmore</td>
                <td>847-524-2107</td>
                <td>bradnon@yahoo.com</td>
              </tr>
              <tr>
                <th scope="row">Bill Walsh</th>
                <td>Junior</td>
                <td>803-867-5309</td>
                <td>Bill@me.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      </div>


    );
  }
}

export default Roster;

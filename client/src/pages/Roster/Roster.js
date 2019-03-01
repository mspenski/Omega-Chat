import React, { Component } from 'react';
import mitchell from './images/mitchell.png';


class Roster extends Component {


  render() {
    return (
      
      <div className="container">
      <h3>Leadership Team</h3>
        <div className="row">
          <div className="col-sm-2">
            <div className="card">
              <img src= {mitchell} height = "100px" width = "100px" alt="Treasurer" />
              <div className="container">
                <h6>Mitchell Spenski</h6>
                <p className="title">Treasurer</p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card">
            <img src= {mitchell} height = "100px" width = "100px" alt="External VP" />
              <div className="container">
                <h6>Mitchell Spenski</h6>
                <p className="title">External VP</p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card">
            <img src= {mitchell} height = "100px" width = "100px" alt="President" />
              <div className="container">
                <h6>Mitchell Spenski</h6>
                <p className="title">President</p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card">
            <img src= {mitchell} height = "100px" width = "100px" alt="Internal VP" />
              <div className="container">
                <h6>Mitchell Spenski</h6>
                <p className="title">Internal VP</p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card">
            <img src= {mitchell} height = "100px" width = "100px" alt="Secretary" />
              <div className="container">
                <h6>Mitchell Spenski</h6>
                <p className="title">Secretary</p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card">
            <img src= {mitchell} height = "100px" width = "100px" alt="Rush Chair" />
              <div className="container">
                <h6>Mitchell Spenski</h6>
                <p className="title">Rush Chair</p>
              </div>
            </div>
          </div>
        </div>


<br></br>
<br></br>

<h3>The Brotherhood</h3>
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
  

    );
  }
}

export default Roster;

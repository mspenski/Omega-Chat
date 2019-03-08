import React, { Component } from 'react';
import "../Home/Home.css";
import Mitch from "../Home/mitch.jpeg";
import Steve from "../Home/steve.jpeg";
import Brandon from "../Home/brandon.jpeg"


class HomePage extends Component {
  render() {
    return (
      <>
        <div className='Home'>
          <div className="container homeCont">
            <h1 className="mainTitle">Ωmega Chat</h1>
            <h2 className="about">Omega Chat is your one-stop shop for members of your organization to go to get all of the information that they need, whenever they need it!
</h2>
            <hr></hr>
            <h1 className="team">Meet the Team</h1>
            <div className="row">
              <div className="col md-3">
                <h4>Mitchell Spenski</h4>
                <img className="usPic" src={Mitch} alt="Mitch" />
                <div className="ourLinks">
                  <a className="daLink" href="https://github.com/mspenski">
                    <i className="fab fa-github"></i></a>
                  <a className="daLink" href="https://www.linkedin.com/in/mitchellspenski">
                    <i className="fab fa-linkedin"></i></a>
                </div>
              </div>

              <div className="col md-3">
                <h4>Steve Shannon</h4>
                <img className="usPic" src={Steve} alt="Steve" />
                <div className="ourLinks">
                  <a className="daLink" href="https://github.com/sshann30">
                    <i className="fab fa-github"></i></a>
                  <a className="daLink" href="https://www.linkedin.com/in/steven-shannon-03aa8b59/">
                    <i className="fab fa-linkedin"></i></a>
                </div>
              </div>

              <div className="col md-3">
                <h4>Brandon Wiggins</h4>
                <img className="usPic" src={Brandon} alt="Brandon" />
                <div className="ourLinks">
                  <a className="daLink" href="https://github.com/Ouiggi">
                    <i className="fab fa-github"></i></a>
                  <a className="daLink" href="https://www.linkedin.com/in/brandon-wiggins-3423a686/">
                    <i className="fab fa-linkedin"></i></a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </>
    );
  }
}

export default HomePage;

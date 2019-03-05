import React, { Component } from 'react';
import "../Home/Home.css"

// import logo from './logo.svg';

class HomePage extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
            <div id="carousel-example" className="carousel slide" data-ride="carousel">
              {/* Indicators */}
              <div className="carousel-wrapper">
              <br></br>
            <div className='navbar-brand logo' to='#'>Welcome to Ωmega Chat</div>
            <br></br>
            <div className='navbar-brand logo' to='#'>Our Fraternity networking app</div>
            <br></br>
            <br></br>
            <div className='navbar-brand logo' to='#'>Connected Brothership</div>
                
              </div>
              {/* Wrapper for slides */}
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="img-wrapper">
                        <img src="http://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/Q-Z/siberian-tiger-profile.jpg" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="carousel-caption">
                        <h2>Roster</h2>
                        <p>See who is part of your greek life.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="img-wrapper">
                        <img src="http://www.govisitcostarica.com/images/photos/full-hot-air-balloons-near-arenal.jpg" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="carousel-caption">
                        <h2>Calendar</h2>
                        <p>Be able to schedule yourself and plan ahead as a group</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="img-wrapper">
                        <img src="http://www.earthrandom.com/wp-content/uploads/2013/01/Virginia1.jpg" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="carousel-caption">
                        <h2>Message Board</h2>
                        <p>The online group chat</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        </div>






        );
      }
    }
    
    export default HomePage;

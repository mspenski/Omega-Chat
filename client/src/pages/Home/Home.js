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
                        <img src="https://www.plitvice-etnogarden.com/wp-content/uploads/2018/02/Etno-Garden-Plitvice-Lakes-Team-Building-ruke.jpg" />
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
                        <img src="https://blog.hootsuite.com/wp-content/uploads/2017/06/social-media-content-calendar-940x470.jpg" />
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
                        <img src="https://www.containerstore.com/catalogimages/333548/10073204-felt-message-board.jpg?width=1200&height=1200&align=center" />
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

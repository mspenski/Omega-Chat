import React, { Component } from 'react';
import API from '../../lib/API.js'
import './MessageBoard.css'



class MessageBoard extends Component {
  state = {
    posts: []
  }

  handleInputChange = event => {
    const { title, text } = event.target;

    // this.setState({
    //   [posts]: value
    // })
  }

  componentDidMount = () => {
    this.getPosts();
  }

  getPosts = () => {
    API.Posts.getPosts()
      .then(res => this.setState({ posts: res.data }))

  }

  handleSubmit = () => {

  }

  render() {
    return (

      <div className="message">
        <br></br>
        <div className='navbar-brand logo' to='#'>Message Board</div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 mt-5">
              <form className="card" onSubmit={this.handleSubmit}>
                <div className="card-body">
                  <div className='navbar-brand logo' to='#'>Add a new post</div>
                  <div className="form-group">
                    {/* Title input */}
                    <input
                      type="text"
                      id="post-title"
                      className="form-control"
                      placeholder="Title"
                    ></input>

                  </div>
                  {/* post text input */}
                  <div className="form-group">
                    <textarea className="form-control"
                      id="exampleFormControlTextarea1 post-text"
                      rows="3"
                      placeholder="Post"
                    ></textarea>


                  </div>
                  <button type="submit" id="post-button" className="btn btn-primary add-post">Post</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>



    );
  }
}

export default MessageBoard;
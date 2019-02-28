import React, { Component } from 'react';

class MessageBoard extends Component {


  render() {
    return (
     <> 
      <h1>Message Board</h1>

      <div className="container">
    <div className="row">
      <div className="col-lg-4 mt-5">

        <form className="card beer-form">
          <div className="card-body">
            <h2>Add a new post</h2>
            <div className="form-group">
              <input type="text" id="post-text" className="form-control" placeholder="Post Text"></input>
            </div>
            <div className="form-group">
              <input type="text" id="post-user" className="form-control" placeholder="Your Name"></input>
            </div>
            <button type="button" id="post-button" className="btn btn-primary btn-block add-post">Post</button>
          </div>
        </form>

      </div>
      <div className="col-lg-8 mt-5">

        <div className="page-header">
          <h1>Message Board</h1>
        </div>
        <div className="posts">
        </div>

      </div>
    </div>
  </div>
</>



    );
  }
}

export default MessageBoard;
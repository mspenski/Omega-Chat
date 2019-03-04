import React, { Component } from 'react';
import './MessageBoard.css'
class MessageBoard extends Component {


  render() {
    return (
      <>
        <div className="message">
          <br></br>
          <div className='navbar-brand logo' to='#'>Message Board</div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12 mt-5">
                <form className="card">
                  <div className="card-body">
                    <div className='navbar-brand logo' to='#'>Add a new post</div>
                    <div className="form-group">
                      <input type="text" id="post-text" className="form-control" placeholder="Title"></input>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Post"></textarea>
                    </div>
                    <button type="button" id="post-button" className="btn btn-primary add-post">Post</button>
                  </div>
                </form>

              </div>
              <div className="col-lg-12 mt-5">

                <div className="page-header">
                  <div className='navbar-brand logo' to='#'>Recent Posts</div>
                </div>
                <div className="posts">
                  <form className="card beer-form">
                    <div className="card-body">
                      <div className="form-group">
                        <p>This is a story all about how my life got twisted upside down, And I'd like to take a minute just sit right there, I'll tell you how I became the prince of a town called Bel-Air</p>
                      </div>
                      <button type="button" id="reply-button" className="btn btn-primary reply mb-2">Reply</button>
                      <button type="button" id="show-button" className="btn btn-primary show mb-2">Show Thread</button>
                      <button type="button" id="like-button" className="btn btn-success like mb-2"><i className="far fa-thumbs-up"></i> Like</button>
                      <button type="button" id="dislike-button" className="btn btn-danger dislike mb-2"><i className="far fa-thumbs-down"></i> Dislike</button>
                    </div>
                  </form>
                </div>
                <br />
              </div>
            </div>
<<<<<<< HEAD
            <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Post"></textarea>
  </div>
            <button type="button" id="post-button" className="btn norm add-post">Post</button>
          </div>
        </form>

      </div>
      <div className="col-lg-12 mt-5">

        <div className="page-header">
          <h1>Recent Posts</h1>
        </div>
        <div className="posts">
        <form className="card beer-form">
          <div className="card-body">
            <div className="form-group">
            <p>This is a story all about how my life got twisted upside down, And I'd like to take a minute just sit right there, I'll tell you how I became the prince of a town called Bel-Air</p>
            </div>
            <button type="button" id="reply-button" className="btn norm reply mb-2">Reply</button>
            <button type="button" id="show-button" className="btn norm show mb-2">Show Thread</button>
            <button type="button" id="like-button" className="btn like mb-2"><i className="far fa-thumbs-up"></i> Like</button>
            <button type="button" id="dislike-button" className="btn dislike mb-2"><i class="far fa-thumbs-down"></i> Dislike</button>
          </div>
        </form>
=======
          </div>
>>>>>>> 8f3e6c3120f643c51e709af29801bd1c5a6e74c7
        </div>
      </>



    );
  }
}

export default MessageBoard;
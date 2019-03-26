import React, { Component } from 'react';
import API from '../../lib/API.js';
import moment from 'moment';
import './MessageBoard.css';

import AuthContext from '../../contexts/AuthContext'
// change to commit
class MessageBoard extends Component {
  static contextType = AuthContext;

  state = {
    title: '',
    post: '',
    posts: [],
    reply: ''
  }
  componentDidMount = () => {
    this.getPosts();
  };
  getPosts = () => {
    API.Posts.getPosts(this.context.authToken)
      .then(res => this.setState({ posts: res.data, title: "", post: "" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };




  handleSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.post) {
      API.Posts.sendPosts({
        title: this.state.title,
        post: this.state.post
      })
        .then(res => this.getPosts())
        .catch(err => console.log(err));
    }
  }

  handleReply = (event, id) => {
    event.preventDefault();
    API.Replies.sendReply(this.state.post, id)
  }

  render() {
    const { title, post,
      // reply
    } = this.state
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

                      <input
                        type="text"
                        id="post-title-input"
                        name="title"
                        value={title}
                        onChange={this.handleInputChange}
                        className="form-control"
                        placeholder="Title"
                      />

                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1 post-text-input"
                        rows="3"
                        placeholder="Post"
                        name="post"
                        value={post}
                        onChange={this.handleInputChange}
                      />

                    </div>
                    <button onClick={this.handleSubmit} id="post-button" className="btn add-post norm">Post</button>
                  </div>
                </form>

              </div>
              <div className="col-lg-12 mt-5">

                <div className="page-header">
                  <div className='navbar-brand logo' to='#'>Posts</div>
                </div>
                <div className="posts">
                  <form className="card beer-form">
                    <div className="card-body">
                      <div className="form-group post-form">
                        {this.state.posts.map(newPost => (
                          <p key={newPost._id}>

                            <h4
                              className="post-title" key={newPost._id} id='new-post-title'>{newPost.title}
                            </h4>
                            <p className="forum"> {newPost.post}</p>
                            <h5
                              className="timeStamp">Posted: {moment(newPost.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                            </h5>
                            <br />
                            <button onClick={() => this.handleReply(newPost.id)} id="reply-button" className="btn btn-primary reply mb-2">Reply</button>
                            <input
                              type="text"
                              id="post-reply"
                              name="Reply"
                              // value={reply}
                              onChange={this.handleInputChange}
                              className="form-control"
                              placeholder="Type response here"></input>
                            <button type="button" id="show-button" className="btn btn-primary show mb-2">Show Thread</button>
                            <button type="button" id="like-button" className="btn btn-success like mb-2"><i className="far fa-thumbs-up"></i> Like</button>
                            <button type="button" id="dislike-button" className="btn btn-danger dislike mb-2"><i className="far fa-thumbs-down"></i> Dislike</button>
                            {console.log(newPost)}
                            <hr></hr>
                          </p>
                        ))}
                      </div>
                    </div>
                  </form>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </>



    );
  }
}

export default MessageBoard;
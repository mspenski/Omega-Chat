import React, { Component } from "react";
// import BigCalendar from "react-big-calendar";
// import moment from "moment";
import "../Calendar/Calendar.css"
import API from '../../lib/API'
// import "react-big-calendar/lib/css/react-big-calendar.css";
import AuthContext from '../../contexts/AuthContext'
// import { calendarFormat } from "moment";

// const localizer = BigCalendar.momentLocalizer(moment);

// const styles = {
//   Calendar: {
//     height: "100vh"
//   }
// };
class Calendar extends Component {
  static contextType = AuthContext;

  state = {
    title: '',
    post: '',
    posts: [],
    reply: ''
  }
  componentDidMount = () => {
    this.getEvents();
  }

  getEvents = () => {
    API.Events.getEvents(this.context.authToken)
      .then(res => this.setState({ posts: res.data }))
  }

  render() {
    const { title, start, end } = this.state
    return (
      <div className="posts">
        <form className="card beer-form">
          <div className="card-body">
            <div className="form-group">
              {this.state.posts.map(newPost => (
                <p key={newPost.id}>
                  <h4 key={newPost.id} id='new-post-title'>{newPost.title} Posted: {newPost.date}</h4>
                  {newPost.text}<br />
                  {/* <button onClick={() => this.handleReply(newPost.id)} id="reply-button" className="btn btn-primary reply mb-2">Reply</button>
                <input
                  type="text"
                  id="post-reply"
                  name="Reply"
                  value={reply}
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="Type response here"></input> */}
                  {/* <button type="button" id="show-button" className="btn btn-primary show mb-2">Show Thread</button>
                <button type="button" id="like-button" className="btn btn-success like mb-2"><i className="far fa-thumbs-up"></i> Like</button>
                <button type="button" id="dislike-button" className="btn btn-danger dislike mb-2"><i className="far fa-thumbs-down"></i> Dislike</button> */}
                </p>
              ))}
            </div>
          </div>
        </form>
      </div>
      // const Calendar = props => (
      //   <div style={styles.Calendar} id="calendarDiv">
      //     <BigCalendar
      //       localizer={localizer}
      //       events={[]}
      //       startAccessor="start"
      //       endAccessor="end"
      //     />
      //   </div>

    )
  }
}

export default Calendar;

// create events in db and then see if get request populates calendar, once that is working move on to creating form to add events and post locally and test if they can post 
import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "../Calendar/Calendar.css"
import API from '../../lib/API'
import "react-big-calendar/lib/css/react-big-calendar.css";
import AuthContext from '../../contexts/AuthContext';
import axios from 'axios';
// import { calendarFormat } from "moment";

const localizer = BigCalendar.momentLocalizer(moment);

const styles = {
  Calendar: {
    height: "100vh"
  }
};

// class Create extends Component {
//   static contextType = AuthContext;

// //   state = {
//         isHidden: true
// //   }



//   toggleHidden() {
//     this.setState({
//       isHidden: !this.state.isHidden
//     })
//   }



//   render() {
//     return (
//       <>
//         <div {...this.setState({ isHidden: true })}>
//           <button onClick={this.toggleHidden()}>Create Event</button>
//         </div>

//       </>

//     )
//   };

class Calendar extends Component {
  static contextType = AuthContext;

  state = {
    events: [],
    title: '',
    description: '',
    start: '',
    end: '',
    // isHidden: true
  }
  componentDidMount() {
    axios.get('/api/events')
      .then(response => response.data)
      .then(events => events.map(event => {
        event.start = moment(event.start).toDate()
        event.end = moment(event.end).toDate()
        return event;
      }))
      .then(events => this.setState({ events }))
      .catch(err => this.setState({ error: err.message }))
  }

  getEvents = () => {
    API.Events.getEvents(this.context.authToken)
      .then(res => this.setState({ events: res.data }))
  }
  // sendEvents = () => {
  //   API.Events.sendEvents(this.context.authToken)
  //     .then(res => this.setState({ events: res.data }))
  // }

  handleInputChange = event => {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    API.Events.sendEvents(this.state.title, this.state.description, this.state.start, this.state.end)
      .then(res => console.log(res));
  }
  // function to show/hide create form
  // toggleHidden()





  render() {
    const { title, description, start, end } = this.state
    return (
      <>

        <div className="createEventForm">
          <form>
          <div className='navbar-brand logo' to='#'>Create Event</div>
          
            <input
              type="text"
              className="eventTitle"
              name="title"
              placeholder="Title"
              value={title}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              className="eventDescription"
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.handleInputChange}
            />
            <br></br>

            <div className='navbar-brand logo' to='#'>   Start Date</div>
            <input
              type="text"
              className="eventStart"
              name="start"
              placeholder="(YYYY-MM-DD)"
              value={start}
              onChange={this.handleInputChange}
            />
            <br></br>
             <div className='navbar-brand logo' to='#'>Start Time</div>
            <input
              type="text"
              className="eventStart"
              name="start"
              placeholder="00:00"
              value={start}
              onChange={this.handleInputChange}
            />
            <br></br>
            <div className='navbar-brand logo' to='#'>    End Date</div>
            <input
              type="text"
              className="eventEnd"
              name="end"
              placeholder="(YYYY-MM-DD)"
              value={end}
              onChange={this.handleInputChange}
            />
            <div className="like" onClick={this.handleSubmit}>Add Event</div>
          </form>
        </div>

      
        <br></br>

        <div style={styles.Calendar} id="calendarDiv" >
          <BigCalendar
            localizer={localizer}
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
          />
        </div>

      </>


    )
  }
}


export default Calendar;

// create events in db and then see if get request populates calendar, once that is working move on to creating form to add events and post locally and test if they can post 
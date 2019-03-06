import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "../Calendar/Calendar.css"
import API from '../../lib/API'
import "react-big-calendar/lib/css/react-big-calendar.css";
import AuthContext from '../../contexts/AuthContext'
// import { calendarFormat } from "moment";

const localizer = BigCalendar.momentLocalizer(moment);

const styles = {
  Calendar: {
    height: "100vh"
  }
};
class Calendar extends Component {
  static contextType = AuthContext;

  state = {
    events: []
  }
  componentDidMount = () => {
    this.getEvents();
  }

  getEvents = () => {
    API.Events.getEvents(this.context.authToken)
      .then(res => this.setState({ events: res.data }))
  }

  render() {
    return (
      <div style={styles.Calendar} id="calendarDiv">
        <BigCalendar
          localizer={localizer}
          events={this.state.events}
          startAccessor="start"
          endAccessor="end"
        />
      </div>

    )
  }
}


export default Calendar;

// create events in db and then see if get request populates calendar, once that is working move on to creating form to add events and post locally and test if they can post 
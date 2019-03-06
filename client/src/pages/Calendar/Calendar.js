import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "../Calendar/Calendar.css"
import API from '../../lib/API'
import "react-big-calendar/lib/css/react-big-calendar.css";
// import { calendarFormat } from "moment";

const localizer = BigCalendar.momentLocalizer(moment);

const styles = {
  Calendar: {
    height: "100vh"
  }
};

const Calendar = props => (
  <div style={styles.Calendar} id="calendarDiv">
    <BigCalendar
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
    />
  </div>


);

export default Calendar;

// create events in db and then see if get request populates calendar, once that is working move on to creating form to add events and post locally and test if they can post 
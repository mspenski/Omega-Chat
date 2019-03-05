import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "../Calendar/Calendar.css"

import "react-big-calendar/lib/css/react-big-calendar.css";

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


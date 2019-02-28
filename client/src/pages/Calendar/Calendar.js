import React, { Component } from 'react';


import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('en-GB');
BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  render() {
    return (
      // const App = () => (
      <div style={{ height: 700 }}>
        <BigCalendar
          events={[
            {
              'title': 'My event',
              'allDay': false,
              'start': new Date(2018, 0, 1, 10, 0), // 10.00 AM
              'end': new Date(2018, 0, 1, 14, 0), // 2.00 PM 
            }
          ]}
          step={60}
          view='week'
          views={['week']}
          min={new Date(2008, 0, 1, 8, 0)} // 8.00 AM
          max={new Date(2008, 0, 1, 17, 0)} // Max will be 6.00 PM!
          date={new Date(2018, 0, 1)}
        />
      </div>
    )
  }
};
//   render() {
//     return (
//       <h1>Calendar</h1>
//     );
//   }
// }

export default Calendar;
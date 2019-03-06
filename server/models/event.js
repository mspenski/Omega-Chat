const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventsSchema = new Schema({
  // Event {
  //   title: string,
  //   start: Date,
  //   end: Date,
  //   allDay?: boolean
  //   resource?: any,
  // }
})

let Events = mongoose.model('Events', EventsSchema)

module.exports = Events
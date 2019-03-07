const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventsSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  start: {
    type: Date
  },
  end: {
    type: Date
  }

  // allDay: Boolean,
  // // resource?: any,

})

let Events = mongoose.model('Events', EventsSchema)

module.exports = Events
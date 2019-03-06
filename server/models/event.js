const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventsSchema = new Schema({
  // fullName: {
  //   type: String,
  //   required: "name is required",
  // },
  // text: {
  //   type: String,
  //   required: "message text is required"
  // },
  // date: {
  //   type: Date,
  //   default: Date.now
  // }
})

let Events = mongoose.model('Events', EventsSchema)

module.exports = Events
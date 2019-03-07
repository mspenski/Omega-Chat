const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RepliesSchema = new Schema({
  fullName: {
    type: String,
    required: "name is required",
  },
  text: {
    type: String,
    required: "message text is required"
  },
  date: {
    type: Date,
    default: Date.now
  }
})
const PostSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: 'Title is required'
  },
  post: {
    type: String,
    trim: true,
    required: "Post text is required"
  },
  date: {
    type: Date,
    default: Date.now
  },
  replies: [RepliesSchema]
});

let Post = mongoose.model('Post', PostSchema)

module.exports = Post

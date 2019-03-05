const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  }
});

let Post = mongoose.model('Post', PostSchema)

module.exports = Post

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  description: {
    type: String,
    required: true
  },
  expiry: {
    type: String,
    required: true
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  }
})

module.exports = Post = mongoose.model('post', postSchema)
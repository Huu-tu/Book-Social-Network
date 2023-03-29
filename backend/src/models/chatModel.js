const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema(
  {
    content: {
      text: { type: String, required: true },
    },
    users: Array,
    sender: {
      type: String,
    },
    // sender:{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Account',
    // } 
  },
  {
    collection: 'chats',
  },
  {
    timestamp: true,
  },
);

module.exports = mongoose.model('Chat', ChatSchema);

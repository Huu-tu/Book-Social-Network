const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotifySchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    recipient: {
      // type: mongoose.Schema.Types.ObjectId,
      type: String,
      required: false,
    },
    senders: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Account',
    },
  },
  {
    timestamps: true,
    collection: 'notifies',
  },
);

module.exports = mongoose.model('Notify', NotifySchema);

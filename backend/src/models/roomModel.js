const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = Schema(
  {
    roomName: {
      name: String,
      avatarUrl: String,
      messages: [{ type: Schema.Types.ObjectId, ref: 'chats' }],
    },
  },
  {
    collection: 'rooms',
  },
  {
    timestamp: true,
  },
);

module.exports = mongoose.model('Room', RoomSchema);

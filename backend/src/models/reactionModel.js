const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReactionSchema = new Schema(
  {
    like: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
      },
    ],
    dislike: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
      },
    ],
    voteScore: {
      type: Number,
    },
  },
  {
    collection: 'reactions',
  },
  {
    timestamp: true,
  },
);
module.exports = mongoose.model('Reaction', ReactionSchema);
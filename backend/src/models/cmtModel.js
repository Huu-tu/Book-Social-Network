const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CmtSchema  = new Schema({
    content: {
        type: String,
        required: true, 
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
      },
    book:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    }
},
    {
    collection: 'comments',
  },
)

module.exports = mongoose.model('Comment', CmtSchema)


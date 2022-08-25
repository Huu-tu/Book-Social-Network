const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    bookTitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    language:{
      type: String,
      required: true,
    },
    image: {
      type: String,
      data: Buffer,
    },
    bookCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BookCategory',
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
      },
    ],
    rating: {
      type: Number,
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
    updateAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'books',
  },
  {
    timestamp: true,
  },
);


module.exports = mongoose.model('Book', BookSchema);
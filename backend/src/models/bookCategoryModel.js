const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookCategorySchema = new Schema(
  {
    name: {
        type: String,
        required: true,  
    },
    description: {
        type: String,
        required: true,
    },
    
  },
  {
    collection: 'bookCategories',
  },
);
module.exports = mongoose.model('BookCategory', BookCategorySchema);
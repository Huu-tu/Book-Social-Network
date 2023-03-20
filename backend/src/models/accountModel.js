const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const mongoose_delete = require('mongoose-delete');

const AccountSchema = new Schema(
  {
    username: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    fullName: {
      type: String,
      required: false,
    },
    phone: {
      type: Number,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
      data: Buffer,
    },
    friends: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'accounts',
      },
    ],
    following: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'accounts',
      },
    ],
    saved: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'posts',
      },
    ],
    hide: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'posts',
      },
    ],
    reports: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'posts',
      },
    ],
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
    collection: 'accounts',
    timestamp: true,
  },
);

AccountSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// mongoose.plugin(slug);
AccountSchema.plugin(mongoose_delete, {
  deleteAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Account', AccountSchema);

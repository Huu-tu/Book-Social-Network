const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const path = require('path');
const mongoose = require('mongoose');
const Pusher = require('pusher');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 4000;
const route = require('./routes');
const connectDb = require('./config/index');

connectDb.connect();
route(app);

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  }),
);

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use(cookieParser());
app.use('/img', express.static(path.join(__dirname, 'publics/img')));

const pusher = new Pusher({
  appId: process.env.PUSHER_APPID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true,
});

const db = mongoose.connection;

db.once('open', () => {
  const msgCollection = db.collection('chats');
  const msgChangeStream = msgCollection.watch();

  msgChangeStream.on('change', (change) => {
    if (change.operationType === 'insert') {
      const messageDetails = change.fullDocument;
      pusher.trigger('messages', 'insert', {
        content: messageDetails.content,
        users: messageDetails.users,
        sender: messageDetails.sender,
      });
    } else {
      console.log('Error Trigger Pusher');
    }
  });

  const notifyCollection = db.collection('notifies');
  const notifychangeStream = notifyCollection.watch();

  notifychangeStream.on('change', (change) => {
    if (change.operationType === 'insert') {
      const notifyDetails = change.fullDocument;
      pusher.trigger('messages', 'insert', {
        content: notifyDetails.content,
        isRead: notifyDetails.isRead,
        text: notifyDetails.text,
        url: notifyDetails.url,
        recipient: notifyDetails.recipient,
        sender: notifyDetails.sender,
      });
    } else {
      console.log('Error Trigger Pusher');
    }
  });
});

const server = app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

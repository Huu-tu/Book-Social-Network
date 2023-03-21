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

const pusher = new Pusher({
  appId: process.env.PUSHER_APPID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  // useTLS: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error:'));

db.once('open', () => {
  const msgCollection = db.collection('chats');
  const msgChangeStream = msgCollection.watch();

  msgChangeStream.on('change', async (change) => {
    try {
      if (change.operationType === 'insert') {
        const messageDetails = change.fullDocument;
        await pusher.trigger('messages', 'insert', {
          chat: messageDetails.content.text,
          // users: messageDetails.users,
          // sender: messageDetails.sender,
        });
      } else {
        console.log('Error Trigger Pusher');
      }
    } catch {
      (err) => {
        console.log('Error Trigger Pusher');
      };
    }
  });

  const notifyCollection = db.collection('notifies');
  const notifyChangeStream = notifyCollection.watch();

  notifyChangeStream.on('change', async (change) => {
    try {
      if (change.operationType === 'insert') {
        const notifyDetails = change.fullDocument;
        await pusher.trigger('notify', 'insert', {
          content: notifyDetails.content,
          text: notifyDetails.text,
          url: notifyDetails.url,
          recipient: notifyDetails.recipient,
          senders: notifyDetails.senders,
        });
      } else {
        console.log('Error Trigger Pusher');
      }
    } catch {
      (err) => {
        console.log('Error Trigger Pusher');
      };
    }
  });
});

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  }),
);

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cookieParser());
app.use('/img', express.static(path.join(__dirname, 'publics/img')));

connectDb.connect();
route(app);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

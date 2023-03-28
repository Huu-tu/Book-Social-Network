const site = require('./siteRoute');
const account = require('./accountRoute');
const post = require('./postRoute');
const event = require('./eventRoute');
const cmt = require('./cmtRoute');
const chat = require('./chatRoute');
const notify = require('./notifyRoute');

function route(app) {
  app.use('/notify', notify);
  app.use('/chat', chat);
  app.use('/cmt', cmt);
  app.use('/post', post);
  app.use('/event', event);
  app.use('/auth', account);
  app.use('/', site);
}

module.exports = route;

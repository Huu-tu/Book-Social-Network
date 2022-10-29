const site = require('./siteRoute');
const account = require('./accountRoute');
const post = require('./postRoute');
const cmt = require('./cmtRoute');
const chat = require('./chatRoute');
const notify = require('./notifyRoute');

function route(app){
    app.use('/notify', notify)
    app.use('/chat', chat)
    app.use('/cmt', cmt);
    app.use('/post', post);
    app.use('/auth', account);
    app.use('/', site);
}

module.exports = route;
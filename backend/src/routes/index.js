const site = require('./siteRoute');
const account = require('./accountRoute');
const book = require('./bookRoute');
const cmt = require('./cmtRoute');
const chat = require('./chatRoute');

function route(app){
    app.use('/chat', chat)
    app.use('/cmt', cmt);
    app.use('/book', book);
    app.use('/auth', account);
    app.use('/', site);
}

module.exports = route;
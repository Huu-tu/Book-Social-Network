const Account = require('../models/accountModel');
const jwt = require('jsonwebtoken');

class verifySignUp {
  checkPermission(req, res, next) {
    const role = req.user.role;
    if (role === 'admin' || role === 'user') {
      next();
    } else {
      console.log('Not Permission');
    }
  }
}

module.exports = new verifySignUp();

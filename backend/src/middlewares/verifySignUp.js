const Account = require('../models/accountModel');
const jwt = require('jsonwebtoken');

class verifySignUp {
  checkPermission(req,res,next){
    // const Authorization = req.headers.authorization;
    // const token = Authorization.split(" ")[1];
    //
    // console.log(token)
    const role = req.user.role
    if (
      role === 'staff' ||
      role === 'admin' ||
      role === 'manager' ||
      role === 'coordinator'
    ) {
      next();
    } else {
      console.log("Not Permission")
    }
  }
}

module.exports = new verifySignUp();
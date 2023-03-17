const Account = require('../models/accountModel');
const jwt = require('jsonwebtoken');
const KEY = process.env.key;

class AuthJwt {
  checkLogin(req, res, next) {
    try {
      const Authorization = req.headers['authorization'];

      // const accessToken = Authorization.split(' ')[1];
      const token = Authorization.substring(17, Authorization.length);
      const accessToken = token.slice(0, -2);

      if (!accessToken) {
        console.log('No token here');
      }
      jwt.verify(`${accessToken}`, KEY, {}, (err, decode) => {
        if (err) {
          console.log('Not Permission ');
        }
        // req.someVariable = decode
        req.user = decode;
        // console.log(decode);
        next();
      });
    } catch (error) {
      console.log('Loi 1');
    }

    // try {
    //   const bearerHeader = req.headers['authorization'];
    //   const bearerToken = bearerHeader.split(' ')[1];
    //   if (!bearerToken) {
    //     res.json('No token here');
    //   } else {
    //     jwt.verify(`${bearerToken}`, KEY, {}, (err, decode) => {
    //       if (err) {
    //         res.json('Not Permission');
    //       }
    //       // req.someVariable = decode
    //       req.user = decode;
    //       next();
    //     });
    //   }
    // } catch (error) {
    //   res.redirect('back');
    // }
  }

  checkCurrentUser(req, res, next) {
    try {
      let token = req.cookies.token;
      let id = jwt.verify(token, KEY);
      Account.findOne({
        _id: id,
      })
        .then((user) => {
          res.locals.data = user;
          next();
        })
        .catch(() => {
          res.locals.data = null;
          next();
        });
    } catch (err) {}
  }
}

module.exports = new AuthJwt();

const Account = require('../models/accountModel');
const jwt = require('jsonwebtoken')
const KEY = process.env.key;

class AuthJwt{
  checkLogin(req,res,next){
    const Authorization = req.headers.authorization;
    // const accessToken = Authorization.split("Bearer ")[1];

    // console.log(accessToken)

    if (Authorization.startsWith("Bearer ")){
      const token = Authorization.substring(17, Authorization.length);
      const accessToken = token.slice(0, -2)

      if (!accessToken){
        console.log("No token here")
      }

      jwt.verify(`${accessToken}`, KEY,{ } , (err, decode) =>{
        if (err){
          console.log("Loi")
          console.log(err)
        }
        req.user = decode
        next();
      })

    } else {
      console.log("Loi")
    }
  }

  checkCurrentUser(req, res, next){
    try{
      let token = req.cookies.token;
      let id = jwt.verify(token, KEY);
      Account.findOne({
        _id: id,
      })
        .then((user) =>{
          res.locals.data = user;
          next();
        })
        .catch(()=>{
          res.locals.data = null;
          next();
        });
    }catch (err){}
  }
}

module.exports = new AuthJwt();
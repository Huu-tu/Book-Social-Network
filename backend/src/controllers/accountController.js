const Account = require('../models/accountModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const KEY = process.env.key;

class accountController{
    //[GET] 
    async index(req,res){
      const data = await Account.find()
      if(data){
        res.json(data)
        console.log(data)
      }else{
        console.log("Failed")
      }
    }

    async login(req,res) {
      let username = req.body.username;
      let password = req.body.password;

      const user = await Account.findOne({
        username: username,
      })

      const isMarch = await bcrypt.compare(password, user.password);

      if(isMarch){
        let token = jwt.sign(
          {
            _id: user._id,
            role: user.role
          },
          KEY,
        );

        res.json({
            // username: user.username,
            // password: user.password,
            // fullName: user.fullName,
            // phone: user.phone,
            // email: user.email,
            // gender: user.gender,
            // role: user.role,
            token: token
          })
      }else{
        return res.json('Thap Bai')
        // console.log('thap bai')
      }
    }

    async loginGG(req,res){
      let username = req.body.username;
      let password = req.body.password;
      let fullName = req.body.fullName;
      let email = req.body.email;
      let role = req.body.role;

      let data = await Account.findOne({username})

      if (data){
        res.json('User Nay da ton tai')
      }else {
        await Account.create({
          username: username,
          password: password,
          fullName: fullName,
          email: email,
          role: role
        })
      }

      // console.log(username,password)
    }

    async register(req,res){
      let username = req.body.username;
      let password = req.body.password;
      let fullName = req.body.fullName;
      let phone = req.body.phone;
      let email = req.body.email;
      let gender = req.body.gender;
      let role = req.body.role;

      let data = await Account.findOne({username})
      if (data){
        res.json('User Nay da ton tai')
      }else {
        await Account.create({
          username: username,
          password: password,
          fullName: fullName,
          phone: phone,
          email: email,
          gender: gender,
          role: role
        })
        res.json("Thanh cong")
      }
    }

    async logout(req,res){
      res.cookie('token', '', { maxAge: 1 });
    }
}

module.exports = new accountController();
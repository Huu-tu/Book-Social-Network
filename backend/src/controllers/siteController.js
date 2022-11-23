const Account = require('../models/accountModel');

class siteController {
    //[GET] /
   index(req, res){
    res.send(result)
  }

  currentUser(req, res){
     let userId = req.user._id;

    Account.findOne({_id: userId})
      .then((data) =>{
        res.json(data)
        // console.log(data)
      })
      .catch((err) =>{
        res.json("Failed")
      });
  }

  async searchUser(req,res){
    try {
      const users = await Account.find({fullName: {$regex: req.query.fullName}}).limit(10)
        .select("fullName")

      res.json({users})
    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  }

  async detailProfile(req,res){
    Account.findOne({_id: req.params.id})
      .then((data) =>{
        res.json(data)
      })
      .catch((err) =>{
        res.json("Failed")
      });
  }

  async editProfile(req,res){
     let _id = req.body._id;
     let fullName = req.body.fullName;
     let phone = req.body.phone;
     let email = req.body.email;
     let gender = req.body.gender;

    if (_id){
      const user = await Account.findOneAndUpdate({_id: _id},{
        fullName, phone, email, gender
      })
      res.json({user})
    }else {
      console.log("Ko")
    }
  }
}

module.exports = new siteController();
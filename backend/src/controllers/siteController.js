const Account = require('../models/accountModel');
const Post = require('../models/postModel');

class siteController {
    //[GET] /
   index(req, res){
    const result = 'hfsfello'
    res.send(result)
  }

  currentUser(req, res){
     let userId = req.user._id;

     // console.log(userId)

    Account.findOne({_id: userId})
      .then((data) =>{
        res.json(data)
        // console.log(data)
      })
      .catch((err) =>{
        res.json("Failed")
      });
  }
}

module.exports = new siteController();
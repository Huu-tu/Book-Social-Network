const comment = require('../models/cmtModel');

class cmtController{
  async doComment(req, res, next){
    let author = req.body.author;
    let content = req.body.content;
    let post = req.body.post;


    console.log({content, author, post})
  }
}

module.exports = new cmtController();
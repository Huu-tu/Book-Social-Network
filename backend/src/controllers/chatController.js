const Chat = require('../models/chatModel');
const Account = require('../models/accountModel');

class chatController{
  async getMessage(req,res,next){
    try{
      const { from, to } = req.body;
      const chats = await Chat.find({
        users: {
          $all: [from , to],
        },
      }).sort({ updateAt: 1 });

      const projectedMessages = chats.map((msg) =>{
        return{
          fromSelf: msg.sender.toString() === from,
          chat: msg.content.text,
        };
      });
      res.json(projectedMessages)
    }catch (e){
      console.log(e)
    }
  }

  async addMessage(req,res,next){
    try{
      const { from, to, content } = req.body;
      const data = await Chat.create({
        content: { text: content },
        users: [from, to],
        sender: from,
      });

      if (data){
        res.json({msg: "Message added successfully."})
      }else {
        res.json({msg: "Failed to add message to the database"})
      }
    }catch (err){
      console.log(err)
    }
  }

  async getAllUsers(req,res){
    try{
      let userId = req.user._id;
      const user = await Account.find({ _id: { $ne: userId } })
      if (user){
        res.json(user)
      }else {
        res.json('Failed');
      }
    }catch (err){
      res.json("Failed Server");
    }
  }
}

module.exports = new chatController()
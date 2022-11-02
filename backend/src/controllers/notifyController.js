const Account = require('../models/accountModel');
const Notify = require('../models/notifyModel');

class notifyController {
  async createNotify(req,res){
    const { content, text, url, recipient, image } = req.body;
    const senders = req.user._id;

    // const Sender = await Notify.findOne({_id: _id})

    const formData = {
      content,
      text,
      url,
      recipient,
      senders,
      image
    }

    const notify = await Notify.create(formData)
    if (notify){
      return  res.status(200).json("Success");
      // console.log(notify)
    }else {
      res.json("Failed")
    }
  }

  async removeNotify(req,res){
    const notifies = await Notify.findOneAndDelete({
      _id: req.params._id
    })

    res.json(notifies)
  }

  async getNotify(req,res){
    const recipient = req.user._id;

    const notifies = await Notify.find({
      recipient: recipient
    }).sort("createdAt").populate("senders", "avatar fullName username")

    res.json(notifies)
  }

  async isReadNotify(req,res){
    const notifies = await Notify.findOneAndUpdate({
      _id: req.params._id
  }, {isRead :true} )

    res.json(notifies)
  }

  async deleteAllNotifies(req,res){
    const notifies = await Notify.deleteMany({
      recipients: req.params._id
    })

    res.json(notifies)
  }
}

module.exports = new notifyController();
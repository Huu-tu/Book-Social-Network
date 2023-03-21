const Account = require('../models/accountModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const KEY = process.env.key;

class accountController {
  //[GET]
  async index(req, res) {
    const data = await Account.find();
 
    if (data) {
      res.json({ data });
    } else {
      console.log('Failed'); 
    }
  }

  async login(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    const user = await Account.findOne({
      username: username,
    });

    const isMarch = await bcrypt.compare(password, user.password);

    if (isMarch) {
      let token = jwt.sign(
        {
          _id: user._id,
          role: user.role,
        },
        KEY,
      );

      res.json({
        role: user.role,
        token: token,
      });
    } else {
      res.json('Thap Bai');
    }
  }

  async loginGG(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let fullName = req.body.fullName;
    let email = req.body.email;
    let role = req.body.role;

    let data = await Account.findOne({ username });

    if (data) {
      res.json('User Nay da ton tai');
    } else {
      await Account.create({
        username: username,
        password: password,
        fullName: fullName,
        email: email,
        role: role,
      });
    }
  }

  async register(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let fullName = req.body.fullName;
    let phone = req.body.phone;
    let email = req.body.email;
    let gender = req.body.gender;
    // let image = req.file.filename;
    let role = req.body.role;

    let data = await Account.findOne({ username });
    if (data) {
      res.json('User Nay da ton tai');
    } else {
      await Account.create({
        username: username,
        password: password,
        fullName: fullName,
        phone: phone,
        email: email,
        gender: gender,
        // image: image,
        role: role,
      });
      res.json('Thanh cong');
    }
  }

  async friend(req, res) {
    try {
      const receiver = await Account.findOne({
        _id: req.params.id,
      });

      const sender = await Account.findOne({
        _id: req.user._id,
      });

      const receiverFollowing = receiver.following;
      const receiverFriend = receiver.friends;

      const senderFollowing = sender.following;
      const senderFriend = sender.friends;

      if (senderFriend.includes(receiver)) {
        return res.json({
          message: 'you have already friended',
        });
      } else {
        senderFriend.unshift(receiver);
        senderFollowing.unshift(receiver);

        await sender.save();
      }

      if (receiverFriend.includes(sender)) {
        return res.json({
          message: 'you have already friended',
        });
      } else {
        receiverFriend.unshift(sender);
        receiverFollowing.unshift(sender);

        await receiver.save();
      }

      return res.json({
        message: 'Thanh cong',
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }

  async unFriend(req, res) {
    try {
      const receiver = await Account.findOne({
        _id: req.params.id,
      });

      const sender = await Account.findOne({
        _id: req.user._id,
      });

      const receiverFollowing = receiver.following;
      const receiverFriend = receiver.friends;

      const senderFollowing = sender.following;
      const senderFriend = sender.friends;

      if (senderFriend.includes(receiver)) {
        return res.json({
          message: 'you have already friended',
        });
      } else {
        const removeFriendIndex = senderFriend
          .map((item) => item.toString())
          .indexOf(receiver);
        const removeFollowingIndex = senderFollowing
          .map((item) => item.toString())
          .indexOf(receiver);

        senderFriend.splice(removeFriendIndex, 1);
        senderFollowing.splice(removeFollowingIndex, 1);

        await sender.save();
      }

      if (receiverFriend.includes(sender)) {
        return res.json({
          message: 'you have already friended',
        });
      } else {
        const removeFriendIndex = receiverFriend
          .map((item) => item.toString())
          .indexOf(sender);
        const removeFollowingIndex = receiverFollowing
          .map((item) => item.toString())
          .indexOf(sender);

        receiverFriend.splice(removeFriendIndex, 1);
        receiverFollowing.splice(removeFollowingIndex, 1);

        await receiver.save();
      }

      console.log('No token here');
      // return res.json({
      //     message:'Thanh cong'
      //   });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }

  async blockAccount(req, res) {
    await Account.delete({ _id: req.params.id });
  }

  async blockAccount(req, res) {
    await Account.delete({ _id: req.params.id });
  }

  async blockAccount(req, res) {
    await Account.delete({ _id: req.params.id });
  }

  async restoreAccount(req, res) {
    await Account.restore({ _id: req.params.id });
  }

  async trashAccount(req, res) {
    const resData = await Account.findDeleted({});
    const result = resData.filter((item) => item.deleted !== false);

    res.json(result);
  }

  async logout(req, res) {
    res.cookie('token', '', { maxAge: 1 });
  }
}

module.exports = new accountController();

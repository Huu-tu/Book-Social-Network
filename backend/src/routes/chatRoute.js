const express = require('express');
const router = express.Router();
const ChatController = require('../controllers/chatController');
const AuthJwt = require('../middlewares/authJwt');

router.post('/getMessage', ChatController.getMessage);
router.post('/addMessage', ChatController.addMessage);
router.get('/allUsers', [AuthJwt.checkLogin],ChatController.getAllUsers);

module.exports = router;
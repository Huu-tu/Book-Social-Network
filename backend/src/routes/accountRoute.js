const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/accountController');
const ImgUpload = require("../middlewares/fileUpload");

router.get('/getAllUser',AccountController.index);
router.post('/register', ImgUpload.single('image'),AccountController.register);
router.post('/login', AccountController.login);
router.post('/loginGG', AccountController.loginGG);
router.post('/logout', AccountController.logout);

module.exports = router;
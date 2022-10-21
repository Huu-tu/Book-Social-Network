const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/accountController');

router.post('/register', AccountController.register);
router.post('/login', AccountController.login);
router.post('/loginGG', AccountController.loginGG);
router.post('/logout', AccountController.logout);

module.exports = router;
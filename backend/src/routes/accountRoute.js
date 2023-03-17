const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/accountController');
const ImgUpload = require('../middlewares/fileUpload');
const AuthJwt = require('../middlewares/authJwt');

router.get('/getAllUser', AccountController.index);
router.post('/register', ImgUpload.single('image'), AccountController.register);
router.post('/login', AccountController.login);
router.post('/loginGG', AccountController.loginGG);

router.get('/friend/:id', [AuthJwt.checkLogin], AccountController.friend);
router.delete(
  '/unfriend/:id',
  [AuthJwt.checkLogin],
  AccountController.unFriend,
);

router.delete('/blockAccount/:id', AccountController.blockAccount);
router.patch('/restoreAccount/:id', AccountController.restoreAccount);
router.get('/trashAccount', AccountController.trashAccount);
router.post('/logout', AccountController.logout);

module.exports = router;

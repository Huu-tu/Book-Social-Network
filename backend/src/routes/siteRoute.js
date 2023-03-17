const express = require('express');
const router = express.Router();
const SiteController = require('../controllers/siteController');
const AuthJwt = require('../middlewares/authJwt');
const ImgUpload = require('../middlewares/fileUpload');

router.get('/', SiteController.index);
router.get('/currentUser', [AuthJwt.checkLogin], SiteController.currentUser);
router.get(
  '/detailProfile/:id',
  [AuthJwt.checkLogin],
  SiteController.detailProfile,
);
router.get('/searchUsers', [AuthJwt.checkLogin], SiteController.searchUser);
router.post('/editProfile', [AuthJwt.checkLogin], SiteController.editProfile);

module.exports = router;

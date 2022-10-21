const express = require('express');
const router = express.Router();
const SiteController = require('../controllers/siteController');
const AuthJwt = require('../middlewares/authJwt');
const ImgUpload = require('../middlewares/fileUpload');

router.get('/', SiteController.index)
router.get('/currentUser', [AuthJwt.checkLogin],SiteController.currentUser);

module.exports = router;
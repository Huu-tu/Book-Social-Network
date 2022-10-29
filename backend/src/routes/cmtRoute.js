const express = require('express');
const router = express.Router();
const cmtController = require('../controllers/commentController');
const AuthJwt = require("../middlewares/authJwt");

router.post('/doComment', [AuthJwt.checkLogin],cmtController.doComment);

module.exports = router;
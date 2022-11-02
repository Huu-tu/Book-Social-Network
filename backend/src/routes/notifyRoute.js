const express = require('express');
const router = express.Router();
const NotifyController = require('../controllers/notifyController');
const AuthJwt = require("../middlewares/authJwt");
const VerifySignUp = require("../middlewares/verifySignUp");

router.post('/createNotify', [AuthJwt.checkLogin, VerifySignUp.checkPermission],NotifyController.createNotify);
router.get('/getNotify', [AuthJwt.checkLogin, VerifySignUp.checkPermission],NotifyController.getNotify);
router.delete('/removeNotify', [AuthJwt.checkLogin, VerifySignUp.checkPermission],NotifyController.removeNotify);
router.patch('/isReadNotify', [AuthJwt.checkLogin, VerifySignUp.checkPermission],NotifyController.isReadNotify);
router.delete('/deleteAllNotify', [AuthJwt.checkLogin, VerifySignUp.checkPermission],NotifyController.deleteAllNotifies);

module.exports = router;
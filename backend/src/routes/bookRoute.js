const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController');
const AuthJwt = require('../middlewares/authJwt');
const VerifySignUp = require('../middlewares/verifySignUp');
const ImgUpload = require('../middlewares/fileUpload');

router.get('/showBook', [AuthJwt.checkLogin, VerifySignUp.checkPermission],BookController.showBook);
router.get('/detailBook/:id', BookController.detailBook);
router.post('/createBook',ImgUpload.single('image'), BookController.createBook);
router.post('/updateBook', BookController.updateBook);
router.post('/deleteBook', BookController.deleteBook);
router.post('/likeBook', [AuthJwt.checkLogin], BookController.likeBook);
router.post('/disLikeBook', [AuthJwt.checkLogin], BookController.disLikeBook);
router.post('/cmtBook', [AuthJwt.checkLogin], BookController.cmtBook);
router.put('/unCmtBook/:id', BookController.unCmtBook);


module.exports = router;
const express = require('express');
const router = express.Router();
const PostController = require('../controllers/postController');
const AuthJwt = require('../middlewares/authJwt');
const VerifySignUp = require('../middlewares/verifySignUp');
const ImgUpload = require('../middlewares/fileUpload');
const SiteController = require('../controllers/siteController');

router.get(
  '/showPost',
  [AuthJwt.checkLogin, VerifySignUp.checkPermission],
  PostController.showPost,
);
router.get(
  '/showOpinionPost',
  // [AuthJwt.checkLogin, VerifySignUp.checkPermission],
  PostController.showOpinionPost,
);
router.get(
  '/showBookPost',
  [AuthJwt.checkLogin, VerifySignUp.checkPermission],
  PostController.showBookPost,
);
router.get('/showMostReadPosts', PostController.showMostReadPosts);
router.get('/showRanDomReadPosts', PostController.showRanDomReadPosts);
router.get(
  '/getSinglePost/:id',
  [AuthJwt.checkLogin, VerifySignUp.checkPermission],
  PostController.getSinglePost,
);
router.post(
  '/createPost',
  ImgUpload.single('image'),
  PostController.createPost,
);
router.get('/getAuthor/:id', PostController.getAuthor);
router.get('/detailPost/:id', PostController.detailPost);
router.post('/updatePost', [AuthJwt.checkLogin], PostController.updatePost);
router.delete('/deletePost/:id', PostController.deletePost);
router.delete('/cmtDeletePost/:id', PostController.cmtDeletePost);
router.post('/updatePost/:id', PostController.cmtUpdatePost);
router.delete('/deletePost/:id', PostController.deletePost);
router.post('/likePost', [AuthJwt.checkLogin], PostController.likePost);
router.post('/disLikePost', [AuthJwt.checkLogin], PostController.disLikePost);
router.post('/cmtPost', [AuthJwt.checkLogin], PostController.cmtPost);
router.get('/cmtGet/:id', [AuthJwt.checkLogin], PostController.cmtGet);
router.post('/savePost', [AuthJwt.checkLogin], PostController.savePost);
router.post('/unSavePost', [AuthJwt.checkLogin], PostController.unSavePost);
router.get('/getSavedPost', [AuthJwt.checkLogin], PostController.getSavedPost);
router.post('/hidePost/:id', [AuthJwt.checkLogin], PostController.hidePost);
router.post('/unHidePost/:id', [AuthJwt.checkLogin], PostController.unHidePost);
router.post('/reportPost/:id', [AuthJwt.checkLogin], PostController.reportPost);


module.exports = router;

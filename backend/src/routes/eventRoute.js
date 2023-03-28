const express = require('express');
const router = express.Router();
const EventController = require('../controllers/eventController');
const AuthJwt = require('../middlewares/authJwt');
const ImgUpload = require('../middlewares/fileUpload');

router.post('/createEvent', [AuthJwt.checkLogin,ImgUpload.single('image'),], EventController.createEvent);
router.get('/showEvent', [AuthJwt.checkLogin], EventController.showEvent);
router.get('/detailEvent/:id', [AuthJwt.checkLogin], EventController.detailEvent);

module.exports = router;

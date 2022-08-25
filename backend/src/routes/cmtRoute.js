const express = require('express');
const router = express.Router();
const cmtController = require('../controllers/commentController');

router.post('/doComment', cmtController.doComment);

module.exports = router;
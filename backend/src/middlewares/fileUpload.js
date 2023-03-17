const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, image, cb) {
    cb(null, './src/publics/img');
  },
  filename: function (req, image, cb) {
    cb(null, Date.now() + '--' + image.originalname);
  },
});

const imgUpload = multer({ storage: storage });

module.exports = imgUpload;

const express = require('express');
const router = express.Router();
const fileController = require("../controllers/fileController");

router.post('/uploadFile', fileController.uploadFile)
router.get('/filecsv', fileController.showFile);
router.get('/deleteFile/:id', fileController.deleteFile);


module.exports = router;
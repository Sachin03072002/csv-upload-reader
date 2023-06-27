const express = require('express');
const router = express.Router();
const homeController = require("../controllers/homeController");
router.post('/upload', homeController.uploadFile)
router.get('/filecsv', homeController.showFile);
router.get('/deleteFile/:id', homeController.deleteFile);
module.exports = router;
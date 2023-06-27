const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
console.log('router loaded');

// router.use('/users', require('./users'));

router.get('/', homeController.home);
router.use('/file', require('./files'));
router.use('/show', require('./files'));
router.use('/delete', require('./files'));

module.exports = router;
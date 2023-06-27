const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
console.log('router loaded');

// router.use('/users', require('./users'));

router.get('/', homeController.home);

module.exports = router;
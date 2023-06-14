const express = require('express');
const router=express.Router();

const homeController = require('../controllers/home_controller');


router.get('/', homeController.home);

// For any further route use router.use()
router.use('/users', require('./users'));
router.use('/posts',require('./posts'));
router.use('/comments',require('./comments'));


console.log("Router Loaded!");

module.exports =router;
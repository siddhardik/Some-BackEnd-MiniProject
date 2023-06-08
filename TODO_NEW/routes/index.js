const express = require('express');

const router = express.Router();
const homeController = require('../controller/homeControl');
const createTaskController = require('../controller/createTaskControl');
const handleCheckController = require('../controller/handleCheckController')

const Task = require('../model/task')

router.get('/', homeController.homePage);

router.use('/create-Task', createTaskController.createTask);

router.use('/handleCheck', handleCheckController.handleCheck);

module.exports = router;
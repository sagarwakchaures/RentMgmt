const express = require('express');
const router = express.Router();
const userController = require('./userController');
const rentController = require('./rentController');

router.use('/api/user/',userController);
router.use('/api/rent/',rentController);

module.exports = router;
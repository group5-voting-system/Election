const express = require('express');
const router = express.Router();
const localListController = require('../controllers/localListController');

router.post('/', localListController.createLocalList);

module.exports = router;
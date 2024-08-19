const express = require('express');
const router = express.Router();
const localListController = require('../controllers/localListController');

router.post('/', localListController.createLocalList);
router.get('/:id', localListController.getLocalById);
router.get('/l/:id', localListController.getListById);
router.get('/', localListController.getAllLocal);
router.patch('/:id', localListController.updateLocal);
router.delete('/:id', localListController.deleteLocal);
router.post('/', localListController.vote);

module.exports = router;
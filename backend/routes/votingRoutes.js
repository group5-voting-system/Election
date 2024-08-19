const express = require('express');
const router = express.Router();
const votingController = require('../controllers/votingController');

router.get('/', votingController.getAllVoters);
router.get('/:id', votingController.getVoterById);
router.post('/h', votingController.createVoter);
router.patch('/:id', votingController.updateVoter);
router.delete('/:id', votingController.deleteVoter);

module.exports = router;
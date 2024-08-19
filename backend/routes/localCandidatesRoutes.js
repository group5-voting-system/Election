const express = require('express');
const router = express.Router();
const localCandidatesController = require('../controllers/localCandidatesController');

router.get('/', localCandidatesController.getAllLocalCandidates);
router.get('/:id', localCandidatesController.getLocalCandidateById);
router.post('/', localCandidatesController.createLocalCandidats);
router.patch('/:id', localCandidatesController.updateLocalCandidate);
router.delete('/:id', localCandidatesController.deleteLocalCandidate);

module.exports = router;
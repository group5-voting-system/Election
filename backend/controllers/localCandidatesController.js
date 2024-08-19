const LocalCandidates = require('../models/localCandidates');

exports.getAllLocalCandidates = async (req, res) => {
  try {
    const localcandidates = await LocalCandidates.getAll();
    res.json(localcandidates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLocalCandidateById = async (req, res) => {
  try {
    const localcandidate = await LocalCandidates.getById(req.params.id);
    if (localcandidate) {
      res.json(localcandidate);
    } else {
      res.status(404).json({ message: 'Local Candidate not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createLocalCandidats= async (req, res) => {
  try {
    const newLocalCandidate = await LocalCandidates.create(req.body);
    res.status(201).json(newLocalCandidate[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



exports.updateLocalCandidate = async (req, res) => {
  try {
    const localCandidateId = req.params.id;
    const { COUNT_OF_VOTES } = req.body; 
    if (typeof COUNT_OF_VOTES === 'undefined') {
      return res.status(400).json({ message: 'COUNT_OF_VOTES is required' });
    }

    const updatedLocalCandidate = await LocalCandidates.update(localCandidateId, COUNT_OF_VOTES);

    if (updatedLocalCandidate.length > 0) {
      res.json({ COUNT_OF_VOTES: updatedLocalCandidate[0] });
    } else {
      res.status(404).json({ message: 'Local Candidate not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

  


exports.deleteLocalCandidate = async (req, res) => {
  try {
    const deleted = await LocalCandidates.delete(req.params.id);
    if (deleted) {
      res.json({ message: 'Local Candidate deleted successfully' });
    } else {
      res.status(404).json({ message: 'Voter not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


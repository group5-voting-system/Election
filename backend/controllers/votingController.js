const Voters = require('../models/voting');

exports.getAllVoters = async (req, res) => {
  try {
    const voters = await Voters.getAll();
    res.json(voters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVoterById = async (req, res) => {
  try {
    const voter = await Voters.getById(req.params.id);
    if (voter) {
      res.json(voter);
    } else {
      res.status(404).json({ message: 'Voter not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createVoter = async (req, res) => {
  try {
    const newVoter = await Voters.create(req.body);
    res.status(201).json(newVoter[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// exports.updateVoter = async (req, res) => {
//   try {
//     const updatedVoter = await Voters.update(req.params.id, req.body);
//     if (updatedVoter.length) {
//       res.json(updatedVoter[0]);
//     } else {
//       res.status(404).json({ message: 'Voter not found' });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };




exports.updateVoter = async (req, res) => {
    try {
    
      const voterId = req.params.id;
      const updateData = req.body;
  
      const updatedVoter = await Voters.update(voterId, updateData);
  
      if (updatedVoter.length > 0) {
        res.json(updatedVoter[0]);
      } else {
        res.status(404).json({ message: 'Voter not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  


exports.deleteVoter = async (req, res) => {
  try {
    const deleted = await Voters.delete(req.params.id);
    if (deleted) {
      res.json({ message: 'Voter deleted successfully' });
    } else {
      res.status(404).json({ message: 'Voter not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};






// const Voters = require('../models/voting');

// exports.getAllVoters = async (req, res) => {
//   try {
//     const voters = await Voters.getAll();
//     res.json(voters);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.getVoterById = async (req, res) => {
//   try {
//     const voter = await Voters.getById(req.params.id);
//     if (voter) {
//       res.json(voter);
//     } else {
//       res.status(404).json({ message: 'Voter not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.createVoter = async (req, res) => {
//   try {
//     const newVoter = await Voters.create(req.body);
//     res.status(201).json(newVoter[0]); // تأكد من أن create يعيد مصفوفة من الكائنات
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// exports.updateVoter = async (req, res) => {
//   try {
//     const updatedVoter = await Voters.update(req.params.id, req.body);
//     if (updatedVoter.length > 0) {
//       res.json(updatedVoter[0]);
//     } else {
//       res.status(404).json({ message: 'Voter not found' });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// exports.deleteVoter = async (req, res) => {
//   try {
//     const deleted = await Voters.delete(req.params.id);
//     if (deleted) {
//       res.json({ message: 'Voter deleted successfully' });
//     } else {
//       res.status(404).json({ message: 'Voter not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

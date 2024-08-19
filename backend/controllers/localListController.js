const knex = require("../db/knex");

exports.createLocalList = async (req, res) => {
  const { listName, circleId, candidates } = req.body;

  try {
    await knex.transaction(async (trx) => {

      const [insertedList] = await trx("LOCAL_LISTS")
        .insert({
          LIST_NAME: listName,
          CIRCLE_ID: circleId,
          IS_APROVED: false,
          COUNT_OF_VOTES: 0,
        })
        .returning("*");

      const listId = insertedList.LIST_ID;

      const candidateInserts = candidates.map((candidate) => ({
        LIST_ID: listId,
        NATIONAL_ID: parseInt(candidate.nationalId, 10),
        IS_APROVED: false,
        COUNT_OF_VOTES: 0,
        TYPE_OF_CHAIR: candidate.typeOfChair,
      }));

      await trx("LOCAL_CANDIDATE").insert(candidateInserts);
    });

    res.status(201).json({ message: "Local list created successfully" });
  } catch (error) {
    console.error("Error creating local list:", error);
    res.status(500).json({
      error: `An error occurred while creating the local list: ${error.message}`,
    });
  }
};


const Local = require('../models/localList');

exports.getAllLocal = async (req, res) => {
  try {
    const locals = await Local.getAll();
    res.json(locals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getListById = async (req, res) => {
  try {
    const localId = await Local.getLocalById(req.params.id);
    if (localId) {
      res.json(localId);
    } else {
      res.status(404).json({ message: 'Local List not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




exports.getLocalById = async (req, res) => {
  try {
    const local = await Local.getById(req.params.id);
    if (local) {
      res.json(local);
    } else {
      res.status(404).json({ message: 'Local List not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


  exports.updateLocal = async (req, res) => {
    try {
      const localId = req.params.id;
      const { COUNT_OF_VOTES } = req.body; 
      if (typeof COUNT_OF_VOTES === 'undefined') {
        return res.status(400).json({ message: 'COUNT_OF_VOTES is required' });
      }
  
      const updatedLocal = await Local.update(localId, COUNT_OF_VOTES);
  
      if (updatedLocal.length > 0) {
        res.json({ COUNT_OF_VOTES: updatedLocal[0] });
      } else {
        res.status(404).json({ message: 'Local List not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  
exports.deleteLocal = async (req, res) => {
  try {
    const deleted = await Local.delete(req.params.id);
    if (deleted) {
      res.json({ message: 'Local list deleted successfully' });
    } else {
      res.status(404).json({ message: 'Voter not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.vote = async (req, res) => {
  const { listId, nationalId } = req.body;

  try {
    const hasVoted = await PartyList.hasUserVoted(nationalId);

    if (hasVoted) {
      return res.status(400).json({ error: "لقد قمت بالتصويت بالفعل" });
    }

    await Local.incrementVotes(listId);

    res.status(200).json({ message: "تم التصويت بنجاح" });
  } catch (error) {

    console.error("Error processing vote:", error);
    res.status(500).json({ error: "حدث خطأ أثناء التصويت" });
  }
};

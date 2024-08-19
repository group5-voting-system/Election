const knex = require("../db/knex");

exports.createLocalList = async (req, res) => {
  const { listName, circleId, candidates } = req.body;

  try {
    await knex.transaction(async (trx) => {
      // Insert into LOCAL_LISTS table and get the inserted ID
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

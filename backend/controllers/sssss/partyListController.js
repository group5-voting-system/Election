const knex = require("../db/knex");

exports.getParties = async (req, res) => {
  try {
    const parties = await knex("PARTIES").select("*");
    res.json(parties);
  } catch (error) {
    console.error("Error fetching parties:", error);
    res.status(500).json({
      error: `An error occurred while fetching parties: ${error.message}`,
    });
  }
};

exports.createPartyList = async (req, res) => {
  const { partyId, members } = req.body;

  try {
    await knex.transaction(async (trx) => {
      // Validate partyId
      const party = await trx("PARTIES").where("PARTY_ID", partyId).first();
      if (!party) {
        throw new Error("Invalid party ID");
      }

      // Insert into PARTY_LISTS table
      const [insertedList] = await trx("PARTY_LISTS")
        .insert({
          LIST_NAME: party.PARTY_NAME,
          COUNT_OF_VOTES: 0,
          IS_APROVED: false,
        })
        .returning("*");

      const listId = insertedList.LIST_ID;

      // Validate and insert members
      const validMembers = members.filter((member) => {
        const parsedId = parseInt(member.nationalId, 10);
        return !isNaN(parsedId);
      });

      if (validMembers.length !== members.length) {
        throw new Error("One or more member National IDs are invalid");
      }

      const memberInserts = validMembers.map((member) => ({
        NATIONAL_ID: parseInt(member.nationalId, 10),
        LIST_ID: listId,
        IS_APROVED: false,
      }));

      await trx("PARTY_CANDIDATE").insert(memberInserts);
    });

    res.status(201).json({ message: "Party list created successfully" });
  } catch (error) {
    console.error("Error creating party list:", error);
    res.status(400).json({
      error: `An error occurred while creating the party list: ${error.message}`,
    });
  }
};

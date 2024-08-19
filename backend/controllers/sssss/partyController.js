const knex = require("../db/knex");

exports.getAllParties = async (req, res) => {
  try {
    const parties = await knex("PARTIES").select("*");
    res.json(parties);
  } catch (error) {
    console.error("Error fetching parties:", error);
    res.status(500).json({ error: "An error occurred while fetching parties" });
  }
};

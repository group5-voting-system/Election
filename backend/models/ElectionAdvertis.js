const knex = require("knex")(require("../knexfile").development);

const getAllAdvertisements = async () => {
  try {
    const advertisements = await knex("election_advertisements")
      .select("ID", "TITLE", "URL", "DESCRIPTION")
      .orderBy("id", "desc")
      .limit(6); // نحصل على آخر 6 إعلانات
    return advertisements;
  } catch (error) {
    console.error("error fetching data", error);
    throw error;
  }
};

module.exports = {
  getAllAdvertisements,
};

const db = require("../db/knex");

module.exports = {
  getUserByNationalId: (nationalId) => {
    return db("USERS").where("NATIONAL_ID", nationalId).first();
  },

  updateLocalVoteStatus: async (nationalId) => {
    return db("USERS")
      .where("NATIONAL_ID", nationalId)
      .update("IS_LOCAL_VOTE", true);
  },

  checkLocalVoteStatus: async (nationalId) => {
    const user = await db("USERS")
      .where("NATIONAL_ID", nationalId)
      .select("IS_LOCAL_VOTE")
      .first();
    return user ? user.IS_LOCAL_VOTE : false;
  },
};

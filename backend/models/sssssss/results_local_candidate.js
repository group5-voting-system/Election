const db = require("../db/knex");

class LocalCandidate {
  static async getCandidatesInfo() {
    return await db("LOCAL_CANDIDATE")
      .join("USERS", "LOCAL_CANDIDATE.NATIONAL_ID", "=", "USERS.NATIONAL_ID")
      .select("USERS.FULL_NAME", "LOCAL_CANDIDATE.COUNT_OF_VOTES");
  }
}

module.exports = LocalCandidate;

const db = require("../db/knex");

module.exports = {
  getCandidatesByListId: (listId) => {
    return db("LOCAL_CANDIDATE").where("LIST_ID", listId).select("*");
  },
  incrementVotes: (candidateId) => {
    return db("LOCAL_CANDIDATE")
      .where("CANDIDATE_ID", candidateId)
      .increment("COUNT_OF_VOTES", 1);
  },
};

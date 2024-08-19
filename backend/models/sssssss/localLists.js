const db = require("../db/knex");

module.exports = {
  getAllLists: () => {
    return db("LOCAL_LISTS").select("*");
  },
  incrementVotes: (listId) => {
    return db("LOCAL_LISTS")
      .where("LIST_ID", listId)
      .increment("COUNT_OF_VOTES", 1);
  },
};

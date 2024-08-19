const db = require("../db/knex");

class User {
  static async getLocalVoteCount() {
    const result = await db("USERS")
      .count("* as count")
      .where("IS_LOCAL_VOTE", true);
    return result[0].count;
  }

  static async getVotingRateByCircle() {
    const result = await db("USERS")
      .select("CIRCLE_ID")
      .count("* as total_users")
      .count("* as local_vote_users")
      .where("IS_LOCAL_VOTE", true)
      .groupBy("CIRCLE_ID");

    return result.map((row) => ({
      circleId: row.CIRCLE_ID,
      votingRate: (row.local_vote_users / row.total_users) * 100,
    }));
  }

  static async getThresholdByCircle() {
    const result = await db("USERS")
      .select("CIRCLE_ID")
      .count("* as local_vote_users")
      .where("IS_LOCAL_VOTE", true)
      .groupBy("CIRCLE_ID");

    return result.map((row) => ({
      circleId: row.CIRCLE_ID,
      threshold: row.local_vote_users * 0.07,
    }));
  }
}

module.exports = User;

// models/PartyList.js
const knex = require("../db/knex");

class PartyList {
  static async getAllLists() {
    return knex("PARTY_LISTS").select("*");
  }

  static async incrementVotes(listId) {
    return knex("PARTY_LISTS")
      .where("LIST_ID", listId)
      .increment("COUNT_OF_VOTES", 1);
  }

  static async updateUserVoteStatus(nationalId) {
    return knex("USERS")
      .where("NATIONAL_ID", nationalId)
      .update("IS_PARTY_VOTE", true);
  }

  // وظيفة للتحقق من حالة تصويت المستخدم
  static async hasUserVoted(nationalId) {
    const user = await knex("USERS").where("NATIONAL_ID", nationalId).first();
    return user && user.IS_PARTY_VOTE;
  }
}

module.exports = PartyList;

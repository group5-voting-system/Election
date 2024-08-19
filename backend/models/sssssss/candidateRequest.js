const knex = require("knex")(require("../knexfile").development);

class CandidateRequest {
  static getAll() {
    return knex("PARTY_CANDIDATES_REQUEST");
  }

  static getById(id) {
    return knex("PARTY_CANDIDATES_REQUEST").where("id", id).first();
  }

  static create(data) {
    return knex("PARTY_CANDIDATES_REQUEST").insert(data).returning('*');
  }

  static update(id, data) {
    return knex("PARTY_CANDIDATES_REQUEST").where("id", id).update(data);
  }

  static delete(id) {
    return knex("PARTY_CANDIDATES_REQUEST").where("id", id).del();
  }
}

module.exports = CandidateRequest;

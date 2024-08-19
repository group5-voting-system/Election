const knex = require('../db/knex');

class Voter {
  static getAll() {
    return knex('USERS').select('*');
  }

  static getById(id) {
    return knex('USERS').where('NATIONAL_ID', id).first();
  }

  static create(voterData) {
    return knex('USERS').insert(voterData).returning('*');
  }
  
  static update(id, voterData) {
   return knex('USERS').where('NATIONAL_ID', id).update(voterData).returning('*'); 
  }
  static delete(id) {
    return knex('USERS').where('NATIONAL_ID', id).del();
  }
}

module.exports = Voter;









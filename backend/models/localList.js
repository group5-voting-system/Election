const knex = require('../db/knex');

class LocalList {
  static getAll() {
    return knex('LOCAL_LISTS').select('LIST_ID');
  }
static getLocalById(id) {
  return knex('LOCAL_LISTS').where('CIRCLE_ID', id).select('LIST_ID');
}
  static getById(id) {
    return knex('LOCAL_LISTS').where('LIST_ID', id).first().select('LIST_NAME');
  }
 
  static update(id, newVoteCount) {
    const voteCount = parseInt(newVoteCount, 10);
    
    if (isNaN(voteCount)) {
      throw new Error('Invalid vote count');
    }
    
    return knex('LOCAL_LISTS')
      .where('LIST_ID', id)
      .update({ COUNT_OF_VOTES: voteCount })
      .returning('COUNT_OF_VOTES'); 
  }

  static delete(id) {
    return knex('LOCAL_LISTS').where('LIST_ID', id).del();
  }
  static async incrementVotes(listId) {
    return knex("LOCAL_LISTS")
      .where("LIST_ID", listId)
      .increment("COUNT_OF_VOTES", 1);
  }
}



module.exports = LocalList ;


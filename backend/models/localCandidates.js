const knex = require('../db/knex');

class LocalCandidate {
  static getAll() {
    return knex('LOCAL_CANDIDATE').select('*');
  }
//   static getIdById(id) {
//     return knex('LOCAL_CANDIDATE')
//       .where('NATIONAL_ID', id)
//       .select('CANDIDATE_ID');
//   }
//   const localCandidatesVotes = async (votes) => {
//     const listResponse = await axios.patch(`http://localhost:5000/api/local-candidates/${candidateId}`);
// };

// const localListVotes = async (votes) => {
//   const listResponse = await axios.patch(`http://localhost:5000/api/local-candidates/${candidateId}`);
// };
static getById(id) {
    return knex('LOCAL_CANDIDATE')
      .join('USERS', 'LOCAL_CANDIDATE.NATIONAL_ID', 'USERS.NATIONAL_ID')
      .where('LOCAL_CANDIDATE.LIST_ID', id)
      .select('USERS.FULL_NAME','LOCAL_CANDIDATE.CANDIDATE_ID');
  }
  

  static create(localCandidateData) {
    return knex('LOCAL_CANDIDATE').insert(localCandidateData).returning('*');
  }

static update(id, newVoteCount) {
  const voteCount = parseInt(newVoteCount, 10);
  
  if (isNaN(voteCount)) {
    throw new Error('Invalid vote count');
  }
  
  return knex('LOCAL_CANDIDATE')
    .where('CANDIDATE_ID', id)
    .update({ COUNT_OF_VOTES: voteCount })
    .returning('COUNT_OF_VOTES'); 
}



  static delete(id) {
    return knex('LOCAL_CANDIDATE').where('CANDIDATE_ID', id).del();
  }
}

module.exports = LocalCandidate;
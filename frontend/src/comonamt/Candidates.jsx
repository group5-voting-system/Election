// src/components/Candidates.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Candidates = ({ listId }) => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(`/api/local-candidates/${listId}`);
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, [listId]);

  const handleCheckboxChange = (id) => {
    setSelectedCandidates((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const handleVote = async () => {
    try {
      await axios.post('/api/vote', { candidateIds: selectedCandidates });
      alert("Vote submitted!");
    } catch (error) {
      console.error("Error submitting vote:", error);
    }
  };

  return (
    <div>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.CANDIDATE_ID} className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(candidate.CANDIDATE_ID)}
                className="mr-2"
              />
              {candidate.FULL_NAME}
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={handleVote}
        className="mt-4 px-4 py-2 border rounded bg-blue-500 text-white"
      >
        Vote
      </button>
    </div>
  );
};

export default Candidates;

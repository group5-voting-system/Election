import React, { useState } from "react";
import axios from "axios";

function LocalListForm() {
  const [listName, setListName] = useState("");
  const [circleId, setCircleId] = useState("");
  const [candidates, setCandidates] = useState([
    { nationalId: "", typeOfChair: "" },
  ]);

  const handleAddCandidate = () => {
    setCandidates([...candidates, { nationalId: "", typeOfChair: "" }]);
  };

  const handleCandidateChange = (index, field, value) => {
    const newCandidates = [...candidates];
    newCandidates[index][field] = value;
    setCandidates(newCandidates);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/local-lists",
        {
          listName,
          circleId,
          candidates,
        }
      );
      console.log("List created:", response.data);
      // Reset form or show success message
    } catch (error) {
      console.error("Error creating list:", error);
      // Show error message
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10">
      <div className="mb-4">
        <label
          htmlFor="listName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          List Name
        </label>
        <input
          type="text"
          id="listName"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="circleId"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Circle ID
        </label>
        <input
          type="number"
          id="circleId"
          value={circleId}
          onChange={(e) => setCircleId(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Candidates
        </label>
        {candidates.map((candidate, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              value={candidate.nationalId}
              onChange={(e) =>
                handleCandidateChange(index, "nationalId", e.target.value)
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              placeholder="Enter National ID"
              required
            />
            <input
              type="text"
              value={candidate.typeOfChair}
              onChange={(e) =>
                handleCandidateChange(index, "typeOfChair", e.target.value)
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Type of Chair"
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddCandidate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Another Candidate
        </button>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create List
        </button>
      </div>
    </form>
  );
}

export default LocalListForm;

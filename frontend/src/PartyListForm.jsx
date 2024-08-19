import React, { useState, useEffect } from "react";
import axios from "axios";

function PartyListForm() {
  const [parties, setParties] = useState([]);
  const [selectedPartyId, setSelectedPartyId] = useState("");
  const [members, setMembers] = useState([{ nationalId: "" }]);

  useEffect(() => {
    fetchParties();
  }, []);

  const fetchParties = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/parties");
      setParties(response.data);
    } catch (error) {
      console.error("Error fetching parties:", error);
    }
  };

  const handleAddMember = () => {
    setMembers([...members, { nationalId: "" }]);
  };

  const handleMemberChange = (index, value) => {
    const newMembers = [...members];
    newMembers[index].nationalId = value;
    setMembers(newMembers);
  };

  const handleRemoveMember = (index) => {
    const newMembers = members.filter((_, i) => i !== index);
    setMembers(newMembers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/party-lists",
        {
          partyId: parseInt(selectedPartyId, 10),
          members: members.map((member) => ({
            nationalId: member.nationalId,
          })),
        }
      );
      console.log("Party list created:", response.data);
      // Reset form or show success message
    } catch (error) {
      console.error(
        "Error creating party list:",
        error.response?.data?.error || error.message
      );
      // Show error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10">
      <div className="mb-4">
        <label
          htmlFor="partySelect"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Select Party
        </label>
        <select
          id="partySelect"
          value={selectedPartyId}
          onChange={(e) => setSelectedPartyId(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
          <option value="">Select a party</option>
          {parties.map((party) => (
            <option key={party.PARTY_ID} value={party.PARTY_ID}>
              {party.PARTY_NAME}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Members
        </label>
        {members.map((member, index) => (
          <div key={index} className="flex mb-2">
            <input
              type="text"
              value={member.nationalId}
              onChange={(e) => handleMemberChange(index, e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter National ID"
              required
            />
            <button
              type="button"
              onClick={() => handleRemoveMember(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddMember}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Another Member
        </button>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Party List
        </button>
      </div>
    </form>
  );
}

export default PartyListForm;

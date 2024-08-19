import React, { useState, useEffect } from "react";
import axios from "axios";

function PartyListVoting() {
  const [partyLists, setPartyLists] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  sessionStorage.setItem("currentuser", "2000000006");

  useEffect(() => {
    fetchPartyLists();
  }, []);

  const fetchPartyLists = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/party_list_votes"
      );
      setPartyLists(response.data);
    } catch (error) {
      console.error("Error fetching party lists:", error);
    }
  };

  const handleVote = async () => {
    const currentUser = sessionStorage.getItem("currentuser");
    if (!currentUser) {
      alert("لم يتم العثور على معرف المستخدم");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/party_list_votes", {
        listId: partyLists[currentIndex].LIST_ID,
        nationalId: currentUser,
      });
      alert("تم التصويت بنجاح!");
      fetchPartyLists();
    } catch (error) {
      console.error("Error voting:", error);
      alert("حدث خطأ أثناء التصويت. الرجاء المحاولة مرة أخرى.");
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? partyLists.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === partyLists.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
          التصويت على قوائم الأحزاب
        </h1>
        {partyLists.length > 0 && (
          <div className="flex items-center justify-center">
            <button
              onClick={handlePrevious}
              className="text-4xl text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              &#x276E;
            </button>
            <div className="bg-white shadow-lg rounded-lg p-8 mx-4 w-full max-w-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                {partyLists[currentIndex].LIST_NAME}
              </h2>

              <div className="flex justify-center">
                <button
                  onClick={handleVote}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                >
                  تصويت
                </button>
              </div>
            </div>
            <button
              onClick={handleNext}
              className="text-4xl text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              &#x276F;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PartyListVoting;

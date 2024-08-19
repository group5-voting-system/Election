import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    localVoteCount: 0,
    listsInfo: [],
    candidatesInfo: [],
    votingRateByCircle: [],
    thresholdByCircle: [],
    listsInfoWithThreshold: {},
    topCandidates: {},
    specialSeats: {},
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/stats");
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Local Vote Count</h2>
        <p>{stats.localVoteCount} users have local vote</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Local Lists</h2>
        {stats.listsInfo && stats.listsInfo.length > 0 ? (
          <ul>
            {stats.listsInfo.map((list, index) => (
              <li key={index} className="mb-2">
                <strong>{list.LIST_NAME}</strong> - Circle ID: {list.CIRCLE_ID},
                Votes: {list.COUNT_OF_VOTES}
              </li>
            ))}
          </ul>
        ) : (
          <p>No list information available.</p>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Local Candidates</h2>
        <ul>
          {stats.candidatesInfo.map((candidate, index) => (
            <li key={index} className="mb-2">
              <strong>{candidate.FULL_NAME}</strong> - Votes:{" "}
              {candidate.COUNT_OF_VOTES}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Voting Rate by Circle</h2>
        <ul>
          {stats.votingRateByCircle.map((circle, index) => (
            <li key={index} className="mb-2">
              Circle ID: {circle.circleId} - Voting Rate:{" "}
              {circle.votingRate.toFixed(2)}%
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Threshold by Circle</h2>
        <ul>
          {stats.thresholdByCircle.map((circle, index) => (
            <li key={index} className="mb-2">
              Circle ID: {circle.circleId} - Threshold:{" "}
              {circle.threshold.toFixed(2)}
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Lists Information with Threshold
        </h2>
        {Object.keys(stats.listsInfoWithThreshold).length > 0 ? (
          Object.entries(stats.listsInfoWithThreshold).map(
            ([circleId, circleData]) => (
              <div key={circleId} className="mb-4">
                <h3 className="text-lg font-semibold">Circle ID: {circleId}</h3>
                <p>Total Votes: {circleData.totalVotes}</p>
                <p>Allocated Seats: {circleData.allocatedSeats}</p>
                <p>Remaining Seats: {circleData.remainingSeats}</p>
                {circleData.lists && circleData.lists.length > 0 ? (
                  <ul>
                    {circleData.lists.map((list, index) => (
                      <li key={index} className="mb-2">
                        <strong>{list.LIST_NAME}</strong> - Votes:{" "}
                        {list.COUNT_OF_VOTES},
                        {list.LIST_NAME !== "ورقة بيضاء" && (
                          <>
                            Above Threshold:{" "}
                            {list.aboveThreshold ? "Yes" : "No"}, Allocated
                            Seats: {list.allocatedSeats}, Remainder:{" "}
                            {list.remainder.toFixed(4)}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No lists available for this circle.</p>
                )}
              </div>
            )
          )
        ) : (
          <p>No threshold information available.</p>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Top Candidates for Each List
        </h2>
        {Object.entries(stats.topCandidates).map(([circleId, candidates]) => (
          <div key={circleId} className="mb-4">
            <h3 className="text-lg font-semibold">Circle ID: {circleId}</h3>
            <ul>
              {candidates.map((candidate, index) => (
                <li key={index} className="mb-2">
                  <strong>{candidate.FULL_NAME}</strong> - List:{" "}
                  {candidate.LIST_NAME}, Type of Chair:{" "}
                  {candidate.TYPE_OF_CHAIR}, Votes: {candidate.COUNT_OF_VOTES}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Special Seats</h2>
        {Object.entries(stats.specialSeats).map(([circleId, candidates]) => (
          <div key={circleId} className="mb-4">
            <h3 className="text-lg font-semibold">Circle ID: {circleId}</h3>
            <ul>
              {candidates.map((candidate, index) => (
                <li key={index} className="mb-2">
                  <strong>{candidate.FULL_NAME}</strong> - Type of Chair:{" "}
                  {candidate.TYPE_OF_CHAIR}, Votes: {candidate.COUNT_OF_VOTES}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//   const [stats, setStats] = useState({
//     localVoteCount: 0,
//     listsInfo: [],
//     candidatesInfo: [],
//     votingRateByCircle: [],
//     thresholdByCircle: []
//   });

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/stats');
//         setStats(response.data);
//       } catch (error) {
//         console.error('Error fetching stats:', error);
//       }
//     };

//     fetchStats();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

//       <section className="mb-8">
//         <h2 className="text-xl font-semibold mb-2">Local Vote Count</h2>
//         <p>{stats.localVoteCount} users have local vote</p>
//       </section>

//       <section className="mb-8">
//         <h2 className="text-xl font-semibold mb-2">Local Lists</h2>
//         <ul>
//           {stats.listsInfo.map((list, index) => (
//             <li key={index} className="mb-2">
//               <strong>{list.LIST_NAME}</strong> - Circle ID: {list.CIRCLE_ID}, Votes: {list.COUNT_OF_VOTES}
//             </li>
//           ))}
//         </ul>
//       </section>

//       <section className="mb-8">
//         <h2 className="text-xl font-semibold mb-2">Local Candidates</h2>
//         <ul>
//           {stats.candidatesInfo.map((candidate, index) => (
//             <li key={index} className="mb-2">
//               <strong>{candidate.FULL_NAME}</strong> - Votes: {candidate.COUNT_OF_VOTES}
//             </li>
//           ))}
//         </ul>
//       </section>

//       <section className="mb-8">
//         <h2 className="text-xl font-semibold mb-2">Voting Rate by Circle</h2>
//         <ul>
//           {stats.votingRateByCircle.map((circle, index) => (
//             <li key={index} className="mb-2">
//               Circle ID: {circle.circleId} - Voting Rate: {circle.votingRate.toFixed(2)}%
//             </li>
//           ))}
//         </ul>
//       </section>

//       <section className="mb-8">
//         <h2 className="text-xl font-semibold mb-2">Threshold by Circle</h2>
//         <ul>
//           {stats.thresholdByCircle.map((circle, index) => (
//             <li key={index} className="mb-2">
//               Circle ID: {circle.circleId} - Threshold: {circle.threshold.toFixed(2)}
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Dashboard;

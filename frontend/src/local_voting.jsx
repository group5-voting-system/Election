// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import candidate from './assets/candidate.jpg';

// const VotingCandidatesGrid = () => {
//   const [selectedList, setSelectedList] = useState(false);
//   const [selectedCandidates, setSelectedCandidates] = useState({});

//   const candidates = Array(10).fill().map((_, i) => ({
//     id: i + 1,
//     name: 'آية الله فريحات',
//     image: candidate
//   }
// ));

//   const handleListCheck = () => {
//     setSelectedList(prev => !prev);
//   };

//   const handleSelectAll = () => {
//     const allSelected = Object.values(selectedCandidates).every(Boolean);
//     const newSelectedCandidates = {};
//     candidates.forEach(candidate => {
//       newSelectedCandidates[candidate.id] = !allSelected;
//     });
//     setSelectedCandidates(newSelectedCandidates);
//   };

//   const handleCandidateCheck = (id) => {
//     setSelectedCandidates(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   return (
//     <div className="min-h-screen text-white p-4 flex flex-col items-center">
//       <div className="bg-white text-gray-900 rounded-lg shadow-lg w-full max-w-4xl">
//         <div className="bg-black text-white py-2 px-4 rounded-t-lg flex items-center justify-between">
//           <label className="flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="hidden"
//               checked={selectedList}
//               onChange={handleListCheck}
//             />
//             <div
//               className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedList ? 'bg-green-600' : 'bg-white'} relative`}
//             >
//               {selectedList && (
//                 <svg
//                   className="w-4 h-4 text-white absolute"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               )}
//             </div>
//             <span className="text-xl font-semibold ml-2">قائمة نمو</span>
//           </label>
//         </div>
        
//         <div className="flex justify-between items-center w-full max-w-4xl mt-6">
//           <button className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200">
//             <ChevronLeft size={24} />
//           </button>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 flex-grow">
//             {candidates.map(candidate => (
//               <div key={candidate.id} className="flex flex-col items-center">
//                 <div className="relative">
//                   <img src={candidate.image} alt={candidate.name} className="w-20 h-20 rounded-full" />
//                 </div>
//                 <div className="mt-2 flex items-center">
//                   <input
//                     type="checkbox"
//                     className="hidden"
//                     checked={selectedCandidates[candidate.id] || false}
//                     onChange={() => handleCandidateCheck(candidate.id)}
//                   />
//                   <div
//                     className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedCandidates[candidate.id] ? 'bg-green-600' : 'bg-white'} relative cursor-pointer`}
//                     onClick={() => handleCandidateCheck(candidate.id)}
//                   >
//                     {selectedCandidates[candidate.id] && (
//                       <svg
//                         className="w-4 h-4 text-white absolute"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     )}
//                   </div>
//                   <p className="text-sm font-medium ml-2">{candidate.name}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200">
//             <ChevronRight size={24} />
//           </button>
//         </div>
        
//         <div className="p-4 border-t border-gray-200">
//           <button
//             onClick={handleSelectAll}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-2"
//           >
//             اختيار الكل
//           </button>
//           <button
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
//           >
//             صوّت الآن
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VotingCandidatesGrid;



// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import axios from 'axios';
// const listIdData = await axios.get('http://localhost:5000/api/local-lists/');
// const listId = Object.keys(listIdData.data).length
// const VotingCandidatesGrid = ({ listId }) => {
//   const [selectedList, setSelectedList] = useState(false);
//   const [selectedCandidates, setSelectedCandidates] = useState({});
//   const [candidates, setCandidates] = useState([]);
//   const [listName, setListName] = useState('');
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const listResponse = await axios.get(`http://localhost:5000/api/local-lists/${listId}`);
//         setListName(listResponse.data.LIST_NAME);

//         const candidatesResponse = await axios.get(`http://localhost:5000/api/local-candidats/${listId}`);
//         setCandidates(candidatesResponse.data.candidates);
//         setTotalPages(candidatesResponse.data.totalPages);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [listId, page]);

//   const handleListCheck = async () => {
//     setSelectedList(prev => !prev);
//     if (!selectedList) {
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: 1 });
//     } else {
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: -1 });
//     }
//   };

//   const handleSelectAll = async () => {
//     const allSelected = Object.values(selectedCandidates).every(Boolean);
//     const newSelectedCandidates = {};
//     candidates.forEach(candidate => {
//       newSelectedCandidates[candidate.id] = !allSelected;
//     });
//     setSelectedCandidates(newSelectedCandidates);
//     const voteCount = allSelected ? -1 : 1;
//     await axios.patch(`/api/lists/${listId}`, { COUNT_OF_VOTES: voteCount * (candidates.length) });
//   };

//   const handleCandidateCheck = async (id) => {
//     const updatedSelection = { ...selectedCandidates, [id]: !selectedCandidates[id] };
//     setSelectedCandidates(updatedSelection);

//     const selectedCount = Object.values(updatedSelection).filter(Boolean).length;
//     await axios.patch(`http://localhost:5000/api/local-candidates/${id}`, { COUNT_OF_VOTES: selectedCount });

//     const voteCount = updatedSelection[id] ? 1 : -1;
//     await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount });
//   };

//   const handlePageChange = (direction) => {
//     setPage(prevPage => {
//       const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
//       return newPage >= 1 && newPage <= totalPages ? newPage : prevPage;
//     });
//   };

//   return (
//     <div className="min-h-screen text-white p-4 flex flex-col items-center">
//       <div className="bg-white text-gray-900 rounded-lg shadow-lg w-full max-w-4xl">
//         <div className="bg-black text-white py-2 px-4 rounded-t-lg flex items-center justify-between">
//           <label className="flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="hidden"
//               checked={selectedList}
//               onChange={handleListCheck}
//             />
//             <div
//               className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedList ? 'bg-green-600' : 'bg-white'} relative`}
//             >
//               {selectedList && (
//                 <svg
//                   className="w-4 h-4 text-white absolute"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               )}
//             </div>
//             <span className="text-xl font-semibold ml-2">{listName}</span>
//           </label>
//         </div>
        
//         <div className="flex justify-between items-center w-full max-w-4xl mt-6">
//           <button
//             onClick={() => handlePageChange('prev')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={page === 1}
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 flex-grow">
//             {candidates.map(candidate => (
//               <div key={candidate.id} className="flex flex-col items-center">
//                 <div className="relative">
//                   <img src={candidate.image} alt={candidate.name} className="w-20 h-20 rounded-full" />
//                 </div>
//                 <div className="mt-2 flex items-center">
//                   <input
//                     type="checkbox"
//                     className="hidden"
//                     checked={selectedCandidates[candidate.id] || false}
//                     onChange={() => handleCandidateCheck(candidate.id)}
//                   />
//                   <div
//                     className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedCandidates[candidate.id] ? 'bg-green-600' : 'bg-white'} relative cursor-pointer`}
//                     onClick={() => handleCandidateCheck(candidate.id)}
//                   >
//                     {selectedCandidates[candidate.id] && (
//                       <svg
//                         className="w-4 h-4 text-white absolute"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     )}
//                   </div>
//                   <p className="text-sm font-medium ml-2">{candidate.name}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={() => handlePageChange('next')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={page === totalPages}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
        
//         <div className="p-4 border-t border-gray-200">
//           <button
//             onClick={handleSelectAll}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-2"
//           >
//             اختيار الكل
//           </button>
//           <button
//             onClick={() => alert('صوّت الآن')}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
//           >
//             صوّت الآن
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VotingCandidatesGrid;





// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import axios from 'axios';

// const VotingCandidatesGrid = () => {
//   const [selectedList, setSelectedList] = useState(false);
//   const [selectedCandidates, setSelectedCandidates] = useState({});
//   const [candidates, setCandidates] = useState([]);
//   const [listName, setListName] = useState('');
//   const [listId, setListId] = useState(null);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         // Fetch listId
//         const listIdResponse = await axios.get('http://localhost:5000/api/local-lists/');
//         const id = Object.keys(listIdResponse.data).length;
//         setListId(id);

//         // Fetch list name
//         const listResponse = await axios.get(`http://localhost:5000/api/local-lists/${id}`);
//         setListName(listResponse.data.LIST_NAME);

//         // Fetch candidates
//         const candidatesResponse = await axios.get(`http://localhost:5000/api/local-candidats/${id}?page=${page}`);
//         setCandidates(candidatesResponse.data.candidates);
//         setTotalPages(candidatesResponse.data.totalPages);
//       } catch (error) {
//         setError('Error fetching data.');
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [page]);

//   const handleListCheck = async () => {
//     setSelectedList(prev => !prev);
//     if (!selectedList) {
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: 1 });
//     } else {
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: -1 });
//     }
//   };

//   const handleSelectAll = async () => {
//     const allSelected = Object.values(selectedCandidates).every(Boolean);
//     const newSelectedCandidates = {};
//     candidates.forEach(candidate => {
//       newSelectedCandidates[candidate.id] = !allSelected;
//     });
//     setSelectedCandidates(newSelectedCandidates);
//     const voteCount = allSelected ? -1 : 1;
//     await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount * candidates.length });
//   };

//   const handleCandidateCheck = async (id) => {
//     const updatedSelection = { ...selectedCandidates, [id]: !selectedCandidates[id] };
//     setSelectedCandidates(updatedSelection);

//     const selectedCount = Object.values(updatedSelection).filter(Boolean).length;
//     await axios.patch(`http://localhost:5000/api/local-candidats/${id}`, { COUNT_OF_VOTES: selectedCount });

//     const voteCount = updatedSelection[id] ? 1 : -1;
//     await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount });
//   };

//   const handlePageChange = (direction) => {
//     setPage(prevPage => {
//       const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
//       return newPage >= 1 && newPage <= totalPages ? newPage : prevPage;
//     });
//   };

//   if (loading) {
//     return <div>Loading data...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="min-h-screen text-white p-4 flex flex-col items-center">
//       <div className="bg-white text-gray-900 rounded-lg shadow-lg w-full max-w-4xl">
//         <div className="bg-black text-white py-2 px-4 rounded-t-lg flex items-center justify-between">
//           <label className="flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="hidden"
//               checked={selectedList}
//               onChange={handleListCheck}
//             />
//             <div
//               className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedList ? 'bg-green-600' : 'bg-white'} relative`}
//             >
//               {selectedList && (
//                 <svg
//                   className="w-4 h-4 text-white absolute"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               )}
//             </div>
//             <span className="text-xl font-semibold ml-2">{listName}</span>
//           </label>
//         </div>
        
//         <div className="flex justify-between items-center w-full max-w-4xl mt-6">
//           <button
//             onClick={() => handlePageChange('prev')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={page === 1}
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 flex-grow">
//             {candidates.map(candidate => (
//               <div key={candidate.id} className="flex flex-col items-center">
//                 <div className="relative">
//                   <img src={candidate.image} alt={candidate.name} className="w-20 h-20 rounded-full" />
//                 </div>
//                 <div className="mt-2 flex items-center">
//                   <input
//                     type="checkbox"
//                     className="hidden"
//                     checked={selectedCandidates[candidate.id] || false}
//                     onChange={() => handleCandidateCheck(candidate.id)}
//                   />
//                   <div
//                     className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedCandidates[candidate.id] ? 'bg-green-600' : 'bg-white'} relative cursor-pointer`}
//                     onClick={() => handleCandidateCheck(candidate.id)}
//                   >
//                     {selectedCandidates[candidate.id] && (
//                       <svg
//                         className="w-4 h-4 text-white absolute"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     )}
//                   </div>
//                   <p className="text-sm font-medium ml-2">{candidate.name}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={() => handlePageChange('next')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={page === totalPages}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
        
//         <div className="p-4 border-t border-gray-200">
//           <button
//             onClick={handleSelectAll}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-2"
//           >
//             اختيار الكل
//           </button>
//           <button
//             onClick={() => alert('صوّت الآن')}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
//           >
//             صوّت الآن
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VotingCandidatesGrid;






// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import axios from 'axios';

// const VotingCandidatesGrid = () => {
//   const [selectedList, setSelectedList] = useState(false);
//   const [selectedCandidates, setSelectedCandidates] = useState({});
//   const [candidates, setCandidates] = useState([]);
//   const [listName, setListName] = useState('');
//   const [listId, setListId] = useState(null);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         // Fetch list data
//         const listIdResponse = await axios.get('http://localhost:5000/api/local-lists/');
//         const ids = Object.keys(listIdResponse.data);
        
//         if (ids.length > 0) {
//           const id = ids[0]; // Use the first id as an example
//           setListId(id);

//           // Fetch list name
//           const listResponse = await axios.get(`http://localhost:5000/api/local-lists/${id}`);
//           setListName(listResponse.data.LIST_NAME);

//           // Fetch candidates for the list
//           const candidatesResponse = await axios.get(`http://localhost:5000/api/local-candidats/${id}?page=${page}`);
//           setCandidates(candidatesResponse.data.candidates);
//           setTotalPages(candidatesResponse.data.totalPages);
//         } else {
//           setError('No lists available.');
//         }
//       } catch (error) {
//         setError('Error fetching data.');
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [page]);

//   const handleListCheck = async () => {
//     setSelectedList(prev => !prev);
//     if (!selectedList) {
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: 1 });
//     } else {
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: -1 });
//     }
//   };

//   const handleSelectAll = async () => {
//     const allSelected = Object.values(selectedCandidates).every(Boolean);
//     const newSelectedCandidates = {};
//     candidates.forEach(candidate => {
//       newSelectedCandidates[candidate.id] = !allSelected;
//     });
//     setSelectedCandidates(newSelectedCandidates);
//     const voteCount = allSelected ? -1 : 1;
//     await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount * candidates.length });
//   };

//   const handleCandidateCheck = async (id) => {
//     const updatedSelection = { ...selectedCandidates, [id]: !selectedCandidates[id] };
//     setSelectedCandidates(updatedSelection);

//     const selectedCount = Object.values(updatedSelection).filter(Boolean).length;
//     await axios.patch(`http://localhost:5000/api/local-candidats/${id}`, { COUNT_OF_VOTES: selectedCount });

//     const voteCount = updatedSelection[id] ? 1 : -1;
//     await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount });
//   };

//   const handlePageChange = (direction) => {
//     setPage(prevPage => {
//       const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
//       return newPage >= 1 && newPage <= totalPages ? newPage : prevPage;
//     });
//   };

//   if (loading) {
//     return <div>Loading data...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="min-h-screen text-white p-4 flex flex-col items-center">
//       <div className="bg-white text-gray-900 rounded-lg shadow-lg w-full max-w-4xl">
//         <div className="bg-black text-white py-2 px-4 rounded-t-lg flex items-center justify-between">
//           <label className="flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="hidden"
//               checked={selectedList}
//               onChange={handleListCheck}
//             />
//             <div
//               className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedList ? 'bg-green-600' : 'bg-white'} relative`}
//             >
//               {selectedList && (
//                 <svg
//                   className="w-4 h-4 text-white absolute"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               )}
//             </div>
//             <span className="text-xl font-semibold ml-2">{listName}</span>
//           </label>
//         </div>
        
//         <div className="flex justify-between items-center w-full max-w-4xl mt-6">
//           <button
//             onClick={() => handlePageChange('prev')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={page === 1}
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 flex-grow">
//             {candidates.map(candidate => (
//               <div key={candidate.id} className="flex flex-col items-center">
//                 <div className="relative">
//                   <img src={candidate.image} alt={candidate.name} className="w-20 h-20 rounded-full" />
//                 </div>
//                 <div className="mt-2 flex items-center">
//                   <input
//                     type="checkbox"
//                     className="hidden"
//                     checked={selectedCandidates[candidate.id] || false}
//                     onChange={() => handleCandidateCheck(candidate.id)}
//                   />
//                   <div
//                     className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedCandidates[candidate.id] ? 'bg-green-600' : 'bg-white'} relative cursor-pointer`}
//                     onClick={() => handleCandidateCheck(candidate.id)}
//                   >
//                     {selectedCandidates[candidate.id] && (
//                       <svg
//                         className="w-4 h-4 text-white absolute"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     )}
//                   </div>
//                   <p className="text-sm font-medium ml-2">{candidate.name}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={() => handlePageChange('next')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={page === totalPages}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
        
//         <div className="p-4 border-t border-gray-200">
//           <button
//             onClick={handleSelectAll}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-2"
//           >
//             اختيار الكل
//           </button>
//           <button
//             onClick={() => alert('صوّت الآن')}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
//           >
//             صوّت الآن
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VotingCandidatesGrid;




// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import axios from 'axios';

// const VotingCandidatesGrid = () => {
//   const [selectedList, setSelectedList] = useState(false);
//   const [selectedCandidates, setSelectedCandidates] = useState({});
//   const [candidates, setCandidates] = useState([]);
//   const [listName, setListName] = useState('');
//   const [listIds, setListIds] = useState([]);
//   const [listId, setListId] = useState(null);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchListIds = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/local-lists/');
//         console.log(Object.keys(response.data))
//         const ids = Object.keys(response.data).map(item => item.LIST_ID);
//         setListIds(ids);
//         if (ids.length > 0) {
//           setListId(ids[0]); //  the initial listId to the first item
//         }
//       } catch (error) {
//         setError('Error fetching list IDs.');
//         console.error('Error fetching list IDs:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchListIds();
//   }, []);

//   useEffect(() => {
//     if (listId === null) return;

//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const listResponse = await axios.get(`http://localhost:5000/api/local-lists/${listId}`);
//         setListName(listResponse.data.LIST_NAME);

//         const candidatesResponse = await axios.get(`http://localhost:5000/api/local-candidats/${listId}?page=${page}`);
//         setCandidates(candidatesResponse.data.candidates);
//         setTotalPages(candidatesResponse.data.totalPages);
//       } catch (error) {
//         setError('Error fetching data.');
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [listId, page]);

//   const handleListCheck = async () => {
//     setSelectedList(prev => !prev);
//     if (!selectedList) {
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: 1 });
//     } else {
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: -1 });
//     }
//   };

//   const handleSelectAll = async () => {
//     const allSelected = Object.values(selectedCandidates).every(Boolean);
//     const newSelectedCandidates = {};
//     candidates.forEach(candidate => {
//       newSelectedCandidates[candidate.id] = !allSelected;
//     });
//     setSelectedCandidates(newSelectedCandidates);
//     const voteCount = allSelected ? -1 : 1;
//     await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount * candidates.length });
//   };

//   const handleCandidateCheck = async (id) => {
//     const updatedSelection = { ...selectedCandidates, [id]: !selectedCandidates[id] };
//     setSelectedCandidates(updatedSelection);

//     const selectedCount = Object.values(updatedSelection).filter(Boolean).length;
//     await axios.patch(`http://localhost:5000/api/local-candidats/${id}`, { COUNT_OF_VOTES: selectedCount });

//     const voteCount = updatedSelection[id] ? 1 : -1;
//     await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount });
//   };

//   const handlePageChange = (direction) => {
//     setPage(prevPage => {
//       const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
//       return newPage >= 1 && newPage <= totalPages ? newPage : prevPage;
//     });
//   };

//   if (loading) {
//     return <div>Loading data...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (listIds.length === 0) {
//     return <div>No lists available.</div>;
//   }

//   return (
//     <div className="min-h-screen text-white p-4 flex flex-col items-center">
//       <div className="bg-white text-gray-900 rounded-lg shadow-lg w-full max-w-4xl">
//         <div className="bg-black text-white py-2 px-4 rounded-t-lg flex items-center justify-between">
//           <label className="flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="hidden"
//               checked={selectedList}
//               onChange={handleListCheck}
//             />
//             <div
//               className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedList ? 'bg-green-600' : 'bg-white'} relative`}
//             >
//               {selectedList && (
//                 <svg
//                   className="w-4 h-4 text-white absolute"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               )}
//             </div>
//             <span className="text-xl font-semibold ml-2">{listName}</span>
//           </label>
//         </div>
        
//         <div className="flex justify-between items-center w-full max-w-4xl mt-6">
//           <button
//             onClick={() => handlePageChange('prev')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={page === 1}
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 flex-grow">
//             {candidates.map(candidate => (
//               <div key={candidate.id} className="flex flex-col items-center">
//                 <div className="relative">
//                   <img src={candidate.image} alt={candidate.name} className="w-20 h-20 rounded-full" />
//                 </div>
//                 <div className="mt-2 flex items-center">
//                   <input
//                     type="checkbox"
//                     className="hidden"
//                     checked={selectedCandidates[candidate.id] || false}
//                     onChange={() => handleCandidateCheck(candidate.id)}
//                   />
//                   <div
//                     className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedCandidates[candidate.id] ? 'bg-green-600' : 'bg-white'} relative cursor-pointer`}
//                     onClick={() => handleCandidateCheck(candidate.id)}
//                   >
//                     {selectedCandidates[candidate.id] && (
//                       <svg
//                         className="w-4 h-4 text-white absolute"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     )}
//                   </div>
//                   <p className="text-sm font-medium ml-2">{candidate.name}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={() => handlePageChange('next')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={page === totalPages}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
        
//         <div className="p-4 border-t border-gray-200">
//           <button
//             onClick={handleSelectAll}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-2"
//           >
//             اختيار الكل
//           </button>
//           <button
//             onClick={() => alert('صوّت الآن')}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
//           >
//             صوّت الآن
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VotingCandidatesGrid;




// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import axios from 'axios';

// const VotingCandidatesGrid = () => {
//   const [selectedList, setSelectedList] = useState(false);
//   const [selectedCandidates, setSelectedCandidates] = useState({});
//   const [candidates, setCandidates] = useState([]);
//   const [listName, setListName] = useState('');
//   const [listIds, setListIds] = useState([]);
//   const [listId, setListId] = useState(null);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchListIds = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/local-lists/');
//         console.log(Object.keys(response.data)); // Log the response to understand its structure
//         const ids = Object.keys(response.data).map(item => item);
//         setListIds(ids);
//         console.log(listIds)
//         if (ids.length > 0) {
//           setListId(ids[0]); // Set the initial listId to the first item
//         }
//       } catch (error) {
//         setError('Error fetching list IDs.');
//         console.error('Error fetching list IDs:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchListIds();
//   }, []);

//   useEffect(() => {
//     if (listId === null) return;

//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const listResponse = await axios.get(`http://localhost:5000/api/local-lists/${listId}`);
//         setListName(listResponse.data.LIST_NAME);

//         const candidatesResponse = await axios.get(`http://localhost:5000/api/local-candidats/${listId}?page=${page}`);
//         setCandidates(candidatesResponse.data.candidates);
//         setTotalPages(candidatesResponse.data.totalPages);
//       } catch (error) {
//         setError('Error fetching data.');
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [listId, page]);

//   const handleListCheck = async () => {
//     setSelectedList(prev => !prev);
//     if (!selectedList) {
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: 1 });
//     } else {
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: -1 });
//     }
//   };

//   const handleSelectAll = async () => {
//     const allSelected = Object.keys(selectedCandidates).every(Boolean);
//     const newSelectedCandidates = {};
//     candidates.forEach(candidate => {
//       newSelectedCandidates[candidate.id] = !allSelected;
//     });
//     setSelectedCandidates(newSelectedCandidates);
//     const voteCount = allSelected ? -1 : 1;
//     await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount * candidates.length });
//   };

//   const handleCandidateCheck = async (id) => {
//     const updatedSelection = { ...selectedCandidates, [id]: !selectedCandidates[id] };
//     setSelectedCandidates(updatedSelection);

//     const selectedCount = Object.keys(updatedSelection).filter(Boolean).length;
//     await axios.patch(`http://localhost:5000/api/local-candidats/${id}`, { COUNT_OF_VOTES: selectedCount });

//     const voteCount = updatedSelection[id] ? 1 : -1;
//     await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount });
//   };

//   const handlePageChange = (direction) => {
//     setPage(prevPage => {
//       const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
//       return newPage >= 1 && newPage <= totalPages ? newPage : prevPage;
//     });
//   };

//   if (loading) {
//     return <div>Loading data...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (listIds.length === 0) {
//     return <div>No lists available.</div>;
//   }

//   return (
//     <div className="min-h-screen text-white p-4 flex flex-col items-center">
//       <div className="bg-white text-gray-900 rounded-lg shadow-lg w-full max-w-4xl">
//         <div className="bg-black text-white py-2 px-4 rounded-t-lg flex items-center justify-between">
//           <label className="flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="hidden"
//               checked={selectedList}
//               onChange={handleListCheck}
//             />
//             <div
//               className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedList ? 'bg-green-600' : 'bg-white'} relative`}
//             >
//               {selectedList && (
//                 <svg
//                   className="w-4 h-4 text-white absolute"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               )}
//             </div>
//             <span className="text-xl font-semibold ml-2">{listName}</span>
//           </label>
//         </div>
        
//         <div className="flex justify-between items-center w-full max-w-4xl mt-6">
//           <button
//             onClick={() => handlePageChange('prev')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={page === 1}
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 flex-grow">
//             {candidates.map(candidate => (
//               <div key={candidate.id} className="flex flex-col items-center">
//                 <div className="relative">
//                   <img src={candidate.image} alt={candidate.name} className="w-20 h-20 rounded-full" />
//                 </div>
//                 <div className="mt-2 flex items-center">
//                   <input
//                     type="checkbox"
//                     className="hidden"
//                     checked={selectedCandidates[candidate.id] || false}
//                     onChange={() => handleCandidateCheck(candidate.id)}
//                   />
//                   <div
//                     className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedCandidates[candidate.id] ? 'bg-green-600' : 'bg-white'} relative cursor-pointer`}
//                     onClick={() => handleCandidateCheck(candidate.id)}
//                   >
//                     {selectedCandidates[candidate.id] && (
//                       <svg
//                         className="w-4 h-4 text-white absolute"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     )}
//                   </div>
//                   <p className="text-sm font-medium ml-2">{candidate.name}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={() => handlePageChange('next')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={page === totalPages}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
        
//         <div className="p-4 border-t border-gray-200">
//           <button
//             onClick={handleSelectAll}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-2"
//           >
//             اختيار الكل
//           </button>
//           <button
//             onClick={() => alert('صوّت الآن')}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
//           >
//             صوّت الآن
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VotingCandidatesGrid;





// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import axios from 'axios';

// const VotingCandidatesGrid = () => {
//   const [selectedList, setSelectedList] = useState(false);
//   const [selectedCandidates, setSelectedCandidates] = useState({});
//   const [candidates, setCandidates] = useState([]);
//   const [listName, setListName] = useState('');
//   const [listIds, setListIds] = useState([]);
//   const [listId, setListId] = useState(null);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchListIds = async () => {
//       try {
    
//         const response = await axios.get('http://localhost:5000/api/local-lists/');
// console.log(response.data);

// const listIdsArray = response.data.map(item => item.LIST_ID);

// listIdsArray.sort((a, b) => a - b);

// console.log(listIdsArray);
//         const ids = Object.values(response.data);
//         console.log(ids)
//         if (ids.length > 0) {
              
//           setListId(ids[0]); 
//           console.log(ids[0])
//         }
//       } catch (error) {
//         setError('Error fetching list IDs.');
//         console.error('Error fetching list IDs:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchListIds();
//   }, []);

//   useEffect(() => {
//     if (listId === null) return;

//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         // console.log(listId)
//         const listResponse = await axios.get(`http://localhost:5000/api/local-lists/${listId}`);
//         setListName(listResponse.data.LIST_NAME);

//         const candidatesResponse = await axios.get(`http://localhost:5000/api/local-candidats/${listId}?page=${page}`);
//         setCandidates(candidatesResponse.data.candidates);
//         setTotalPages(candidatesResponse.data.totalPages);
//       } catch (error) {
//         setError('Error fetching data.');
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [listId, page]);

//   const handleListCheck = async () => {
//     try {
//       setSelectedList(prev => !prev);
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, {
//         COUNT_OF_VOTES: selectedList ? -1 : 1
//       });
//     } catch (error) {
//       console.error('Error updating list votes:', error);
//       setError('Error updating list votes.');
//     }
//   };

//   const handleSelectAll = async () => {
//     try {
//       const allSelected = Object.keys(selectedCandidates).every(Boolean);
//       const newSelectedCandidates = {};
//       candidates.forEach(candidate => {
//         newSelectedCandidates[candidate.id] = !allSelected;
//       });
//       setSelectedCandidates(newSelectedCandidates);

//       const voteCount = allSelected ? -1 : 1;
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount * candidates.length });
//     } catch (error) {
//       console.error('Error selecting all candidates:', error);
//       setError('Error selecting all candidates.');
//     }
//   };

//   const handleCandidateCheck = async (id) => {
//     try {
//       const updatedSelection = { ...selectedCandidates, [id]: !selectedCandidates[id] };
//       setSelectedCandidates(updatedSelection);

//       const selectedCount = Object.keys(updatedSelection).filter(key => updatedSelection[key]).length;
//       await axios.patch(`http://localhost:5000/api/local-candidats/${id}`, { COUNT_OF_VOTES: selectedCount });

//       const voteCount = updatedSelection[id] ? 1 : -1;
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount });
//     } catch (error) {
//       console.error('Error updating candidate votes:', error);
//       setError('Error updating candidate votes.');
//     }
//   };

//   const handlePageChange = (direction) => {
//     setPage(prevPage => {
//       const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
//       return newPage >= 1 && newPage <= totalPages ? newPage : prevPage;
//     });
//   };

//   if (loading) {
//     return <div>Loading data...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (listIds.length === 0) {
//     return <div>No lists available.</div>;
//   }

//   return (
//     <div className="min-h-screen text-white p-4 flex flex-col items-center">
//       <div className="bg-white text-gray-900 rounded-lg shadow-lg w-full max-w-4xl">
//         <div className="bg-black text-white py-2 px-4 rounded-t-lg flex items-center justify-between">
//           <label className="flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="hidden"
//               checked={selectedList}
//               onChange={handleListCheck}
//             />
//             <div
//               className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedList ? 'bg-green-600' : 'bg-white'} relative`}
//             >
//               {selectedList && (
//                 <svg
//                   className="w-4 h-4 text-white absolute"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               )}
//             </div>
//             <span className="text-xl font-semibold ml-2">{listName}</span>
//           </label>
//         </div>
        
//         <div className="flex justify-between items-center w-full max-w-4xl mt-6">
//           <button
//             onClick={() => handlePageChange('prev')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={page === 1}
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 flex-grow">
//             {candidates.map(candidate => (
//               <div key={candidate.id} className="flex flex-col items-center">
//                 <div className="relative">
//                   <img src={candidate.image} alt={candidate.name} className="w-20 h-20 rounded-full" />
//                 </div>
//                 <div className="mt-2 flex items-center">
//                   <input
//                     type="checkbox"
//                     className="hidden"
//                     checked={selectedCandidates[candidate.id] || false}
//                     onChange={() => handleCandidateCheck(candidate.id)}
//                   />
//                   <div
//                     className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedCandidates[candidate.id] ? 'bg-green-600' : 'bg-white'} relative cursor-pointer`}
//                     onClick={() => handleCandidateCheck(candidate.id)}
//                   >
//                     {selectedCandidates[candidate.id] && (
//                       <svg
//                         className="w-4 h-4 text-white absolute"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     )}
//                   </div>
//                   <p className="text-sm font-medium ml-2">{candidate.name}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={() => handlePageChange('next')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={page === totalPages}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
        
//         <div className="p-4 border-t border-gray-200">
//           <button
//             onClick={handleSelectAll}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-2"
//           >
//             اختيار الكل
//           </button>
//           <button
//             onClick={() => alert('صوّت الآن')}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
//           >
//             صوّت الآن
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VotingCandidatesGrid;






// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import axios from 'axios';

// const VotingCandidatesGrid = () => {
//   const [selectedList, setSelectedList] = useState(false);
//   const [selectedCandidates, setSelectedCandidates] = useState([]);
//   const [candidates, setCandidates] = useState({});
//   const [listName, setListName] = useState('');
//   const [listIds, setListIds] = useState([]);
//   const [listId, setListId] = useState(null);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchListIds = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/local-lists/');
//         console.log(response.data);

//         const listIdsArray = response.data.map(item => item.LIST_ID).sort((a, b) => a - b);

//         console.log(listIdsArray);

//         setListIds(listIdsArray);

//         if (listIdsArray.length > 0) {
//           setListId(listIdsArray[0]); 
//           console.log(listId);
//         }
//       } catch (error) {
//         setError('Error fetching list IDs.');
//         console.error('Error fetching list IDs:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchListIds();
//   }, []);

//   useEffect(() => {
//     if (listId === null) return;

//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const listResponse = await axios.get(`http://localhost:5000/api/local-lists/${listId}`);
//         setListName(listResponse.data.LIST_NAME);

//         const candidatesResponse = await axios.get(`http://localhost:5000/api/local-candidates/${listId}`);
//         setCandidates(candidatesResponse.data);
//         console.log(candidatesResponse.data)
//         setTotalPages(candidatesResponse.data.totalPages);
//       } catch (error) {
//         setError('Error fetching data.');
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [listId, page]);

//   const handleListCheck = async () => {
//     try {
//       setSelectedList(prev => !prev);
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, {
//         COUNT_OF_VOTES: selectedList ? -1 : 1
//       });
//     } catch (error) {
//       console.error('Error updating list votes:', error);
//       setError('Error updating list votes.');
//     }
//   };

//   const handleSelectAll = async () => {
//     try {
//       const allSelected = Object.keys(selectedCandidates).every(key => selectedCandidates[key]);
//       const newSelectedCandidates = {};
//       candidates.forEach(candidate => {
//         newSelectedCandidates[candidate.id] = !allSelected;
//       });
//       setSelectedCandidates(newSelectedCandidates);

//       const voteCount = allSelected ? -1 : 1;
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount * candidates.length });
//     } catch (error) {
//       console.error('Error selecting all candidates:', error);
//       setError('Error selecting all candidates.');
//     }
//   };

//   const handleCandidateCheck = async (id) => {
//     try {
//       const updatedSelection = { ...selectedCandidates, [id]: !selectedCandidates[id] };
//       setSelectedCandidates(updatedSelection);

//       const selectedCount = Object.keys(updatedSelection).filter(key => updatedSelection[key]).length;
//       await axios.patch(`http://localhost:5000/api/local-candidats/${id}`, { COUNT_OF_VOTES: selectedCount });

//       const voteCount = updatedSelection[id] ? 1 : -1;
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount });
//     } catch (error) {
//       console.error('Error updating candidate votes:', error);
//       setError('Error updating candidate votes.');
//     }
//   };

//   const handlePageChange = (direction) => {
//     setPage(prevPage => {
//       const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
//       return newPage >= 1 && newPage <= totalPages ? newPage : prevPage;
//     });
//   };

//   if (loading) {
//     return <div>Loading data...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (listIds.length === 0) {
//     return <div>No lists available.</div>;
//   }

//   return (
//     <div className="min-h-screen text-white p-4 flex flex-col items-center">
//       <div className="bg-white text-gray-900 rounded-lg shadow-lg w-full max-w-4xl">
//         <div className="bg-black text-white py-2 px-4 rounded-t-lg flex items-center justify-between">
//           <label className="flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="hidden"
//               checked={selectedList}
//               onChange={handleListCheck}
//             />
//             <div
//               className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedList ? 'bg-green-600' : 'bg-white'} relative`}
//             >
//               {selectedList && (
//                 <svg
//                   className="w-4 h-4 text-white absolute"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               )}
//             </div>
//             <span className="text-xl font-semibold ml-2">{listName}</span>
//           </label>
//         </div>
        
//         <div className="flex justify-between items-center w-full max-w-4xl mt-6">
//           <button
//             onClick={() => handlePageChange('prev')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={page === 1}
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 flex-grow">
//             {candidates.map(candidate => (
//               <div key={candidate.id} className="flex flex-col items-center">
//                 <div className="relative">
//                   <img src={candidate.image} alt={candidate.name} className="w-20 h-20 rounded-full" />
//                 </div>
//                 <div className="mt-2 flex items-center">
//                   <input
//                     type="checkbox"
//                     className="hidden"
//                     checked={selectedCandidates[candidate.id] || false}
//                     onChange={() => handleCandidateCheck(candidate.id)}
//                   />
//                   <div
//                     className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedCandidates[candidate.id] ? 'bg-green-600' : 'bg-white'} relative cursor-pointer`}
//                     onClick={() => handleCandidateCheck(candidate.id)}
//                   >
//                     {selectedCandidates[candidate.id] && (
//                       <svg
//                         className="w-4 h-4 text-white absolute"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     )}
//                   </div>
//                   <p className="text-sm font-medium ml-2">{candidate.name}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={() => handlePageChange('next')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={page === totalPages}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
        
//         <div className="p-4 border-t border-gray-200">
//           <button
//             onClick={handleSelectAll}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-2"
//           >
//             اختيار الكل
//           </button>
//           <button
//             onClick={() => alert('صوّت الآن')}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
//           >
//             صوّت الآن
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VotingCandidatesGrid;




// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import axios from 'axios';

// const VotingCandidatesGrid = () => {
//   const [selectedList, setSelectedList] = useState(false);
//   const [selectedCandidates, setSelectedCandidates] = useState({});
//   const [candidates, setCandidates] = useState([]);
//   const [listName, setListName] = useState('');
//   const [listIds, setListIds] = useState([]);
//   const [listId, setListId] = useState(null);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchListIds = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/local-lists/');
//         console.log(response.data);

//         const listIdsArray = response.data.map(item => item.LIST_ID).sort((a, b) => a - b);

//         console.log(listIdsArray);

//         setListIds(listIdsArray);

//         if (listIdsArray.length > 0) {
//           setListId(listIdsArray[0]); 
//           console.log(listId);
//         }
//       } catch (error) {
//         setError('Error fetching list IDs.');
//         console.error('Error fetching list IDs:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchListIds();
//   }, []);

//   useEffect(() => {
//     if (listId === null) return;

//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const listResponse = await axios.get(`http://localhost:5000/api/local-lists/${listId}`);
//         setListName(listResponse.data.LIST_NAME);

//         const candidatesResponse = await axios.get(`http://localhost:5000/api/local-candidates/${listId}`);
//         setCandidates(candidatesResponse.data|| []);  
//         console.log(candidatesResponse.data)
//         const candidatesArray = response.data.map(item => item.FULL_NAME);
//         console.log(candidatesArray)
//         setTotalPages(candidatesResponse.data.totalPages || 1);
//       } catch (error) {
//         setError('Error fetching data.');
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [listId, page]);

//   const handleListCheck = async () => {
//     try {
//       setSelectedList(prev => !prev);
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, {
//         COUNT_OF_VOTES: selectedList ? -1 : 1
//       });
//     } catch (error) {
//       console.error('Error updating list votes:', error);
//       setError('Error updating list votes.');
//     }
//   };

//   const handleSelectAll = async () => {
//     try {
//       const allSelected = Object.keys(selectedCandidates).every(key => selectedCandidates[key]);
//       const newSelectedCandidates = {};
//       candidates.forEach(candidate => {
//         newSelectedCandidates[candidate.id] = !allSelected;
//       });
//       setSelectedCandidates(newSelectedCandidates);

//       const voteCount = allSelected ? -1 : 1;
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount * candidates.length });
//     } catch (error) {
//       console.error('Error selecting all candidates:', error);
//       setError('Error selecting all candidates.');
//     }
//   };

//   const handleCandidateCheck = async (id) => {
//     try {
//       const updatedSelection = { ...selectedCandidates, [id]: !selectedCandidates[id] };
//       setSelectedCandidates(updatedSelection);

//       const selectedCount = Object.keys(updatedSelection).filter(key => updatedSelection[key]).length;
//       await axios.patch(`http://localhost:5000/api/local-candidats/${id}`, { COUNT_OF_VOTES: selectedCount });

//       const voteCount = updatedSelection[id] ? 1 : -1;
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount });
//     } catch (error) {
//       console.error('Error updating candidate votes:', error);
//       setError('Error updating candidate votes.');
//     }
//   };

//   const handlePageChange = (direction) => {
//     setPage(prevPage => {
//       const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
//       return newPage >= 1 && newPage <= totalPages ? newPage : prevPage;
//     });
//   };

//   if (loading) {
//     return <div>Loading data...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (listIds.length === 0) {
//     return <div>No lists available.</div>;
//   }

//   return (
//     <div className="min-h-screen text-white p-4 flex flex-col items-center">
//       <div className="bg-white text-gray-900 rounded-lg shadow-lg w-full max-w-4xl">
//         <div className="bg-black text-white py-2 px-4 rounded-t-lg flex items-center justify-between">
//           <label className="flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="hidden"
//               checked={selectedList}
//               onChange={handleListCheck}
//             />
//             <div
//               className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedList ? 'bg-green-600' : 'bg-white'} relative`}
//             >
//               {selectedList && (
//                 <svg
//                   className="w-4 h-4 text-white absolute"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               )}
//             </div>
//             <span className="text-xl font-semibold ml-2">{listName}</span>
//           </label>
//         </div>
        
//         <div className="flex justify-between items-center w-full max-w-4xl mt-6">
//           <button
//             onClick={() => handlePageChange('prev')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={page === 1}
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 flex-grow">
//             {candidates.length > 0 ? (
//               candidates.map(candidate => (
//                 <div key={candidate.id} className="flex flex-col items-center">
//                   <div className="relative">
//                     <img src={candidate.image} alt={candidate.name} className="w-20 h-20 rounded-full" />
//                   </div>
//                   <div className="mt-2 flex items-center">
//                     <input
//                       type="checkbox"
//                       className="hidden"
//                       checked={selectedCandidates[candidate.id] || false}
//                       onChange={() => handleCandidateCheck(candidate.id)}
//                     />
//                     <div
//                       className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedCandidates[candidate.id] ? 'bg-green-600' : 'bg-white'} relative cursor-pointer`}
//                       onClick={() => handleCandidateCheck(candidate.id)}
//                     >
//                       {selectedCandidates[candidate.id] && (
//                         <svg
//                           className="w-4 h-4 text-white absolute"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       )}
//                     </div>
//                     <p className="text-sm font-medium ml-2">{candidate.name}</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div>No candidates available.</div>
//             )}
//           </div>
//           <button
//             onClick={() => handlePageChange('next')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={page === totalPages}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
        
//         <div className="p-4 border-t border-gray-200">
//           <button
//             onClick={handleSelectAll}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-2"
//           >
//             اختيار الكل
//           </button>
//           <button
//             onClick={() => alert('صوّت الآن')}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
//           >
//             صوّت الآن
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VotingCandidatesGrid;











// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import axios from 'axios';

// const VotingCandidatesGrid = () => {
//   const [selectedList, setSelectedList] = useState(false);
//   const [selectedCandidates, setSelectedCandidates] = useState({});
//   const [candidates, setCandidates] = useState([]);
//   const [listName, setListName] = useState('');
//   const [listIds, setListIds] = useState([]);
//   const [listId, setListId] = useState(null);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchListIds = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/local-lists/');
//         console.log('List IDs response:', response.data);

//         const listIdsArray = response.data.map(item => item.LIST_ID).sort((a, b) => a - b);
//         setListIds(listIdsArray);

//         if (listIdsArray.length > 0) {
//           setListId(listIdsArray[0]);
//         }
//       } catch (error) {
//         setError('Error fetching list IDs.');
//         console.error('Error fetching list IDs:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchListIds();
//   }, []);

//   useEffect(() => {
//     if (listId === null) return;

//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const listResponse = await axios.get(`http://localhost:5000/api/local-lists/${listId}`);
//         setListName(listResponse.data.LIST_NAME);
//         console.log(listResponse.data.LIST_NAME)
//         const candidatesResponse = await axios.get(`http://localhost:5000/api/local-candidates/${listId}`);
//         console.log('Candidates response:', candidatesResponse.data);

//         // تأكد من أن candidatesResponse.data هو مصفوفة
//         setCandidates(Array.isArray(candidatesResponse.data) ? candidatesResponse.data : []);
//         setTotalPages(candidatesResponse.data.totalPages || 1);
//       } catch (error) {
//         setError('Error fetching data.');
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [listId, page]);

//   const handleListCheck = async () => {
//     try {
//       setSelectedList(prev => !prev);
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, {
//         COUNT_OF_VOTES: selectedList ? -1 : 1
//       });
//     } catch (error) {
//       console.error('Error updating list votes:', error);
//       setError('Error updating list votes.');
//     }
//   };

//   const handleSelectAll = async () => {
//     try {
//       const allSelected = Object.keys(selectedCandidates).every(key => selectedCandidates[key]);
//       const newSelectedCandidates = {};
//       candidates.forEach(candidate => {
//         newSelectedCandidates[candidate.id] = !allSelected;
//       });
//       setSelectedCandidates(newSelectedCandidates);

//       const voteCount = allSelected ? -1 : 1;
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount * candidates.length });
//     } catch (error) {
//       console.error('Error selecting all candidates:', error);
//       setError('Error selecting all candidates.');
//     }
//   };

//   const handleCandidateCheck = async (id) => {
//     try {
//       const updatedSelection = { ...selectedCandidates, [id]: !selectedCandidates[id] };
//       setSelectedCandidates(updatedSelection);

//       const selectedCount = Object.keys(updatedSelection).filter(key => updatedSelection[key]).length;
//       await axios.patch(`http://localhost:5000/api/local-candidats/${id}`, { COUNT_OF_VOTES: selectedCount });

//       const voteCount = updatedSelection[id] ? 1 : -1;
//       await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount });
//     } catch (error) {
//       console.error('Error updating candidate votes:', error);
//       setError('Error updating candidate votes.');
//     }
//   };

//   const handlePageChange = (direction) => {
//     setPage(prevPage => {
//       const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
//       return newPage >= 1 && newPage <= totalPages ? newPage : prevPage;
//     });
//   };

//   if (loading) {
//     return <div>Loading data...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (listIds.length === 0) {
//     return <div>No lists available.</div>;
//   }

//   return (
//     <div className="min-h-screen text-white p-4 flex flex-col items-center">
//       <div className="bg-white text-gray-900 rounded-lg shadow-lg w-full max-w-4xl">
//         <div className="bg-black text-white py-2 px-4 rounded-t-lg flex items-center justify-between">
//           <label className="flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="hidden"
//               checked={selectedList}
//               onChange={handleListCheck}
//             />
//             <div
//               className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedList ? 'bg-green-600' : 'bg-white'} relative`}
//             >
//               {selectedList && (
//                 <svg
//                   className="w-4 h-4 text-white absolute"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               )}
//             </div>
//             <span className="text-xl font-semibold ml-2">{listName}</span>
//           </label>
//         </div>
        
//         <div className="flex justify-between items-center w-full max-w-4xl mt-6">
//           <button
//             onClick={() => handlePageChange('prev')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={page === 1}
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 flex-grow">
//             {candidates.length > 0 ? (
//               candidates.map(candidate => (
//                 <div key={candidate.id} className="flex flex-col items-center">
//                   <div className="relative">
//                     <img src={candidate.image} alt={candidate.name} className="w-20 h-20 rounded-full" />
//                   </div>
//                   <div className="mt-2 flex items-center">
//                     <input
//                       type="checkbox"
//                       className="hidden"
//                       checked={selectedCandidates[candidate.id] || false}
//                       onChange={() => handleCandidateCheck(candidate.id)}
//                     />
//                     <div
//                       className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedCandidates[candidate.id] ? 'bg-green-600' : 'bg-white'} relative cursor-pointer`}
//                       onClick={() => handleCandidateCheck(candidate.id)}
//                     >
//                       {selectedCandidates[candidate.id] && (
//                         <svg
//                           className="w-4 h-4 text-white absolute"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       )}
//                     </div>
//                     <p className="text-sm font-medium ml-2">{candidate.name}</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div>No candidates available.</div>
//             )}
//           </div>
//           <button
//             onClick={() => handlePageChange('next')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={page === totalPages}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
        
//         <div className="p-4 border-t border-gray-200">
//           <button
//             onClick={handleSelectAll}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-2"
//           >
//             اختيار الكل
//           </button>
//           <button
//             onClick={() => alert('صوّت الآن')}
//             className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
//           >
//             صوّت الآن
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VotingCandidatesGrid;










import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';

const VotingCandidatesGrid = () => {
  const [selectedList, setSelectedList] = useState(false);
  const [selectedCandidates, setSelectedCandidates] = useState({});
  const [candidates, setCandidates] = useState([]);
  const [listName, setListName] = useState('');
  const [listIds, setListIds] = useState([]);
  const [listId, setListId] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListIds = async () => {
      try {
        const cir_id = sessionStorage.getItem("Circle_id")
        console.log(cir_id);
        const response = await axios.get(`http://localhost:5000/api/local-lists/l/${cir_id}`);
        console.log(response.data);

        const listIdsArray = await response.data.map(item => item.LIST_ID).sort((a, b) => a - b);

        console.log(listIdsArray);

        setListIds(listIdsArray);
        console.log(listIds);
        if (listIdsArray.length > 0) {
          setListId(listIdsArray[0]); 
          setTotalPages(listIdsArray.length);
          console.log(listIdsArray.length);
        }
      } catch (error) {
        setError('Error fetching list IDs.');
        console.error('Error fetching list IDs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchListIds();
  }, []);

  useEffect(() => {
    if (listId === null) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const listResponse = await axios.get(`http://localhost:5000/api/local-lists/${listId}`);
        setListName(listResponse.data.LIST_NAME);

        const candidatesResponse = await axios.get(`http://localhost:5000/api/local-candidates/${listId}`);
        console.log('Candidates response:', candidatesResponse.data);

 
        const candidatesArray = candidatesResponse.data.map(candidate => candidate.FULL_NAME);
        setCandidates(candidatesArray);
        console.log(candidatesArray);
      } catch (error) {
        setError('Error fetching data.');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [listId, page]);

  const handleListCheck = async () => {
    try {
      const cir_id = sessionStorage.getItem("Circle_id");
      if (!cir_id) {
        throw new Error("Circle_id not found in sessionStorage");
      }
      
      // تحديث الحالة المحلية أولاً
      setSelectedList(prevState => !prevState);
      
      // استخدام القيمة المحدثة مباشرة بدلاً من الاعتماد على selectedList
      const newVoteCount = !selectedList ? 1 : -1;
      
      // تأكد من استخدام listId بدلاً من cir_id للتحديث
      const response = await axios.patch(`${API_BASE_URL}/local-lists/${listId}`, {
        COUNT_OF_VOTES: newVoteCount
      });
      
      if (!response.data) {
        throw new Error("No data received from server after update");
      }
      
      console.log("List vote updated successfully:", response.data);
    } catch (error) {
      console.error('Error updating list votes:', error);
      setError(`Error updating list votes: ${error.message}`);
      // إعادة الحالة إلى ما كانت عليه في حالة الفشل
      setSelectedList(prevState => !prevState);
    }
  };

  const handleSelectAll = async () => {
    try {
      const allSelected = Object.keys(selectedCandidates).every(key => selectedCandidates[key]);
      const newSelectedCandidates = {};
      candidates.forEach((_, index) => {
        newSelectedCandidates[index] = !allSelected;
      });
      setSelectedCandidates(newSelectedCandidates);

      const voteCount = allSelected ? -1 : 1;
      await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount * candidates.length });
    } catch (error) {
      console.error('Error selecting all candidates:', error);
      setError('Error selecting all candidates.');
    }
  };

  const handleCandidateCheck = async (index) => {
    try {
      const updatedSelection = { ...selectedCandidates, [index]: !selectedCandidates[index] };
      setSelectedCandidates(updatedSelection);

      const selectedCount = Object.keys(updatedSelection).filter(key => updatedSelection[key]).length;
      await axios.patch(`http://localhost:5000/api/local-candidats/${index}`, { COUNT_OF_VOTES: selectedCount });

      const voteCount = updatedSelection[index] ? 1 : -1;
      await axios.patch(`http://localhost:5000/api/local-lists/${listId}`, { COUNT_OF_VOTES: voteCount });
    } catch (error) {
      console.error('Error updating candidate votes:', error);
      setError('Error updating candidate votes.');
    }
  };

  const handlePageChange = (direction) => {
    setPage(prevPage => {
      const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
      return newPage >= 1 && newPage <= totalPages ? newPage : prevPage;
    });
  };

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (listIds.length === 0) {
    return <div>No lists available.</div>;
  }

  return (
    <div className="min-h-screen text-white p-4 flex flex-col items-center">
      <div className="bg-white text-gray-900 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="bg-black text-white py-2 px-4 rounded-t-lg flex items-center justify-between">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              checked={selectedList}
              onChange={handleListCheck}
            />
            <div
              className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedList ? 'bg-green-600' : 'bg-white'} relative`}
            >
              {selectedList && (
                <svg
                  className="w-4 h-4 text-white absolute"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span className="text-xl font-semibold ml-2">{listName}</span>
          </label>
        </div>
        
        <div className="flex justify-between items-center w-full max-w-4xl mt-6">
          <button
            onClick={() => handlePageChange('prev')}
            className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
            disabled={page === 1}
          >
            <ChevronLeft size={24} />
          </button>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 flex-grow">
            {candidates.length > 0 ? (
              candidates.map((name, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative">
                    <img src="default-image.jpg" alt={name} className="w-20 h-20 rounded-full" /> {/* يمكنك تغيير الصورة الافتراضية */}
                  </div>
                  <div className="mt-2 flex items-center">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={selectedCandidates[index] || false}
                      onChange={() => handleCandidateCheck(index)}
                    />
                    <div
                      className={`w-6 h-6 flex items-center justify-center border-2 border-gray-300 rounded ${selectedCandidates[index] ? 'bg-green-600' : 'bg-white'} relative cursor-pointer`}
                      onClick={() => handleCandidateCheck(index)}
                    >
                      {selectedCandidates[index] && (
                        <svg
                          className="w-4 h-4 text-white absolute"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <p className="text-sm font-medium ml-2">{name}</p>
                  </div>
                </div>
              ))
            ) : (
              <div>No candidates available.</div>
            )}
          </div>
          <button
            onClick={() => handlePageChange('next')}
            className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
            disabled={page === totalPages}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleSelectAll}
            className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-2"
          >
            اختيار الكل
          </button>
          <button
            onClick={() => alert('صوّت الآن')}
            className="w-full bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            صوّت الآن
          </button>
        </div>
      </div>
    </div>
  );
};

export default VotingCandidatesGrid;











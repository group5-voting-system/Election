
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// function Voting() {
//   const [listIdsArray, setListIdsArray] = useState([]);
//   const [candidatesArray, setCandidatesArray] = useState([]);
//   const [listName, setListName] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     const fetchListIds = async () => {
//       try {
//         const cir_id = sessionStorage.getItem("Circle_id");
//         if (!cir_id) {
//           throw new Error("Circle_id not found in sessionStorage");
//         }

//         const response = await axios.get(`http://localhost:5000/api/local-lists/l/${cir_id}`);
//         const listIdsArray = response.data.map(item => item.LIST_ID).sort((a, b) => a - b);
//         setListIdsArray(listIdsArray);
//         setTotalPages(listIdsArray.length);

//         if (listIdsArray.length > 0) {
//           await fetchData(listIdsArray[0]); 
//         }
//       } catch (error) {
//         console.error('Error fetching list IDs:', error);
//         setError('Error fetching list IDs.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchData = async (listId) => {
//       try {
//         const listResponse = await axios.get(`http://localhost:5000/api/local-lists/${listId}`);
//         setListName(listResponse.data.LIST_NAME);

//         const candidatesResponse = await axios.get(`http://localhost:5000/api/local-candidates/${listId}`);
//         setCandidatesArray(candidatesResponse.data.map(candidate => candidate.FULL_NAME));
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data.');
//       }
//     };

//     fetchListIds();
//   }, []);

//   useEffect(() => {
//     if (listIdsArray.length === 0) return;
//     const listId = listIdsArray[currentPage - 1];
//     fetchData(listId);
//   }, [currentPage, listIdsArray]);

//   const fetchData = async (listId) => {
//     try {
//       const listResponse = await axios.get(`http://localhost:5000/api/local-lists/${listId}`);
//       setListName(listResponse.data.LIST_NAME);

//       const candidatesResponse = await axios.get(`http://localhost:5000/api/local-candidates/${listId}`);
//       setCandidatesArray(candidatesResponse.data.map(candidate => candidate.FULL_NAME));
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError('Error fetching data.');
//     }
//   };

//   const handlePageChange = (direction) => {
//     setCurrentPage(prevPage => {
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
//     <section className="py-24">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mb-12">
//           <h2 className="font-manrope text-5xl text-center font-bold text-gray-900">
//             {listName}
//           </h2>
//           {candidatesArray.length > 0 ? (
//             <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
//               {candidatesArray.map((candidate, index) => (
//                 <div key={index} className="block group md:col-span-2 lg:col-span-1">
//                   <div className="relative mb-6">
//                     <img
//                       src={`https://via.placeholder.com/150?text=Candidate+${index + 1}`}
//                       alt={`Candidate ${index + 1}`}
//                       className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
//                     />
//                   </div>
//                   <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
//                     {candidate}
//                   </h4>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div>No candidates available.</div>
//           )}
//         </div>

//         <div className="flex justify-between items-center mt-8">
//           <button
//             onClick={() => handlePageChange('prev')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={currentPage === 1}
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <span className="text-lg font-medium">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={() => handlePageChange('next')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={currentPage === totalPages}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Voting;















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// // Simple Button component
// const Button = ({ onClick, disabled, children }) => (
//   <button
//     onClick={onClick}
//     disabled={disabled}
//     className={`px-4 py-2 rounded ${
//       disabled 
//         ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
//         : 'bg-blue-500 text-white hover:bg-blue-600'
//     }`}
//   >
//     {children}
//   </button>
// );

// // Simple Checkbox component
// const Checkbox = ({ id, checked, onChange }) => (
//   <input
//     type="checkbox"
//     id={id}
//     checked={checked}
//     onChange={onChange}
//     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
//   />
// );

// function Voting() {
//   const [listIdsArray, setListIdsArray] = useState([]);
//   const [candidatesArray, setCandidatesArray] = useState([]);
//   const [listName, setListName] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [selectedListId, setSelectedListId] = useState(null);

//   useEffect(() => {
//     const fetchListIds = async () => {
//       try {
//         const cir_id = sessionStorage.getItem("Circle_id");
//         if (!cir_id) {
//           throw new Error("Circle_id not found in sessionStorage");
//         }

//         const response = await axios.get(`http://localhost:5000/api/local-lists/l/${cir_id}`);
//         const listIdsArray = response.data.map(item => item.LIST_ID).sort((a, b) => a - b);
//         setListIdsArray(listIdsArray);
//         setTotalPages(listIdsArray.length);

//         if (listIdsArray.length > 0) {
//           await fetchData(listIdsArray[0]); 
//         }
//       } catch (error) {
//         console.error('Error fetching list IDs:', error);
//         setError('Error fetching list IDs.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchListIds();
//   }, []);

//   useEffect(() => {
//     if (listIdsArray.length === 0) return;
//     const listId = listIdsArray[currentPage - 1];
//     fetchData(listId);
//   }, [currentPage, listIdsArray]);

//   const fetchData = async (listId) => {
//     try {
//       const listResponse = await axios.get(`http://localhost:5000/api/local-lists/${listId}`);
//       setListName(listResponse.data.LIST_NAME);

//       const candidatesResponse = await axios.get(`http://localhost:5000/api/local-candidates/${listId}`);
//       setCandidatesArray(candidatesResponse.data.map(candidate => candidate.FULL_NAME));
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError('Error fetching data.');
//     }
//   };

//   const handlePageChange = (direction) => {
//     setCurrentPage(prevPage => {
//       const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
//       return newPage >= 1 && newPage <= totalPages ? newPage : prevPage;
//     });
//   };

//   const handleListSelection = () => {
//     setSelectedListId(prev => prev === listIdsArray[currentPage - 1] ? null : listIdsArray[currentPage - 1]);
//   };

//   const localListVotes = async () => {
//     if (!selectedListId) {
//       alert('Please select a list to vote.');
//       return;
//     }
//     try {
//       const listResponse = await axios.patch(`http://localhost:5000/api/local-lists/${selectedListId}`);
//       alert('Vote submitted successfully!');
//       // Reset selection after voting
//       setSelectedListId(null);
//     } catch (error) {
//       console.error('Error submitting vote:', error);
//       alert('Error submitting vote. Please try again.');
//     }
//   };

//   if (loading) {
//     return <div>Loading data...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <section className="py-24">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mb-12">
//           <div className="flex items-center justify-center mb-4">
//             <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mr-4">
//               {listName}
//             </h2>
//             <Checkbox
//               id="listSelect"
//               checked={selectedListId === listIdsArray[currentPage - 1]}
//               onChange={handleListSelection}
//             />
//           </div>
//           {candidatesArray.length > 0 ? (
//             <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
//               {candidatesArray.map((candidate, index) => (
//                 <div key={index} className="block group md:col-span-2 lg:col-span-1">
//                   <div className="relative mb-6">
//                     <img
//                       src={`https://via.placeholder.com/150?text=Candidate+${index + 1}`}
//                       alt={`Candidate ${index + 1}`}
//                       className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
//                     />
//                   </div>
//                   <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
//                     {candidate}
//                   </h4>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div>No candidates available.</div>
//           )}
//         </div>

//         <div className="flex justify-between items-center mt-8">
//           <button
//             onClick={() => handlePageChange('prev')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={currentPage === 1}
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <span className="text-lg font-medium">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={() => handlePageChange('next')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={currentPage === totalPages}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>

//         <div className="mt-8 text-center">
//           <Button onClick={localListVotes} disabled={!selectedListId}>
//             Vote for Selected List
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Voting;













// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// // Simple Button component (unchanged)
// const Button = ({ onClick, disabled, children }) => (
//   <button
//     onClick={onClick}
//     disabled={disabled}
//     className={`px-4 py-2 rounded ${
//       disabled 
//         ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
//         : 'bg-blue-500 text-white hover:bg-blue-600'
//     }`}
//   >
//     {children}
//   </button>
// );

// // Simple Checkbox component (unchanged)
// const Checkbox = ({ id, checked, onChange }) => (
//   <input
//     type="checkbox"
//     id={id}
//     checked={checked}
//     onChange={onChange}
//     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
//   />
// );

// function Voting() {
//   const [listIdsArray, setListIdsArray] = useState([]);
//   const [candidatesArray, setCandidatesArray] = useState([]);
//   const [listName, setListName] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [selectedListId, setSelectedListId] = useState(null);
//   const [voteStatus, setVoteStatus] = useState(null);

//   useEffect(() => {
//     const fetchListIds = async () => {
//       try {
//         const cir_id = sessionStorage.getItem("Circle_id");
//         if (!cir_id) {
//           throw new Error("Circle_id not found in sessionStorage");
//         }

//         const response = await axios.get(`http://localhost:5000/api/local-lists/l/${cir_id}`);
//         const listIdsArray = response.data.map(item => item.LIST_ID).sort((a, b) => a - b);
//         setListIdsArray(listIdsArray);
//         setTotalPages(listIdsArray.length);

//         if (listIdsArray.length > 0) {
//           await fetchData(listIdsArray[0]); 
//         }
//       } catch (error) {
//         console.error('Error fetching list IDs:', error);
//         setError(`Error fetching list IDs: ${error.message}`);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchListIds();
//   }, []);

//   useEffect(() => {
//     if (listIdsArray.length === 0) return;
//     const listId = listIdsArray[currentPage - 1];
//     fetchData(listId);
//   }, [currentPage, listIdsArray]);

//   const fetchData = async (listId) => {
//     try {
//       const listResponse = await axios.get(`http://localhost:5000/api/local-lists/${listId}`);
//       setListName(listResponse.data.LIST_NAME);

//       const candidatesResponse = await axios.get(`http://localhost:5000/api/local-candidates/${listId}`);
//       setCandidatesArray(candidatesResponse.data.map(candidate => candidate.FULL_NAME));
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError(`Error fetching data: ${error.message}`);
//     }
//   };

//   const handlePageChange = (direction) => {
//     setCurrentPage(prevPage => {
//       const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
//       return newPage >= 1 && newPage <= totalPages ? newPage : prevPage;
//     });
//   };

//   const handleListSelection = () => {
//     setSelectedListId(prev => prev === listIdsArray[currentPage - 1] ? null : listIdsArray[currentPage - 1]);
//   };

//   const localListVotes = async () => {
//     if (!selectedListId) {
//       setVoteStatus('الرجاء اختيار قائمة للتصويت.');
//       return;
//     }
//     try {
//       setVoteStatus('جاري إرسال التصويت...');
//       const response = await axios.patch(`http://localhost:5000/api/local-lists/${selectedListId}`, {
//         COUNT_OF_VOTES: 1  // إرسال 1 لزيادة عدد الأصوات بمقدار 1
//       });
//       console.log('Vote response:', response);  // سجل الاستجابة للتصحيح
//       setVoteStatus('تم إرسال التصويت بنجاح!');
//       // إعادة تعيين الاختيار بعد التصويت
//       setSelectedListId(null);
//     } catch (error) {
//       console.error('Error submitting vote:', error);
//       setVoteStatus(`خطأ في إرسال التصويت: ${error.response ? error.response.data.message : error.message}`);
//     }
//   };

//   if (loading) {
//     return <div>جاري تحميل البيانات...</div>;
//   }

//   if (error) {
//     return <div>خطأ: {error}</div>;
//   }

//   return (
//     <section className="py-24">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mb-12">
//           <div className="flex items-center justify-center mb-4">
//             <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mr-4">
//               {listName}
//             </h2>
//             <Checkbox
//               id="listSelect"
//               checked={selectedListId === listIdsArray[currentPage - 1]}
//               onChange={handleListSelection}
//             />
//           </div>
//           {candidatesArray.length > 0 ? (
//             <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
//               {candidatesArray.map((candidate, index) => (
//                 <div key={index} className="block group md:col-span-2 lg:col-span-1">
//                   <div className="relative mb-6">
//                     <img
//                       src={`https://via.placeholder.com/150?text=مرشح+${index + 1}`}
//                       alt={`مرشح ${index + 1}`}
//                       className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
//                     />
//                   </div>
//                   <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
//                     {candidate}
//                   </h4>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div>لا يوجد مرشحين متاحين.</div>
//           )}
//         </div>

//         <div className="flex justify-between items-center mt-8">
//           <button
//             onClick={() => handlePageChange('prev')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={currentPage === 1}
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <span className="text-lg font-medium">
//             الصفحة {currentPage} من {totalPages}
//           </span>
//           <button
//             onClick={() => handlePageChange('next')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={currentPage === totalPages}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>

//         <div className="mt-8 text-center">
//           <Button onClick={localListVotes} disabled={!selectedListId}>
//             التصويت للقائمة المختارة
//           </Button>
//           {voteStatus && (
//             <p className={`mt-4 ${voteStatus.includes('خطأ') ? 'text-red-500' : 'text-green-500'}`}>
//               {voteStatus}
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Voting;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const Button = ({ onClick, disabled, children }) => (
//   <button
//     onClick={onClick}
//     disabled={disabled}
//     className={`px-4 py-2 rounded ${
//       disabled 
//         ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
//         : 'bg-blue-500 text-white hover:bg-blue-600'
//     }`}
//   >
//     {children}
//   </button>
// );

// const Checkbox = ({ id, checked, onChange }) => (
//   <input
//     type="checkbox"
//     id={id}
//     checked={checked}
//     onChange={onChange}
//     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
//   />
// );

// function Voting() {
//   const [listIdsArray, setListIdsArray] = useState([]);
//   const [candidatesArray, setCandidatesArray] = useState([]);
//   const [listName, setListName] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [selectedListId, setSelectedListId] = useState(null);
//   const [selectedCandidates, setSelectedCandidates] = useState([]);
//   const [voteStatus, setVoteStatus] = useState(null);

//   useEffect(() => {
//     const fetchListIds = async () => {
//       try {
//         const cir_id = sessionStorage.getItem("Circle_id");
//         if (!cir_id) {
//           throw new Error("Circle_id not found in sessionStorage");
//         }

//         const response = await axios.get(`http://localhost:5000/api/local-lists/l/${cir_id}`);
//         const listIdsArray = response.data.map(item => item.LIST_ID).sort((a, b) => a - b);
//         setListIdsArray(listIdsArray);
//         setTotalPages(listIdsArray.length);

//         if (listIdsArray.length > 0) {
//           await fetchData(listIdsArray[0]); 
//         }
//       } catch (error) {
//         console.error('Error fetching list IDs:', error);
//         setError(`خطأ في جلب معرفات القوائم: ${error.message}`);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchListIds();
//   }, []);

//   useEffect(() => {
//     if (listIdsArray.length === 0) return;
//     const listId = listIdsArray[currentPage - 1];
//     fetchData(listId);
//   }, [currentPage, listIdsArray]);

//   const fetchData = async (listId) => {
//     try {
//       const listResponse = await axios.get(`http://localhost:5000/api/local-lists/${listId}`);
//       setListName(listResponse.data.LIST_NAME);

//       const candidatesResponse = await axios.get(`http://localhost:5000/api/local-candidates/${listId}`);
//       setCandidatesArray(candidatesResponse.data);
//       setSelectedCandidates([]); // Reset selected candidates when changing list
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError(`خطأ في جلب البيانات: ${error.message}`);
//     }
//   };

//   const handlePageChange = (direction) => {
//     setCurrentPage(prevPage => {
//       const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
//       return newPage >= 1 && newPage <= totalPages ? newPage : prevPage;
//     });
//   };

//   const handleListSelection = () => {
//     setSelectedListId(prev => prev === listIdsArray[currentPage - 1] ? null : listIdsArray[currentPage - 1]);
//     setSelectedCandidates([]); // Reset selected candidates when changing list
//   };

//   const handleCandidateSelection = (candidateId) => {
//     setSelectedCandidates(prev => 
//       prev.includes(candidateId)
//         ? prev.filter(id => id !== candidateId)
//         : [...prev, candidateId]
//     );
//   };

//   const localListVotes = async () => {
//     if (selectedCandidates.length === 0) {
//       setVoteStatus('الرجاء اختيار مرشح واحد على الأقل للتصويت.');
//       return;
//     }
//     try {
//       setVoteStatus('جاري إرسال التصويت...');
//       const votePromises = selectedCandidates.map(candidateId => 
//         axios.patch(`http://localhost:5000/api/local-candidates/${candidateId}`, { COUNT_OF_VOTES: 1 })
//       );
//       await Promise.all(votePromises);
//       setVoteStatus('تم إرسال التصويت بنجاح!');
//       setSelectedCandidates([]); // Reset selected candidates after voting
//     } catch (error) {
//       console.error('Error submitting vote:', error);
//       setVoteStatus(`خطأ في إرسال التصويت: ${error.response ? error.response.data.message : error.message}`);
//     }
//   };

//   if (loading) {
//     return <div>جاري تحميل البيانات...</div>;
//   }

//   if (error) {
//     return <div>خطأ: {error}</div>;
//   }

//   return (
//     <section className="py-24">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mb-12">
//           <div className="flex items-center justify-center mb-4">
//             <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mr-4">
//               {listName}
//             </h2>
//             <Checkbox
//               id="listSelect"
//               checked={selectedListId === listIdsArray[currentPage - 1]}
//               onChange={handleListSelection}
//             />
//           </div>
//           {candidatesArray.length > 0 ? (
//             <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
//               {candidatesArray.map((candidate, index) => (
//                 <div key={index} className="block group md:col-span-2 lg:col-span-1">
//                   <div className="relative mb-6">
//                     <img
//                       src={`https://via.placeholder.com/150?text=مرشح+${index + 1}`}
//                       alt={`مرشح ${index + 1}`}
//                       className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
//                     />
//                     <Checkbox
//                       id={`candidate-${candidate.CANDIDATE_ID}`}
//                       checked={selectedCandidates.includes(candidate.CANDIDATE_ID)}
//                       onChange={() => handleCandidateSelection(candidate.CANDIDATE_ID)}
//                     />
//                   </div>
//                   <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
//                     {candidate.FULL_NAME}
//                   </h4>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div>لا يوجد مرشحين متاحين.</div>
//           )}
//         </div>

//         <div className="flex justify-between items-center mt-8">
//           <button
//             onClick={() => handlePageChange('prev')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={currentPage === 1}
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <span className="text-lg font-medium">
//             الصفحة {currentPage} من {totalPages}
//           </span>
//           <button
//             onClick={() => handlePageChange('next')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={currentPage === totalPages}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>

//         <div className="mt-8 text-center">
//           <Button onClick={localListVotes} disabled={selectedCandidates.length === 0}>
//             التصويت للمرشحين المختارين
//           </Button>
//           {voteStatus && (
//             <p className={`mt-4 ${voteStatus.includes('خطأ') ? 'text-red-500' : 'text-green-500'}`}>
//               {voteStatus}
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Voting;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const Button = ({ onClick, disabled, children }) => (
//   <button
//     onClick={onClick}
//     disabled={disabled}
//     className={`px-4 py-2 rounded ${disabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
//   >
//     {children}
//   </button>
// );

// const Checkbox = ({ id, checked, onChange }) => (
//   <input
//     type="checkbox"
//     id={id}
//     checked={checked}
//     onChange={onChange}
//     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
//   />
// );

// function Voting() {
//   const [listIdsArray, setListIdsArray] = useState([]);
//   const [candidatesArray, setCandidatesArray] = useState([]);
//   const [listName, setListName] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [selectedListId, setSelectedListId] = useState(null);
//   const [selectedCandidates, setSelectedCandidates] = useState([]);
//   const [voteStatus, setVoteStatus] = useState(null);

//   useEffect(() => {
//     const fetchListIds = async () => {
//       try {
//         const cir_id = sessionStorage.getItem("Circle_id");
//         if (!cir_id) {
//           throw new Error("Circle_id not found in sessionStorage");
//         }

//         const response = await axios.get(`http://localhost:5000/api/local-lists/l/${cir_id}`);
//         const listIdsArray = response.data.map(item => item.LIST_ID).sort((a, b) => a - b);
//         setListIdsArray(listIdsArray);
//         setTotalPages(listIdsArray.length);

//         if (listIdsArray.length > 0) {
//           await fetchData(listIdsArray[0]); 
//         }
//       } catch (error) {
//         console.error('Error fetching list IDs:', error);
//         setError(`خطأ في جلب معرفات القوائم: ${error.message}`);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchListIds();
//   }, []);

//   useEffect(() => {
//     if (listIdsArray.length === 0) return;
//     const listId = listIdsArray[currentPage - 1];
//     fetchData(listId);
//   }, [currentPage, listIdsArray]);

//   const fetchData = async (listId) => {
//     try {
//       const listResponse = await axios.get(`http://localhost:5000/api/local-lists/${listId}`);
//       setListName(listResponse.data.LIST_NAME);

//       const candidatesResponse = await axios.get(`http://localhost:5000/api/local-candidates/${listId}`);
//       setCandidatesArray(candidatesResponse.data);
//       setSelectedCandidates([]); // Reset selected candidates when changing list
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError(`خطأ في جلب البيانات: ${error.message}`);
//     }
//   };

//   const handlePageChange = (direction) => {
//     setCurrentPage(prevPage => {
//       const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
//       return newPage >= 1 && newPage <= totalPages ? newPage : prevPage;
//     });
//   };

//   const handleCandidateSelection = (candidateId) => {
//     setSelectedCandidates(prev => 
//       prev.includes(candidateId)
//         ? prev.filter(id => id !== candidateId)
//         : [...prev, candidateId]
//     );
//   };

//   const localListVotes = async () => {
//     if (!selectedListId) {
//       setVoteStatus('الرجاء اختيار قائمة للتصويت.');
//       return;
//     }
//     if (selectedCandidates.length === 0) {
//       setVoteStatus('الرجاء اختيار مرشح واحد على الأقل للتصويت.');
//       return;
//     }
//     try {
//       setVoteStatus('جاري إرسال التصويت...');
      
//       // Increase the number of votes for the list
//       await axios.patch(`http://localhost:5000/api/local-lists/${selectedListId}`, { COUNT_OF_VOTES: 1 });

//       // Increase the number of votes for candidates
//       const votePromises = selectedCandidates.map(candidateId => 
//         axios.patch(`http://localhost:5000/api/local-candidates/${candidateId}`, { COUNT_OF_VOTES: 1 })
//       );
//       await Promise.all(votePromises);

//       setVoteStatus('تم إرسال التصويت بنجاح!');
//       setSelectedCandidates([]); // Reset selected candidates after voting
//       setSelectedListId(null); // Reset selected list after voting
//     } catch (error) {
//       console.error('Error submitting vote:', error);
//       setVoteStatus(`خطأ في إرسال التصويت: ${error.response ? error.response.data.message : error.message}`);
//     }
//   };

//   if (loading) {
//     return <div>جاري تحميل البيانات...</div>;
//   }

//   if (error) {
//     return <div>خطأ: {error}</div>;
//   }

//   return (
//     <section className="py-24">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mb-12">
//           <div className="flex items-center justify-center mb-4">
//             <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mr-4">
//               {listName}
//             </h2>
//             <Checkbox
//               id="listSelect"
//               checked={selectedListId === listIdsArray[currentPage - 1]}
//               onChange={() => {
//                 const currentListId = listIdsArray[currentPage - 1];
//                 setSelectedListId(prevId => prevId === currentListId ? null : currentListId);
//               }}
//             />
//           </div>
//           {candidatesArray.length > 0 ? (
//             <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
//               {candidatesArray.map((candidate, index) => (
//                 <div key={candidate.CANDIDATE_ID} className="block group md:col-span-2 lg:col-span-1">
//                   <div className="relative mb-6">
//                     <img
//                       src={`https://via.placeholder.com/150?text=مرشح+${index + 1}`}
//                       alt={`مرشح ${index + 1}`}
//                       className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
//                     />
//                     <Checkbox
//                       id={`candidate-${candidate.CANDIDATE_ID}`}
//                       checked={selectedCandidates.includes(candidate.CANDIDATE_ID)}
//                       onChange={() => handleCandidateSelection(candidate.CANDIDATE_ID)}
//                     />
//                   </div>
//                   <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
//                     {candidate.FULL_NAME}
//                   </h4>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div>لا يوجد مرشحين متاحين.</div>
//           )}
//         </div>

//         <div className="flex justify-between items-center mt-8">
//           <button
//             onClick={() => handlePageChange('prev')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={currentPage === 1}
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <span className="text-lg font-medium">
//             الصفحة {currentPage} من {totalPages}
//           </span>
//           <button
//             onClick={() => handlePageChange('next')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={currentPage === totalPages}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>

//         <div className="mt-8 text-center">
//           <Button onClick={localListVotes} disabled={selectedCandidates.length === 0}>
//             التصويت للمرشحين المختارين
//           </Button>
//           {voteStatus && (
//               <p className={`mt-4 ${voteStatus.includes('خطأ') ? 'text-red-500' : 'text-green-500'}`}>
//                 {voteStatus}
//               </p>
//             )}
//           </div>
//         </div>
//       </section>
//     );
// }

// export default Voting;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const Button = ({ onClick, disabled, children }) => (
//   <button
//     onClick={onClick}
//     disabled={disabled}
//     className={`px-4 py-2 rounded ${
//       disabled 
//         ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
//         : 'bg-blue-500 text-white hover:bg-blue-600'
//     }`}
//   >
//     {children}
//   </button>
// );

// const Checkbox = ({ id, checked, onChange }) => (
//   <input
//     type="checkbox"
//     id={id}
//     checked={checked}
//     onChange={onChange}
//     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
//   />
// );

// function Voting() {
//   const [listIdsArray, setListIdsArray] = useState([]);
//   const [candidatesArray, setCandidatesArray] = useState([]);
//   const [listName, setListName] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [selectedListId, setSelectedListId] = useState(null);
//   const [selectedCandidates, setSelectedCandidates] = useState([]);
//   const [voteStatus, setVoteStatus] = useState(null);

//   useEffect(() => {
//     const fetchListIds = async () => {
//       try {
//         const cir_id = sessionStorage.getItem("Circle_id");
//         if (!cir_id) {
//           throw new Error("Circle_id not found in sessionStorage");
//         }

//         const response = await axios.get(`http://localhost:5000/api/local-lists/l/${cir_id}`);
//         const listIdsArray = response.data.map(item => item.LIST_ID).sort((a, b) => a - b);
//         setListIdsArray(listIdsArray);
//         setTotalPages(listIdsArray.length);

//         if (listIdsArray.length > 0) {
//           await fetchData(listIdsArray[0]); 
//         }
//       } catch (error) {
//         console.error('Error fetching list IDs:', error);
//         setError(`خطأ في جلب معرفات القوائم: ${error.message}`);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchListIds();
//   }, []);

//   useEffect(() => {
//     if (listIdsArray.length === 0) return;
//     const listId = listIdsArray[currentPage - 1];
//     fetchData(listId);
//   }, [currentPage, listIdsArray]);

//   const fetchData = async (listId) => {
//     try {
//       const listResponse = await axios.get(`http://localhost:5000/api/local-lists/${listId}`);
//       setListName(listResponse.data.LIST_NAME);

//       const candidatesResponse = await axios.get(`http://localhost:5000/api/local-candidates/${listId}`);
//       setCandidatesArray(candidatesResponse.data);
//       setSelectedCandidates([]); // Reset selected candidates when changing list
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError(`خطأ في جلب البيانات: ${error.message}`);
//     }
//   };

//   const handlePageChange = (direction) => {
//     setCurrentPage(prevPage => {
//       const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
//       return newPage >= 1 && newPage <= totalPages ? newPage : prevPage;
//     });
//   };

//   const handleListSelection = () => {
//     setSelectedListId(prev => prev === listIdsArray[currentPage - 1] ? null : listIdsArray[currentPage - 1]);
//     setSelectedCandidates([]); // Reset selected candidates when changing list
//   };

//   const handleCandidateSelection = (candidateId) => {
//     setSelectedCandidates(prev => 
//       prev.includes(candidateId)
//         ? prev.filter(id => id !== candidateId)
//         : [...prev, candidateId]
//     );
//   };

//   const localListVotes = async () => {
//     if (!selectedListId && selectedCandidates.length === 0) {
//       // التصويت بدون قائمة ومرشحين (ورقة بيضاء)
//       if (window.confirm('لم تقم باختيار قائمة أو مرشحين. إذا قمت بالتصويت الآن، سيتم اعتبار التصويت ورقة بيضاء. هل تريد الاستمرار؟')) {
//         try {
//           setVoteStatus('جاري إرسال التصويت كورقة بيضاء...');
          
//           // افترض أن لدينا نقطة نهاية لمعالجة التصويت كورقة بيضاء
//         var x =0;
//         x = x+1;
//         console.log(x)
//           setVoteStatus('تم إرسال التصويت كورقة بيضاء بنجاح!');
//         } catch (error) {
//           console.error('Error submitting white vote:', error);
//           setVoteStatus(`خطأ في إرسال التصويت: ${error.response ? error.response.data.message : error.message}`);
//         }
//         return;
//       } else {
//         return;
//       }
//     }

//     if (!selectedCandidates.length === 0 && !selectedListId) {
//       setVoteStatus('الرجاء اختيار قائمة ');
//       return;
//     }

//     try {
//       setVoteStatus('جاري إرسال التصويت...');
      
//       if (selectedListId && selectedCandidates.length === 0) {
//         // زيادة عدد الأصوات للقائمة
//         await axios.patch(`http://localhost:5000/api/local-lists/${selectedListId}`, async (prevData) => ({
//           COUNT_OF_VOTES: (prevData.COUNT_OF_VOTES || 0) + 1
//         }));

//         await Promise.all(votePromises);
//       } else if (selectedListId && selectedCandidates.length > 0) {
//         await axios.patch(`http://localhost:5000/api/local-lists/${selectedListId}`, async (prevData) => ({
//           COUNT_OF_VOTES: (prevData.COUNT_OF_VOTES || 0) + 1
//         }));
//         // إذا لم يكن هناك قائمة، ولكن تم اختيار مرشحين، زيادة عدد الأصوات لكل مرشح
//         const votePromises = selectedCandidates.map(candidateId => 
//           axios.patch(`http://localhost:5000/api/local-candidates/${candidateId}`, async (prevData) => ({
//             COUNT_OF_VOTES: (prevData.COUNT_OF_VOTES || 0) + 1
//           }))
//         );
//         await Promise.all(votePromises);
//       }

//       setVoteStatus('تم إرسال التصويت بنجاح!');
//       setSelectedCandidates([]); // إعادة تعيين المرشحين المختارين بعد التصويت
//       setSelectedListId(null); // إعادة تعيين القائمة المختارة بعد التصويت
//     } catch (error) {
//       console.error('Error submitting vote:', error);
//       setVoteStatus(`خطأ في إرسال التصويت: ${error.response ? error.response.data.message : error.message}`);
//     }
//   };

//   if (loading) {
//     return <div>جاري تحميل البيانات...</div>;
//   }

//   if (error) {
//     return <div>خطأ: {error}</div>;
//   }

//   return (
//     <section className="py-24">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mb-12">
//           <div className="flex items-center justify-center mb-4">
//             <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mr-4">
//               {listName}
//             </h2>
//             <Checkbox
//               id="listSelect"
//               checked={selectedListId === listIdsArray[currentPage - 1]}
//               onChange={handleListSelection}
//             />
//           </div>
//           {candidatesArray.length > 0 ? (
//             <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
//               {candidatesArray.map((candidate, index) => (
//                 <div key={index} className="block group md:col-span-2 lg:col-span-1">
//                   <div className="relative mb-6">
//                     <img
//                       src={`https://via.placeholder.com/150?text=مرشح+${index + 1}`}
//                       alt={`مرشح ${index + 1}`}
//                       className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
//                     />
//                     <Checkbox
//                       id={`candidate-${candidate.CANDIDATE_ID}`}
//                       checked={selectedCandidates.includes(candidate.CANDIDATE_ID)}
//                       onChange={() => handleCandidateSelection(candidate.CANDIDATE_ID)}
//                     />
//                   </div>
//                   <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
//                     {candidate.FULL_NAME}
//                   </h4>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div>لا يوجد مرشحين متاحين.</div>
//           )}
//         </div>

//         <div className="flex justify-between items-center mt-8">
//           <button
//             onClick={() => handlePageChange('prev')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={currentPage === 1}
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <span className="text-lg font-medium">
//             الصفحة {currentPage} من {totalPages}
//           </span>
//           <button
//             onClick={() => handlePageChange('next')}
//             className="bg-black hover:bg-gray-700 text-white w-8 h-8 rounded-full p-1 transition-colors duration-200"
//             disabled={currentPage === totalPages}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>

//         <div className="mt-8 text-center">
//           <Button onClick={localListVotes} disabled={selectedCandidates.length === 0 && !selectedListId}>
//             التصويت للمرشحين المختارين
//           </Button>
//           {voteStatus && (
//             <p className={`mt-4 ${voteStatus.includes('خطأ') ? 'text-red-500' : 'text-green-500'}`}>
//               {voteStatus}
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Voting;







import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Button = ({ onClick, disabled, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded ${
      disabled 
        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
        : 'bg-blue-500 text-white hover:bg-blue-600'
    }`}
  >
    {children}
  </button>
);

const Checkbox = ({ id, checked, onChange }) => (
  <input
    type="checkbox"
    id={id}
    checked={checked}
    onChange={onChange}
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
  />
);

function Voting() {
  const [listIdsArray, setListIdsArray] = useState([]);
  const [candidatesArray, setCandidatesArray] = useState([]);
  const [listName, setListName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedListId, setSelectedListId] = useState(null);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [voteStatus, setVoteStatus] = useState(null);

  useEffect(() => {
    const fetchListIds = async () => {
      try {
        const cir_id = sessionStorage.getItem("Circle_id");
        if (!cir_id) {
          throw new Error("Circle_id not found in sessionStorage");
        }

        const response = await axios.get(`http://localhost:5000/api/local-lists/l/${cir_id}`);
        const listIdsArray = response.data.map(item => item.LIST_ID).sort((a, b) => a - b);
        setListIdsArray(listIdsArray);
        setTotalPages(listIdsArray.length);

        if (listIdsArray.length > 0) {
          await fetchData(listIdsArray[0]); 
        }
      } catch (error) {
        console.error('Error fetching list IDs:', error);
        setError(`خطأ في جلب معرفات القوائم: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchListIds();
  }, []);

  useEffect(() => {
    if (listIdsArray.length === 0) return;
    const listId = listIdsArray[currentPage - 1];
    fetchData(listId);
  }, [currentPage, listIdsArray]);

  const fetchData = async (listId) => {
    try {
      const listResponse = await axios.get(`http://localhost:5000/api/local-lists/${listId}`);
      setListName(listResponse.data.LIST_NAME);

      const candidatesResponse = await axios.get(`http://localhost:5000/api/local-candidates/${listId}`);
      setCandidatesArray(candidatesResponse.data);
      setSelectedCandidates([]); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(`خطأ في جلب البيانات: ${error.message}`);
    }
  };

  const handlePageChange = (direction) => {
    setCurrentPage(prevPage => {
      const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
      return newPage >= 1 && newPage <= totalPages ? newPage : prevPage;
    });
  };

  const handleListSelection = () => {
    setSelectedListId(prev => prev === listIdsArray[currentPage - 1] ? null : listIdsArray[currentPage - 1]);
    setSelectedCandidates([]); 
  };

  const handleCandidateSelection = (candidateId) => {
    setSelectedCandidates(prev => 
      prev.includes(candidateId)
        ? prev.filter(id => id !== candidateId)
        : [...prev, candidateId]
    );
  };

  const localListVotes = async () => {
    if (!selectedListId && selectedCandidates.length === 0) {
      if (window.confirm('لم تقم باختيار قائمة أو مرشحين. إذا قمت بالتصويت الآن، سيتم اعتبار التصويت ورقة بيضاء. هل تريد الاستمرار؟')) {
        try {
          setVoteStatus('جاري إرسال التصويت كورقة بيضاء...');
          
          var x = 0;
          x = x + 1;
          console.log(x);
        

          setVoteStatus('تم إرسال التصويت كورقة بيضاء بنجاح!');
        } catch (error) {
          console.error('Error submitting white vote:', error);
          setVoteStatus(`خطأ في إرسال التصويت: ${error.message}`);
        }
        return;
      } else {
        return;
      }
    }

    if (selectedCandidates.length > 0 && !selectedListId) {
      setVoteStatus('الرجاء اختيار قائمة تحتوي على المرشحين المختارين');
      return;
    }

    try {
      setVoteStatus('جاري إرسال التصويت...');
      
      const votePromises = [];

      if (selectedListId) {
        console.log(selectedListId)
        try {
          await axios.post("http://localhost:5000/api/local-lists", {
            listId: localLists[currentIndex].selectedListId,
            nationalId: currentUser,
          });
          alert("تم التصويت بنجاح!");
    
        } catch (error) {
          console.error("Error voting:", error);
          alert("حدث خطأ أثناء التصويت. الرجاء المحاولة مرة أخرى.");
        }
      };
       
      if (selectedCandidates.length > 0 && selectedListId) {
        const listCandidates = candidatesArray.map(candidate => candidate.CANDIDATE_ID);
        const invalidCandidates = selectedCandidates.filter(id => !listCandidates.includes(id));
        
        if (invalidCandidates.length > 0) {
          setVoteStatus('المرشحين المختارين لا ينتمون إلى القائمة المحددة');
          return;
        }

        selectedCandidates.forEach(candidateId => {
          votePromises.push(
            axios.patch(`http://localhost:5000/api/local-candidates/${candidateId}`, {
              COUNT_OF_VOTES: prevData => (prevData.COUNT_OF_VOTES || 0) + 1
            })
          );
        });
      }

      await Promise.all(votePromises);

      setVoteStatus('تم إرسال التصويت بنجاح!');
      setSelectedCandidates([]); 
      setSelectedListId(null); 
    } catch (error) {
      console.error('Error submitting vote:', error);
      setVoteStatus(`خطأ في إرسال التصويت: ${error.message}`);
    }
  };

  if (loading) {
    return <div>جاري تحميل البيانات...</div>;
  }

  if (error) {
    return <div>خطأ: {error}</div>;
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-4">
            <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mr-4">
              {listName}
            </h2>
            <Checkbox
              id="listSelect"
              checked={selectedListId === listIdsArray[currentPage - 1]}
              onChange={handleListSelection}
            />
          </div>
          {candidatesArray.length > 0 ? (
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
              {candidatesArray.map((candidate, index) => (
                <div key={index} className="block group md:col-span-2 lg:col-span-1">
                  <div className="relative mb-6">
                    <img
                      src={`https://via.placeholder.com/150?text=مرشح+${index + 1}`}
                      alt={`مرشح ${index + 1}`}
                      className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                    />
                    <Checkbox
                      id={`candidate-${candidate.CANDIDATE_ID}`}
                      checked={selectedCandidates.includes(candidate.CANDIDATE_ID)}
                      onChange={() => handleCandidateSelection(candidate.CANDIDATE_ID)}
                    />
                    <label htmlFor={`candidate-${candidate.CANDIDATE_ID}`} className="block text-center mt-2">
                      {candidate.CANDIDATE_NAME}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>لا توجد مرشحين متاحين</p>
          )}
          <div className="flex justify-between mt-8">
            <Button onClick={() => handlePageChange('prev')} disabled={currentPage === 1}>
              <ChevronLeft />
              السابق
            </Button>
            <Button onClick={() => handlePageChange('next')} disabled={currentPage === totalPages}>
              التالي
              <ChevronRight />
            </Button>
          </div>
          <div className="mt-8">
            <Button onClick={localListVotes}>تصويت</Button>
            {voteStatus && <p className="mt-4">{voteStatus}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Voting;

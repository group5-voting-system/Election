// import React from 'react';
// import background from './assets/background-listtype.jpg';
// import background2 from './assets/jordan.jpg';
// const ElectionCircleSelection = () => {
//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center p-4" style={{ backgroundImage: `url(${background2})`}} {{ backgroundSize: cover}}  >
//       <div 
//         className="flex flex-col justify-center items-center w-full h-[25rem] max-w-4xl bg-cover bg-center"
//       >
//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
//           الرجاء اختيار الدائرة المناسبة
//         </h1>
//         <div className="flex flex-col md:flex-row gap-6 justify-center">
//           {['القوائم الحزبية', 'القوائم المحلية'].map((circle, index) => (
//             <button
//               key={index}
//               className="bg-white text-gray-900 rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:bg-black hover:text-white transform hover:scale-105 shadow-lg"
//             >
//               <span className="text-xl md:text-2xl font-semibold mb-2">{circle}</span>
//               <span className="text-sm opacity-75">صوّت الآن</span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ElectionCircleSelection;
// const circleId = '2000000201';



// import React from 'react';
// import background2 from './assets/jorflag.jpg';
// import { useNavigate } from 'react-router-dom';

// const ElectionCircleSelection = () => {
//   const circleId = sessionStorage.getItem('NATIONAL_ID');
//   const navigate = useNavigate(); 

//     const isVoted = axios.get(`http://localhost:5000/voting/${circleId}`);
//     if (isVoted.IS_LOCAL_VOTE= true){
//       Navigate(/localVote);
//     }


//   return (
//     <div 
//       className="min-h-screen bg-white flex items-center justify-center p-4" 
//       style={{ 
//         backgroundImage: `url(${background2})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center'
//       }}
//     >
//       <div className="flex flex-col w-[40rem] h-[25rem] max-w-4xl bg-white bg-opacity-60 rounded-lg p-6">
//         <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-8">
//           الرجاء اختيار الدائرة المناسبة
//         </h1>
//         <div className="flex flex-col md:flex-row gap-6 justify-center">
//           {['القوائم الحزبية', 'القوائم المحلية'].map((circle, index) => (
//             <button
//               key={index}
//               className="bg-white text-gray-900 w-[18rem] h-[15rem]  rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:bg-black hover:text-white transform hover:scale-105 shadow-lg"
//             >
//               <span className="text-xl md:text-2xl font-semibold mb-2">{circle}</span>
//               <span className="text-sm opacity-75">صوّت الآن</span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ElectionCircleSelection;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; 
// import background2 from './assets/jorflag.jpg';
// import { useNavigate } from 'react-router-dom';

// const ElectionCircleSelection = () => {
//   const [isVoted, setIsVoted] = useState(false);
//   const navigate = useNavigate(); 
//   const national_id = "2000000201";
//   // const national_id = sessionStorage.getItem('NATIONAL_ID');
//   useEffect(() => {
//     const checkVoteStatus = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/voting/${national_id}`);
//         if (response.data.IS_LOCAL_VOTE === false) {
//           navigate('/localVote'); 
//         }
//       } catch (error) {
//         console.error('Error fetching vote status:', error);
//       }
//     };

//     checkVoteStatus();
//   }, [national_id, navigate]); 

//   return (
//     <div 
//       className="min-h-screen bg-white flex items-center justify-center p-4" 
//       style={{ 
//         backgroundImage: `url(${background2})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center'
//       }}
//     >
//       <div className="flex flex-col w-[40rem] h-[25rem] max-w-4xl bg-white bg-opacity-60 rounded-lg p-6">
//         <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-8">
//           الرجاء اختيار الدائرة المناسبة
//         </h1>
//         <div className="flex flex-col md:flex-row gap-6 justify-center">
//           {['القوائم الحزبية', 'القوائم المحلية'].map((circle, index) => (
//             <button
//               key={index}
//               className="bg-white text-gray-900 w-[18rem] h-[15rem] rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:bg-black hover:text-white transform hover:scale-105 shadow-lg"
//           >
//               <span className="text-xl md:text-2xl font-semibold mb-2">{circle}</span>
//               <span className="text-sm opacity-75">صوّت الآن</span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ElectionCircleSelection;



// const national_id = sessionStorage.getItem('national_id');


// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; 
// import background2 from './assets/jorflag.jpg';
// import { useNavigate } from 'react-router-dom';

// const ElectionCircleSelection = () => {
//   const navigate = useNavigate(); 
//   const national_id = "2000000201";

//   useEffect(() => {
//   const checkLocalVoteStatus = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/voting/${national_id}`);
//       if (response.data.IS_LOCAL_VOTE === false) {
//         navigate('/localVote'); 
//       }
//     } catch (error) {
//       console.error('Error fetching vote status:', error);
//     }
//   };
//   const checkPartyVoteStatus = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/voting/${national_id}`);
//       if (response.data.IS_LOCAL_VOTE === false) {
//         navigate('/localVote'); 
//       }
//     } catch (error) {
//       console.error('Error fetching vote status:', error);
//     }
//   };}, [national_id]); 

//   const handleButtonClick = (type) => {
//     if (type === 'القوائم المحلية') {
//       checkLocalVoteStatus(); 
//     } else {
//       checkPartyVoteStatus(); 
//     }
//   };
  
//   return (
//     <div 
//       className="min-h-screen bg-white flex items-center justify-center p-4" 
//       style={{ 
//         backgroundImage: `url(${background2})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center'
//       }}
//     >
//       <div className="flex flex-col w-[40rem] h-[25rem] max-w-4xl bg-white bg-opacity-60 rounded-lg p-6">
//         <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-8">
//           الرجاء اختيار الدائرة المناسبة
//         </h1>
//         <div className="flex flex-col md:flex-row gap-6 justify-center">
//           {['القوائم الحزبية', 'القوائم المحلية'].map((circle, index) => (
//             <button
//               key={index}
//               className="bg-white text-gray-900 w-[18rem] h-[15rem] rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:bg-black hover:text-white transform hover:scale-105 shadow-lg"
//               onClick={() => handleButtonClick(circle)} 
//             >
//               <span className="text-xl md:text-2xl font-semibold mb-2">{circle}</span>
//               <span className="text-sm opacity-75">صوّت الآن</span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ElectionCircleSelection;






import React from 'react';
import axios from 'axios'; 
import background2 from './assets/jorflag.jpg';
import { useNavigate } from 'react-router-dom';

const ElectionCircleSelection = () => {
  const navigate = useNavigate(); 
  const national_id = "2000000202";
  const checkLocalVoteStatus = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/voting/${national_id}`);
      if (response.data.IS_LOCAL_VOTE === false) {
        navigate('/localVote'); 
      }
    } catch (error) {
      console.error('Error fetching vote status:', error);
    }
  };

  const checkPartyVoteStatus = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/voting/${national_id}`);
     
      if (response.data.IS_LOCAL_VOTE === true) { 
        navigate('/partyVote');
      }
    } catch (error) {
      console.error('Error fetching vote status:', error);
    }
  };

  const handleButtonClick = (type) => {
    if (type === 'القوائم المحلية') {
      checkLocalVoteStatus(); 
    } else if (type === 'القوائم الحزبية') {
      checkPartyVoteStatus(); 
    }
  };

  return (
    <div 
      className="min-h-screen bg-white flex items-center justify-center p-4" 
      style={{ 
        backgroundImage: `url(${background2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex flex-col w-[40rem] h-[25rem] max-w-4xl bg-white bg-opacity-60 rounded-lg p-6">
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-8">
          الرجاء اختيار الدائرة المناسبة
        </h1>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {['القوائم الحزبية', 'القوائم المحلية'].map((circle, index) => (
            <button
              key={index}
              className="bg-white text-gray-900 w-[18rem] h-[15rem] rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:bg-black hover:text-white transform hover:scale-105 shadow-lg"
              onClick={() => handleButtonClick(circle)}
            >
              <span className="text-xl md:text-2xl font-semibold mb-2">{circle}</span>
              <span className="text-sm opacity-75">صوّت الآن</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectionCircleSelection;

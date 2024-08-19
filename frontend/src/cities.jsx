// import flag from "./assets/jrdan_flag.png"
// function Cities() {
//   return (
//     <>
//     <div className="flex flex-col">
//       <img src={flag}/>
//       <p className="text-center">الزرقاء</p>
//       <div>الدائرة الاولى</div>
//     </div>
//     </>
//   )
// }

// export default App


// import React from 'react';
// import flag from "./assets/jrdan_flag.png"


// const data = [
//   { city: "الزرقاء", circle_num: "الأولى" },
//   { city: "عمان", circle_num: "الأولى" },
//   { city: "عمان", circle_num: "الثانية" },
//    { city: "عمان", circle_num: "الثالثة" },
//   { city: "إربد", circle_num: "الأولى" },
//   { city: "إربد", circle_num: "الثانية" },
//   { city: "الكرك", circle_num: "الأولى" },
//   { city: "الطفيلة", circle_num: "الأولى" },
//   { city: "معان", circle_num: "الأولى" },
//   { city: "المفرق", circle_num: "الأولى" },
//   { city: "السلط", circle_num: "الأولى" },
//   { city: "جرش", circle_num: "الأولى" },
//   { city: "العقبة", circle_num: "الأولى" }
// ];


// const GridItem = () => (
//   <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
    
//     <div className="w-24 h-24 mb-4">
//     <img src={flag}/>
//     </div>
//     <p className="text-lg font-semibold mb-2">الزرقاء</p>
//     <div className="bg-gray-100 rounded-full px-3 py-1">
//       <span className="text-sm">الدوائر 1</span>
//     </div>
//   </div>
// );

// const ArabicGrid = () => {
//   return (
//     <div className="bg-gray-900 min-h-screen p-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {[...Array(12)].map((_, index) => (
//             <GridItem key={index} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArabicGrid;





// import React from 'react';
// import flag from "./assets/jrdan_flag.png"; 
// import { Navigate } from 'react-router-dom';

// const GridItem = ({ city, circle_num }) => (
//   <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
//     <div className="w-40 h-40 mb-4">
//       <img src={flag} alt="علم الأردن" className="w-full h-full object-cover" />
//     </div>
//     <p className="text-lg font-semibold mb-2">{city}</p>
//     <div className="bg-gray-100 rounded-full px-3 py-1">
//       <span className="text-sm">الدائرة {circle_num}</span>
//     </div>
//   </div>
// );

// const ArabicGrid = () => {
//   const data = [
//     { city: "الزرقاء", circle_num: "الأولى" },
//     { city: "عمان", circle_num: "الأولى" },
//     { city: "عمان", circle_num: "الثانية" },
//     { city: "عمان", circle_num: "الثالثة" },
//     { city: "إربد", circle_num: "الأولى" },
//     { city: "إربد", circle_num: "الثانية" },
//     { city: "الكرك", circle_num: "الأولى" },
//     { city: "الطفيلة", circle_num: "الأولى" },
//     { city: "معان", circle_num: "الأولى" },
//     { city: "المفرق", circle_num: "الأولى" },
//     { city: "السلط", circle_num: "الأولى" },
//     { city: "جرش", circle_num: "الأولى" },
//     { city: "العقبة", circle_num: "الأولى" }
//   ];
//   const Select = () => {
//     const c = 3
//     if (c=3){
//       Navigate(/type);
//     }
//     else if (c=2){
//       Navigate(/type);
//     }
//     else if (c=1){
//       Navigate(/type);
//     }
//   }

//   return (
//     <div className="min-h-screen p-8 ">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 ">
//           {data.map((item, index) => (
//             <GridItem key={index} city={item.city} circle_num={item.circle_num} OnClick={Select} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArabicGrid;







// import React from 'react';
// import flag from "./assets/jrdan_flag.png";
// import { useNavigate } from 'react-router-dom'; 
// const GridItem = ({ city, circle_num, onClick }) => (
//   <div 
//     className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center cursor-pointer" 
//     onClick={onClick}
//   >
//     <div className="w-40 h-40 mb-4">
//       <img src={flag} alt="علم الأردن" className="w-full h-full object-cover" />
//     </div>
//     <p className="text-lg font-semibold mb-2">{city}</p>
//     <div className="bg-gray-100 rounded-full px-3 py-1">
//       <span className="text-sm">الدائرة {circle_num}</span>
//     </div>
//   </div>
// );




// const ArabicGrid = () => {
//   const navigate = useNavigate(); 
//   const data = [
//     { city: "الزرقاء", circle_num: "الأولى" },
//     { city: "عمان", circle_num: "الأولى" },
//     { city: "عمان", circle_num: "الثانية" },
//     { city: "عمان", circle_num: "الثالثة" },
//     { city: "إربد", circle_num: "الأولى" },
//     { city: "إربد", circle_num: "الثانية" },
//     { city: "الكرك", circle_num: "الأولى" },
//     { city: "الطفيلة", circle_num: "الأولى" },
//     { city: "معان", circle_num: "الأولى" },
//     { city: "المفرق", circle_num: "الأولى" },
//     { city: "السلط", circle_num: "الأولى" },
//     { city: "جرش", circle_num: "الأولى" },
//     { city: "العقبة", circle_num: "الأولى" }
//   ];

//   const handleClick = (circle_num) => {
//     if (circle_num === 'الثالثة') {
//       navigate('/type');
//     }
//    else if (circle_num ===طالثانية') {
//       navigate('/type');
//     }
//     else if (circle_num === 'الثاة') {
//       navigate('/type');
//     }
//   };

//   return (
//     <div className="min-h-screen p-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {data.map((item, index) => (
//             <GridItem 
//               key={index} 
//               city={item.city} 
//               circle_num={item.circle_num} 
//               onClick={() => handleClick(item.circle_num)} 
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArabicGrid;


// const national_id = sessionStorage.getItem('national_id');




// import React from 'react';
// import flag from "./assets/jrdan_flag.png"; 
// import { useNavigate } from 'react-router-dom';


// const GridItem = ({ city, circle_num, onClick, clickable }) => (
//   <div 
//     className={`bg-white p-4 rounded-lg shadow-md flex flex-col items-center ${clickable ? 'cursor-pointer' : 'cursor-not-allowed'}`}
//     onClick={clickable ? onClick : undefined}
//   >
//     <div className="w-40 h-40 mb-4">
//       <img src={flag} alt="علم الأردن" className="w-full h-full object-cover" />
//     </div>
//     <p className="text-lg font-semibold mb-2">{city}</p>
//     <div className="bg-gray-100 rounded-full px-3 py-1">
//       <span className="text-sm">الدائرة {circle_num}</span>
//     </div>
//   </div>
// );
// const ArabicGrid = () => {
//   const navigate = useNavigate(); 
//   const national_id = "2000000201";

//   const checkLocalVoteStatus = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/voting/${national_id}`);
//       if (response.data.CIRCLE_ID) {
//         const circleId = response.data.CIRCLE_ID;

//       }
//     } catch (error) {
//       console.error('Error fetching vote status:', error);
//     }
//   };
 

//   const data = [
//     { city: "الزرقاء", circle_num: "الأولى" },
//     { city: "عمان", circle_num: "الأولى" },
//     { city: "عمان", circle_num: "الثانية" },
//     { city: "عمان", circle_num: "الثالثة" },
//     { city: "إربد", circle_num: "الأولى" },
//     { city: "إربد", circle_num: "الثانية" },
//     { city: "الكرك", circle_num: "الأولى" },
//     { city: "الطفيلة", circle_num: "الأولى" },
//     { city: "معان", circle_num: "الأولى" },
//     { city: "المفرق", circle_num: "الأولى" },
//     { city: "السلط", circle_num: "الأولى" },
//     { city: "جرش", circle_num: "الأولى" },
//     { city: "العقبة", circle_num: "الأولى" }
//   ];

//   const handleClick = (city, circle_num) => {
  
//     navigate('/type');
//   };

//   return (
//     <div className="min-h-screen p-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {data.map((item, index) => {
//             const isClickable = (circleId === '2' && item.city === 'الزرقاء' && item.circle_num === 'الأولى') ||
//                                 (circleId === '3' && item.city === 'عمان' && item.circle_num === 'الثالثة') ||
//                                 (circleId === '1' && item.city === 'عمان' && item.circle_num === 'الأولى');
//             return (
//               <GridItem 
//                 key={index} 
//                 city={item.city} 
//                 circle_num={item.circle_num} 
//                 onClick={() => isClickable && handleClick(item.city, item.circle_num)} 
//                 clickable={isClickable} 
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArabicGrid;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import flag from "./assets/jrdan_flag.png"; 
import { useNavigate } from 'react-router-dom';

const GridItem = ({ city, circle_num, onClick, clickable }) => (
  <div 
    className={`bg-white p-4 rounded-lg shadow-md flex flex-col items-center ${clickable ? 'cursor-pointer' : 'cursor-not-allowed'}`}
    onClick={clickable ? onClick : undefined}
  >
    <div className="w-40 h-40 mb-4">
      <img src={flag} alt="علم الأردن" className="w-full h-full object-cover" />
    </div>
    <p className="text-lg font-semibold mb-2">{city}</p>
    <div className="bg-gray-100 rounded-full px-3 py-1">
      <span className="text-sm">الدائرة {circle_num}</span>
    </div>
  </div>
);

const ArabicGrid = () => {
  const navigate = useNavigate(); 
  const [circleId, setCircleId] = useState(null);

  useEffect(() => {
    const checkLocalVoteStatus = async () => {
      try {
        const national_id = "2000000202"; 
        const response = await axios.get(`http://localhost:5000/voting/${national_id}`);
        console.log(response.data.CIRCLE_ID)
        const saveCircle = sessionStorage.setItem("Circle_id",response.data.CIRCLE_ID)
        console.log(saveCircle)
        const circleIdFromResponse = `${response.data.CIRCLE_ID}`; 
        console.log('Fetched circleId:', circleIdFromResponse); 
        setCircleId(circleIdFromResponse);
      } catch (error) {
        console.error('Error fetching vote status:', error);
      }
    };

    checkLocalVoteStatus();
  }, []); 

  const handleClick = () => {
    navigate('/type');
  };

  const data = [
    { city: "الزرقاء", circle_num: "الأولى" },
    { city: "عمان", circle_num: "الأولى" },
    { city: "عمان", circle_num: "الثانية" },
    { city: "عمان", circle_num: "الثالثة" },
    { city: "إربد", circle_num: "الأولى" },
    { city: "إربد", circle_num: "الثانية" },
    { city: "الكرك", circle_num: "الأولى" },
    { city: "الطفيلة", circle_num: "الأولى" },
    { city: "معان", circle_num: "الأولى" },
    { city: "المفرق", circle_num: "الأولى" },
    { city: "السلط", circle_num: "الأولى" },
    { city: "جرش", circle_num: "الأولى" },
    { city: "العقبة", circle_num: "الأولى" }
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {data.map((item, index) => {
            const isClickable = (circleId === '3' && item.city === 'عمان' && item.circle_num === 'الثالثة') ||
                                (circleId === '2' && item.city === 'الزرقاء' && item.circle_num === 'الأولى') ||
                                (circleId === '1' && item.city === 'عمان' && item.circle_num === 'الأولى');
            
            console.log(`Checking item: ${item.city} ${item.circle_num}, isClickable: ${isClickable}`); // تتبع القيم

            return (
              <GridItem 
                key={index} 
                city={item.city} 
                circle_num={item.circle_num} 
                onClick={handleClick} 
                clickable={isClickable} 
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArabicGrid;



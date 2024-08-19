import React from "react";
import CircularProgress from "./CircularProgress"; // تأكد من استيراد CircularProgress بشكل صحيح

const ElectoralDistricts = () => {
  const districts = [
    { name: "عمان الأولى", info: "معلومات عن الدائرة", progress: 40 },
    { name: "الزرقاء  ", info: "معلومات عن الدائرة", progress: 90 },
    { name: "عمان الثالثة", info: "معلومات عن الدائرة", progress: 80 },
  ];

  return (
    <div className="my-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        الدوائر الانتخابية
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {districts.map((district, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold text-center mb-2">
              {district.name}
            </h3>
            <p className="text-center text-gray-600 mb-4">{district.info}</p>
            <div className="w-32 h-32 mb-4">
              <CircularProgress value={district.progress} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectoralDistricts;

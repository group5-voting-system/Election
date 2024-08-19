import React from "react";
import CircularProgress from "./CircularProgress";
import { motion } from "framer-motion";

const DistrictCard = ({ district }) => (
  <motion.div
    className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="text-2xl font-bold text-center mb-3 text-[#ce1126]">
      {district.name}
    </h3>
    <div className="w-40 h-40 mb-4">
      <CircularProgress value={district.progress} color="#ce1126" />
    </div>
  </motion.div>
);

const ElectoralDistricts = () => {
  const districts = [
    { name: "عمان الأولى", progress: 40 },
    { name: "الزرقاء", progress: 90 },
    { name: "عمان الثالثة", progress: 80 },
  ];

  return (
    <div className="my-12 container mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-[#ce1126]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        الدوائر الانتخابية
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {districts.map((district, index) => (
          <DistrictCard key={index} district={district} />
        ))}
      </div>
    </div>
  );
};

export default ElectoralDistricts;

import React, { useState } from 'react';
import { FiCalendar, FiClock, FiUsers } from 'react-icons/fi';

const ElectionsPanel = () => {
  const [elections, setElections] = useState([
    { id: 1, name: 'الانتخابات الرئاسية 2024', date: '2024-11-03', status: 'قادمة' },
    { id: 2, name: 'انتخابات المجلس المحلي', date: '2024-12-15', status: 'قادمة' },
    { id: 3, name: 'انتخابات البرلمان', date: '2024-12-28', status: 'قادمة' },
  ]);

  return (
    <div dir="rtl">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">إدارة الانتخابات</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
          إنشاء انتخابات جديدة
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {elections.map(election => (
          <div key={election.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{election.name}</h3>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <span>{election.date}</span>
                <FiCalendar className="mr-2" />
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <span>{election.status}</span>
                <FiClock className="mr-2" />
              </div>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium w-full">
                إدارة الانتخابات
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectionsPanel;
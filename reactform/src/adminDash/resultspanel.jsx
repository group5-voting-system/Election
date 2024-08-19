import React from 'react';
import { FiBarChart2 } from 'react-icons/fi';

const ResultsPanel = () => {
  const electionResults = [
    { id: 1, name: 'الانتخابات الرئاسية 2024', winner: 'المرشح أ', turnout: '67%' },
    { id: 2, name: 'انتخابات المجلس المحلي', winner: 'الحزب ب', turnout: '52%' },
    { id: 3, name: 'استفتاء على تخطيط المدينة', result: 'تمت الموافقة', turnout: '48%' },
  ];

  return (
    <div dir="rtl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">نتائج الانتخابات</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {electionResults.map(result => (
          <div key={result.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{result.name}</h3>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <span>{result.winner || result.result}</span>
                <FiBarChart2 className="mr-2" />
              </div>
              <div className="text-sm text-gray-600 mb-4 bg-yellow-500 rounded-full w-40">
                نسبة المشاركة: {result.turnout}
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium w-full">
                عرض النتائج التفصيلية
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsPanel;
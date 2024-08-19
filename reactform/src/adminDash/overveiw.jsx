import React from 'react';
import { FiUsers, FiCalendar, FiCheckSquare } from 'react-icons/fi';

const OverviewPanel = () => {
  const stats = [
    { name: 'إجمالي الناخبين المسجلين', value: '10,000', icon: FiUsers, color: 'bg-blue-500' },
    { name: 'الانتخابات النشطة', value: '3', icon: FiCalendar, color: 'bg-green-500' },
    { name: 'الأصوات الحديثة', value: '5,678', icon: FiCheckSquare, color: 'bg-purple-500' },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className={`flex-shrink-0 ${item.color} rounded-md p-3`}>
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="mr-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{item.value}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg leading-6 font-medium text-gray-900">إجراءات سريعة</h3>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            إنشاء انتخابات جديدة
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            عرض أحدث النتائج
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium">
            إدارة الناخبين
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverviewPanel;
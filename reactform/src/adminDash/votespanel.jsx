import React, { useState } from 'react';
import { FiSearch, FiEdit2, FiTrash2 } from 'react-icons/fi';

const VotersPanel = () => {
  const [voters, setVoters] = useState([
    { id: 1, name: 'أحمد محمد', email: 'ahmed@example.com', status: 'نشط' },
    { id: 2, name: 'فاطمة علي', email: 'fatima@example.com', status: 'غير نشط' },
    { id: 3, name: 'محمود حسن', email: 'mahmoud@example.com', status: 'نشط' },
    { id: 4, name: 'زينب أحمد', email: 'zainab@example.com', status: 'نشط' },
    { id: 5, name: 'عمر خالد', email: 'omar@example.com', status: 'غير نشط' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVoters = voters.filter(voter =>
    voter.name.includes(searchTerm) ||
    voter.email.includes(searchTerm)
  );

  const toggleVoterStatus = (id) => {
    setVoters(voters.map(voter =>
      voter.id === id ? { ...voter, status: voter.status === 'نشط' ? 'غير نشط' : 'نشط' } : voter
    ));
  };

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">إدارة الناخبين</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
          إضافة ناخب جديد
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="البحث عن الناخبين..."
              className="w-full pr-10 pl-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FiSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الاسم</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">البريد الإلكتروني</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الحالة</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredVoters.map(voter => (
              <tr key={voter.id}>
                <td className="px-6 py-4 whitespace-nowrap text-right">{voter.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{voter.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    voter.status === 'نشط' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {voter.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                  <button onClick={() => toggleVoterStatus(voter.id)} className="text-indigo-600 hover:text-indigo-900 ml-3">
                    <FiEdit2 className="inline-block ml-1" /> تعديل
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <FiTrash2 className="inline-block ml-1" /> حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VotersPanel;
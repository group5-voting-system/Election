import React, { useState } from 'react';
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';

const CandidatesPanel = () => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: 'علي محمود', party: 'الحزب أ', list: 'حزبي' },
    { id: 2, name: 'سارة أحمد', party: 'الحزب ب', list: 'محلي' },
    { id: 3, name: 'خالد عمر', party: 'الحزب ج', list: 'حزبي' },
    { id: 4, name: 'نور حسن', party: 'الحزب أ', list: 'محلي' },
    { id: 5, name: 'محمد علي', party: 'الحزب ب', list: 'حزبي' },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newCandidate, setNewCandidate] = useState({ name: '', party: '', list: 'حزبي' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCandidate({ ...newCandidate, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCandidates([...candidates, { ...newCandidate, id: candidates.length + 1 }]);
    setNewCandidate({ name: '', party: '', list: 'حزبي' });
    setShowForm(false);
  };

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">إدارة المرشحين</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
        >
          <FiPlus className="ml-2" /> إضافة مرشح جديد
        </button>
      </div>
      
      {showForm && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">إضافة مرشح جديد</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <input
              type="text"
              name="name"
              placeholder="اسم المرشح"
              value={newCandidate.name}
              onChange={handleInputChange}
              className="p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="party"
              placeholder="الحزب"
              value={newCandidate.party}
              onChange={handleInputChange}
              className="p-2 border rounded-md"
              required
            />
            <select
              name="list"
              value={newCandidate.list}
              onChange={handleInputChange}
              className="p-2 border rounded-md"
              required
            >
              <option value="حزبي">قائمة حزبية</option>
              <option value="محلي">قائمة محلية</option>
            </select>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 sm:col-span-3">
              إضافة المرشح
            </button>
          </form>
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الاسم</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الحزب</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">القائمة</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {candidates.map(candidate => (
              <tr key={candidate.id}>
                <td className="px-6 py-4 whitespace-nowrap text-right">{candidate.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{candidate.party}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{candidate.list}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                  <button className="text-indigo-600 hover:text-indigo-900 ml-3">
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

export default CandidatesPanel;
import React, { useState } from 'react';
import { FiHome, FiUsers, FiUserCheck, FiCalendar, FiPieChart, FiSettings } from 'react-icons/fi';
import OverviewPanel from './overveiw';
import VotersPanel from './votespanel';
import CandidatesPanel from './candidatespanel';
import ElectionsPanel from './elictionspanel';
import ResultsPanel from './resultspanel';
import SettingsPanel from './settings';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return <OverviewPanel />;
      case 'voters':
        return <VotersPanel />;
      case 'candidates':
        return <CandidatesPanel />;
      case 'elections':
        return <ElectionsPanel />;
      case 'results':
        return <ResultsPanel />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <OverviewPanel />;
    }
  };
  

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-gray-800">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
                <span className="ml-2 text-white text-2xl font-semibold">مسؤول التصويت</span>
              </div>
              <nav className="mt-5 flex-1 px-2 bg-gray-800 space-y-1">
                <NavItem icon={FiHome} label="نظرة عامة" onClick={() => setActiveTab('overview')} active={activeTab === 'overview'} />
                <NavItem icon={FiUsers} label="مقترعين" onClick={() => setActiveTab('voters')} active={activeTab === 'voters'} />
                <NavItem icon={FiUserCheck} label="مرشحين" onClick={() => setActiveTab('candidates')} active={activeTab === 'candidates'} />
                <NavItem icon={FiCalendar} label="إنتخابات" onClick={() => setActiveTab('elections')} active={activeTab === 'elections'} />
                <NavItem icon={FiPieChart} label="النتائج" onClick={() => setActiveTab('results')} active={activeTab === 'results'} />
                <NavItem icon={FiSettings} label="إعدادات" onClick={() => setActiveTab('settings')} active={activeTab === 'settings'} />
              </nav>
            </div>
            <div className="flex-shrink-0 flex bg-gray-700 p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img className="inline-block h-9 w-9 rounded-full" src="/admin-avatar.jpg" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">محمد حسون</p>
                    <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">ملف المسؤول الشخصي</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-lg leading-6 font-semibold text-gray-900">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

const NavItem = ({ icon: Icon, label, onClick, active }) => (
  
   <a href="#"
    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
      active ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`}
    onClick={onClick}
  >
    <Icon className={`mr-3 flex-shrink-0 h-6 w-6 ${
      active ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300'
    }`} />
    {label}
  </a>
);


export default AdminDashboard;
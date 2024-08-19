import React, { useState } from 'react';
import { FiLock, FiMail, FiGlobe, FiDatabase, FiSave } from 'react-icons/fi';

const SettingsPanel = () => {
  const [activeSection, setActiveSection] = useState('security');
  const [settings, setSettings] = useState({
    passwordMinLength: 8,
    twoFactorAuth: false,
    emailNotifications: true,
    language: 'ar',
    dataRetentionDays: 365,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    console.log('حفظ الإعدادات:', settings);
    alert('تم حفظ الإعدادات بنجاح!');
  };

  const renderSecuritySettings = () => (
    <div>
      <h3 className="text-lg font-semibold mb-4">إعدادات الأمان</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">الحد الأدنى لطول كلمة المرور</label>
          <input
            type="number"
            name="passwordMinLength"
            value={settings.passwordMinLength}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="twoFactorAuth"
              checked={settings.twoFactorAuth}
              onChange={handleInputChange}
              className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <span className="mr-2 text-sm text-gray-700">تفعيل المصادقة الثنائية</span>
          </label>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div>
      <h3 className="text-lg font-semibold mb-4">تفضيلات الإشعارات</h3>
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="emailNotifications"
            checked={settings.emailNotifications}
            onChange={handleInputChange}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <span className="mr-2 text-sm text-gray-700">استلام إشعارات البريد الإلكتروني</span>
        </label>
      </div>
    </div>
  );

  const renderLanguageSettings = () => (
    <div>
      <h3 className="text-lg font-semibold mb-4">اللغة والتوطين</h3>
      <div>
        <label className="block text-sm font-medium text-gray-700">اللغة الافتراضية</label>
        <select
          name="language"
          value={settings.language}
          onChange={handleInputChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="ar">العربية</option>
          <option value="en">الإنجليزية</option>
          <option value="fr">الفرنسية</option>
        </select>
      </div>
    </div>
  );

  const renderDataManagementSettings = () => (
    <div>
      <h3 className="text-lg font-semibold mb-4">إدارة البيانات</h3>
      <div>
        <label className="block text-sm font-medium text-gray-700">فترة الاحتفاظ بالبيانات (بالأيام)</label>
        <input
          type="number"
          name="dataRetentionDays"
          value={settings.dataRetentionDays}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
    </div>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'security':
        return renderSecuritySettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'language':
        return renderLanguageSettings();
      case 'data':
        return renderDataManagementSettings();
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">إعدادات النظام</h2>
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <nav className="space-y-1">
              {[
                { icon: FiLock, title: 'الأمان', key: 'security' },
                { icon: FiMail, title: 'الإشعارات', key: 'notifications' },
                { icon: FiGlobe, title: 'اللغة', key: 'language' },
                { icon: FiDatabase, title: 'إدارة البيانات', key: 'data' },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveSection(item.key)}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                    activeSection === item.key
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="ml-3 flex-shrink-0 h-6 w-6" />
                  {item.title}
                </button>
              ))}
            </nav>
          </div>
          <div className="w-full sm:w-3/4 sm:pr-8">
            {renderActiveSection()}
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSave}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FiSave className="ml-2" /> حفظ الإعدادات
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
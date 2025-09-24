'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'th' : 'en');
  };

  return (
    <div className="flex items-center gap-2">
      <Globe size={16} className="text-gray-600 dark:text-gray-400" />
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
        title={`Switch to ${language === 'en' ? 'Thai' : 'English'}`}
      >
        <span className="text-lg leading-none">
          {language === 'en' ? '🇺🇸' : '🇹🇭'}
        </span>
        <span>
          {language === 'en' ? 'EN' : 'TH'}
        </span>
      </button>
    </div>
  );
}

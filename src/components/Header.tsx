// import React from 'react';
import { BellIcon, SearchIcon, MenuIcon, SunIcon, MoonIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
export function Header() {
  const navigate = useNavigate();
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-gray-500 dark:text-gray-400">
          <MenuIcon size={24} />
        </button>
        <div className="relative hidden md:block">
          <input type="text" placeholder="Search courses, resources..." className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
          <SearchIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
          {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
        </button>
        <button onClick={() => navigate('/notifications')} className="relative text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
          <BellIcon size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </button>
        <div className="md:hidden text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
          <SearchIcon size={20} />
        </div>
      </div>
    </header>;
}
import React from 'react';
import { HomeIcon, BookOpenIcon, CalendarIcon, MessageSquareIcon, UsersIcon, AwardIcon, SettingsIcon, HelpCircleIcon } from 'lucide-react';
export function Sidebar() {
  const menuItems = [{
    icon: <HomeIcon size={20} />,
    label: 'Dashboard',
    active: true
  }, {
    icon: <BookOpenIcon size={20} />,
    label: 'My Courses'
  }, {
    icon: <CalendarIcon size={20} />,
    label: 'Calendar'
  }, {
    icon: <MessageSquareIcon size={20} />,
    label: 'Messages'
  }, {
    icon: <UsersIcon size={20} />,
    label: 'Participants'
  }, {
    icon: <AwardIcon size={20} />,
    label: 'Grades'
  }, {
    icon: <SettingsIcon size={20} />,
    label: 'Settings'
  }, {
    icon: <HelpCircleIcon size={20} />,
    label: 'Help'
  }];
  return <aside className="bg-white w-64 hidden md:flex flex-col border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600">EduLearn</h1>
        <p className="text-xs text-gray-500 mt-1">Modern Learning Platform</p>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-2">
          {menuItems.map((item, index) => <li key={index}>
              <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm ${item.active ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}>
                <span className={item.active ? 'text-blue-600' : 'text-gray-500'}>
                  {item.icon}
                </span>
                {item.label}
              </a>
            </li>)}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
            JS
          </div>
          <div>
            <p className="text-sm font-medium">John Smith</p>
            <p className="text-xs text-gray-500">Student</p>
          </div>
        </div>
      </div>
    </aside>;
}
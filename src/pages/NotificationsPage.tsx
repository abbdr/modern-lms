import React from 'react';
import { BellIcon, ChevronRightIcon } from 'lucide-react';
export function NotificationsPage() {
  const notifications = [{
    id: 1,
    title: 'New Assignment Posted',
    message: 'A new assignment has been posted in Introduction to Computer Science',
    time: '2 hours ago',
    type: 'assignment',
    unread: true
  }, {
    id: 2,
    title: 'Quiz Reminder',
    message: "Don't forget about the upcoming quiz in Advanced Mathematics",
    time: '5 hours ago',
    type: 'quiz',
    unread: true
  }, {
    id: 3,
    title: 'Course Update',
    message: 'New learning materials have been added to Modern Physics',
    time: '1 day ago',
    type: 'course',
    unread: true
  }, {
    id: 4,
    title: 'Grade Posted',
    message: 'Your grade for the last assignment has been posted',
    time: '2 days ago',
    type: 'grade',
    unread: false
  }];
  return <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
          <BellIcon size={20} className="text-blue-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
          <p className="text-gray-600">Stay updated with your courses</p>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 divide-y divide-gray-200">
        {notifications.map(notification => <div key={notification.id} className={`p-4 hover:bg-gray-50 cursor-pointer flex items-center justify-between ${notification.unread ? 'bg-blue-50/50' : ''}`}>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-gray-900">
                  {notification.title}
                </h3>
                {notification.unread && <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                    New
                  </span>}
              </div>
              <p className="text-gray-600 text-sm mt-1">
                {notification.message}
              </p>
              <p className="text-gray-400 text-xs mt-2">{notification.time}</p>
            </div>
            <ChevronRightIcon size={20} className="text-gray-400" />
          </div>)}
      </div>
    </div>;
}
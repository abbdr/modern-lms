import React, { useState } from 'react';
import { ArrowLeftIcon, BookIcon, FileTextIcon, PlayCircleIcon, MessageCircleIcon, CheckCircleIcon } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
export function CourseContent() {
  const [activeTab, setActiveTab] = useState('modules');
  const navigate = useNavigate();
  const {
    courseId
  } = useParams();
  const courseData = {
    title: 'Introduction to Computer Science',
    instructor: 'Dr. Alan Turing',
    description: 'This course provides a comprehensive introduction to computer science, covering fundamental concepts, algorithms, and programming principles.',
    modules: [{
      title: 'Module 1: Introduction to Programming',
      items: [{
        type: 'video',
        title: 'What is Programming?',
        completed: true,
        duration: '12:30'
      }, {
        type: 'reading',
        title: 'History of Computing',
        completed: true,
        pages: 15
      }, {
        type: 'assignment',
        title: 'First Programming Exercise',
        completed: true,
        dueDate: 'Sep 15'
      }, {
        type: 'quiz',
        title: 'Programming Basics Quiz',
        completed: true,
        questions: 10
      }]
    }, {
      title: 'Module 2: Data Structures',
      items: [{
        type: 'video',
        title: 'Arrays and Lists',
        completed: true,
        duration: '18:45'
      }, {
        type: 'video',
        title: 'Stacks and Queues',
        completed: false,
        duration: '22:10'
      }, {
        type: 'reading',
        title: 'Tree Structures',
        completed: false,
        pages: 22
      }, {
        type: 'assignment',
        title: 'Data Structure Implementation',
        completed: false,
        dueDate: 'Oct 5'
      }]
    }, {
      title: 'Module 3: Algorithms',
      items: [{
        type: 'video',
        title: 'Sorting Algorithms',
        completed: false,
        duration: '24:15'
      }, {
        type: 'video',
        title: 'Search Algorithms',
        completed: false,
        duration: '19:30'
      }, {
        type: 'assignment',
        title: 'Algorithm Analysis Project',
        completed: false,
        dueDate: 'Oct 25'
      }, {
        type: 'quiz',
        title: 'Algorithm Complexity Quiz',
        completed: false,
        questions: 15
      }]
    }]
  };
  const getItemIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <PlayCircleIcon size={16} className="text-blue-600" />;
      case 'reading':
        return <BookIcon size={16} className="text-green-600" />;
      case 'assignment':
        return <FileTextIcon size={16} className="text-orange-600" />;
      case 'quiz':
        return <MessageCircleIcon size={16} className="text-purple-600" />;
      default:
        return <FileTextIcon size={16} className="text-gray-600" />;
    }
  };
  const tabs = [{
    id: 'modules',
    label: 'Modules'
  }, {
    id: 'announcements',
    label: 'Announcements'
  }, {
    id: 'grades',
    label: 'Grades'
  }, {
    id: 'discussion',
    label: 'Discussion'
  }];
  const handleItemClick = (item: any) => {
    switch (item.type) {
      case 'video':
        navigate(`/video/${item.id || 'default'}`);
        break;
      case 'quiz':
        navigate(`/quiz/${item.id || 'default'}`);
        break;
      case 'assignment':
        navigate(`/assignment/${item.id || 'default'}`);
        break;
      case 'reading':
        navigate(`/reading/${item.id || 'default'}`);
        break;
    }
  };
  return <div className="max-w-5xl mx-auto">
      <button onClick={() => navigate('/')} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
        <ArrowLeftIcon size={16} />
        <span>Back to Dashboard</span>
      </button>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 relative p-6 flex flex-col justify-end">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover"></div>
          <div className="relative">
            <h1 className="text-white text-3xl font-bold mb-2">
              {courseData.title}
            </h1>
            <p className="text-blue-100">{courseData.instructor}</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-6">{courseData.description}</p>
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`py-3 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                  {tab.label}
                </button>)}
            </nav>
          </div>
        </div>
      </div>
      {activeTab === 'modules' && <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Course Content
            </h2>
            <div className="space-y-6">
              {courseData.modules.map((module, moduleIndex) => <div key={moduleIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="font-medium text-gray-900">
                      {module.title}
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {module.items.map((item, itemIndex) => <div key={itemIndex} className="px-4 py-3 hover:bg-gray-50 flex items-center justify-between cursor-pointer" onClick={() => handleItemClick(item)}>
                        <div className="flex items-center gap-3">
                          {getItemIcon(item.type)}
                          <span className="text-gray-800">{item.title}</span>
                          {item.completed && <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                              Completed
                            </span>}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          {item.duration && `${item.duration}`}
                          {item.pages && `${item.pages} pages`}
                          {item.dueDate && `Due: ${item.dueDate}`}
                          {item.questions && `${item.questions} questions`}
                          {item.completed && <CheckCircleIcon size={16} className="text-green-600" />}
                        </div>
                      </div>)}
                  </div>
                </div>)}
            </div>
          </div>
        </div>}
      {activeTab !== 'modules' && <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center justify-center h-64">
          <p className="text-gray-500">
            This {activeTab} section is coming soon.
          </p>
        </div>}
    </div>;
}
import React from 'react';
import { CourseCard } from './CourseCard';
import { ChevronRightIcon, ClockIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DashboardProps {
  onSelectCourse: (courseId: string) => void;
}

export function Dashboard() {
  const navigate = useNavigate();
  const handleSelectCourse = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };
  const courses = [{
    id: 'course-1',
    title: 'Introduction to Computer Science',
    instructor: 'Dr. Alan Turing',
    progress: 65,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    color: 'blue'
  }, {
    id: 'course-2',
    title: 'Advanced Mathematics',
    instructor: 'Prof. Katherine Johnson',
    progress: 42,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    color: 'purple'
  }, {
    id: 'course-3',
    title: 'Modern Physics',
    instructor: 'Dr. Richard Feynman',
    progress: 78,
    image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    color: 'green'
  }, 
  {
    id: 'course-4',
    title: 'Web Development Fundamentals',
    instructor: 'Sarah Johnson',
    progress: 25,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    color: 'orange'
  },
  {
    id: 'course-5',
    title: 'Web Development Fundamentals',
    instructor: 'Sarah Johnson',
    progress: 25,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    color: 'orange'
  },
  {
    id: 'course-6',
    title: 'Web Development Fundamentals',
    instructor: 'Sarah Johnson',
    progress: 25,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    color: 'orange'
  },
];
  const upcomingEvents = [{
    title: 'Assignment Due: Computer Science Project',
    time: 'Today, 11:59 PM',
    course: 'Introduction to Computer Science'
  }, {
    title: 'Live Lecture: Calculus Integration',
    time: 'Tomorrow, 10:00 AM',
    course: 'Advanced Mathematics'
  }, {
    title: 'Quiz: Quantum Mechanics',
    time: 'Friday, 3:00 PM',
    course: 'Modern Physics'
  }];
  return <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome back, John!
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your courses.
        </p>
      </div>
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">My Courses</h2>
          <a href="#" className="text-sm text-blue-600 font-medium flex items-center gap-1 hover:underline">
            View all <ChevronRightIcon size={16} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map(course => <CourseCard key={course.id} course={course} onClick={() => handleSelectCourse(course.id)} />)}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Upcoming Events
          </h2>
          <a href="#" className="text-sm text-blue-600 font-medium flex items-center gap-1 hover:underline">
            View calendar <ChevronRightIcon size={16} />
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-200">
          {upcomingEvents.map((event, index) => <div key={index} className="p-4 flex items-start gap-3">
              <div className="mt-1 bg-blue-100 rounded-full p-2 text-blue-600">
                <ClockIcon size={16} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.time}</p>
                <p className="text-xs text-gray-400 mt-1">{event.course}</p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}
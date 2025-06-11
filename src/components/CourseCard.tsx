import React from 'react';
interface CourseCardProps {
  course: {
    id: string;
    title: string;
    instructor: string;
    progress: number;
    image: string;
    color: string;
  };
  onClick: () => void;
}
export function CourseCard({
  course,
  onClick
}: CourseCardProps) {
  const getColorClass = (color: string) => {
    const colors = {
      blue: 'bg-blue-600',
      purple: 'bg-purple-600',
      green: 'bg-green-600',
      orange: 'bg-orange-600',
      red: 'bg-red-600'
    };
    return colors[color as keyof typeof colors] || 'bg-blue-600';
  };
  return <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer" onClick={onClick}>
      <div className="h-32 overflow-hidden relative">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
        <div className={`absolute top-3 right-3 ${getColorClass(course.color)} text-white text-xs py-1 px-2 rounded-full`}>
          In Progress
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
        <p className="text-sm text-gray-500 mb-3">{course.instructor}</p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className={`${getColorClass(course.color)} h-2 rounded-full`} style={{
          width: `${course.progress}%`
        }}></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          {course.progress}% complete
        </p>
      </div>
    </div>;
}
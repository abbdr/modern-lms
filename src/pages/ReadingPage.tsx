import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
export function ReadingPage() {
  const {
    readingId
  } = useParams();
  const navigate = useNavigate();
  return <div className="max-w-3xl mx-auto">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
        <ArrowLeftIcon size={16} />
        <span>Back to Course</span>
      </button>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Reading Material
        </h1>
        <p className="text-gray-600">Reading content coming soon...</p>
      </div>
    </div>;
}
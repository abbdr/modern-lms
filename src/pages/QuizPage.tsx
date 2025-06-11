import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ClockIcon, ArrowLeftIcon, CheckIcon } from 'lucide-react';
export function QuizPage() {
  const {
    quizId
  } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const quiz = {
    title: 'Programming Basics Quiz',
    timeLimit: '30 minutes',
    questions: [{
      id: 1,
      question: 'What is a variable?',
      options: ['A container for storing data values', 'A type of function', 'A programming language', 'A mathematical equation']
    }, {
      id: 2,
      question: 'Which of the following is a loop structure?',
      options: ['for', 'if', 'switch', 'class']
    }, {
      id: 3,
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyper Transfer Markup Language', 'Hyper Text Modern Links']
    }]
  };
  const progress = (currentQuestion + 1) / quiz.questions.length * 100;
  return <div className="max-w-4xl mx-auto">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
        <ArrowLeftIcon size={16} />
        <span>Back to Course</span>
      </button>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="p-8 border-b border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{quiz.title}</h1>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full">
              <ClockIcon size={18} />
              <span className="font-medium">{quiz.timeLimit}</span>
            </div>
          </div>
          {/* Progress bar */}
          <div className="relative pt-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Progress
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out" style={{
              width: `${progress}%`
            }} />
            </div>
            <div className="flex justify-between mt-2">
              {quiz.questions.map((_, index) => <div key={index} className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
                    transition-all duration-200
                    ${currentQuestion === index ? 'bg-blue-600 text-white shadow-lg scale-110' : selectedAnswers[index] ? 'bg-green-50 text-green-600 border-2 border-green-600' : 'bg-gray-50 text-gray-400 border-2 border-gray-200'}
                  `}>
                  {selectedAnswers[index] ? <CheckIcon size={16} /> : index + 1}
                </div>)}
            </div>
          </div>
        </div>
        {/* Question */}
        <div className="p-8">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </span>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {quiz.questions[currentQuestion].question}
            </h2>
            <div className="space-y-4">
              {quiz.questions[currentQuestion].options.map((option, index) => <label key={index} className={`
                    block p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                    hover:border-blue-600 hover:bg-blue-50
                    ${selectedAnswers[currentQuestion] === option ? 'border-blue-600 bg-blue-50 shadow-sm' : 'border-gray-200'}
                  `}>
                  <div className="flex items-center gap-4">
                    <div className={`
                      w-6 h-6 rounded-full border-2 flex items-center justify-center
                      ${selectedAnswers[currentQuestion] === option ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}
                    `}>
                      {selectedAnswers[currentQuestion] === option && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <input type="radio" name={`question-${currentQuestion}`} value={option} checked={selectedAnswers[currentQuestion] === option} onChange={() => setSelectedAnswers({
                  ...selectedAnswers,
                  [currentQuestion]: option
                })} className="hidden" />
                    <span className="text-gray-800 text-lg">{option}</span>
                  </div>
                </label>)}
            </div>
          </div>
          {/* Navigation */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-100">
            <button onClick={() => setCurrentQuestion(curr => Math.max(0, curr - 1))} disabled={currentQuestion === 0} className="px-6 py-2.5 text-blue-600 font-medium rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:hover:bg-transparent transition-colors">
              Previous
            </button>
            <button onClick={() => {
            if (currentQuestion < quiz.questions.length - 1) {
              setCurrentQuestion(curr => curr + 1);
            } else {
              // Submit quiz
              alert('Quiz submitted!');
              navigate(-1);
            }
          }} className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              {currentQuestion === quiz.questions.length - 1 ? 'Submit Quiz' : 'Next Question'}
            </button>
          </div>
        </div>
      </div>
    </div>;
}
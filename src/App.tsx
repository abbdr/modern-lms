import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { CourseContent } from './components/CourseContent';
import { NotificationsPage } from './pages/NotificationsPage';
import { QuizPage } from './pages/QuizPage';
import { AssignmentPage } from './pages/AssignmentPage';
import { VideoPage } from './pages/VideoPage';
import { ReadingPage } from './pages/ReadingPage';
import { ThemeProvider } from './contexts/ThemeContext';
export function App() {
  return <ThemeProvider>
      <BrowserRouter>
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/course/:courseId" element={<CourseContent />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/quiz/:quizId" element={<QuizPage />} />
              <Route path="/assignment/:assignmentId" element={<AssignmentPage />} />
              <Route path="/video/:videoId" element={<VideoPage />} />
              <Route path="/reading/:readingId" element={<ReadingPage />} />
            </Routes>
          </Layout>
        </div>
      </BrowserRouter>
    </ThemeProvider>;
}
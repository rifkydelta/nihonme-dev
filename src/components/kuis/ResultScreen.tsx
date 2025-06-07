import React from 'react';
import { ResultScreenProps } from './types';

const ResultScreen: React.FC<ResultScreenProps> = ({ score, totalQuestions, onBack }) => {
  const percentage = (score / totalQuestions) * 100;
  
  let message = '';
  let emoji = '';
  let colorClass = '';
  
  if (percentage >= 90) {
    message = 'Luar biasa! Kamu sangat menguasai materi ini!';
    emoji = '🎉';
    colorClass = 'from-green-500 to-emerald-500';
  } else if (percentage >= 70) {
    message = 'Bagus! Kamu sudah memahami materi dengan baik.';
    emoji = '👏';
    colorClass = 'from-blue-500 to-cyan-500';
  } else if (percentage >= 50) {
    message = 'Cukup baik! Tetap semangat belajar!';
    emoji = '💪';
    colorClass = 'from-yellow-500 to-orange-500';
  } else {
    message = 'Jangan menyerah! Coba lagi dan tingkatkan hasilmu!';
    emoji = '📚';
    colorClass = 'from-red-500 to-pink-500';
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <div className="text-6xl mb-6 animate-bounce">{emoji}</div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Hasil Kuis
        </h2>
        
        <div className="mb-8">
          <div className="text-4xl md:text-5xl font-bold mb-2">
            {score}/{totalQuestions}
          </div>
          <div className="text-lg text-gray-600">
            {percentage.toFixed(1)}%
          </div>
        </div>

        <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${colorClass} text-white font-medium mb-8`}>
          {message}
        </div>

        <button
          onClick={onBack}
          className="w-full py-3 px-4 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Kembali ke Pemilihan Kuis</span>
        </button>
      </div>
    </div>
  );
};

export default ResultScreen; 
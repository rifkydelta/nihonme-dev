import React from 'react';
import { QuizSelectorProps } from './types';

const QuizSelector: React.FC<QuizSelectorProps> = ({ onSelectQuiz }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-md w-full transform transition-all hover:scale-[1.02]">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Pilih Kuis Anda
        </h1>
        <div className="space-y-4">
          <button
            onClick={() => onSelectQuiz('hiragana')}
            className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transform transition-all hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2"
          >
            <span className="text-2xl">あ</span>
            <span className="text-lg font-semibold">Kuis Hiragana</span>
          </button>
          <button
            onClick={() => onSelectQuiz('katakana')}
            className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transform transition-all hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2"
          >
            <span className="text-2xl">ア</span>
            <span className="text-lg font-semibold">Kuis Katakana</span>
          </button>
          <button
            onClick={() => onSelectQuiz('vocabulary')}
            className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transform transition-all hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2"
          >
            <span className="text-2xl">📚</span>
            <span className="text-lg font-semibold">Kuis Kosakata</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizSelector; 
import React, { useState, useEffect } from 'react';
import { QuizProps, QuizQuestion, QuizState } from './types';
import { objectDetailsMap } from '../../utils/objectData';
import { hiraganaQuestions, katakanaQuestions } from '../../utils/quizData';
import ResultScreen from './ResultScreen';

const Quiz: React.FC<QuizProps> = ({ quizType, onFinish, onBack }) => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    questions: [],
    showResults: false
  });
  const [imageLoading, setImageLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswering, setIsAnswering] = useState(false);

  useEffect(() => {
    let questions: QuizQuestion[] = [];
    
    if (quizType === 'vocabulary') {
      // Get random 10 items from objectDetailsMap
      const items = Object.values(objectDetailsMap);
      const shuffled = items.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 10);
      
      questions = selected.map(item => {
        // Get 3 other random items for options
        const otherItems = items.filter(i => i.japanese !== item.japanese);
        const shuffledOthers = otherItems.sort(() => 0.5 - Math.random()).slice(0, 3);
        const options = [...shuffledOthers.map(i => i.japanese), item.japanese]
          .sort(() => 0.5 - Math.random());
        
        return {
          question: `Apa nama benda ini dalam bahasa Jepang?`,
          options,
          correctAnswer: item.japanese,
          imageUrl: item.imageUrl
        };
      });
    } else if (quizType === 'hiragana') {
      // Ambil 10 pertanyaan acak dari hiraganaQuestions
      questions = [...hiraganaQuestions]
        .sort(() => 0.5 - Math.random())
        .slice(0, 10);
    } else {
      // Ambil 10 pertanyaan acak dari katakanaQuestions
      questions = [...katakanaQuestions]
        .sort(() => 0.5 - Math.random())
        .slice(0, 10);
    }

    setQuizState(prev => ({ ...prev, questions }));
  }, [quizType]);

  // Reset image loading state when question changes
  useEffect(() => {
    setImageLoading(true);
    setSelectedAnswer(null);
    setIsAnswering(false);
  }, [quizState.currentQuestion]);

  const handleAnswer = (selectedAnswer: string) => {
    if (isAnswering) return;
    
    const currentQuestion = quizState.questions[quizState.currentQuestion];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    setSelectedAnswer(selectedAnswer);
    setIsAnswering(true);
    
    setTimeout(() => {
      setQuizState(prev => ({
        ...prev,
        score: prev.score + (isCorrect ? 1 : 0),
        currentQuestion: prev.currentQuestion + 1,
        showResults: prev.currentQuestion + 1 >= prev.questions.length
      }));
    }, 1000); // Delay 1 detik sebelum pindah ke soal berikutnya
  };

  const getButtonClass = (option: string) => {
    if (!selectedAnswer) {
      return "w-full py-4 px-6 bg-white border-2 border-gray-200 text-gray-800 rounded-xl hover:border-blue-500 hover:bg-blue-50 transform transition-all hover:scale-[1.02] hover:shadow-md flex items-center justify-center";
    }

    const currentQuestion = quizState.questions[quizState.currentQuestion];
    const isCorrect = option === currentQuestion.correctAnswer;
    const isSelected = option === selectedAnswer;

    if (isSelected) {
      return isCorrect
        ? "w-full py-4 px-6 bg-green-500 text-white rounded-xl transform transition-all flex items-center justify-center"
        : "w-full py-4 px-6 bg-red-500 text-white rounded-xl transform transition-all flex items-center justify-center";
    }

    if (isCorrect) {
      return "w-full py-4 px-6 bg-green-500 text-white rounded-xl transform transition-all flex items-center justify-center";
    }

    return "w-full py-4 px-6 bg-white border-2 border-gray-200 text-gray-800 rounded-xl opacity-50 cursor-not-allowed flex items-center justify-center";
  };

  if (quizState.showResults) {
    return (
      <ResultScreen
        score={quizState.score}
        totalQuestions={quizState.questions.length}
        onBack={onBack}
      />
    );
  }

  if (quizState.questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="text-xl text-gray-600 animate-pulse">Memuat...</div>
      </div>
    );
  }

  const currentQuestion = quizState.questions[quizState.currentQuestion];
  const progress = ((quizState.currentQuestion + 1) / quizState.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-md w-full">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Score and Question Counter */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-600">
            Soal {quizState.currentQuestion + 1} dari {quizState.questions.length}
          </div>
          <div className="text-sm font-semibold text-blue-600">
            Skor: {quizState.score}
          </div>
        </div>

        {/* Image for Vocabulary Quiz */}
        {currentQuestion.imageUrl && (
          <div className="mb-6 rounded-xl overflow-hidden shadow-lg bg-gray-50 aspect-video relative">
            {imageLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="mt-3 text-gray-500">Memuat gambar...</span>
              </div>
            )}
            <img
              src={currentQuestion.imageUrl}
              alt="Pertanyaan"
              className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setImageLoading(false)}
              onError={() => setImageLoading(false)}
            />
          </div>
        )}

        {/* Question */}
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 text-center">
          {currentQuestion.question}
        </h2>

        {/* Answer Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={isAnswering}
              className={getButtonClass(option)}
            >
              <span className="text-lg font-medium">{option}</span>
            </button>
          ))}
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="mt-8 w-full py-3 px-4 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2"
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

export default Quiz; 
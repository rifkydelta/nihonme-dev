import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QuizType } from './types';
import QuizSelector from './QuizSelector';
import Quiz from './Quiz';

const QuizPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const [selectedQuiz, setSelectedQuiz] = useState<QuizType | null>(null);

  useEffect(() => {
    if (type && ['hiragana', 'katakana', 'kosakata'].includes(type)) {
      setSelectedQuiz(type as QuizType);
    }
  }, [type]);

  const handleSelectQuiz = (type: QuizType) => {
    setSelectedQuiz(type);
    navigate(`/quiz/${type}`);
  };

  const handleBack = () => {
    setSelectedQuiz(null);
    navigate('/quiz');
  };

  if (selectedQuiz) {
    return (
      <Quiz
        quizType={selectedQuiz}
        onFinish={(score) => {
          console.log('Quiz finished with score:', score);
          handleBack();
        }}
        onBack={handleBack}
      />
    );
  }

  return <QuizSelector onSelectQuiz={handleSelectQuiz} />;
};

export default QuizPage; 
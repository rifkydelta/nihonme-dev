export type QuizType = 'hiragana' | 'katakana' | 'vocabulary';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  imageUrl?: string;
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  questions: QuizQuestion[];
  showResults: boolean;
}

export interface QuizProps {
  quizType: QuizType;
  onFinish: (score: number) => void;
  onBack: () => void;
}

export interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onBack: () => void;
}

export interface QuizSelectorProps {
  onSelectQuiz: (type: QuizType) => void;
} 
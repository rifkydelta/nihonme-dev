export type KuisType = 'hiragana' | 'katakana' | 'kosakata';

export interface KuisQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  image?: string;
}

export interface KuisState {
  currentQuestion: number;
  score: number;
  showResults: boolean;
  questions: KuisQuestion[];
}

export interface KuisProps {
  kuisType: KuisType;
  onFinish?: (score: number) => void;
  onBack?: () => void;
}

export interface KuisSelectorProps {
  onSelectKuis: (type: KuisType) => void;
}

export interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onBack: () => void;
} 
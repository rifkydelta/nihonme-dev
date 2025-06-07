import { QuizQuestion } from '../components/quiz/types';

interface QuizData {
  type: 'hiragana' | 'katakana';
  japanese: string;
  romaji: string;
}

const hiraganaData: QuizData[] = [
  { type: 'hiragana', japanese: 'あ', romaji: 'a' },
  { type: 'hiragana', japanese: 'い', romaji: 'i' },
  { type: 'hiragana', japanese: 'う', romaji: 'u' },
  { type: 'hiragana', japanese: 'え', romaji: 'e' },
  { type: 'hiragana', japanese: 'お', romaji: 'o' },
  { type: 'hiragana', japanese: 'か', romaji: 'ka' },
  { type: 'hiragana', japanese: 'き', romaji: 'ki' },
  { type: 'hiragana', japanese: 'く', romaji: 'ku' },
  { type: 'hiragana', japanese: 'け', romaji: 'ke' },
  { type: 'hiragana', japanese: 'こ', romaji: 'ko' },
  { type: 'hiragana', japanese: 'さ', romaji: 'sa' },
  { type: 'hiragana', japanese: 'し', romaji: 'shi' },
  { type: 'hiragana', japanese: 'す', romaji: 'su' },
  { type: 'hiragana', japanese: 'せ', romaji: 'se' },
  { type: 'hiragana', japanese: 'そ', romaji: 'so' }
];

const katakanaData: QuizData[] = [
  { type: 'katakana', japanese: 'ア', romaji: 'a' },
  { type: 'katakana', japanese: 'イ', romaji: 'i' },
  { type: 'katakana', japanese: 'ウ', romaji: 'u' },
  { type: 'katakana', japanese: 'エ', romaji: 'e' },
  { type: 'katakana', japanese: 'オ', romaji: 'o' },
  { type: 'katakana', japanese: 'カ', romaji: 'ka' },
  { type: 'katakana', japanese: 'キ', romaji: 'ki' },
  { type: 'katakana', japanese: 'ク', romaji: 'ku' },
  { type: 'katakana', japanese: 'ケ', romaji: 'ke' },
  { type: 'katakana', japanese: 'コ', romaji: 'ko' },
  { type: 'katakana', japanese: 'サ', romaji: 'sa' },
  { type: 'katakana', japanese: 'シ', romaji: 'shi' },
  { type: 'katakana', japanese: 'ス', romaji: 'su' },
  { type: 'katakana', japanese: 'セ', romaji: 'se' },
  { type: 'katakana', japanese: 'ソ', romaji: 'so' }
];

// Fungsi untuk membuat pertanyaan kuis dari data
const createQuizQuestions = (data: QuizData[]): QuizQuestion[] => {
  return data.map(item => {
    // Dapatkan 3 romaji acak lainnya untuk opsi
    const otherItems = data.filter(i => i.romaji !== item.romaji);
    const shuffledOthers = otherItems.sort(() => 0.5 - Math.random()).slice(0, 3);
    const options = [...shuffledOthers.map(i => i.romaji), item.romaji]
      .sort(() => 0.5 - Math.random());

    return {
      question: `${item.japanese} - bagaimana cara membacanya?`,
      options,
      correctAnswer: item.romaji
    };
  });
};

// Buat pertanyaan kuis dari data
export const hiraganaQuestions: QuizQuestion[] = createQuizQuestions(hiraganaData);
export const katakanaQuestions: QuizQuestion[] = createQuizQuestions(katakanaData); 
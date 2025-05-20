interface Sentence {
  japanese: string;
  romaji: string;
  english: string;
}

interface ObjectDetails {
  japanese: string;
  romaji: string;
  english: string;
  imageUrl: string;
  sentences: Sentence[];
  description: string;
}

const objectDetailsMap: Record<string, ObjectDetails> = {
  'ひと': {
    japanese: 'ひと',
    romaji: 'hito',
    english: 'person',
    imageUrl: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg',
    sentences: [
      {
        japanese: 'あの人は私の友達です。',
        romaji: 'Ano hito wa watashi no tomodachi desu.',
        english: 'That person is my friend.',
      },
      {
        japanese: '人々は公園を歩いています。',
        romaji: 'Hitobito wa kouen wo aruite imasu.',
        english: 'People are walking in the park.',
      },
      {
        japanese: '多くの人が駅で電車を待っています。',
        romaji: 'Ooku no hito ga eki de densha wo matte imasu.',
        english: 'Many people are waiting for the train at the station.',
      }
    ],
    description: 'The word "ひと" (hito) means "person" in Japanese. It\'s one of the most fundamental words in the Japanese language.',
  },
  'いぬ': {
    japanese: 'いぬ',
    romaji: 'inu',
    english: 'dog',
    imageUrl: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg',
    sentences: [
      {
        japanese: '犬は忠実な動物です。',
        romaji: 'Inu wa chuujitsuna doubutsu desu.',
        english: 'Dogs are loyal animals.',
      },
      {
        japanese: '私の家に犬がいます。',
        romaji: 'Watashi no ie ni inu ga imasu.',
        english: 'I have a dog at home.',
      }
    ],
    description: 'The word "いぬ" (inu) means "dog" in Japanese. Dogs are very popular pets in Japan.',
  },
  // Add more objects as needed
};

export const getObjectDetails = (label: string): ObjectDetails | null => {
  return objectDetailsMap[label] || null;
};
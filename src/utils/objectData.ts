interface Sentence {
  japanese: string;
  romaji: string;
  english: string;
}

export interface ObjectDetails {
  japanese: string;
  romaji: string;
  english: string;
  imageUrl: string;
  sentences: Sentence[];
  description: string;
}

export const objectDetailsMap: Record<string, ObjectDetails> = {
  'ひと': {
    japanese: 'ひと',
    romaji: 'hito',
    english: 'Person',
    imageUrl: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg',
    sentences: [
      {
        japanese: 'あのひとはわたしのともだちです。',
        romaji: 'Ano hito wa watashi no tomodachi desu.',
        english: 'That person is my friend.',
      },
      {
        japanese: 'ひとびとはこうえんをあるいています。',
        romaji: 'Hitobito wa kouen wo aruite imasu.',
        english: 'People are walking in the park.',
      },
      {
        japanese: 'おおくのひとがえきででんしゃをまっています。',
        romaji: 'Ooku no hito ga eki de densha wo matte imasu.',
        english: 'Many people are waiting for the train at the station.',
      },
    ],
    description: 'The word "ひと" (hito) means "person" in Japanese. It\'s one of the most fundamental words in the Japanese language.',
  },
  'じてんしゃ': {
    japanese: 'じてんしゃ',
    romaji: 'jitensha',
    english: 'Bicycle',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Bicycle_icon.svg/1024px-Bicycle_icon.svg.png',
    sentences: [
      {
        japanese: 'じてんしゃにのっているしょうねんはわたしのおとうとです。',
        romaji: 'Jitensha ni notte iru shounen wa watashi no otouto desu.',
        english: 'The boy riding a bicycle is my brother.',
      },
      {
        japanese: 'ドアのそばにあるじてんしゃはわたしのです。',
        romaji: 'Doa no soba ni aru jitensha wa watashi no desu.',
        english: 'The bicycle by the door is mine.',
      },
      {
        japanese: 'ふるいじてんしゃだがないよりましだ。',
        romaji: 'Furui jitensha daga nai yori mashi da.',
        english: 'This bicycle is old, but it\'s better than nothing.',
      },
    ],
    description: 'べんりなどうろをはしるにりんしゃ',
  },
  'くるま': {
    japanese: 'くるま',
    romaji: 'kuruma',
    english: 'Car',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Car_font_awesome.svg/1024px-Car_font_awesome.svg.png',
    sentences: [
      {
        japanese: 'そのくるまはふるびてみえましたか。',
        romaji: 'Sono kuruma wa furubite miemashita ka.',
        english: 'Did the car look old?',
      },
      {
        japanese: 'このくるまはさいしんがたです。',
        romaji: 'Kono kuruma wa saishingata desu.',
        english: 'This car is the latest model.',
      },
      {
        japanese: 'くるまのうんてんはとてもたのしいです。',
        romaji: 'Kuruma no unten wa totemo tanoshii desu.',
        english: 'Driving a car is a lot of fun.',
      },
    ],
    description: 'にんやにもつをはこぶよんりんしゃ',
  },
  'オートバイ': {
    japanese: 'オートバイ',
    romaji: 'ootobai',
    english: 'motorcycle',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Motorbike_font_awesome.svg/1024px-Motorbike_font_awesome.svg.png',
    sentences: [
      {
        japanese: 'オートバイがやすくてにはいった。',
        romaji: 'Ootobai ga yasuku te ni haitta.',
        english: 'I got a motorbike cheap.',
      },
      {
        japanese: 'あにはまいにちオートバイでしごとにいきます。',
        romaji: 'Ani wa mainichi ootobai de shigoto ni ikimasu.',
        english: 'My older brother goes to work by motorbike every day.',
      },
      {
        japanese: 'オートバイにのるのはすこしこわいです。',
        romaji: 'Ootobai ni noru no wa sukoshi kowai desu.',
        english: 'Riding a motorbike is a bit scary.',
      },
    ],
    description: 'にんがのるためのにりんののりもの',
  },
  'ひこうき': {
    japanese: 'ひこうき',
    romaji: 'hikouki',
    english: 'airplane',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Airplane_font_awesome.svg/1024px-Airplane_font_awesome.svg.png',
    sentences: [
      {
        japanese: 'わたしのちちはひこうきがそうじゅうできる。',
        romaji: 'Watashi no chichi wa hikouki ga soujuu dekiru.',
        english: 'My father can fly an airplane.',
      },
      {
        japanese: 'ひこうきはそのまちにばくだんをおとした。',
        romaji: 'Hikouki wa sono machi ni bakudan o otoshita.',
        english: 'The plane dropped bombs on the city.',
      },
      {
        japanese: 'ひこうきはりりくすんぜんだった。',
        romaji: 'Hikouki wa ririku sunzen datta.',
        english: 'The plane was about to take off.',
      },
    ],
    description: 'そらをとぶためのエンジンつきのりもの',
  },
  'バス': {
    japanese: 'バス',
    romaji: 'basu',
    english: 'Bus',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Bus_font_awesome.svg/1024px-Bus_font_awesome.svg.png',
    sentences: [
      {
        japanese: 'バスでとうきょうにいくつもりですか。',
        romaji: 'Basu de Toukyou ni iku tsumori desu ka.',
        english: 'Will you go to Tokyo by bus?',
      },
      {
        japanese: 'あたらしいかさをバスのなかにおきわすれた。',
        romaji: 'Atarashii kasa o basu no naka ni okiwasureta.',
        english: 'I left a new umbrella in the bus.',
      },
      {
        japanese: 'かれはバスでならをけんぶつした。',
        romaji: 'Kare wa basu de Nara o kenbutsu shita.',
        english: 'He visited Nara by bus.',
      },
    ],
    description: 'おおきなじどうしゃでおおぜいのひとをのせる',
  },
  'でんしゃ': {
    japanese: 'でんしゃ',
    romaji: 'densha',
    english: 'Train',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Train_font_awesome.svg/1024px-Train_font_awesome.svg.png',
    sentences: [
      {
        japanese: 'ほら、あなたののるでんしゃがきたわ。',
        romaji: 'Hora, anata no noru densha ga kita wa.',
        english: 'Look, here comes your train.',
      },
      {
        japanese: 'たかせさんはなんじのでんしゃできるの？',
        romaji: 'Takase-san wa nanji no densha de kuru no?',
        english: 'What train is Mr Takase coming on?',
      },
      {
        japanese: 'でんしゃははやくうごきます。',
        romaji: 'Densha wa hayaku ugokimasu.',
        english: 'The train moves fast.',
      },
    ],
    description: 'てつどうのきかんしゃ',
  },
  // Add more objects as needed
}; 
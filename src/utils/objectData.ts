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
    english: 'person',
    imageUrl: '',
    sentences: [
      {
        japanese: 'ひとはにほんごをべんきょうしています。',
        romaji: 'Hito wa nihongo o benkyou shiteimasu.',
        english: 'The person is studying Japanese.',
      },
      {
        japanese: 'そのひとはせんせいです。',
        romaji: 'Sono hito wa sensei desu.',
        english: 'That person is a teacher.',
      },
      {
        japanese: 'ひとはともだちとあそびます。',
        romaji: 'Hito wa tomodachi to asobimasu.',
        english: 'The person plays with friends.',
      },
    ],
    description: 'The word ひと means person, and it is one of the most basic nouns in Japanese, used to refer to any human being.',
  },
  'じてんしゃ': {
    japanese: 'じてんしゃ',
    romaji: 'jitensha',
    english: 'bicycle',
    imageUrl: '',
    sentences: [
      {
        japanese: 'じてんしゃでがっこうへいきます。',
        romaji: 'Jitensha de gakkou e ikimasu.',
        english: 'I go to school by bicycle.',
      },
      {
        japanese: 'あたらしいじてんしゃをかいました。',
        romaji: 'Atarashii jitensha o kaimashita.',
        english: 'I bought a new bicycle.',
      },
      {
        japanese: 'じてんしゃはえんきょうにいいです。',
        romaji: 'Jitensha wa enkyou ni ii desu.',
        english: 'Bicycles are good for the environment.',
      },
    ],
    description: 'じてんしゃ means bicycle, combining じてん (self) and しゃ (vehicle), making it a vehicle you pedal yourself.',
  },
  'くるま': {
    japanese: 'くるま',
    romaji: 'kuruma',
    english: 'car',
    imageUrl: '',
    sentences: [
      {
        japanese: 'くるまでスーパーにいきます。',
        romaji: 'Kuruma de suupaa ni ikimasu.',
        english: 'I go to the supermarket by car.',
      },
      {
        japanese: 'くるまははやいです。',
        romaji: 'Kuruma wa hayai desu.',
        english: 'Cars are fast.',
      },
      {
        japanese: 'くるまをうんてんします。',
        romaji: 'Kuruma o unten shimasu.',
        english: 'I drive a car.',
      },
    ],
    description: 'くるま means car, a common means of transportation in Japan and worldwide.',
  },
  'オートバイ': {
    japanese: 'オートバイ',
    romaji: 'ootobai',
    english: 'motorcycle',
    imageUrl: '',
    sentences: [
      {
        japanese: 'オートバイでツーリングします。',
        romaji: 'Ootobai de tsuuringu shimasu.',
        english: 'I go touring by motorcycle.',
      },
      {
        japanese: 'オートバイははやいです。',
        romaji: 'Ootobai wa hayai desu.',
        english: 'Motorcycles are fast.',
      },
      {
        japanese: 'オートバイにのるのがすきです。',
        romaji: 'Ootobai ni noru no ga suki desu.',
        english: 'I like riding motorcycles.',
      },
    ],
    description: 'オートバイ is borrowed from the English word \'auto bike\' meaning motorcycle, widely used in Japan.',
  },
  'ひこうき': {
    japanese: 'ひこうき',
    romaji: 'hikouki',
    english: 'airplane',
    imageUrl: '',
    sentences: [
      {
        japanese: 'ひこうきでとびます。',
        romaji: 'Hikouki de tobimasu.',
        english: 'I fly by airplane.',
      },
      {
        japanese: 'ひこうきはそらをとびます。',
        romaji: 'Hikouki wa sora o tobimasu.',
        english: 'Airplanes fly in the sky.',
      },
      {
        japanese: 'ひこうきのチケットをかいました。',
        romaji: 'Hikouki no chiketto o kaimashita.',
        english: 'I bought an airplane ticket.',
      },
    ],
    description: 'ひこうき means airplane, from ひこう (flight) and き (machine).',
  },
  'バス': {
    japanese: 'バス',
    romaji: 'basu',
    english: 'bus',
    imageUrl: '',
    sentences: [
      {
        japanese: 'バスでがっこうへいきます。',
        romaji: 'Basu de gakkou e ikimasu.',
        english: 'I go to school by bus.',
      },
      {
        japanese: 'バスはおおきいです。',
        romaji: 'Basu wa ookii desu.',
        english: 'Buses are big.',
      },
      {
        japanese: 'バスをまっています。',
        romaji: 'Basu o matteimasu.',
        english: 'I am waiting for the bus.',
      },
    ],
    description: 'バス is a loanword from English \'bus,\' referring to public transportation vehicles.',
  },
  'でんしゃ': {
    japanese: 'でんしゃ',
    romaji: 'densha',
    english: 'train',
    imageUrl: '',
    sentences: [
      {
        japanese: 'でんしゃにのります。',
        romaji: 'Densha ni norimasu.',
        english: 'I ride the train.',
      },
      {
        japanese: 'でんしゃははやいです。',
        romaji: 'Densha wa hayai desu.',
        english: 'Trains are fast.',
      },
      {
        japanese: 'でんしゃでしごとにいきます。',
        romaji: 'Densha de shigoto ni ikimasu.',
        english: 'I go to work by train.',
      },
    ],
    description: 'でんしゃ means train, a very popular transportation method in Japan.',
  },
  'トラック': {
    japanese: 'トラック',
    romaji: 'torakku',
    english: 'truck',
    imageUrl: '',
    sentences: [
      {
        japanese: 'トラックがどうろをはしっています。',
        romaji: 'Torakku ga douro o hashitteimasu.',
        english: 'The truck is running on the road.',
      },
      {
        japanese: 'トラックはおおきいです。',
        romaji: 'Torakku wa ookii desu.',
        english: 'Trucks are big.',
      },
      {
        japanese: 'トラックでにもつをはこびます。',
        romaji: 'Torakku de nimotsu o hakobimasu.',
        english: 'I carry luggage by truck.',
      },
    ],
    description: 'トラック is borrowed from English \'truck,\' used for transporting goods.',
  },
  'ボート': {
    japanese: 'ボート',
    romaji: 'booto',
    english: 'boat',
    imageUrl: '',
    sentences: [
      {
        japanese: 'ボートでうみをわたります。',
        romaji: 'Booto de umi o watarimasu.',
        english: 'I cross the sea by boat.',
      },
      {
        japanese: 'ボートはみずのうえをうつくしいです。',
        romaji: 'Booto wa mizu no ue o utsukushii desu.',
        english: 'Boats are beautiful on the water.',
      },
      {
        japanese: 'ボートにのるのがたのしいです。',
        romaji: 'Booto ni noru no ga tanoshii desu.',
        english: 'Riding a boat is fun.',
      },
    ],
    description: 'ボート is borrowed from English \'boat,\' a small watercraft.',
  },
  'しんごうき': {
    japanese: 'しんごうき',
    romaji: 'shingouki',
    english: 'traffic light',
    imageUrl: '',
    sentences: [
      {
        japanese: 'しんごうきはあかです。',
        romaji: 'Shingouki wa aka desu.',
        english: 'The traffic light is red.',
      },
      {
        japanese: 'しんごうきがみどりになりました。',
        romaji: 'Shingouki ga midori ni narimashita.',
        english: 'The traffic light turned green.',
      },
      {
        japanese: 'みちをしんごうきでわたります。',
        romaji: 'Michi o shingouki de watarimasu.',
        english: 'I cross the street at the traffic light.',
      },
    ],
    description: 'The word しんごうき (shingouki) combines しんごう (shingou) meaning \'signal\' and き (ki) meaning \'machine\'. Japanese traffic lights often have a blue instead of green for \'go\', which is called あお (ao)!',
  },
  'しょうかせん': {
    japanese: 'しょうかせん',
    romaji: 'shoukasen',
    english: 'fire hydrant',
    imageUrl: '',
    sentences: [
      {
        japanese: 'しょうかせんはあかいです。',
        romaji: 'Shoukasen wa akai desu.',
        english: 'The fire hydrant is red.',
      },
      {
        japanese: 'ここにしょうかせんがあります。',
        romaji: 'Koko ni shoukasen ga arimasu.',
        english: 'There is a fire hydrant here.',
      },
      {
        japanese: 'しょうかせんのみずはつよいです。',
        romaji: 'Shoukasen no mizu wa tsuyoi desu.',
        english: 'The water from the fire hydrant is strong.',
      },
    ],
    description: 'しょうかせん (shoukasen) means \'fire hydrant\'. You\'ll see them on streets in Japan, often red, ready to help firefighters. The word is made of しょうか (shouka - fire extinguishing) and せん (sen - plug/valve).',
  },
  'ストップサイン': {
    japanese: 'ストップサイン',
    romaji: 'sutoppu sain',
    english: 'stop sign',
    imageUrl: '',
    sentences: [
      {
        japanese: 'ストップサインでとまります。',
        romaji: 'Sutoppu sain de tomarimasu.',
        english: 'I stop at the stop sign.',
      },
      {
        japanese: 'あのストップサインがみえますか。',
        romaji: 'Ano sutoppu sain ga miemasu ka.',
        english: 'Can you see that stop sign?',
      },
      {
        japanese: 'ストップサインはたいせつです。',
        romaji: 'Sutoppu sain wa taisetsu desu.',
        english: 'Stop signs are important.',
      },
    ],
    description: 'ストップサイン (sutoppu sain) is the Japanese word for \'stop sign\', taken directly from English! In Japan, the stop sign is a red inverted triangle and often has the word 止まれ (tomare), meaning \'Stop!\', written on it.',
  },
  'パーキングメーター': {
    japanese: 'パーキングメーター',
    romaji: 'paakingu meetaa',
    english: 'parking meter',
    imageUrl: '',
    sentences: [
      {
        japanese: 'パーキングメーターにおかねをいれます。',
        romaji: 'Paakingu meetaa ni okane o iremasu.',
        english: 'I put money into the parking meter.',
      },
      {
        japanese: 'このパーキングメーターはこわれています。',
        romaji: 'Kono paakingu meetaa wa kowareteimasu.',
        english: 'This parking meter is broken.',
      },
      {
        japanese: 'パーキングメーターのじかんがきれました。',
        romaji: 'Paakingu meetaa no jikan ga kiremashita.',
        english: 'The time on the parking meter ran out.',
      },
    ],
    description: 'パーキングメーター (paakingu meetaa) is a loanword from English for \'parking meter\'. In Japan, you\'ll find them in busy city areas to manage parking spaces and times.',
  },
  'ベンチ': {
    japanese: 'ベンチ',
    romaji: 'benchi',
    english: 'bench',
    imageUrl: '',
    sentences: [
      {
        japanese: 'こうえんのベンチにすわります。',
        romaji: 'Kouen no benchi ni suwarimasu.',
        english: 'I sit on a bench in the park.',
      },
      {
        japanese: 'このベンチはあたらしいです。',
        romaji: 'Kono benchi wa atarashii desu.',
        english: 'This bench is new.',
      },
      {
        japanese: 'えきのホームにベンチがあります。',
        romaji: 'Eki no hoomu ni benchi ga arimasu.',
        english: 'There is a bench on the station platform.',
      },
    ],
    description: 'ベンチ (benchi) comes from the English word \'bench\'. You can find benches in parks, train stations, and many public places in Japan for people to sit and rest.',
  },
  'とり': {
    japanese: 'とり',
    romaji: 'tori',
    english: 'bird',
    imageUrl: '',
    sentences: [
      {
        japanese: 'とりがそらをとんでいます。',
        romaji: 'Tori ga sora o tondeimasu.',
        english: 'A bird is flying in the sky.',
      },
      {
        japanese: 'かわいいとりがいますね。',
        romaji: 'Kawaii tori ga imasu ne.',
        english: 'There\'s a cute bird, isn\'t there?',
      },
      {
        japanese: 'あさ、とりのこえがきこえます。',
        romaji: 'Asa, tori no koe ga kikoemasu.',
        english: 'In the morning, I can hear birds singing.',
      },
    ],
    description: 'とり (tori) means \'bird\' in Japanese. It\'s a simple and common word. Japan has many beautiful native bird species, and bird motifs are popular in traditional art.',
  },
  'ねこ': {
    japanese: 'ねこ',
    romaji: 'neko',
    english: 'cat',
    imageUrl: '',
    sentences: [
      {
        japanese: 'ねこがすきです。',
        romaji: 'Neko ga suki desu.',
        english: 'I like cats.',
      },
      {
        japanese: 'そのねこはしろいです。',
        romaji: 'Sono neko wa shiroi desu.',
        english: 'That cat is white.',
      },
      {
        japanese: 'ねこがひるねをしています。',
        romaji: 'Neko ga hirune o shiteimasu.',
        english: 'The cat is taking a nap.',
      },
    ],
    description: 'ねこ (neko) means \'cat\'. Cats are very popular in Japan, and you might know the まねきねこ (maneki-neko), the beckoning cat figurine that is believed to bring good luck!',
  },
  'いぬ': {
    japanese: 'いぬ',
    romaji: 'inu',
    english: 'dog',
    imageUrl: '',
    sentences: [
      {
        japanese: 'いぬとさんぽにいきます。',
        romaji: 'Inu to sanpo ni ikimasu.',
        english: 'I go for a walk with the dog.',
      },
      {
        japanese: 'このいぬはおとなしいです。',
        romaji: 'Kono inu wa otonashii desu.',
        english: 'This dog is calm.',
      },
      {
        japanese: 'いぬがワンワンほえています。',
        romaji: 'Inu ga wanwan hoeteimasu.',
        english: 'The dog is barking "wan wan".',
      },
    ],
    description: 'いぬ (inu) means \'dog\'. Dogs are popular pets in Japan too. The Akita Inu and Shiba Inu are famous Japanese dog breeds known worldwide.',
  },
  'うま': {
    japanese: 'うま',
    romaji: 'uma',
    english: 'horse',
    imageUrl: '',
    sentences: [
      {
        japanese: 'うまがはしっています。',
        romaji: 'Uma ga hashitteimasu.',
        english: 'The horse is running.',
      },
      {
        japanese: 'わたしはうまにのることができます。',
        romaji: 'Watashi wa uma ni noru koto ga dekimasu.',
        english: 'I can ride a horse.',
      },
      {
        japanese: 'うまはにんじんがすきです。',
        romaji: 'Uma wa ninjin ga suki desu.',
        english: 'Horses like carrots.',
      },
    ],
    description: 'うま (uma) means \'horse\'. Horses have been important in Japanese history, especially for samurai. You can also see them in traditional festivals and horse racing.',
  },
  'ひつじ': {
    japanese: 'ひつじ',
    romaji: 'hitsuji',
    english: 'sheep',
    imageUrl: '',
    sentences: [
      {
        japanese: 'ひつじはしろくてふわふわです。',
        romaji: 'Hitsuji wa shirokute fuwafuwa desu.',
        english: 'Sheep are white and fluffy.',
      },
      {
        japanese: 'ぼくじょうにたくさんのひつじがいます。',
        romaji: 'Bokujou ni takusan no hitsuji ga imasu.',
        english: 'There are many sheep on the farm.',
      },
      {
        japanese: 'ひつじはメーメーなきます。',
        romaji: 'Hitsuji wa mee mee nakimasu.',
        english: 'Sheep baa "meh meh".',
      },
    ],
    description: 'ひつじ (hitsuji) means \'sheep\'. While not as historically common in Japan as some other animals, sheep are known for their wool and are often seen in petting zoos or farms in the countryside.',
  },
  'うし': {
    japanese: 'うし',
    romaji: 'ushi',
    english: 'cow',
    imageUrl: '',
    sentences: [
      {
        japanese: 'うしがくさをたべています。',
        romaji: 'Ushi ga kusa o tabeteimasu.',
        english: 'The cow is eating grass.',
      },
      {
        japanese: 'このうしはおおきいです。',
        romaji: 'Kono ushi wa ookii desu.',
        english: 'This cow is big.',
      },
      {
        japanese: 'うしからぎゅうにゅうがとれます。',
        romaji: 'Ushi kara gyuunyuu ga toremasu.',
        english: 'We can get milk from cows.',
      },
    ],
    description: 'うし (ushi) means \'cow\'. Famous Japanese beef like Wagyu comes from these animals. They are also important for dairy products.',
  },
  'ゾウ': {
    japanese: 'ゾウ',
    romaji: 'zou',
    english: 'elephant',
    imageUrl: '',
    sentences: [
      {
        japanese: 'どうぶつえんでゾウをみました。',
        romaji: 'Doubutsuen de zou o mimashita.',
        english: 'I saw an elephant at the zoo.',
      },
      {
        japanese: 'ゾウのはなはながいです。',
        romaji: 'Zou no hana wa nagai desu.',
        english: 'An elephant\'s trunk is long.',
      },
      {
        japanese: 'ゾウはかしこいどうぶつです。',
        romaji: 'Zou wa kashikoi doubutsu desu.',
        english: 'Elephants are intelligent animals.',
      },
    ],
    description: 'ゾウ (zou) is the Japanese word for \'elephant\'. While not native to Japan, elephants are popular animals found in zoos and often featured in children\'s stories.',
  },
  'くま': {
    japanese: 'くま',
    romaji: 'kuma',
    english: 'bear',
    imageUrl: '',
    sentences: [
      {
        japanese: 'もりのなかにくまがいます。',
        romaji: 'Mori no naka ni kuma ga imasu.',
        english: 'There is a bear in the forest.',
      },
      {
        japanese: 'くまははちみつがすきです。',
        romaji: 'Kuma wa hachimitsu ga suki desu.',
        english: 'Bears like honey.',
      },
      {
        japanese: 'あのくまのぬいぐるみはかわいいです。',
        romaji: 'Ano kuma no nuigurumi wa kawaii desu.',
        english: 'That stuffed bear is cute.',
      },
    ],
    description: 'くま (kuma) means \'bear\'. Japan has native bear species, like the Ussuri brown bear in Hokkaido and the Asian black bear. Be careful when hiking in bear habitats!',
  },
'シマウマ': {
    japanese: 'シマウマ',
    romaji: 'shimauma',
    english: 'zebra',
    imageUrl: '',
    sentences: [
      {
        japanese: 'シマウマはくろとしろです。',
        romaji: 'Shimauma wa kuro to shiro desu.',
        english: 'Zebras are black and white.',
      },
      {
        japanese: 'どうぶつえんでシマウマをみました。',
        romaji: 'Doubutsuen de shimauma o mimashita.',
        english: 'I saw a zebra at the zoo.',
      },
      {
        japanese: 'シマウマはアフリカにすんでいます。',
        romaji: 'Shimauma wa afurika ni sundeimasu.',
        english: 'Zebras live in Africa.',
      },
    ],
    description: 'シマウマ (shimauma) literally means \'striped horse\' (しま shima = stripe, ウマ uma = horse). It\'s a straightforward and descriptive name for this animal!',
  },
  'キリン': {
    japanese: 'キリン',
    romaji: 'kirin',
    english: 'giraffe',
    imageUrl: '',
    sentences: [
      {
        japanese: 'キリンはくびがながいです。',
        romaji: 'Kirin wa kubi ga nagai desu.',
        english: 'Giraffes have long necks.',
      },
      {
        japanese: 'キリンはたかいきのハをたべます。',
        romaji: 'Kirin wa takai ki no ha o tabemasu.',
        english: 'Giraffes eat leaves from tall trees.',
      },
      {
        japanese: 'あのキリンはおおきいですね。',
        romaji: 'Ano kirin wa ookii desu ne.',
        english: 'That giraffe is big, isn\'t it?',
      },
    ],
    description: 'キリン (kirin) is the Japanese word for \'giraffe\'. Interestingly, \'Kirin\' is also a mythical creature in East Asian folklore, a bit like a unicorn, and the giraffe was named after it due to its gentle nature and impressive height.',
  },
  'リュックサック': {
    japanese: 'リュックサック',
    romaji: 'ryukkusakku',
    english: 'backpack',
    imageUrl: '',
    sentences: [
      {
        japanese: 'リュックサックにおかしをいれます。',
        romaji: 'Ryukkusakku ni okashi o iremasu.',
        english: 'I put snacks in my backpack.',
      },
      {
        japanese: 'このリュックサックはかるいです。',
        romaji: 'Kono ryukkusakku wa karui desu.',
        english: 'This backpack is light.',
      },
      {
        japanese: 'がっこうへリュックサックをもっていきます。',
        romaji: 'Gakkou e ryukkusakku o motte ikimasu.',
        english: 'I take my backpack to school.',
      },
    ],
    description: 'リュックサック (ryukkusakku) comes from the German word \'Rucksack\'. It\'s commonly used in Japan for backpacks, often shortened to just リュック (ryukku).',
  },
  'かさ': {
    japanese: 'かさ',
    romaji: 'kasa',
    english: 'umbrella',
    imageUrl: '',
    sentences: [
      {
        japanese: 'あめがふっているので、かさをさします。',
        romaji: 'Ame ga futteiru node, kasa o sashimasu.',
        english: 'It\'s raining, so I\'ll use an umbrella.',
      },
      {
        japanese: 'わたしはあおいかさをもっています。',
        romaji: 'Watashi wa aoi kasa o motteimasu.',
        english: 'I have a blue umbrella.',
      },
      {
        japanese: 'でかけるまえに、かさをわすれないでください。',
        romaji: 'Dekakeru mae ni, kasa o wasurenaide kudasai.',
        english: 'Please don\'t forget your umbrella before you go out.',
      },
    ],
    description: 'かさ (kasa) means \'umbrella\' or \'parasol\'. Japan has a strong umbrella culture due to its rainy seasons, and you\'ll see many unique and stylish umbrellas.',
  },
  'ハンドバッグ': {
    japanese: 'ハンドバッグ',
    romaji: 'handobaggu',
    english: 'handbag',
    imageUrl: '',
    sentences: [
      {
        japanese: 'かのじょはあたらしいハンドバッグをかいました。',
        romaji: 'Kanojo wa atarashii handobaggu o kaimashita.',
        english: 'She bought a new handbag.',
      },
      {
        japanese: 'ハンドバッグのなかにさいふがあります。',
        romaji: 'Handobaggu no naka ni saifu ga arimasu.',
        english: 'There is a wallet in the handbag.',
      },
      {
        japanese: 'このハンドバッグはとてもおしゃれです。',
        romaji: 'Kono handobaggu wa totemo oshare desu.',
        english: 'This handbag is very stylish.',
      },
    ],
    description: 'ハンドバッグ (handobaggu) is a direct loanword from English for \'handbag\'. It\'s used to refer to various styles of bags carried by hand or on the arm.',
  },
  'ネクタイ': {
    japanese: 'ネクタイ',
    romaji: 'nekutai',
    english: 'necktie',
    imageUrl: '',
    sentences: [
      {
        japanese: 'ちちはしごとにネクタイをします。',
        romaji: 'Chichi wa shigoto ni nekutai o shimasu.',
        english: 'My father wears a necktie to work.',
      },
      {
        japanese: 'あかいネクタイがすきです。',
        romaji: 'Akai nekutai ga suki desu.',
        english: 'I like red neckties.',
      },
      {
        japanese: 'このネクタイはプレゼントです。',
        romaji: 'Kono nekutai wa purezento desu.',
        english: 'This necktie is a present.',
      },
    ],
    description: 'ネクタイ (nekutai) comes from the English word \'necktie\'. It\'s an essential part of business attire for men in Japan, often called \'salaryman\'.',
  },
  'スーツケース': {
    japanese: 'スーツケース',
    romaji: 'suutsukeesu',
    english: 'suitcase',
    imageUrl: '',
    sentences: [
      {
        japanese: 'りょこうのためにスーツケースをじゅんびします。',
        romaji: 'Ryokou no tame ni suutsukeesu o junbi shimasu.',
        english: 'I will prepare a suitcase for the trip.',
      },
      {
        japanese: 'スーツケースがおもいです。',
        romaji: 'Suutsukeesu ga omoi desu.',
        english: 'The suitcase is heavy.',
      },
      {
        japanese: 'くうこうでスーツケースをあずけます。',
        romaji: 'Kuukou de suutsukeesu o azukemasu.',
        english: 'I will check in my suitcase at the airport.',
      },
    ],
    description: 'スーツケース (suutsukeesu) is a loanword from English, \'suitcase\'. It\'s indispensable for travel, and in Japan, you\'ll often see people using them, especially on trains to and from airports.',
  },
  'フリスビー': {
    japanese: 'フリスビー',
    romaji: 'furisubii',
    english: 'frisbee',
    imageUrl: '',
    sentences: [
      {
        japanese: 'こうえんでフリスビーをしましょう。',
        romaji: 'Kouen de furisubii o shimashou.',
        english: 'Let\'s play frisbee in the park.',
      },
      {
        japanese: 'いぬがフリスビーをとりました。',
        romaji: 'Inu ga furisubii o torimashita.',
        english: 'The dog caught the frisbee.',
      },
      {
        japanese: 'フリスビーをとおくへなげます。',
        romaji: 'Furisubii o tooku e nagemasu.',
        english: 'I throw the frisbee far.',
      },
    ],
    description: 'フリスビー (furisubii) comes directly from the brand name \'Frisbee\'. It\'s a popular item for playing in parks and at the beach in Japan.',
  },
  'スキー': {
    japanese: 'スキー',
    romaji: 'sukii',
    english: 'ski/skiing',
    imageUrl: '',
    sentences: [
      {
        japanese: 'ふゆにスキーをします。',
        romaji: 'Fuyu ni sukii o shimasu.',
        english: 'I go skiing in the winter.',
      },
      {
        japanese: 'スキーはたのしいスポーツです。',
        romaji: 'Sukii wa tanoshii supootsu desu.',
        english: 'Skiing is a fun sport.',
      },
      {
        japanese: 'わたしはスキーがじょうずではありません。',
        romaji: 'Watashi wa sukii ga jouzu dewa arimasen.',
        english: 'I am not good at skiing.',
      },
    ],
    description: 'スキー (sukii) is from the Norwegian word \'ski\'. Japan has many famous ski resorts, especially in Hokkaido and Nagano, known for their powder snow.',
  },
  'スノーボード': {
    japanese: 'スノーボード',
    romaji: 'sunooboodo',
    english: 'snowboard/snowboarding',
    imageUrl: '',
    sentences: [
      {
        japanese: 'あのかたはスノーボードがとくいです。',
        romaji: 'Ano kata wa sunooboodo ga tokui desu.',
        english: 'That person is good at snowboarding.',
      },
      {
        japanese: 'あたらしいスノーボードをかいたいです。',
        romaji: 'Atarashii sunooboodo o kaitai desu.',
        english: 'I want to buy a new snowboard.',
      },
      {
        japanese: 'やまでスノーボードをたのしみました。',
        romaji: 'Yama de sunooboodo o tanoshimimashita.',
        english: 'I enjoyed snowboarding on the mountain.',
      },
    ],
    description: 'スノーボード (sunooboodo) is from \'snowboard\'. Just like skiing, snowboarding is very popular in Japan\'s snowy regions, attracting many young people.',
  },
  'スポーツボール': {
    japanese: 'スポーツボール',
    romaji: 'supootsubooru',
    english: 'sports ball',
    imageUrl: '',
    sentences: [
      {
        japanese: 'こどもたちはスポーツボールであそんでいます。',
        romaji: 'Kodomotachi wa supootsubooru de asondeimasu.',
        english: 'The children are playing with a sports ball.',
      },
      {
        japanese: 'このスポーツボールはサッカーようですか。',
        romaji: 'Kono supootsubooru wa sakkaa you desu ka.',
        english: 'Is this sports ball for soccer?',
      },
      {
        japanese: 'たくさんのしゅるいのスポーツボールがあります。',
        romaji: 'Takusan no shurui no supootsubooru ga arimasu.',
        english: 'There are many types of sports balls.',
      },
    ],
    description: 'スポーツボール (supootsubooru) is a combination of \'sports\' and \'ball\'. It\'s a general term for balls used in various sports like soccer, basketball, etc.',
  },
  'たこ': {
    japanese: 'たこ',
    romaji: 'tako',
    english: 'kite',
    imageUrl: '',
    sentences: [
      {
        japanese: 'おしょうがつにたこをあげます。',
        romaji: 'Oshougatsu ni tako o agemasu.',
        english: 'We fly kites on New Year\'s Day.',
      },
      {
        japanese: 'たこがたかくあがりました。',
        romaji: 'Tako ga takaku agarimashita.',
        english: 'The kite flew high.',
      },
      {
        japanese: 'かぜがつよいので、たこがよくとびます。',
        romaji: 'Kaze ga tsuyoi node, tako ga yoku tobimasu.',
        english: 'The wind is strong, so the kite flies well.',
      },
    ],
    description: 'たこ (tako) can mean \'kite\' or \'octopus\' in Japanese! The context usually makes it clear. Flying kites is a traditional New Year\'s activity in Japan.',
  },
  'やきゅうバット': {
    japanese: 'やきゅうバット',
    romaji: 'yakyuu batto',
    english: 'baseball bat',
    imageUrl: '',
    sentences: [
      {
        japanese: 'あのひとはやきゅうバットをもっています。',
        romaji: 'Ano hito wa yakyuu batto o motteimasu.',
        english: 'That person is holding a baseball bat.',
      },
      {
        japanese: 'やきゅうバットでボールをうちます。',
        romaji: 'Yakyuu batto de booru o uchimasu.',
        english: 'I hit the ball with a baseball bat.',
      },
      {
        japanese: 'このやきゅうバットはかるいです。',
        romaji: 'Kono yakyuu batto wa karui desu.',
        english: 'This baseball bat is light.',
      },
    ],
    description: 'やきゅう (yakyuu) means \'baseball\' and バット (batto) is from the English \'bat\'. Baseball is a very popular sport in Japan!',
  },
  'やきゅうグローブ': {
    japanese: 'やきゅうグローブ',
    romaji: 'yakyuu guroobu',
    english: 'baseball glove',
    imageUrl: '',
    sentences: [
      {
        japanese: 'あたらしいやきゅうグローブをかいました。',
        romaji: 'Atarashii yakyuu guroobu o kaimashita.',
        english: 'I bought a new baseball glove.',
      },
      {
        japanese: 'やきゅうグローブでボールをとります。',
        romaji: 'Yakyuu guroobu de booru o torimasu.',
        english: 'I catch the ball with a baseball glove.',
      },
      {
        japanese: 'このやきゅうグローブはかわでできています。',
        romaji: 'Kono yakyuu guroobu wa kawa de dekiteimasu.',
        english: 'This baseball glove is made of leather.',
      },
    ],
    description: 'やきゅう (yakyuu) is \'baseball\' and グローブ (guroobu) is from \'glove\'. Japanese baseball players are known for their high-quality gloves.',
  },
  'スケートボード': {
    japanese: 'スケートボード',
    romaji: 'sukeetoboodo',
    english: 'skateboard',
    imageUrl: '',
    sentences: [
      {
        japanese: 'こうえんでスケートボードをします。',
        romaji: 'Kouen de sukeetoboodo o shimasu.',
        english: 'I skateboard in the park.',
      },
      {
        japanese: 'スケートボードにのるのはたのしいです。',
        romaji: 'Sukeetoboodo ni noru no wa tanoshii desu.',
        english: 'Riding a skateboard is fun.',
      },
      {
        japanese: 'あのこはスケートボードがじょうずです。',
        romaji: 'Ano ko wa sukeetoboodo ga jouzu desu.',
        english: 'That kid is good at skateboarding.',
      },
    ],
    description: 'スケートボード (sukeetoboodo) is from \'skateboard\'. Skateboarding has become increasingly popular in Japan, especially after its inclusion in the Olympics.',
  },
  'サーフボード': {
    japanese: 'サーフボード',
    romaji: 'saafuboodo',
    english: 'surfboard',
    imageUrl: '',
    sentences: [
      {
        japanese: 'なみにのるためにサーフボードをつかいます。',
        romaji: 'Nami ni noru tame ni saafuboodo o tsukaimasu.',
        english: 'I use a surfboard to ride the waves.',
      },
      {
        japanese: 'かれのサーフボードはカラフルです。',
        romaji: 'Kare no saafuboodo wa karafuru desu.',
        english: 'His surfboard is colorful.',
      },
      {
        japanese: 'あたらしいサーフボードがほしいです。',
        romaji: 'Atarashii saafuboodo ga hoshii desu.',
        english: 'I want a new surfboard.',
      },
    ],
    description: 'サーフボード (saafuboodo) comes from \'surfboard\'. Japan has many coastal areas where surfing is a popular activity, especially in places like Chiba and Shonan.',
  },
  'テニスラケット': {
    japanese: 'テニスラケット',
    romaji: 'tenisu raketto',
    english: 'tennis racket',
    imageUrl: '',
    sentences: [
      {
        japanese: 'テニスをするとき、テニスラケットがいります。',
        romaji: 'Tenisu o suru toki, tenisu raketto ga irimasu.',
        english: 'You need a tennis racket when you play tennis.',
      },
      {
        japanese: 'このテニスラケットはとてもかるいです。',
        romaji: 'Kono tenisu raketto wa totemo karui desu.',
        english: 'This tennis racket is very light.',
      },
      {
        japanese: 'ともだちとテニスラケットをかって、テニスをしました。',
        romaji: 'Tomodachi to tenisu raketto o katte, tenisu o shimashita.',
        english: 'I bought a tennis racket with my friend and played tennis.',
      },
    ],
    description: 'テニスラケット (tenisu raketto) means \'tennis racket\'. Tennis is a popular sport in Japan, both to play and watch, with famous Japanese tennis players.',
  },
  'ボトル': {
    japanese: 'ボトル',
    romaji: 'botoru',
    english: 'bottle',
    imageUrl: '',
    sentences: [
      {
        japanese: 'みずがボトルにはいっています。',
        romaji: 'Mizu ga botoru ni haitteimasu.',
        english: 'Water is in the bottle.',
      },
      {
        japanese: 'このボトルはプラスチックでできています。',
        romaji: 'Kono botoru wa purasuchikku de dekiteimasu.',
        english: 'This bottle is made of plastic.',
      },
      {
        japanese: 'かれはあたらしいボトルをかいました。',
        romaji: 'Kare wa atarashii botoru o kaimashita.',
        english: 'He bought a new bottle.',
      },
    ],
    description: 'ボトル (botoru) is from the English word \'bottle\'. You\'ll often see people carrying their own reusable ボトル (botoru) in Japan, called マイボトル (mai botoru - my bottle).',
  },
  'ワイングラス': {
    japanese: 'ワイングラス',
    romaji: 'wain gurasu',
    english: 'wine glass',
    imageUrl: '',
    sentences: [
      {
        japanese: 'ワイングラスでワインをのみます。',
        romaji: 'Wain gurasu de wain o nomimasu.',
        english: 'I drink wine from a wine glass.',
      },
      {
        japanese: 'このワイングラスはきれいです。',
        romaji: 'Kono wain gurasu wa kirei desu.',
        english: 'This wine glass is beautiful.',
      },
      {
        japanese: 'レストランでワイングラスをみかけました。',
        romaji: 'Resutoran de wain gurasu o mikakemashita.',
        english: 'I saw wine glasses at the restaurant.',
      },
    ],
    description: 'ワイングラス (wain gurasu) is a combination of \'wine\' and \'glass\'. While sake is traditional, wine is also enjoyed in Japan, and you\'ll find ワイングラス in many restaurants.',
  },
  'カップ': {
    japanese: 'カップ',
    romaji: 'kappu',
    english: 'cup',
    imageUrl: '',
    sentences: [
      {
        japanese: 'コーヒーをカップにいれます。',
        romaji: 'Koohii o kappu ni iremasu.',
        english: 'I pour coffee into a cup.',
      },
      {
        japanese: 'あついおちゃがカップにはいっています。',
        romaji: 'Atsui ocha ga kappu ni haitteimasu.',
        english: 'Hot tea is in the cup.',
      },
      {
        japanese: 'このカップはわたしのおきにいりです。',
        romaji: 'Kono kappu wa watashi no okiniiri desu.',
        english: 'This cup is my favorite.',
      },
    ],
    description: 'カップ (kappu) comes from \'cup\'. It can refer to a teacup, coffee cup, or even a measuring cup. Paper cups for drinks are also common.',
  },
  'フォーク': {
    japanese: 'フォーク',
    romaji: 'fooku',
    english: 'fork',
    imageUrl: '',
    sentences: [
      {
        japanese: 'フォークでスパゲッティをたべます。',
        romaji: 'Fooku de supagetti o tabemasu.',
        english: 'I eat spaghetti with a fork.',
      },
      {
        japanese: 'テーブルのうえにナイフとフォークがあります。',
        romaji: 'Teeburu no ue ni naifu to fooku ga arimasu.',
        english: 'There is a knife and fork on the table.',
      },
      {
        japanese: 'このフォークはぎんいろです。',
        romaji: 'Kono fooku wa gin\'iro desu.',
        english: 'This fork is silver colored.',
      },
    ],
    description: 'フォーク (fooku) is from the English word \'fork\'. While chopsticks (はし - hashi) are traditional, フォーク are commonly used for Western-style meals in Japan.',
  },
  'ナイフ': {
    japanese: 'ナイフ',
    romaji: 'naifu',
    english: 'knife',
    imageUrl: '',
    sentences: [
      {
        japanese: 'ナイフでパンをきります。',
        romaji: 'Naifu de pan o kirimasu.',
        english: 'I cut bread with a knife.',
      },
      {
        japanese: 'ステーキをたべるとき、ナイフをつかいます。',
        romaji: 'Suteeki o taberu toki, naifu o tsukaimasu.',
        english: 'I use a knife when eating steak.',
      },
      {
        japanese: 'このナイフはよくきれます。',
        romaji: 'Kono naifu wa yoku kiremasu.',
        english: 'This knife cuts well.',
      },
    ],
    description: 'ナイフ (naifu) comes from \'knife\'. It\'s used for cutting food, especially in Western cuisine. Japanese cuisine also has its own specialized knives (ほうちょう - houchou).',
  },
  'スプーン': {
    japanese: 'スプーン',
    romaji: 'supuun',
    english: 'spoon',
    imageUrl: '',
    sentences: [
      {
        japanese: 'スプーンでスープをのみます。',
        romaji: 'Supuun de suupu o nomimasu.',
        english: 'I drink soup with a spoon.',
      },
      {
        japanese: 'カレーライスはスプーンでたべることがおおいです。',
        romaji: 'Kareeraisu wa supuun de taberu koto ga ooi desu.',
        english: 'Curry rice is often eaten with a spoon.',
      },
      {
        japanese: 'こどもはちいさいスプーンをつかいます。',
        romaji: 'Kodomo wa chiisai supuun o tsukaimasu.',
        english: 'Children use small spoons.',
      },
    ],
    description: 'スプーン (supuun) is from \'spoon\'. It\'s used for eating soup, curry, desserts, and also for stirring drinks like coffee or tea.',
  },
  'ボウル': {
    japanese: 'ボウル',
    romaji: 'booru',
    english: 'bowl',
    imageUrl: '',
    sentences: [
      {
        japanese: 'サラダをボウルにいれました。',
        romaji: 'Sarada o booru ni iremashita.',
        english: 'I put the salad in the bowl.',
      },
      {
        japanese: 'このボウルはスープにちょうどいいです。',
        romaji: 'Kono booru wa suupu ni choudo ii desu.',
        english: 'This bowl is just right for soup.',
      },
      {
        japanese: 'あさごはんにシリアルをボウルでたべます。',
        romaji: 'Asagohan ni shiriaru o booru de tabemasu.',
        english: 'I eat cereal in a bowl for breakfast.',
      },
    ],
    description: 'ボウル (booru) comes from \'bowl\'. In Japan, you\'ll use different types of bowls for rice (おちゃわん - ochawan), soup (おわん - owan), or salads and noodles.',
  },
  'バナナ': {
    japanese: 'バナナ',
    romaji: 'banana',
    english: 'banana',
    imageUrl: '',
    sentences: [
      {
        japanese: 'バナナはきいろいです。',
        romaji: 'Banana wa kiiroi desu.',
        english: 'Bananas are yellow.',
      },
      {
        japanese: 'あさごはんにバナナをたべます。',
        romaji: 'Asagohan ni banana o tabemasu.',
        english: 'I eat a banana for breakfast.',
      },
      {
        japanese: 'バナナはからだにいいです。',
        romaji: 'Banana wa karada ni ii desu.',
        english: 'Bananas are good for the body.',
      },
    ],
    description: 'バナナ (banana) is a popular fruit in Japan, often eaten as a quick snack or for breakfast. They are usually imported but are very common in supermarkets.',
  },
  'りんご': {
    japanese: 'りんご',
    romaji: 'ringo',
    english: 'apple',
    imageUrl: '',
    sentences: [
      {
        japanese: 'りんごはあかくておいしいです。',
        romaji: 'Ringo wa akakute oishii desu.',
        english: 'Apples are red and delicious.',
      },
      {
        japanese: 'まいにちりんごをひとつたべます。',
        romaji: 'Mainichi ringo o hitotsu tabemasu.',
        english: 'I eat one apple every day.',
      },
      {
        japanese: 'このりんごはとてもおおきいです。',
        romaji: 'Kono ringo wa totemo ookii desu.',
        english: 'This apple is very big.',
      },
    ],
    description: 'りんご (ringo) means \'apple\'. Aomori prefecture in Japan is famous for its delicious りんご, and there are many varieties available.',
  },
  'サンドイッチ': {
    japanese: 'サンドイッチ',
    romaji: 'sandouicchi',
    english: 'sandwich',
    imageUrl: '',
    sentences: [
      {
        japanese: 'ひるごはんにサンドイッチをたべます。',
        romaji: 'Hirugohan ni sandouicchi o tabemasu.',
        english: 'I eat a sandwich for lunch.',
      },
      {
        japanese: 'たまごサンドイッチがすきです。',
        romaji: 'Tamago sandouicchi ga suki desu.',
        english: 'I like egg sandwiches.',
      },
      {
        japanese: 'ピクニックにサンドイッチをもっていきましょう。',
        romaji: 'Pikunikku ni sandouicchi o motte ikimashou.',
        english: 'Let\'s take sandwiches to the picnic.',
      },
    ],
    description: 'サンドイッチ (sandouicchi) is from \'sandwich\'. Japanese convenience stores (コンビニ - konbini) sell a wide variety of tasty and often unique サンドイッチ!',
  },
  'オレンジ': {
    japanese: 'オレンジ',
    romaji: 'orenji',
    english: 'orange',
    imageUrl: '',
    sentences: [
      {
        japanese: 'オレンジはビタミンシーがおおいです。',
        romaji: 'Orenji wa bitamin shii ga ooi desu.',
        english: 'Oranges are high in Vitamin C.',
      },
      {
        japanese: 'オレンジジュースをのみたいです。',
        romaji: 'Orenji juusu o nomitai desu.',
        english: 'I want to drink orange juice.',
      },
      {
        japanese: 'このオレンジはとてもあまいです。',
        romaji: 'Kono orenji wa totemo amai desu.',
        english: 'This orange is very sweet.',
      },
    ],
    description: 'オレンジ (orenji) means \'orange\' (the fruit). It\'s a popular citrus fruit in Japan, and you can also find many orange-flavored drinks and sweets.',
  },
  'ブロッコリー': {
    japanese: 'ブロッコリー',
    romaji: 'burokkorii',
    english: 'broccoli',
    imageUrl: '',
    sentences: [
      {
        japanese: 'ブロッコリーはみどりいろのやさいです。',
        romaji: 'Burokkorii wa midoriiro no yasai desu.',
        english: 'Broccoli is a green vegetable.',
      },
      {
        japanese: 'わたしはブロッコリーがすきです。',
        romaji: 'Watashi wa burokkorii ga suki desu.',
        english: 'I like broccoli.',
      },
      {
        japanese: 'ブロッコリーをゆでてたべます。',
        romaji: 'Burokkorii o yudete tabemasu.',
        english: 'I boil broccoli and eat it.',
      },
    ],
    description: 'ブロッコリー (burokkorii) is \'broccoli\'. It\'s a common vegetable in Japanese cooking, often used in salads, stir-fries, or as a side dish.',
  },
  'にんじん': {
    japanese: 'にんじん',
    romaji: 'ninjin',
    english: 'carrot',
    imageUrl: '',
    sentences: [
      {
        japanese: 'にんじんはオレンジいろです。',
        romaji: 'Ninjin wa orenji iro desu.',
        english: 'Carrots are orange.',
      },
      {
        japanese: 'うさぎはにんじんがだいすきです。',
        romaji: 'Usagi wa ninjin ga daisuki desu.',
        english: 'Rabbits love carrots.',
      },
      {
        japanese: 'スープににんじんをいれました。',
        romaji: 'Suupu ni ninjin o iremashita.',
        english: 'I put carrots in the soup.',
      },
    ],
    description: 'にんじん (ninjin) means \'carrot\'. Carrots are used in many Japanese dishes, like curry rice (カレーライス) and nikujaga (にくじゃが - meat and potato stew).',
  },
  'ホットドッグ': {
    japanese: 'ホットドッグ',
    romaji: 'hottodoggu',
    english: 'hot dog',
    imageUrl: '',
    sentences: [
      {
        japanese: 'ホットドッグにケチャップをかけます。',
        romaji: 'Hottodoggu ni kechappu o kakemasu.',
        english: 'I put ketchup on my hot dog.',
      },
      {
        japanese: 'やきゅうのしあいでホットドッグをたべました。',
        romaji: 'Yakyuu no shiai de hottodoggu o tabemashita.',
        english: 'I ate a hot dog at the baseball game.',
      },
      {
        japanese: 'このホットドッグはおいしそうです。',
        romaji: 'Kono hottodoggu wa oishisou desu.',
        english: 'This hot dog looks delicious.',
      },
    ],
    description: 'ホットドッグ (hottodoggu) is from \'hot dog\'. You can find them at convenience stores, festivals, and some fast-food places in Japan.',
  },
  'ピザ': {
    japanese: 'ピザ',
    romaji: 'piza',
    english: 'pizza',
    imageUrl: '',
    sentences: [
      {
        japanese: 'ともだちとピザをたべます。',
        romaji: 'Tomodachi to piza o tabemasu.',
        english: 'I eat pizza with friends.',
      },
      {
        japanese: 'おおきいピザをちゅうもんしました。',
        romaji: 'Ookii piza o chuumon shimashita.',
        english: 'I ordered a large pizza.',
      },
      {
        japanese: 'このピザにはチーズがたくさんはいっています。',
        romaji: 'Kono piza ni wa chiizu ga takusan haitteimasu.',
        english: 'This pizza has a lot of cheese.',
      },
    ],
    description: 'ピザ (piza) is \'pizza\'. It\'s very popular in Japan, with many Japanese pizza chains offering unique toppings like seafood or teriyaki chicken.',
  },
  'ドーナツ': {
    japanese: 'ドーナツ',
    romaji: 'doonatsu',
    english: 'donut',
    imageUrl: '',
    sentences: [
      {
        japanese: 'あまいドーナツがすきです。',
        romaji: 'Amai doonatsu ga suki desu.',
        english: 'I like sweet donuts.',
      },
      {
        japanese: 'コーヒーといっしょにドーナツをたべます。',
        romaji: 'Koohii to issho ni doonatsu o tabemasu.',
        english: 'I eat donuts with coffee.',
      },
      {
        japanese: 'いろいろなドーナツがありますね。',
        romaji: 'Iroiro na doonatsu ga arimasu ne.',
        english: 'There are various donuts, aren\'t there?',
      },
    ],
    description: 'ドーナツ (doonatsu) comes from \'donut\'. There are many popular donut shops in Japan offering a wide variety of flavors and cute designs.',
  },
  'ケーキ': {
    japanese: 'ケーキ',
    romaji: 'keeki',
    english: 'cake',
    imageUrl: '',
    sentences: [
      {
        japanese: 'たんじょうび にケーキをたべます。',
        romaji: 'Tanjoubi ni keeki o tabemasu.',
        english: 'I eat cake on my birthday.',
      },
      {
        japanese: 'このケーキはとてもおいしいです。',
        romaji: 'Kono keeki wa totemo oishii desu.',
        english: 'This cake is very delicious.',
      },
      {
        japanese: 'チョコレートケーキをつくりました。',
        romaji: 'Chokoreeto keeki o tsukurimashita.',
        english: 'I made a chocolate cake.',
      },
    ],
    description: 'ケーキ (keeki) is \'cake\'. Japanese cakes are famous for being light, fluffy, and beautifully decorated, especially strawberry shortcake.',
  },
  'いす': {
    japanese: 'いす',
    romaji: 'isu',
    english: 'chair',
    imageUrl: '',
    sentences: [
      {
        japanese: 'へやにいすがあります。',
        romaji: 'Heya ni isu ga arimasu.',
        english: 'There is a chair in the room.',
      },
      {
        japanese: 'このいすにすわってください。',
        romaji: 'Kono isu ni suwatte kudasai.',
        english: 'Please sit on this chair.',
      },
      {
        japanese: 'いすはきでできています。',
        romaji: 'Isu wa ki de dekiteimasu.',
        english: 'The chair is made of wood.',
      },
    ],
    description: 'いす (isu) means \'chair\'. In traditional Japanese homes, people often sit on tatami mats, but いす are common in modern homes, offices, and restaurants.',
  },
  'ソファー': {
    japanese: 'ソファー',
    romaji: 'sofaa',
    english: 'sofa/couch',
    imageUrl: '',
    sentences: [
      {
        japanese: 'リビングにソファーがあります。',
        romaji: 'Ribingu ni sofaa ga arimasu.',
        english: 'There is a sofa in the living room.',
      },
      {
        japanese: 'このソファーはとてもふかふかです。',
        romaji: 'Kono sofaa wa totemo fukafuka desu.',
        english: 'This sofa is very fluffy.',
      },
      {
        japanese: 'ソファーでほんをよみます。',
        romaji: 'Sofaa de hon o yomimasu.',
        english: 'I read a book on the sofa.',
      },
    ],
    description: 'ソファー (sofaa) is from \'sofa\'. It\'s a common piece of furniture in Japanese living rooms for relaxing and watching TV.',
  },
  'うえきばち': {
    japanese: 'うえきばち',
    romaji: 'uekibachi',
    english: 'flower pot',
    imageUrl: '',
    sentences: [
      {
        japanese: 'うえきばちにはながさいています。',
        romaji: 'Uekibachi ni hana ga saiteimasu.',
        english: 'Flowers are blooming in the flower pot.',
      },
      {
        japanese: 'あたらしいはなをうえきばちにうえました。',
        romaji: 'Atarashii hana o uekibachi ni uemashita.',
        english: 'I planted new flowers in the flower pot.',
      },
      {
        japanese: 'このうえきばちはかわいいですね。',
        romaji: 'Kono uekibachi wa kawaii desu ne.',
        english: 'This flower pot is cute, isn\'t it?',
      },
    ],
    description: 'うえきばち (uekibachi) means \'flower pot\' (植木 ueki = plant/planted tree, 鉢 hachi = bowl/pot). Many people in Japan enjoy gardening, even in small spaces using うえきばち.',
  },
  'ベッド': {
    japanese: 'ベッド',
    romaji: 'beddo',
    english: 'bed',
    imageUrl: '',
    sentences: [
      {
        japanese: 'わたしはベッドでねます。',
        romaji: 'Watashi wa beddo de nemasu.',
        english: 'I sleep in a bed.',
      },
      {
        japanese: 'このベッドはおおきいです。',
        romaji: 'Kono beddo wa ookii desu.',
        english: 'This bed is big.',
      },
      {
        japanese: 'まいあさベッドをきれいにします。',
        romaji: 'Maiasa beddo o kirei ni shimasu.',
        english: 'I make my bed every morning.',
      },
    ],
    description: 'ベッド (beddo) is from \'bed\'. While futons (ふとん) laid on tatami mats are traditional, Western-style ベッド are very common in modern Japanese homes.',
  },
  'しょくたく': {
    japanese: 'しょくたく',
    romaji: 'shokutaku',
    english: 'dining table',
    imageUrl: '',
    sentences: [
      {
        japanese: 'しょくたくのうえにりょうりがあります。',
        romaji: 'Shokutaku no ue ni ryouri ga arimasu.',
        english: 'There is food on the dining table.',
      },
      {
        japanese: 'みんなでしょくたくをかこみます。',
        romaji: 'Minna de shokutaku o kakomimasu.',
        english: 'Everyone gathers around the dining table.',
      },
      {
        japanese: 'このしょくたくはもくせいです。',
        romaji: 'Kono shokutaku wa mokusei desu.',
        english: 'This dining table is wooden.',
      },
    ],
    description: 'しょくたく (shokutaku) means \'dining table\'. Families gather around the しょくたく to eat meals together.',
  },
  'トイレ': {
    japanese: 'トイレ',
    romaji: 'toire',
    english: 'toilet',
    imageUrl: '',
    sentences: [
      {
        japanese: 'トイレはどこですか。',
        romaji: 'Toire wa doko desu ka.',
        english: 'Where is the toilet?',
      },
      {
        japanese: 'このホテルのトイレはきれいです。',
        romaji: 'Kono hoteru no toire wa kirei desu.',
        english: 'The toilet in this hotel is clean.',
      },
      {
        japanese: 'トイレのあと、てをあらいます。',
        romaji: 'Toire no ato, te o araimasu.',
        english: 'I wash my hands after using the toilet.',
      },
    ],
    description: 'トイレ (toire) is from \'toilet\'. Japanese トイレ are famous worldwide for being very high-tech, with features like heated seats and built-in bidets!',
  },
  'テレビ': {
    japanese: 'テレビ',
    romaji: 'terebi',
    english: 'TV',
    imageUrl: '',
    sentences: [
      {
        japanese: 'リビングでテレビをみます。',
        romaji: 'Ribingu de terebi o mimasu.',
        english: 'I watch TV in the living room.',
      },
      {
        japanese: 'あたらしいテレビをかいました。',
        romaji: 'Atarashii terebi o kaimashita.',
        english: 'I bought a new TV.',
      },
      {
        japanese: 'すきなテレビばんぐみがあります。',
        romaji: 'Suki na terebi bangumi ga arimasu.',
        english: 'I have a favorite TV program.',
      },
    ],
    description: 'テレビ (terebi) is short for テレビジョン (terebijon - television). Watching テレビ is a common pastime in Japan, with many unique Japanese TV shows.',
  },
  'ノートパソコン': {
    japanese: 'ノートパソコン',
    romaji: 'nooto pasokon',
    english: 'laptop computer',
    imageUrl: '',
    sentences: [
      {
        japanese: 'ノートパソコンでしごとをします。',
        romaji: 'Nooto pasokon de shigoto o shimasu.',
        english: 'I work on my laptop computer.',
      },
      {
        japanese: 'このノートパソコンはかるくてべんりです。',
        romaji: 'Kono nooto pasokon wa karukute benri desu.',
        english: 'This laptop computer is light and convenient.',
      },
      {
        japanese: 'カフェでノートパソコンをつかっています。',
        romaji: 'Kafe de nooto pasokon o tsukatteimasu.',
        english: 'I am using my laptop computer at a cafe.',
      },
    ],
    description: 'ノートパソコン (nooto pasokon) means \'laptop computer\', literally \'notebook personal computer\'. It\'s often shortened to ノートPC (nooto pii shii).',
  },
  'マウス': {
    japanese: 'マウス',
    romaji: 'mausu',
    english: 'mouse (computer)',
    imageUrl: '',
    sentences: [
      {
        japanese: 'マウスでクリックします。',
        romaji: 'Mausu de kurikku shimasu.',
        english: 'I click with the mouse.',
      },
      {
        japanese: 'このマウスはワイヤレスです。',
        romaji: 'Kono mausu wa waiyaresu desu.',
        english: 'This mouse is wireless.',
      },
      {
        japanese: 'あたらしいマウスがほしいです。',
        romaji: 'Atarashii mausu ga hoshii desu.',
        english: 'I want a new mouse.',
      },
    ],
    description: 'マウス (mausu) is from \'mouse\', referring to the computer mouse. It\'s an essential accessory for most desktop and many laptop users.',
  },
  'リモコン': {
    japanese: 'リモコン',
    romaji: 'rimokon',
    english: 'remote control',
    imageUrl: '',
    sentences: [
      {
        japanese: 'テレビのリモコンはどこですか。',
        romaji: 'Terebi no rimokon wa doko desu ka.',
        english: 'Where is the TV remote control?',
      },
      {
        japanese: 'リモコンでチャンネルをかえます。',
        romaji: 'Rimokon de channeru o kaemasu.',
        english: 'I change the channel with the remote control.',
      },
      {
        japanese: 'このリモコンはつかいやすいです。',
        romaji: 'Kono rimokon wa tsukaiyasui desu.',
        english: 'This remote control is easy to use.',
      },
    ],
    description: 'リモコン (rimokon) is short for \'remote controller\'. It\'s used for TVs, air conditioners (エアコン - eakon), and many other electronic devices in Japan.',
  },
  'キーボード': {
    japanese: 'キーボード',
    romaji: 'kiiboodo',
    english: 'keyboard (computer)',
    imageUrl: '',
    sentences: [
      {
        japanese: 'キーボードでタイプします。',
        romaji: 'Kiiboodo de taipu shimasu.',
        english: 'I type on the keyboard.',
      },
      {
        japanese: 'このキーボードはあたらしいです。',
        romaji: 'Kono kiiboodo wa atarashii desu.',
        english: 'This keyboard is new.',
      },
      {
        japanese: 'ノートパソコンにキーボードがついています。',
        romaji: 'Nooto pasokon ni kiiboodo ga tsuiteimasu.',
        english: 'The laptop has a keyboard attached.',
      },
    ],
    description: 'キーボード (kiiboodo) is from \'keyboard\'. Japanese keyboards have extra keys for switching between Roman letters (ローマ字 - roomaji) and Japanese characters (かな - kana).',
  },
  'けいたいでんわ': {
    japanese: 'けいたいでんわ',
    romaji: 'keitai denwa',
    english: 'mobile phone',
    imageUrl: '',
    sentences: [
      {
        japanese: 'けいたいでんわでともだちにはなします。',
        romaji: 'Keitai denwa de tomodachi ni hanashimasu.',
        english: 'I talk to my friend on my mobile phone.',
      },
      {
        japanese: 'あたらしいけいたいでんわをかいました。',
        romaji: 'Atarashii keitai denwa o kaimashita.',
        english: 'I bought a new mobile phone.',
      },
      {
        japanese: 'けいたいでんわでしゃしんをとります。',
        romaji: 'Keitai denwa de shashin o torimasu.',
        english: 'I take pictures with my mobile phone.',
      },
    ],
    description: 'けいたいでんわ (keitai denwa) means \'mobile phone\', often shortened to けいたい (keitai). Japan is known for its advanced mobile phone technology and culture.',
  },
  'でんしレンジ': {
    japanese: 'でんしレンジ',
    romaji: 'denshi renji',
    english: 'microwave oven',
    imageUrl: '',
    sentences: [
      {
        japanese: 'たべものをでんしレンジであたためます。',
        romaji: 'Tabemono o denshi renji de atatamemasu.',
        english: 'I warm up food in the microwave oven.',
      },
      {
        japanese: 'このりょうりはでんしレンジでつくれます。',
        romaji: 'Kono ryouri wa denshi renji de tsukuremasu.',
        english: 'This dish can be made in the microwave oven.',
      },
      {
        japanese: 'でんしレンジはとてもべんりです。',
        romaji: 'Denshi renji wa totemo benri desu.',
        english: 'Microwave ovens are very convenient.',
      },
    ],
    description: 'でんしレンジ (denshi renji) means \'microwave oven\' (電子 denshi = electron, レンジ renji = range/oven). It\'s a very common and essential appliance in Japanese kitchens for heating food quickly.',
  },
  'オーブン': {
    japanese: 'オーブン',
    romaji: 'oobun',
    english: 'oven',
    imageUrl: '',
    sentences: [
      {
        japanese: 'オーブンでケーキをやきます。',
        romaji: 'Oobun de keeki o yakimasu.',
        english: 'I bake a cake in the oven.',
      },
      {
        japanese: 'このオーブンはあたらしいです。',
        romaji: 'Kono oobun wa atarashii desu.',
        english: 'This oven is new.',
      },
      {
        japanese: 'ピザをオーブンにいれます。',
        romaji: 'Piza o oobun ni iremasu.',
        english: 'I put the pizza in the oven.',
      },
    ],
    description: 'オーブン (oobun) is from \'oven\'. While not as standard as microwave ovens in all Japanese kitchens, many modern ones have オーブン functions, often combined with the microwave (オーブンレンジ - oobun renji).',
  },
  'トースター': {
    japanese: 'トースター',
    romaji: 'toosutaa',
    english: 'toaster',
    imageUrl: '',
    sentences: [
      {
        japanese: 'トースターでパンをやきます。',
        romaji: 'Toosutaa de pan o yakimasu.',
        english: 'I toast bread in the toaster.',
      },
      {
        japanese: 'まいあさトースターをつかいます。',
        romaji: 'Maiasa toosutaa o tsukaimasu.',
        english: 'I use the toaster every morning.',
      },
      {
        japanese: 'このトースターはちいさいです。',
        romaji: 'Kono toosutaa wa chiisai desu.',
        english: 'This toaster is small.',
      },
    ],
    description: 'トースター (toosutaa) is from \'toaster\', specifically for toasting bread. Many Japanese people enjoy thick-sliced toast (しょくパン - shokupan) for breakfast.',
  },
  'ながし': {
    japanese: 'ながし',
    romaji: 'nagashi',
    english: 'sink (kitchen)',
    imageUrl: '',
    sentences: [
      {
        japanese: 'しょっきをながしであらいます。',
        romaji: 'Shokki o nagashi de araimasu.',
        english: 'I wash the dishes in the sink.',
      },
      {
        japanese: 'ながしをきれいにしてください。',
        romaji: 'Nagashi o kirei ni shite kudasai.',
        english: 'Please clean the sink.',
      },
      {
        japanese: 'ながしでてをあらいます。',
        romaji: 'Nagashi de te o araimasu.',
        english: 'I wash my hands at the sink.',
      },
    ],
    description: 'ながし (nagashi) or ながしだい (nagashidai) refers to the kitchen sink. It\'s where you wash dishes (さらあらい - saraarai) and prepare food.',
  },
  'れいぞうこ': {
    japanese: 'れいぞうこ',
    romaji: 'reizouko',
    english: 'refrigerator',
    imageUrl: '',
    sentences: [
      {
        japanese: 'たべものをれいぞうこにいれます。',
        romaji: 'Tabemono o reizouko ni iremasu.',
        english: 'I put food in the refrigerator.',
      },
      {
        japanese: 'れいぞうこのなかにジュースがあります。',
        romaji: 'Reizouko no naka ni juusu ga arimasu.',
        english: 'There is juice in the refrigerator.',
      },
      {
        japanese: 'このれいぞうこはおおきいです。',
        romaji: 'Kono reizouko wa ookii desu.',
        english: 'This refrigerator is big.',
      },
    ],
    description: 'れいぞうこ (reizouko) means \'refrigerator\'. It\'s an essential appliance in every home to keep food fresh. Japanese refrigerators often have specialized compartments.',
  },
  'ほん': {
    japanese: 'ほん',
    romaji: 'hon',
    english: 'book',
    imageUrl: '',
    sentences: [
      {
        japanese: 'わたしはほんをよむのがすきです。',
        romaji: 'Watashi wa hon o yomu no ga suki desu.',
        english: 'I like reading books.',
      },
      {
        japanese: 'としょかんでほんをかります。',
        romaji: 'Toshokan de hon o karimasu.',
        english: 'I borrow books from the library.',
      },
      {
        japanese: 'このほんはおもしろいです。',
        romaji: 'Kono hon wa omoshiroi desu.',
        english: 'This book is interesting.',
      },
    ],
    description: 'ほん (hon) means \'book\'. Japan has a rich literary tradition, and bookstores (本屋 - honya) are common. Manga (まんが) are a very popular type of ほん.',
  },
  'とけい': {
    japanese: 'とけい',
    romaji: 'tokei',
    english: 'clock/watch',
    imageUrl: '',
    sentences: [
      {
        japanese: 'へやにとけいがあります。',
        romaji: 'Heya ni tokei ga arimasu.',
        english: 'There is a clock in the room.',
      },
      {
        japanese: 'いまなんじですか、とけいをみてください。',
        romaji: 'Ima nanji desu ka, tokei o mite kudasai.',
        english: 'What time is it now? Please look at the clock/watch.',
      },
      {
        japanese: 'あたらしいとけいをかいました。',
        romaji: 'Atarashii tokei o kaimashita.',
        english: 'I bought a new watch.',
      },
    ],
    description: 'とけい (tokei) can mean \'clock\' (壁時計 - kabedokei for wall clock, 目覚まし時計 - mezamashidokei for alarm clock) or \'watch\' (腕時計 - udedokei).',
  },
  'かびん': {
    japanese: 'かびん',
    romaji: 'kabin',
    english: 'vase',
    imageUrl: '',
    sentences: [
      {
        japanese: 'かびんにはなをいけます。',
        romaji: 'Kabin ni hana o ikemasu.',
        english: 'I arrange flowers in the vase.',
      },
      {
        japanese: 'このかびんはとてもきれいです。',
        romaji: 'Kono kabin wa totemo kirei desu.',
        english: 'This vase is very beautiful.',
      },
      {
        japanese: 'テーブルのうえにかびんをおきました。',
        romaji: 'Teeburu no ue ni kabin o okimashita.',
        english: 'I put the vase on the table.',
      },
    ],
    description: 'かびん (kabin) means \'vase\'. It\'s used to display flowers (花 - hana). Flower arrangement, or 生け花 (ikebana), is a traditional Japanese art.',
  },
  'はさみ': {
    japanese: 'はさみ',
    romaji: 'hasami',
    english: 'scissors',
    imageUrl: '',
    sentences: [
      {
        japanese: 'かみをはさみできります。',
        romaji: 'Kami o hasami de kirimasu.',
        english: 'I cut paper with scissors.',
      },
      {
        japanese: 'このはさみはよくきれますか。',
        romaji: 'Kono hasami wa yoku kiremasu ka.',
        english: 'Do these scissors cut well?',
      },
      {
        japanese: 'こどもはあんぜんなはさみをつかいます。',
        romaji: 'Kodomo wa anzen na hasami o tsukaimasu.',
        english: 'Children use safety scissors.',
      },
    ],
    description: 'はさみ (hasami) means \'scissors\'. They are used for cutting paper, cloth, and many other things. There are various types for different purposes.',
  },
  'テディベア': {
    japanese: 'テディベア',
    romaji: 'tedi bea',
    english: 'teddy bear',
    imageUrl: '',
    sentences: [
      {
        japanese: 'わたしはちいさいとき、テディベアをもっていました。',
        romaji: 'Watashi wa chiisai toki, tedi bea o motteimashita.',
        english: 'I had a teddy bear when I was small.',
      },
      {
        japanese: 'このテディベアはとてもかわいいです。',
        romaji: 'Kono tedi bea wa totemo kawaii desu.',
        english: 'This teddy bear is very cute.',
      },
      {
        japanese: 'ともだちにテディベアをプレゼントしました。',
        romaji: 'Tomodachi ni tedi bea o purezento shimashita.',
        english: 'I gave a teddy bear to my friend as a present.',
      },
    ],
    description: 'テディベア (tedi bea) is from \'teddy bear\'. These stuffed bears are popular toys and collectibles in Japan, just like in many other countries.',
  },
  'ヘアドライヤー': {
    japanese: 'ヘアドライヤー',
    romaji: 'hea doraiyaa',
    english: 'hair dryer',
    imageUrl: '',
    sentences: [
      {
        japanese: 'おふろのあと、ヘアドライヤーをつかいます。',
        romaji: 'Ofuro no ato, hea doraiyaa o tsukaimasu.',
        english: 'I use a hair dryer after taking a bath.',
      },
      {
        japanese: 'このヘアドライヤーはあたらしいモデルです。',
        romaji: 'Kono hea doraiyaa wa atarashii moderu desu.',
        english: 'This hair dryer is a new model.',
      },
      {
        japanese: 'ヘアドライヤーでかみをかわかします。',
        romaji: 'Hea doraiyaa de kami o kawakashimasu.',
        english: 'I dry my hair with a hair dryer.',
      },
    ],
    description: 'ヘアドライヤー (hea doraiyaa) is from \'hair dryer\'. It\'s a common appliance used after showering or bathing to dry hair.',
  },
  'はぶらし': {
    japanese: 'はぶらし',
    romaji: 'haburashi',
    english: 'toothbrush',
    imageUrl: '',
    sentences: [
      {
        japanese: 'まいにち、はぶらしではをみがきます。',
        romaji: 'Mainichi, haburashi de ha o migakimasu.',
        english: 'I brush my teeth with a toothbrush every day.',
      },
      {
        japanese: 'あたらしいはぶらしをかいました。',
        romaji: 'Atarashii haburashi o kaimashita.',
        english: 'I bought a new toothbrush.',
      },
      {
        japanese: 'このはぶらしはやわらかいです。',
        romaji: 'Kono haburashi wa yawarakai desu.',
        english: 'This toothbrush is soft.',
      },
    ],
    description: 'はぶらし (haburashi), often written 歯ブラシ, means \'toothbrush\'. Oral hygiene is important, and Japanese drugstores offer a wide variety of はぶらし.',
  },

  // Add more objects as needed
}; 
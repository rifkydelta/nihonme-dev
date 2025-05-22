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

  // Add more objects as needed
}; 
interface Sentence {
  japanese: string;
  romaji: string;
  indonesian: string;
}

export interface ObjectDetails {
  japanese: string;
  romaji: string;
  indonesian: string;
  imageUrl: string;
  sentences: Sentence[];
  description: string;
}

export const objectDetailsMap: Record<string, ObjectDetails> = {
'ひと': {
    japanese: 'ひと',
    romaji: 'hito',
    indonesian: 'orang',
    imageUrl: '/nihonme/img/1.png',
    sentences: [
      {
        japanese: 'ひとはにほんごをべんきょうしています。',
        romaji: 'Hito wa nihongo o benkyou shiteimasu.',
        indonesian: 'Orang itu sedang belajar bahasa Jepang.',
      },
      {
        japanese: 'そのひとはせんせいです。',
        romaji: 'Sono hito wa sensei desu.',
        indonesian: 'Orang itu adalah seorang guru.',
      },
      {
        japanese: 'ひとはともだちとあそびます。',
        romaji: 'Hito wa tomodachi to asobimasu.',
        indonesian: 'Orang itu bermain dengan teman-temannya.',
      },
    ],
    description: 'Kata ひと berarti orang, dan ini adalah salah satu kata benda paling dasar dalam bahasa Jepang, digunakan untuk merujuk pada setiap manusia.',
  },
  'じてんしゃ': {
    japanese: 'じてんしゃ',
    romaji: 'jitensha',
    indonesian: 'sepeda',
    imageUrl: '/nihonme/img/2.png',
    sentences: [
      {
        japanese: 'じてんしゃでがっこうへいきます。',
        romaji: 'Jitensha de gakkou e ikimasu.',
        indonesian: 'Saya pergi ke sekolah dengan sepeda.',
      },
      {
        japanese: 'あたらしいじてんしゃをかいました。',
        romaji: 'Atarashii jitensha o kaimashita.',
        indonesian: 'Saya membeli sepeda baru.',
      },
      {
        japanese: 'じてんしゃはかんきょうにいいです。',
        romaji: 'Jitensha wa kankyou ni ii desu.',
        indonesian: 'Sepeda baik untuk lingkungan.',
      },
    ],
    description: 'じてんしゃ berarti sepeda, gabungan dari じてん (sendiri) dan しゃ (kendaraan), menjadikannya kendaraan yang Anda kayuh sendiri.',
  },
  'くるま': {
    japanese: 'くるま',
    romaji: 'kuruma',
    indonesian: 'mobil',
    imageUrl: '/nihonme/img/3.png',
    sentences: [
      {
        japanese: 'くるまでスーパーにいきます。',
        romaji: 'Kuruma de suupaa ni ikimasu.',
        indonesian: 'Saya pergi ke supermarket dengan mobil.',
      },
      {
        japanese: 'くるまははやいです。',
        romaji: 'Kuruma wa hayai desu.',
        indonesian: 'Mobil itu cepat.',
      },
      {
        japanese: 'くるまをうんてんします。',
        romaji: 'Kuruma o unten shimasu.',
        indonesian: 'Saya mengendarai mobil.',
      },
    ],
    description: 'くるま berarti mobil, alat transportasi umum di Jepang dan seluruh dunia.',
  },
  'オートバイ': {
    japanese: 'オートバイ',
    romaji: 'ootobai',
    indonesian: 'sepeda motor',
    imageUrl: '/nihonme/img/4.png',
    sentences: [
      {
        japanese: 'オートバイでツーリングします。',
        romaji: 'Ootobai de tsuuringu shimasu.',
        indonesian: 'Saya pergi touring dengan sepeda motor.',
      },
      {
        japanese: 'オートバイははやいです。',
        romaji: 'Ootobai wa hayai desu.',
        indonesian: 'Sepeda motor itu cepat.',
      },
      {
        japanese: 'オートバイにのるのがすきです。',
        romaji: 'Ootobai ni noru no ga suki desu.',
        indonesian: 'Saya suka mengendarai sepeda motor.',
      },
    ],
    description: 'オートバイ dipinjam dari kata bahasa Inggris \'auto bike\' yang berarti sepeda motor, banyak digunakan di Jepang.',
  },
  'ひこうき': {
    japanese: 'ひこうき',
    romaji: 'hikouki',
    indonesian: 'pesawat terbang',
    imageUrl: '/nihonme/img/5.png',
    sentences: [
      {
        japanese: 'ひこうきでとびます。',
        romaji: 'Hikouki de tobimasu.',
        indonesian: 'Saya terbang dengan pesawat.',
      },
      {
        japanese: 'ひこうきはそらをとびます。',
        romaji: 'Hikouki wa sora o tobimasu.',
        indonesian: 'Pesawat terbang di langit.',
      },
      {
        japanese: 'ひこうきのチケットをかいました。',
        romaji: 'Hikouki no chiketto o kaimashita.',
        indonesian: 'Saya membeli tiket pesawat.',
      },
    ],
    description: 'ひこうき berarti pesawat terbang, dari ひこう (penerbangan) dan き (mesin).',
  },
  'バス': {
    japanese: 'バス',
    romaji: 'basu',
    indonesian: 'bus',
    imageUrl: '/nihonme/img/6.png',
    sentences: [
      {
        japanese: 'バスでがっこうへいきます。',
        romaji: 'Basu de gakkou e ikimasu.',
        indonesian: 'Saya pergi ke sekolah dengan bus.',
      },
      {
        japanese: 'バスはおおきいです。',
        romaji: 'Basu wa ookii desu.',
        indonesian: 'Bus itu besar.',
      },
      {
        japanese: 'バスをまっています。',
        romaji: 'Basu o matteimasu.',
        indonesian: 'Saya sedang menunggu bus.',
      },
    ],
    description: 'バス adalah kata pinjaman dari bahasa Inggris \'bus,\' merujuk pada kendaraan transportasi umum.',
  },
  'でんしゃ': {
    japanese: 'でんしゃ',
    romaji: 'densha',
    indonesian: 'kereta listrik',
    imageUrl: '/nihonme/img/7.png',
    sentences: [
      {
        japanese: 'でんしゃにのります。',
        romaji: 'Densha ni norimasu.',
        indonesian: 'Saya naik kereta listrik.',
      },
      {
        japanese: 'でんしゃははやいです。',
        romaji: 'Densha wa hayai desu.',
        indonesian: 'Kereta listrik itu cepat.',
      },
      {
        japanese: 'でんしゃでしごとにいきます。',
        romaji: 'Densha de shigoto ni ikimasu.',
        indonesian: 'Saya pergi kerja dengan kereta listrik.',
      },
    ],
    description: 'でんしゃ berarti kereta listrik, metode transportasi yang sangat populer di Jepang.',
  },
  'トラック': {
    japanese: 'トラック',
    romaji: 'torakku',
    indonesian: 'truk',
    imageUrl: '/nihonme/img/8.png',
    sentences: [
      {
        japanese: 'トラックがどうろをはしっています。',
        romaji: 'Torakku ga douro o hashitteimasu.',
        indonesian: 'Truk itu berjalan di jalan raya.',
      },
      {
        japanese: 'トラックはおおきいです。',
        romaji: 'Torakku wa ookii desu.',
        indonesian: 'Truk itu besar.',
      },
      {
        japanese: 'トラックでにもつをはこびます。',
        romaji: 'Torakku de nimotsu o hakobimasu.',
        indonesian: 'Saya membawa barang dengan truk.',
      },
    ],
    description: 'トラック dipinjam dari bahasa Inggris \'truck,\' digunakan untuk mengangkut barang.',
  },
  'ボート': {
    japanese: 'ボート',
    romaji: 'booto',
    indonesian: 'perahu',
    imageUrl: '/nihonme/img/9.png',
    sentences: [
      {
        japanese: 'ボートでうみをわたります。',
        romaji: 'Booto de umi o watarimasu.',
        indonesian: 'Saya menyeberangi laut dengan perahu.',
      },
      {
        japanese: 'ボートはみずのうえをうつくしいです。',
        romaji: 'Booto wa mizu no ue o utsukushii desu.',
        indonesian: 'Perahu itu indah di atas air.',
      },
      {
        japanese: 'ボートにのるのがたのしいです。',
        romaji: 'Booto ni noru no ga tanoshii desu.',
        indonesian: 'Naik perahu itu menyenangkan.',
      },
    ],
    description: 'ボート dipinjam dari bahasa Inggris \'boat,\' sebuah kapal air kecil.',
  },
  'しんごうき': {
    japanese: 'しんごうき',
    romaji: 'shingouki',
    indonesian: 'lampu lalu lintas',
    imageUrl: '/nihonme/img/10.png',
    sentences: [
      {
        japanese: 'しんごうきはあかです。',
        romaji: 'Shingouki wa aka desu.',
        indonesian: 'Lampu lalu lintas berwarna merah.',
      },
      {
        japanese: 'しんごうきがみどりになりました。',
        romaji: 'Shingouki ga midori ni narimashita.',
        indonesian: 'Lampu lalu lintas berubah menjadi hijau.',
      },
      {
        japanese: 'みちをしんごうきでわたります。',
        romaji: 'Michi o shingouki de watarimasu.',
        indonesian: 'Saya menyeberang jalan di lampu lalu lintas.',
      },
    ],
    description: 'Kata しんごうき (shingouki) menggabungkan しんごう (shingou) yang berarti \'sinyal\' dan き (ki) yang berarti \'mesin\'. Lampu lalu lintas di Jepang seringkali berwarna biru, bukan hijau, untuk \'jalan\', yang disebut あお (ao)!',
  },
  'しょうかせん': {
    japanese: 'しょうかせん',
    romaji: 'shoukasen',
    indonesian: 'hidran kebakaran',
    imageUrl: '/nihonme/img/11.png',
    sentences: [
      {
        japanese: 'しょうかせんはあかいです。',
        romaji: 'Shoukasen wa akai desu.',
        indonesian: 'Hidran kebakaran itu berwarna merah.',
      },
      {
        japanese: 'ここにしょうかせんがあります。',
        romaji: 'Koko ni shoukasen ga arimasu.',
        indonesian: 'Ada hidran kebakaran di sini.',
      },
      {
        japanese: 'しょうかせんのみずはつよいです。',
        romaji: 'Shoukasen no mizu wa tsuyoi desu.',
        indonesian: 'Air dari hidran kebakaran itu kuat.',
      },
    ],
    description: 'しょうかせん (shoukasen) berarti \'hidran kebakaran\'. Anda akan melihatnya di jalanan di Jepang, seringkali berwarna merah, siap membantu petugas pemadam kebakaran. Kata ini terdiri dari しょうか (shouka - pemadaman api) dan せん (sen - sumbat/katup).',
  },
  'ストップサイン': {
    japanese: 'ストップサイン',
    romaji: 'sutoppu sain',
    indonesian: 'rambu berhenti',
    imageUrl: '/nihonme/img/12.png',
    sentences: [
      {
        japanese: 'ストップサインでとまります。',
        romaji: 'Sutoppu sain de tomarimasu.',
        indonesian: 'Saya berhenti di rambu berhenti.',
      },
      {
        japanese: 'あのストップサインがみえますか。',
        romaji: 'Ano sutoppu sain ga miemasu ka.',
        indonesian: 'Apakah Anda bisa melihat rambu berhenti itu?',
      },
      {
        japanese: 'ストップサインはたいせつです。',
        romaji: 'Sutoppu sain wa taisetsu desu.',
        indonesian: 'Rambu berhenti itu penting.',
      },
    ],
    description: 'ストップサイン (sutoppu sain) adalah kata Jepang untuk \'rambu berhenti\', diambil langsung dari bahasa Inggris! Di Jepang, rambu berhenti berbentuk segitiga terbalik berwarna merah dan seringkali bertuliskan 止まれ (tomare), yang berarti \'Berhenti!\'.',
  },
  'パーキングメーター': {
    japanese: 'パーキングメーター',
    romaji: 'paakingu meetaa',
    indonesian: 'meteran parkir',
    imageUrl: '/nihonme/img/13.png',
    sentences: [
      {
        japanese: 'パーキングメーターにおかねをいれます。',
        romaji: 'Paakingu meetaa ni okane o iremasu.',
        indonesian: 'Saya memasukkan uang ke meteran parkir.',
      },
      {
        japanese: 'このパーキングメーターはこわれています。',
        romaji: 'Kono paakingu meetaa wa kowareteimasu.',
        indonesian: 'Meteran parkir ini rusak.',
      },
      {
        japanese: 'パーキングメーターのじかんがきれました。',
        romaji: 'Paakingu meetaa no jikan ga kiremashita.',
        indonesian: 'Waktu di meteran parkir sudah habis.',
      },
    ],
    description: 'パーキングメーター (paakingu meetaa) adalah kata pinjaman dari bahasa Inggris untuk \'meteran parkir\'. Di Jepang, Anda akan menemukannya di area kota yang sibuk untuk mengatur ruang dan waktu parkir.',
  },
  'ベンチ': {
    japanese: 'ベンチ',
    romaji: 'benchi',
    indonesian: 'bangku',
    imageUrl: '/nihonme/img/14.png',
    sentences: [
      {
        japanese: 'こうえんのベンチにすわります。',
        romaji: 'Kouen no benchi ni suwarimasu.',
        indonesian: 'Saya duduk di bangku di taman.',
      },
      {
        japanese: 'このベンチはあたらしいです。',
        romaji: 'Kono benchi wa atarashii desu.',
        indonesian: 'Bangku ini baru.',
      },
      {
        japanese: 'えきのホームにベンチがあります。',
        romaji: 'Eki no hoomu ni benchi ga arimasu.',
        indonesian: 'Ada bangku di peron stasiun.',
      },
    ],
    description: 'ベンチ (benchi) berasal dari kata Inggris \'bench\'. Anda dapat menemukan bangku di taman, stasiun kereta, dan banyak tempat umum di Jepang untuk orang duduk dan beristirahat.',
  },
  'とり': {
    japanese: 'とり',
    romaji: 'tori',
    indonesian: 'burung',
    imageUrl: '/nihonme/img/15.png',
    sentences: [
      {
        japanese: 'とりがそらをとんでいます。',
        romaji: 'Tori ga sora o tondeimasu.',
        indonesian: 'Seekor burung sedang terbang di langit.',
      },
      {
        japanese: 'かわいいとりがいますね。',
        romaji: 'Kawaii tori ga imasu ne.',
        indonesian: 'Ada burung yang lucu ya.',
      },
      {
        japanese: 'あさ、とりのこえがきこえます。',
        romaji: 'Asa, tori no koe ga kikoemasu.',
        indonesian: 'Di pagi hari, saya bisa mendengar suara burung.',
      },
    ],
    description: 'とり (tori) berarti \'burung\' dalam bahasa Jepang. Ini adalah kata yang sederhana dan umum. Jepang memiliki banyak spesies burung asli yang indah, dan motif burung populer dalam seni tradisional.',
  },
  'ねこ': {
    japanese: 'ねこ',
    romaji: 'neko',
    indonesian: 'kucing',
    imageUrl: '/nihonme/img/16.png',
    sentences: [
      {
        japanese: 'ねこがすきです。',
        romaji: 'Neko ga suki desu.',
        indonesian: 'Saya suka kucing.',
      },
      {
        japanese: 'そのねこはしろいです。',
        romaji: 'Sono neko wa shiroi desu.',
        indonesian: 'Kucing itu berwarna putih.',
      },
      {
        japanese: 'ねこがひるねをしています。',
        romaji: 'Neko ga hirune o shiteimasu.',
        indonesian: 'Kucing itu sedang tidur siang.',
      },
    ],
    description: 'ねこ (neko) berarti \'kucing\'. Kucing sangat populer di Jepang, dan Anda mungkin tahu まねきねこ (maneki-neko), patung kucing yang melambai yang dipercaya membawa keberuntungan!',
  },
  'いぬ': {
    japanese: 'いぬ',
    romaji: 'inu',
    indonesian: 'anjing',
    imageUrl: '/nihonme/img/17.png',
    sentences: [
      {
        japanese: 'いぬとさんぽにいきます。',
        romaji: 'Inu to sanpo ni ikimasu.',
        indonesian: 'Saya pergi jalan-jalan dengan anjing.',
      },
      {
        japanese: 'このいぬはおとなしいです。',
        romaji: 'Kono inu wa otonashii desu.',
        indonesian: 'Anjing ini tenang.',
      },
      {
        japanese: 'いぬがワンワンほえています。',
        romaji: 'Inu ga wanwan hoeteimasu.',
        indonesian: 'Anjing itu menggonggong "guk guk".',
      },
    ],
    description: 'いぬ (inu) berarti \'anjing\'. Anjing juga merupakan hewan peliharaan populer di Jepang. Akita Inu dan Shiba Inu adalah ras anjing Jepang terkenal di seluruh dunia.',
  },
  'うま': {
    japanese: 'うま',
    romaji: 'uma',
    indonesian: 'kuda',
    imageUrl: '/nihonme/img/18.png',
    sentences: [
      {
        japanese: 'うまがはしっています。',
        romaji: 'Uma ga hashitteimasu.',
        indonesian: 'Kuda itu sedang berlari.',
      },
      {
        japanese: 'わたしはうまにのることができます。',
        romaji: 'Watashi wa uma ni noru koto ga dekimasu.',
        indonesian: 'Saya bisa menunggang kuda.',
      },
      {
        japanese: 'うまはにんじんがすきです。',
        romaji: 'Uma wa ninjin ga suki desu.',
        indonesian: 'Kuda suka wortel.',
      },
    ],
    description: 'うま (uma) berarti \'kuda\'. Kuda telah menjadi penting dalam sejarah Jepang, terutama bagi samurai. Anda juga bisa melihatnya dalam festival tradisional dan pacuan kuda.',
  },
  'ひつじ': {
    japanese: 'ひつじ',
    romaji: 'hitsuji',
    indonesian: 'domba',
    imageUrl: '/nihonme/img/19.png',
    sentences: [
      {
        japanese: 'ひつじはしろくてふわふわです。',
        romaji: 'Hitsuji wa shirokute fuwafuwa desu.',
        indonesian: 'Domba itu putih dan berbulu halus.',
      },
      {
        japanese: 'ぼくじょうにたくさんのひつじがいます。',
        romaji: 'Bokujou ni takusan no hitsuji ga imasu.',
        indonesian: 'Ada banyak domba di peternakan.',
      },
      {
        japanese: 'ひつじはメーメーなきます。',
        romaji: 'Hitsuji wa mee mee nakimasu.',
        indonesian: 'Domba mengembik "mbe mbe".',
      },
    ],
    description: 'ひつじ (hitsuji) berarti \'domba\'. Meskipun secara historis tidak seumum hewan lain di Jepang, domba dikenal karena wolnya dan sering terlihat di kebun binatang mini atau peternakan di pedesaan.',
  },
  'うし': {
    japanese: 'うし',
    romaji: 'ushi',
    indonesian: 'sapi/ternak',
    imageUrl: '/nihonme/img/20.png',
    sentences: [
      {
        japanese: 'うしがくさをたべています。',
        romaji: 'Ushi ga kusa o tabeteimasu.',
        indonesian: 'Sapi itu sedang makan rumput.',
      },
      {
        japanese: 'このうしはおおきいです。',
        romaji: 'Kono ushi wa ookii desu.',
        indonesian: 'Sapi ini besar.',
      },
      {
        japanese: 'うしからぎゅうにゅうがとれます。',
        romaji: 'Ushi kara gyuunyuu ga toremasu.',
        indonesian: 'Kita bisa mendapatkan susu dari sapi.',
      },
    ],
    description: 'うし (ushi) berarti \'sapi\' atau \'ternak\'. Daging sapi Jepang terkenal seperti Wagyu berasal dari hewan ini. Mereka juga penting untuk produk susu.',
  },
  'ゾウ': {
    japanese: 'ゾウ',
    romaji: 'zou',
    indonesian: 'gajah',
    imageUrl: '/nihonme/img/21.png',
    sentences: [
      {
        japanese: 'どうぶつえんでゾウをみました。',
        romaji: 'Doubutsuen de zou o mimashita.',
        indonesian: 'Saya melihat gajah di kebun binatang.',
      },
      {
        japanese: 'ゾウのはなはながいです。',
        romaji: 'Zou no hana wa nagai desu.',
        indonesian: 'Belalai gajah itu panjang.',
      },
      {
        japanese: 'ゾウはかしこいどうぶつです。',
        romaji: 'Zou wa kashikoi doubutsu desu.',
        indonesian: 'Gajah adalah hewan yang cerdas.',
      },
    ],
    description: 'ゾウ (zou) adalah kata Jepang untuk \'gajah\'. Meskipun bukan asli Jepang, gajah adalah hewan populer yang ditemukan di kebun binatang dan sering ditampilkan dalam cerita anak-anak.',
  },
  'くま': {
    japanese: 'くま',
    romaji: 'kuma',
    indonesian: 'beruang',
    imageUrl: '/nihonme/img/22.png',
    sentences: [
      {
        japanese: 'もりのなかにくまがいます。',
        romaji: 'Mori no naka ni kuma ga imasu.',
        indonesian: 'Ada beruang di dalam hutan.',
      },
      {
        japanese: 'くまははちみつがすきです。',
        romaji: 'Kuma wa hachimitsu ga suki desu.',
        indonesian: 'Beruang suka madu.',
      },
      {
        japanese: 'あのくまのぬいぐるみはかわいいです。',
        romaji: 'Ano kuma no nuigurumi wa kawaii desu.',
        indonesian: 'Boneka beruang itu lucu.',
      },
    ],
    description: 'くま (kuma) berarti \'beruang\'. Jepang memiliki spesies beruang asli, seperti beruang coklat Ussuri di Hokkaido dan beruang hitam Asia. Hati-hati saat mendaki di habitat beruang!',
  },
  'シマウマ': {
    japanese: 'シマウマ',
    romaji: 'shimauma',
    indonesian: 'zebra',
    imageUrl: '/nihonme/img/23.png',
    sentences: [
      {
        japanese: 'シマウマはくろとしろです。',
        romaji: 'Shimauma wa kuro to shiro desu.',
        indonesian: 'Zebra berwarna hitam dan putih.',
      },
      {
        japanese: 'どうぶつえんでシマウマをみました。',
        romaji: 'Doubutsuen de shimauma o mimashita.',
        indonesian: 'Saya melihat zebra di kebun binatang.',
      },
      {
        japanese: 'シマウマはアフリカにすんでいます。',
        romaji: 'Shimauma wa afurika ni sundeimasu.',
        indonesian: 'Zebra tinggal di Afrika.',
      },
    ],
    description: 'シマウマ (shimauma) secara harfiah berarti \'kuda bergaris\' (しま shima = garis, ウマ uma = kuda). Ini adalah nama yang lugas dan deskriptif untuk hewan ini!',
  },
  'キリン': {
    japanese: 'キリン',
    romaji: 'kirin',
    indonesian: 'jerapah',
    imageUrl: '/nihonme/img/24.png',
    sentences: [
      {
        japanese: 'キリンはくびがながいです。',
        romaji: 'Kirin wa kubi ga nagai desu.',
        indonesian: 'Jerapah memiliki leher yang panjang.',
      },
      {
        japanese: 'キリンはたかいきのハをたべます。',
        romaji: 'Kirin wa takai ki no ha o tabemasu.',
        indonesian: 'Jerapah makan daun dari pohon tinggi.',
      },
      {
        japanese: 'あのキリンはおおきいですね。',
        romaji: 'Ano kirin wa ookii desu ne.',
        indonesian: 'Jerapah itu besar ya.',
      },
    ],
    description: 'キリン (kirin) adalah kata Jepang untuk \'jerapah\'. Menariknya, \'Kirin\' juga merupakan makhluk mitos dalam cerita rakyat Asia Timur, mirip unicorn, dan jerapah dinamai menurut namanya karena sifatnya yang lembut dan tinggi badannya yang mengesankan.',
  },
  'リュックサック': {
    japanese: 'リュックサック',
    romaji: 'ryukkusakku',
    indonesian: 'ransel',
    imageUrl: '/nihonme/img/25.png',
    sentences: [
      {
        japanese: 'リュックサックにおかしをいれます。',
        romaji: 'Ryukkusakku ni okashi o iremasu.',
        indonesian: 'Saya memasukkan makanan ringan ke dalam ransel.',
      },
      {
        japanese: 'このリュックサックはかるいです。',
        romaji: 'Kono ryukkusakku wa karui desu.',
        indonesian: 'Ransel ini ringan.',
      },
      {
        japanese: 'がっこうへリュックサックをもっていきます。',
        romaji: 'Gakkou e ryukkusakku o motte ikimasu.',
        indonesian: 'Saya membawa ransel ke sekolah.',
      },
    ],
    description: 'リュックサック (ryukkusakku) berasal dari kata Jerman \'Rucksack\'. Ini umum digunakan di Jepang untuk ransel, sering disingkat menjadi リュック (ryukku).',
  },
  'かさ': {
    japanese: 'かさ',
    romaji: 'kasa',
    indonesian: 'payung',
    imageUrl: '/nihonme/img/26.png',
    sentences: [
      {
        japanese: 'あめがふっているので、かさをさします。',
        romaji: 'Ame ga futteiru node, kasa o sashimasu.',
        indonesian: 'Karena hujan, saya akan menggunakan payung.',
      },
      {
        japanese: 'わたしはあおいかさをもっています。',
        romaji: 'Watashi wa aoi kasa o motteimasu.',
        indonesian: 'Saya punya payung biru.',
      },
      {
        japanese: 'でかけるまえに、かさをわすれないでください。',
        romaji: 'Dekakeru mae ni, kasa o wasurenaide kudasai.',
        indonesian: 'Tolong jangan lupa payungmu sebelum pergi keluar.',
      },
    ],
    description: 'かさ (kasa) berarti \'payung\' atau \'parasol\'. Jepang memiliki budaya payung yang kuat karena musim hujannya, dan Anda akan melihat banyak payung yang unik dan bergaya.',
  },
  'ハンドバッグ': {
    japanese: 'ハンドバッグ',
    romaji: 'handobaggu',
    indonesian: 'tas tangan',
    imageUrl: '/nihonme/img/27.png',
    sentences: [
      {
        japanese: 'あのひとはあたらしいハンドバッグをかいました。',
        romaji: 'Ano hito wa atarashii handobaggu o kaimashita.',
        indonesian: 'Orang itu membeli tas tangan baru.',
      },
      {
        japanese: 'ハンドバッグのなかにさいふがあります。',
        romaji: 'Handobaggu no naka ni saifu ga arimasu.',
        indonesian: 'Ada dompet di dalam tas tangan.',
      },
      {
        japanese: 'このハンドバッグはとてもおしゃれです。',
        romaji: 'Kono handobaggu wa totemo oshare desu.',
        indonesian: 'Tas tangan ini sangat modis.',
      },
    ],
    description: 'ハンドバッグ (handobaggu) adalah kata pinjaman langsung dari bahasa Inggris untuk \'tas tangan\'. Ini digunakan untuk merujuk pada berbagai gaya tas yang dibawa dengan tangan atau di lengan.',
  },
  'ネクタイ': {
    japanese: 'ネクタイ',
    romaji: 'nekutai',
    indonesian: 'dasi',
    imageUrl: '/nihonme/img/28.png',
    sentences: [
      {
        japanese: 'ちちはしごとにネクタイをします。',
        romaji: 'Chichi wa shigoto ni nekutai o shimasu.',
        indonesian: 'Ayah saya memakai dasi untuk bekerja.',
      },
      {
        japanese: 'あかいネクタイがすきです。',
        romaji: 'Akai nekutai ga suki desu.',
        indonesian: 'Saya suka dasi merah.',
      },
      {
        japanese: 'このネクタイはプレゼントです。',
        romaji: 'Kono nekutai wa purezento desu.',
        indonesian: 'Dasi ini adalah hadiah.',
      },
    ],
    description: 'ネクタイ (nekutai) berasal dari kata Inggris \'necktie\'. Ini adalah bagian penting dari pakaian bisnis untuk pria di Jepang, yang sering disebut \'salaryman\'.',
  },
  'スーツケース': {
    japanese: 'スーツケース',
    romaji: 'suutsukeesu',
    indonesian: 'koper',
    imageUrl: '/nihonme/img/29.png',
    sentences: [
      {
        japanese: 'りょこうのためにスーツケースをじゅんびします。',
        romaji: 'Ryokou no tame ni suutsukeesu o junbi shimasu.',
        indonesian: 'Saya akan menyiapkan koper untuk perjalanan.',
      },
      {
        japanese: 'スーツケースがおもいです。',
        romaji: 'Suutsukeesu ga omoi desu.',
        indonesian: 'Koper itu berat.',
      },
      {
        japanese: 'くうこうでスーツケースをあずけます。',
        romaji: 'Kuukou de suutsukeesu o azukemasu.',
        indonesian: 'Saya akan menitipkan koper saya di bandara.',
      },
    ],
    description: 'スーツケース (suutsukeesu) adalah kata pinjaman dari bahasa Inggris, \'suitcase\'. Ini sangat diperlukan untuk bepergian, dan di Jepang, Anda akan sering melihat orang menggunakannya, terutama di kereta ke dan dari bandara.',
  },
  'フリスビー': {
    japanese: 'フリスビー',
    romaji: 'furisubii',
    indonesian: 'frisbi',
    imageUrl: '/nihonme/img/30.png',
    sentences: [
      {
        japanese: 'こうえんでフリスビーをしましょう。',
        romaji: 'Kouen de furisubii o shimashou.',
        indonesian: 'Ayo bermain frisbi di taman.',
      },
      {
        japanese: 'いぬがフリスビーをとりました。',
        romaji: 'Inu ga furisubii o torimashita.',
        indonesian: 'Anjing itu menangkap frisbi.',
      },
      {
        japanese: 'フリスビーをとおくへなげます。',
        romaji: 'Furisubii o tooku e nagemasu.',
        indonesian: 'Saya melempar frisbi jauh.',
      },
    ],
    description: 'フリスビー (furisubii) berasal langsung dari nama merek \'Frisbee\'. Ini adalah barang populer untuk bermain di taman dan di pantai di Jepang.',
  },
  'スキー': {
    japanese: 'スキー',
    romaji: 'sukii',
    indonesian: 'ski (peralatan)',
    imageUrl: '/nihonme/img/31.png',
    sentences: [
      {
        japanese: 'わたしはあたらしいスキーがほしいです。',
        romaji: 'Watashi wa atarashii sukii ga hoshii desu.',
        indonesian: 'Saya ingin ski (peralatan) baru.',
      },
      {
        japanese: 'このスキーはながくてあおいです。',
        romaji: 'Kono sukii wa nagakute aoi desu.',
        indonesian: 'Ski (peralatan) ini panjang dan biru.',
      },
      {
        japanese: 'スキーをくるまにつみました。',
        romaji: 'Sukii o kuruma ni tsumimashita.',
        indonesian: 'Saya memuat ski (peralatan) ke dalam mobil.',
      },
    ],
    description: 'スキー (sukii) adalah \'ski\', peralatan yang digunakan untuk meluncur di atas salju. Menyewa スキー umum dilakukan di resor ski Jepang.',
  },
  'スノーボード': {
    japanese: 'スノーボード',
    romaji: 'sunooboodo',
    indonesian: 'papan salju',
    imageUrl: '/nihonme/img/32.png',
    sentences: [
      {
        japanese: 'あたらしいスノーボードをかいたいです。',
        romaji: 'Atarashii sunooboodo o kaitai desu.',
        indonesian: 'Saya ingin membeli papan salju baru.',
      },
      {
        japanese: 'あのひとのあたらしいスノーボードはかっこいいです。',
        romaji: 'Ano hito no atarashii sunooboodo wa kakkoii desu.',
        indonesian: 'Papan salju baru orang itu keren.',
      },
      {
        japanese: 'このスノーボードはデザインがすてきです。',
        romaji: 'Kono sunooboodo wa dezain ga suteki desu.',
        indonesian: 'Papan salju ini desainnya bagus.',
      },
    ],
    description: 'スノーボード (sunooboodo) adalah \'papan salju\', sebuah papan yang digunakan untuk meluncur di atas salju. Banyak anak muda di Jepang menikmati menggunakan スノーボード.',
  },
  'スポーツボール': {
    japanese: 'スポーツボール',
    romaji: 'supootsubooru',
    indonesian: 'bola olahraga',
    imageUrl: '/nihonme/img/33.png',
    sentences: [
      {
        japanese: 'こどもたちはスポーツボールであそんでいます。',
        romaji: 'Kodomotachi wa supootsubooru de asondeimasu.',
        indonesian: 'Anak-anak sedang bermain dengan bola olahraga.',
      },
      {
        japanese: 'このスポーツボールはサッカーようですか。',
        romaji: 'Kono supootsubooru wa sakkaa you desu ka.',
        indonesian: 'Apakah bola olahraga ini untuk sepak bola?',
      },
      {
        japanese: 'たくさんのしゅるいのスポーツボールがあります。',
        romaji: 'Takusan no shurui no supootsubooru ga arimasu.',
        indonesian: 'Ada banyak jenis bola olahraga.',
      },
    ],
    description: 'スポーツボール (supootsubooru) adalah gabungan dari \'sports\' (olahraga) dan \'ball\' (bola). Ini adalah istilah umum untuk bola yang digunakan dalam berbagai olahraga seperti sepak bola, bola basket, dll.',
  },
  'たこ': {
    japanese: 'たこ',
    romaji: 'tako',
    indonesian: 'layang-layang',
    imageUrl: '/nihonme/img/34.png',
    sentences: [
      {
        japanese: 'おしょうがつにたこをあげます。',
        romaji: 'Oshougatsu ni tako o agemasu.',
        indonesian: 'Kami menerbangkan layang-layang pada Hari Tahun Baru.',
      },
      {
        japanese: 'たこがたかくあがりました。',
        romaji: 'Tako ga takaku agarimashita.',
        indonesian: 'Layang-layang itu terbang tinggi.',
      },
      {
        japanese: 'かぜがつよいので、たこがよくとびます。',
        romaji: 'Kaze ga tsuyoi node, tako ga yoku tobimasu.',
        indonesian: 'Karena anginnya kencang, layang-layang terbang dengan baik.',
      },
    ],
    description: 'たこ (tako) bisa berarti \'layang-layang\' atau \'gurita\' dalam bahasa Jepang! Konteks biasanya memperjelasnya. Menerbangkan layang-layang adalah kegiatan tradisional Tahun Baru di Jepang.',
  },
  'やきゅうバット': {
    japanese: 'やきゅうバット',
    romaji: 'yakyuu batto',
    indonesian: 'tongkat bisbol',
    imageUrl: '/nihonme/img/35.png',
    sentences: [
      {
        japanese: 'あのひとはやきゅうバットをもっています。',
        romaji: 'Ano hito wa yakyuu batto o motteimasu.',
        indonesian: 'Orang itu memegang tongkat bisbol.',
      },
      {
        japanese: 'やきゅうバットでボールをうちます。',
        romaji: 'Yakyuu batto de booru o uchimasu.',
        indonesian: 'Saya memukul bola dengan tongkat bisbol.',
      },
      {
        japanese: 'このやきゅうバットはかるいです。',
        romaji: 'Kono yakyuu batto wa karui desu.',
        indonesian: 'Tongkat bisbol ini ringan.',
      },
    ],
    description: 'やきゅう (yakyuu) berarti \'bisbol\' dan バット (batto) berasal dari bahasa Inggris \'bat\'. Bisbol adalah olahraga yang sangat populer di Jepang!',
  },
  'やきゅうグローブ': {
    japanese: 'やきゅうグローブ',
    romaji: 'yakyuu guroobu',
    indonesian: 'sarung tangan bisbol',
    imageUrl: '/nihonme/img/36.png',
    sentences: [
      {
        japanese: 'あたらしいやきゅうグローブをかいました。',
        romaji: 'Atarashii yakyuu guroobu o kaimashita.',
        indonesian: 'Saya membeli sarung tangan bisbol baru.',
      },
      {
        japanese: 'やきゅうグローブでボールをとります。',
        romaji: 'Yakyuu guroobu de booru o torimasu.',
        indonesian: 'Saya menangkap bola dengan sarung tangan bisbol.',
      },
      {
        japanese: 'このやきゅうグローブはかわでできています。',
        romaji: 'Kono yakyuu guroobu wa kawa de dekiteimasu.',
        indonesian: 'Sarung tangan bisbol ini terbuat dari kulit.',
      },
    ],
    description: 'やきゅう (yakyuu) adalah \'bisbol\' dan グローブ (guroobu) berasal dari \'glove\'. Pemain bisbol Jepang dikenal dengan sarung tangan berkualitas tinggi mereka.',
  },
  'スケートボード': {
    japanese: 'スケートボード',
    romaji: 'sukeetoboodo',
    indonesian: 'papan luncur',
    imageUrl: '/nihonme/img/37.png',
    sentences: [
      {
        japanese: 'こうえんでスケートボードをします。',
        romaji: 'Kouen de sukeetoboodo o shimasu.',
        indonesian: 'Saya bermain papan luncur di taman.',
      },
      {
        japanese: 'スケートボードにのるのはたのしいです。',
        romaji: 'Sukeetoboodo ni noru no wa tanoshii desu.',
        indonesian: 'Naik papan luncur itu menyenangkan.',
      },
      {
        japanese: 'あのこはスケートボードがじょうずです。',
        romaji: 'Ano ko wa sukeetoboodo ga jouzu desu.',
        indonesian: 'Anak itu pandai bermain papan luncur.',
      },
    ],
    description: 'スケートボード (sukeetoboodo) berasal dari \'skateboard\'. Papan luncur menjadi semakin populer di Jepang, terutama setelah dimasukkan dalam Olimpiade.',
  },
  'サーフボード': {
    japanese: 'サーフボード',
    romaji: 'saafuboodo',
    indonesian: 'papan selancar',
    imageUrl: '/nihonme/img/38.png',
    sentences: [
      {
        japanese: 'なみにのるためにサーフボードをつかいます。',
        romaji: 'Nami ni noru tame ni saafuboodo o tsukaimasu.',
        indonesian: 'Saya menggunakan papan selancar untuk menaiki ombak.',
      },
      {
        japanese: 'あのひとのサーフボードはカラフルです。',
        romaji: 'Ano hito no saafuboodo wa karafuru desu.',
        indonesian: 'Papan selancar orang itu berwarna-warni.',
      },
      {
        japanese: 'あたらしいサーフボードがほしいです。',
        romaji: 'Atarashii saafuboodo ga hoshii desu.',
        indonesian: 'Saya ingin papan selancar baru.',
      },
    ],
    description: 'サーフボード (saafuboodo) berasal dari \'surfboard\'. Jepang memiliki banyak daerah pesisir di mana berselancar adalah kegiatan populer, terutama di tempat-tempat seperti Chiba dan Shonan.',
  },
  'テニスラケット': {
    japanese: 'テニスラケット',
    romaji: 'tenisu raketto',
    indonesian: 'raket tenis',
    imageUrl: '/nihonme/img/39.png',
    sentences: [
      {
        japanese: 'テニスをするとき、テニスラケットがいります。',
        romaji: 'Tenisu o suru toki, tenisu raketto ga irimasu.',
        indonesian: 'Anda memerlukan raket tenis saat bermain tenis.',
      },
      {
        japanese: 'このテニスラケットはとてもかるいです。',
        romaji: 'Kono tenisu raketto wa totemo karui desu.',
        indonesian: 'Raket tenis ini sangat ringan.',
      },
      {
        japanese: 'ともだちとテニスラケットをかって、テニスをしました。',
        romaji: 'Tomodachi to tenisu raketto o katte, tenisu o shimashita.',
        indonesian: 'Saya membeli raket tenis dengan teman saya dan bermain tenis.',
      },
    ],
    description: 'テニスラケット (tenisu raketto) berarti \'raket tenis\'. Tenis adalah olahraga populer di Jepang, baik untuk dimainkan maupun ditonton, dengan pemain tenis Jepang yang terkenal.',
  },
  'ボトル': {
    japanese: 'ボトル',
    romaji: 'botoru',
    indonesian: 'botol',
    imageUrl: '/nihonme/img/40.png',
    sentences: [
      {
        japanese: 'みずがボトルにはいっています。',
        romaji: 'Mizu ga botoru ni haitteimasu.',
        indonesian: 'Air ada di dalam botol.',
      },
      {
        japanese: 'このボトルはプラスチックでできています。',
        romaji: 'Kono botoru wa purasuchikku de dekiteimasu.',
        indonesian: 'Botol ini terbuat dari plastik.',
      },
      {
        japanese: 'あのひとはあたらしいボトルをかいました。',
        romaji: 'Ano hito wa atarashii botoru o kaimashita.',
        indonesian: 'Orang itu membeli botol baru.',
      },
    ],
    description: 'ボトル (botoru) berasal dari kata Inggris \'bottle\'. Anda akan sering melihat orang membawa ボトル (botoru) mereka sendiri yang dapat digunakan kembali di Jepang, yang disebut マイボトル (mai botoru - botol saya).',
  },
  'ワイングラス': {
    japanese: 'ワイングラス',
    romaji: 'wain gurasu',
    indonesian: 'gelas anggur',
    imageUrl: '/nihonme/img/41.png',
    sentences: [
      {
        japanese: 'ワイングラスでワインをのみます。',
        romaji: 'Wain gurasu de wain o nomimasu.',
        indonesian: 'Saya minum anggur dari gelas anggur.',
      },
      {
        japanese: 'このワイングラスはきれいです。',
        romaji: 'Kono wain gurasu wa kirei desu.',
        indonesian: 'Gelas anggur ini cantik.',
      },
      {
        japanese: 'レストランでワイングラスをみかけました。',
        romaji: 'Resutoran de wain gurasu o mikakemashita.',
        indonesian: 'Saya melihat gelas anggur di restoran.',
      },
    ],
    description: 'ワイングラス (wain gurasu) adalah gabungan dari \'wine\' (anggur) dan \'glass\' (gelas). Meskipun sake adalah minuman tradisional, anggur juga dinikmati di Jepang, dan Anda akan menemukan ワイングラス di banyak restoran.',
  },
  'カップ': {
    japanese: 'カップ',
    romaji: 'kappu',
    indonesian: 'cangkir',
    imageUrl: '/nihonme/img/42.png',
    sentences: [
      {
        japanese: 'コーヒーをカップにいれます。',
        romaji: 'Koohii o kappu ni iremasu.',
        indonesian: 'Saya menuang kopi ke dalam cangkir.',
      },
      {
        japanese: 'あついおちゃがカップにはいっています。',
        romaji: 'Atsui ocha ga kappu ni haitteimasu.',
        indonesian: 'Teh panas ada di dalam cangkir.',
      },
      {
        japanese: 'このカップはわたしのおきにいりです。',
        romaji: 'Kono kappu wa watashi no okiniiri desu.',
        indonesian: 'Cangkir ini favorit saya.',
      },
    ],
    description: 'カップ (kappu) berasal dari \'cup\'. Ini bisa merujuk pada cangkir teh, cangkir kopi, atau bahkan gelas ukur. Gelas kertas untuk minuman juga umum.',
  },
  'フォーク': {
    japanese: 'フォーク',
    romaji: 'fooku',
    indonesian: 'garpu',
    imageUrl: '/nihonme/img/43.png',
    sentences: [
      {
        japanese: 'フォークでスパゲッティをたべます。',
        romaji: 'Fooku de supagetti o tabemasu.',
        indonesian: 'Saya makan spageti dengan garpu.',
      },
      {
        japanese: 'テーブルのうえにナイフとフォークがあります。',
        romaji: 'Teeburu no ue ni naifu to fooku ga arimasu.',
        indonesian: 'Ada pisau dan garpu di atas meja.',
      },
      {
        japanese: 'このフォークはぎんいろです。',
        romaji: 'Kono fooku wa gin\'iro desu.',
        indonesian: 'Garpu ini berwarna perak.',
      },
    ],
    description: 'フォーク (fooku) berasal dari kata Inggris \'fork\'. Meskipun sumpit (はし - hashi) adalah tradisional, フォーク umum digunakan untuk makanan gaya Barat di Jepang.',
  },
  'ナイフ': {
    japanese: 'ナイフ',
    romaji: 'naifu',
    indonesian: 'pisau',
    imageUrl: '/nihonme/img/44.png',
    sentences: [
      {
        japanese: 'ナイフでパンをきります。',
        romaji: 'Naifu de pan o kirimasu.',
        indonesian: 'Saya memotong roti dengan pisau.',
      },
      {
        japanese: 'ステーキをたべるとき、ナイフをつかいます。',
        romaji: 'Suteeki o taberu toki, naifu o tsukaimasu.',
        indonesian: 'Saya menggunakan pisau saat makan steik.',
      },
      {
        japanese: 'このナイフはよくきれます。',
        romaji: 'Kono naifu wa yoku kiremasu.',
        indonesian: 'Pisau ini tajam.',
      },
    ],
    description: 'ナイフ (naifu) berasal dari \'knife\'. Ini digunakan untuk memotong makanan, terutama dalam masakan Barat. Masakan Jepang juga memiliki pisau khusus sendiri (ほうちょう - houchou).',
  },
  'スプーン': {
    japanese: 'スプーン',
    romaji: 'supuun',
    indonesian: 'sendok',
    imageUrl: '/nihonme/img/45.png',
    sentences: [
      {
        japanese: 'スプーンでスープをのみます。',
        romaji: 'Supuun de suupu o nomimasu.',
        indonesian: 'Saya minum sup dengan sendok.',
      },
      {
        japanese: 'カレーライスはスプーンでたべることがおおいです。',
        romaji: 'Kareeraisu wa supuun de taberu koto ga ooi desu.',
        indonesian: 'Nasi kari sering dimakan dengan sendok.',
      },
      {
        japanese: 'こどもはちいさいスプーンをつかいます。',
        romaji: 'Kodomo wa chiisai supuun o tsukaimasu.',
        indonesian: 'Anak-anak menggunakan sendok kecil.',
      },
    ],
    description: 'スプーン (supuun) berasal dari \'spoon\'. Ini digunakan untuk makan sup, kari, makanan penutup, dan juga untuk mengaduk minuman seperti kopi atau teh.',
  },
  'ボウル': {
    japanese: 'ボウル',
    romaji: 'booru',
    indonesian: 'mangkuk',
    imageUrl: '/nihonme/img/46.png',
    sentences: [
      {
        japanese: 'サラダをボウルにいれました。',
        romaji: 'Sarada o booru ni iremashita.',
        indonesian: 'Saya menaruh salad di mangkuk.',
      },
      {
        japanese: 'このボウルはスープにちょうどいいです。',
        romaji: 'Kono booru wa suupu ni choudo ii desu.',
        indonesian: 'Mangkuk ini pas untuk sup.',
      },
      {
        japanese: 'あさごはんにシリアルをボウルでたべます。',
        romaji: 'Asagohan ni shiriaru o booru de tabemasu.',
        indonesian: 'Saya makan sereal di mangkuk untuk sarapan.',
      },
    ],
    description: 'ボウル (booru) berasal dari \'bowl\'. Di Jepang, Anda akan menggunakan berbagai jenis mangkuk untuk nasi (おちゃわん - ochawan), sup (おわん - owan), atau salad dan mi.',
  },
  'バナナ': {
    japanese: 'バナナ',
    romaji: 'banana',
    indonesian: 'pisang',
    imageUrl: '/nihonme/img/47.png',
    sentences: [
      {
        japanese: 'バナナはきいろいです。',
        romaji: 'Banana wa kiiroi desu.',
        indonesian: 'Pisang berwarna kuning.',
      },
      {
        japanese: 'あさごはんにバナナをたべます。',
        romaji: 'Asagohan ni banana o tabemasu.',
        indonesian: 'Saya makan pisang untuk sarapan.',
      },
      {
        japanese: 'バナナはからだにいいです。',
        romaji: 'Banana wa karada ni ii desu.',
        indonesian: 'Pisang baik untuk tubuh.',
      },
    ],
    description: 'バナナ (banana) adalah buah populer di Jepang, sering dimakan sebagai camilan cepat atau untuk sarapan. Biasanya diimpor tetapi sangat umum di supermarket.',
  },
  'りんご': {
    japanese: 'りんご',
    romaji: 'ringo',
    indonesian: 'apel',
    imageUrl: '/nihonme/img/48.png',
    sentences: [
      {
        japanese: 'りんごはあかくておいしいです。',
        romaji: 'Ringo wa akakute oishii desu.',
        indonesian: 'Apel berwarna merah dan enak.',
      },
      {
        japanese: 'まいにちりんごをひとつたべます。',
        romaji: 'Mainichi ringo o hitotsu tabemasu.',
        indonesian: 'Saya makan satu apel setiap hari.',
      },
      {
        japanese: 'このりんごはとてもおおきいです。',
        romaji: 'Kono ringo wa totemo ookii desu.',
        indonesian: 'Apel ini sangat besar.',
      },
    ],
    description: 'りんご (ringo) berarti \'apel\'. Prefektur Aomori di Jepang terkenal dengan りんご yang lezat, dan ada banyak varietas yang tersedia.',
  },
  'サンドイッチ': {
    japanese: 'サンドイッチ',
    romaji: 'sandouicchi',
    indonesian: 'roti lapis',
    imageUrl: '/nihonme/img/49.png',
    sentences: [
      {
        japanese: 'ひるごはんにサンドイッチをたべます。',
        romaji: 'Hirugohan ni sandouicchi o tabemasu.',
        indonesian: 'Saya makan roti lapis untuk makan siang.',
      },
      {
        japanese: 'たまごサンドイッチがすきです。',
        romaji: 'Tamago sandouicchi ga suki desu.',
        indonesian: 'Saya suka roti lapis telur.',
      },
      {
        japanese: 'ピクニックにサンドイッチをもっていきましょう。',
        romaji: 'Pikunikku ni sandouicchi o motte ikimashou.',
        indonesian: 'Ayo bawa roti lapis ke piknik.',
      },
    ],
    description: 'サンドイッチ (sandouicchi) berasal dari \'sandwich\'. Toko serba ada Jepang (コンビニ - konbini) menjual berbagai macam サンドイッチ yang lezat dan seringkali unik!',
  },
  'オレンジ': {
    japanese: 'オレンジ',
    romaji: 'orenji',
    indonesian: 'jeruk',
    imageUrl: '/nihonme/img/50.png',
    sentences: [
      {
        japanese: 'オレンジはビタミンシーがおおいです。',
        romaji: 'Orenji wa bitamin shii ga ooi desu.',
        indonesian: 'Jeruk kaya akan Vitamin C.',
      },
      {
        japanese: 'オレンジジュースをのみたいです。',
        romaji: 'Orenji juusu o nomitai desu.',
        indonesian: 'Saya ingin minum jus jeruk.',
      },
      {
        japanese: 'このオレンジはとてもあまいです。',
        romaji: 'Kono orenji wa totemo amai desu.',
        indonesian: 'Jeruk ini sangat manis.',
      },
    ],
    description: 'オレンジ (orenji) berarti \'jeruk\' (buah). Ini adalah buah jeruk populer di Jepang, dan Anda juga dapat menemukan banyak minuman dan permen rasa jeruk.',
  },
  'ブロッコリー': {
    japanese: 'ブロッコリー',
    romaji: 'burokkorii',
    indonesian: 'brokoli',
    imageUrl: '/nihonme/img/51.png',
    sentences: [
      {
        japanese: 'ブロッコリーはみどりいろのやさいです。',
        romaji: 'Burokkorii wa midoriiro no yasai desu.',
        indonesian: 'Brokoli adalah sayuran berwarna hijau.',
      },
      {
        japanese: 'わたしはブロッコリーがすきです。',
        romaji: 'Watashi wa burokkorii ga suki desu.',
        indonesian: 'Saya suka brokoli.',
      },
      {
        japanese: 'ブロッコリーをゆでてたべます。',
        romaji: 'Burokkorii o yudete tabemasu.',
        indonesian: 'Saya merebus brokoli dan memakannya.',
      },
    ],
    description: 'ブロッコリー (burokkorii) adalah \'brokoli\'. Ini adalah sayuran umum dalam masakan Jepang, sering digunakan dalam salad, tumisan, atau sebagai lauk.',
  },
  'にんじん': {
    japanese: 'にんじん',
    romaji: 'ninjin',
    indonesian: 'wortel',
    imageUrl: '/nihonme/img/52.png',
    sentences: [
      {
        japanese: 'にんじんはオレンジいろです。',
        romaji: 'Ninjin wa orenji iro desu.',
        indonesian: 'Wortel berwarna oranye.',
      },
      {
        japanese: 'うさぎはにんじんがだいすきです。',
        romaji: 'Usagi wa ninjin ga daisuki desu.',
        indonesian: 'Kelinci sangat suka wortel.',
      },
      {
        japanese: 'スープににんじんをいれました。',
        romaji: 'Suupu ni ninjin o iremashita.',
        indonesian: 'Saya memasukkan wortel ke dalam sup.',
      },
    ],
    description: 'にんじん (ninjin) berarti \'wortel\'. Wortel digunakan dalam banyak hidangan Jepang, seperti nasi kari (カレーライス) dan nikujaga (にくじゃが - semur daging dan kentang).',
  },
  'ホットドッグ': {
    japanese: 'ホットドッグ',
    romaji: 'hottodoggu',
    indonesian: 'hot dog',
    imageUrl: '/nihonme/img/53.png',
    sentences: [
      {
        japanese: 'ホットドッグにケチャップをかけます。',
        romaji: 'Hottodoggu ni kechappu o kakemasu.',
        indonesian: 'Saya memberi saus tomat pada hot dog saya.',
      },
      {
        japanese: 'やきゅうのしあいでホットドッグをたべました。',
        romaji: 'Yakyuu no shiai de hottodoggu o tabemashita.',
        indonesian: 'Saya makan hot dog di pertandingan bisbol.',
      },
      {
        japanese: 'このホットドッグはおいしそうです。',
        romaji: 'Kono hottodoggu wa oishisou desu.',
        indonesian: 'Hot dog ini kelihatannya enak.',
      },
    ],
    description: 'ホットドッグ (hottodoggu) berasal dari \'hot dog\'. Anda dapat menemukannya di toko serba ada, festival, dan beberapa tempat makanan cepat saji di Jepang.',
  },
  'ピザ': {
    japanese: 'ピザ',
    romaji: 'piza',
    indonesian: 'pizza',
    imageUrl: '/nihonme/img/54.png',
    sentences: [
      {
        japanese: 'ともだちとピザをたべます。',
        romaji: 'Tomodachi to piza o tabemasu.',
        indonesian: 'Saya makan pizza dengan teman-teman.',
      },
      {
        japanese: 'おおきいピザをちゅうもんしました。',
        romaji: 'Ookii piza o chuumon shimashita.',
        indonesian: 'Saya memesan pizza besar.',
      },
      {
        japanese: 'このピザにはチーズがたくさんはいっています。',
        romaji: 'Kono piza ni wa chiizu ga takusan haitteimasu.',
        indonesian: 'Pizza ini banyak kejunya.',
      },
    ],
    description: 'ピザ (piza) adalah \'pizza\'. Ini sangat populer di Jepang, dengan banyak rantai pizza Jepang yang menawarkan topping unik seperti makanan laut atau ayam teriyaki.',
  },
  'ドーナツ': {
    japanese: 'ドーナツ',
    romaji: 'doonatsu',
    indonesian: 'donat',
    imageUrl: '/nihonme/img/55.png',
    sentences: [
      {
        japanese: 'あまいドーナツがすきです。',
        romaji: 'Amai doonatsu ga suki desu.',
        indonesian: 'Saya suka donat manis.',
      },
      {
        japanese: 'コーヒーといっしょにドーナツをたべます。',
        romaji: 'Koohii to issho ni doonatsu o tabemasu.',
        indonesian: 'Saya makan donat dengan kopi.',
      },
      {
        japanese: 'いろいろなドーナツがありますね。',
        romaji: 'Iroiro na doonatsu ga arimasu ne.',
        indonesian: 'Ada berbagai macam donat ya.',
      },
    ],
    description: 'ドーナツ (doonatsu) berasal dari \'donut\'. Ada banyak toko donat populer di Jepang yang menawarkan berbagai macam rasa dan desain lucu.',
  },
  'ケーキ': {
    japanese: 'ケーキ',
    romaji: 'keeki',
    indonesian: 'kue',
    imageUrl: '/nihonme/img/56.png',
    sentences: [
      {
        japanese: 'たんじょうび にケーキをたべます。',
        romaji: 'Tanjoubi ni keeki o tabemasu.',
        indonesian: 'Saya makan kue di hari ulang tahun saya.',
      },
      {
        japanese: 'このケーキはとてもおいしいです。',
        romaji: 'Kono keeki wa totemo oishii desu.',
        indonesian: 'Kue ini sangat enak.',
      },
      {
        japanese: 'チョコレートケーキをつくりました。',
        romaji: 'Chokoreeto keeki o tsukurimashita.',
        indonesian: 'Saya membuat kue cokelat.',
      },
    ],
    description: 'ケーキ (keeki) adalah \'kue\'. Kue Jepang terkenal ringan, lembut, dan dihias dengan indah, terutama kue tart stroberi.',
  },
  'いす': {
    japanese: 'いす',
    romaji: 'isu',
    indonesian: 'kursi',
    imageUrl: '/nihonme/img/57.png',
    sentences: [
      {
        japanese: 'へやにいすがあります。',
        romaji: 'Heya ni isu ga arimasu.',
        indonesian: 'Ada kursi di kamar.',
      },
      {
        japanese: 'このいすにすわってください。',
        romaji: 'Kono isu ni suwatte kudasai.',
        indonesian: 'Silakan duduk di kursi ini.',
      },
      {
        japanese: 'いすはきでできています。',
        romaji: 'Isu wa ki de dekiteimasu.',
        indonesian: 'Kursi itu terbuat dari kayu.',
      },
    ],
    description: 'いす (isu) berarti \'kursi\'. Di rumah tradisional Jepang, orang sering duduk di atas tikar tatami, tetapi いす umum di rumah modern, kantor, dan restoran.',
  },
  'ソファー': {
    japanese: 'ソファー',
    romaji: 'sofaa',
    indonesian: 'sofa',
    imageUrl: '/nihonme/img/58.png',
    sentences: [
      {
        japanese: 'リビングにソファーがあります。',
        romaji: 'Ribingu ni sofaa ga arimasu.',
        indonesian: 'Ada sofa di ruang tamu.',
      },
      {
        japanese: 'このソファーはとてもふかふかです。',
        romaji: 'Kono sofaa wa totemo fukafuka desu.',
        indonesian: 'Sofa ini sangat empuk.',
      },
      {
        japanese: 'ソファーでほんをよみます。',
        romaji: 'Sofaa de hon o yomimasu.',
        indonesian: 'Saya membaca buku di sofa.',
      },
    ],
    description: 'ソファー (sofaa) berasal dari \'sofa\'. Ini adalah perabot umum di ruang tamu Jepang untuk bersantai dan menonton TV.',
  },
  'うえきばち': {
    japanese: 'うえきばち',
    romaji: 'uekibachi',
    indonesian: 'tanaman pot',
    imageUrl: '/nihonme/img/59.png',
    sentences: [
      {
        japanese: 'このうえきばちにはきれいなはながあります。',
        romaji: 'Kono uekibachi ni wa kirei na hana ga arimasu.',
        indonesian: 'Tanaman pot ini memiliki bunga yang indah.',
      },
      {
        japanese: 'まどべにちいさなうえきばちをおきました。',
        romaji: 'Madobe ni chiisana uekibachi o okimashita.',
        indonesian: 'Saya meletakkan tanaman pot kecil di dekat jendela.',
      },
      {
        japanese: 'みせのまえにたくさんのうえきばちがならんでいます。',
        romaji: 'Mise no mae ni takusan no uekibachi ga narandeimasu.',
        indonesian: 'Banyak tanaman pot berjejer di depan toko.',
      },
    ],
    description: 'うえきばち (uekibachi) merujuk pada \'tanaman pot\' (植木 ueki = tanaman, 鉢 hachi = pot). Umumnya terlihat berbagai うえきばち menambah kehijauan di rumah dan jalanan di Jepang.',
  },
  'ベッド': {
    japanese: 'ベッド',
    romaji: 'beddo',
    indonesian: 'tempat tidur',
    imageUrl: '/nihonme/img/60.png',
    sentences: [
      {
        japanese: 'わたしはベッドでねます。',
        romaji: 'Watashi wa beddo de nemasu.',
        indonesian: 'Saya tidur di tempat tidur.',
      },
      {
        japanese: 'このベッドはおおきいです。',
        romaji: 'Kono beddo wa ookii desu.',
        indonesian: 'Tempat tidur ini besar.',
      },
      {
        japanese: 'まいあさベッドをきれいにします。',
        romaji: 'Maiasa beddo o kirei ni shimasu.',
        indonesian: 'Saya merapikan tempat tidur setiap pagi.',
      },
    ],
    description: 'ベッド (beddo) berasal dari \'bed\'. Meskipun futon (ふとん) yang diletakkan di atas tikar tatami adalah tradisional, ベッド gaya Barat sangat umum di rumah modern Jepang.',
  },
  'しょくたく': {
    japanese: 'しょくたく',
    romaji: 'shokutaku',
    indonesian: 'meja makan',
    imageUrl: '/nihonme/img/61.png',
    sentences: [
      {
        japanese: 'しょくたくのうえにりょうりがあります。',
        romaji: 'Shokutaku no ue ni ryouri ga arimasu.',
        indonesian: 'Ada makanan di atas meja makan.',
      },
      {
        japanese: 'みんなでしょくたくをかこみます。',
        romaji: 'Minna de shokutaku o kakomimasu.',
        indonesian: 'Semua orang berkumpul di sekitar meja makan.',
      },
      {
        japanese: 'このしょくたくはもくせいです。',
        romaji: 'Kono shokutaku wa mokusei desu.',
        indonesian: 'Meja makan ini terbuat dari kayu.',
      },
    ],
    description: 'しょくたく (shokutaku) berarti \'meja makan\'. Keluarga berkumpul di sekitar しょくたく untuk makan bersama.',
  },
  'トイレ': {
    japanese: 'トイレ',
    romaji: 'toire',
    indonesian: 'toilet',
    imageUrl: '/nihonme/img/62.png',
    sentences: [
      {
        japanese: 'トイレはどこですか。',
        romaji: 'Toire wa doko desu ka.',
        indonesian: 'Di mana toiletnya?',
      },
      {
        japanese: 'このホテルのトイレはきれいです。',
        romaji: 'Kono hoteru no toire wa kirei desu.',
        indonesian: 'Toilet di hotel ini bersih.',
      },
      {
        japanese: 'トイレのあと、てをあらいます。',
        romaji: 'Toire no ato, te o araimasu.',
        indonesian: 'Saya mencuci tangan setelah menggunakan toilet.',
      },
    ],
    description: 'トイレ (toire) berasal dari \'toilet\'. トイレ Jepang terkenal di seluruh dunia karena sangat berteknologi tinggi, dengan fitur seperti kursi berpemanas dan bidet internal!',
  },
  'テレビ': {
    japanese: 'テレビ',
    romaji: 'terebi',
    indonesian: 'TV',
    imageUrl: '/nihonme/img/63.png',
    sentences: [
      {
        japanese: 'リビングでテレビをみます。',
        romaji: 'Ribingu de terebi o mimasu.',
        indonesian: 'Saya menonton TV di ruang tamu.',
      },
      {
        japanese: 'あたらしいテレビをかいました。',
        romaji: 'Atarashii terebi o kaimashita.',
        indonesian: 'Saya membeli TV baru.',
      },
      {
        japanese: 'すきなテレビばんぐみがあります。',
        romaji: 'Suki na terebi bangumi ga arimasu.',
        indonesian: 'Saya punya acara TV favorit.',
      },
    ],
    description: 'テレビ (terebi) adalah singkatan dari テレビジョン (terebijon - televisi). Menonton テレビ adalah hiburan umum di Jepang, dengan banyak acara TV Jepang yang unik.',
  },
  'ノートパソコン': {
    japanese: 'ノートパソコン',
    romaji: 'nooto pasokon',
    indonesian: 'komputer laptop',
    imageUrl: '/nihonme/img/64.png',
    sentences: [
      {
        japanese: 'ノートパソコンでしごとをします。',
        romaji: 'Nooto pasokon de shigoto o shimasu.',
        indonesian: 'Saya bekerja dengan komputer laptop saya.',
      },
      {
        japanese: 'このノートパソコンはかるくてべんりです。',
        romaji: 'Kono nooto pasokon wa karukute benri desu.',
        indonesian: 'Komputer laptop ini ringan dan praktis.',
      },
      {
        japanese: 'カフェでノートパソコンをつかっています。',
        romaji: 'Kafe de nooto pasokon o tsukatteimasu.',
        indonesian: 'Saya sedang menggunakan komputer laptop saya di kafe.',
      },
    ],
    description: 'ノートパソコン (nooto pasokon) berarti \'komputer laptop\', secara harfiah \'komputer pribadi buku catatan\'. Sering disingkat menjadi ノートPC (nooto pii shii).',
  },
  'マウス': {
    japanese: 'マウス',
    romaji: 'mausu',
    indonesian: 'mouse (komputer)',
    imageUrl: '/nihonme/img/65.png',
    sentences: [
      {
        japanese: 'マウスでクリックします。',
        romaji: 'Mausu de kurikku shimasu.',
        indonesian: 'Saya mengklik dengan mouse.',
      },
      {
        japanese: 'このマウスはワイヤレスです。',
        romaji: 'Kono mausu wa waiyaresu desu.',
        indonesian: 'Mouse ini nirkabel.',
      },
      {
        japanese: 'あたらしいマウスがほしいです。',
        romaji: 'Atarashii mausu ga hoshii desu.',
        indonesian: 'Saya ingin mouse baru.',
      },
    ],
    description: 'マウス (mausu) berasal dari \'mouse\', merujuk pada mouse komputer. Ini adalah aksesori penting bagi sebagian besar pengguna desktop dan banyak pengguna laptop.',
  },
  'リモコン': {
    japanese: 'リモコン',
    romaji: 'rimokon',
    indonesian: 'remote control',
    imageUrl: '/nihonme/img/66.png',
    sentences: [
      {
        japanese: 'テレビのリモコンはどこですか。',
        romaji: 'Terebi no rimokon wa doko desu ka.',
        indonesian: 'Di mana remote control TV?',
      },
      {
        japanese: 'リモコンでチャンネルをかえます。',
        romaji: 'Rimokon de channeru o kaemasu.',
        indonesian: 'Saya mengganti saluran dengan remote control.',
      },
      {
        japanese: 'このリモコンはつかいやすいです。',
        romaji: 'Kono rimokon wa tsukaiyasui desu.',
        indonesian: 'Remote control ini mudah digunakan.',
      },
    ],
    description: 'リモコン (rimokon) adalah singkatan dari \'remote controller\'. Ini digunakan untuk TV, pendingin udara (エアコン - eakon), dan banyak perangkat elektronik lainnya di Jepang.',
  },
  'キーボード': {
    japanese: 'キーボード',
    romaji: 'kiiboodo',
    indonesian: 'keyboard (komputer)',
    imageUrl: '/nihonme/img/67.png',
    sentences: [
      {
        japanese: 'キーボードでタイプします。',
        romaji: 'Kiiboodo de taipu shimasu.',
        indonesian: 'Saya mengetik di keyboard.',
      },
      {
        japanese: 'このキーボードはあたらしいです。',
        romaji: 'Kono kiiboodo wa atarashii desu.',
        indonesian: 'Keyboard ini baru.',
      },
      {
        japanese: 'ノートパソコンにキーボードがついています。',
        romaji: 'Nooto pasokon ni kiiboodo ga tsuiteimasu.',
        indonesian: 'Laptop itu memiliki keyboard terpasang.',
      },
    ],
    description: 'キーボード (kiiboodo) berasal dari \'keyboard\'. Keyboard Jepang memiliki tombol ekstra untuk beralih antara huruf Romawi (ローマ字 - roomaji) dan karakter Jepang (かな - kana).',
  },
  'けいたいでんわ': {
    japanese: 'けいたいでんわ',
    romaji: 'keitai denwa',
    indonesian: 'telepon seluler',
    imageUrl: '/nihonme/img/68.png',
    sentences: [
      {
        japanese: 'けいたいでんわでともだちにはなします。',
        romaji: 'Keitai denwa de tomodachi ni hanashimasu.',
        indonesian: 'Saya berbicara dengan teman saya di telepon seluler.',
      },
      {
        japanese: 'あたらしいけいたいでんわをかいました。',
        romaji: 'Atarashii keitai denwa o kaimashita.',
        indonesian: 'Saya membeli telepon seluler baru.',
      },
      {
        japanese: 'けいたいでんわでしゃしんをとります。',
        romaji: 'Keitai denwa de shashin o torimasu.',
        indonesian: 'Saya mengambil foto dengan telepon seluler saya.',
      },
    ],
    description: 'けいたいでんわ (keitai denwa) berarti \'telepon seluler\', sering disingkat menjadi けいたい (keitai). Jepang dikenal dengan teknologi dan budaya telepon selulernya yang canggih.',
  },
  'でんしレンジ': {
    japanese: 'でんしレンジ',
    romaji: 'denshi renji',
    indonesian: 'oven microwave',
    imageUrl: '/nihonme/img/69.png',
    sentences: [
      {
        japanese: 'たべものをでんしレンジであたためます。',
        romaji: 'Tabemono o denshi renji de atatamemasu.',
        indonesian: 'Saya memanaskan makanan di oven microwave.',
      },
      {
        japanese: 'このりょうりはでんしレンジでつくれます。',
        romaji: 'Kono ryouri wa denshi renji de tsukuremasu.',
        indonesian: 'Hidangan ini bisa dibuat di oven microwave.',
      },
      {
        japanese: 'でんしレンジはとてもべんりです。',
        romaji: 'Denshi renji wa totemo benri desu.',
        indonesian: 'Oven microwave sangat praktis.',
      },
    ],
    description: 'でんしレンジ (denshi renji) berarti \'oven microwave\' (電子 denshi = elektron, レンジ renji = rentang/oven). Ini adalah peralatan yang sangat umum dan penting di dapur Jepang untuk memanaskan makanan dengan cepat.',
  },
  'オーブン': {
    japanese: 'オーブン',
    romaji: 'oobun',
    indonesian: 'oven',
    imageUrl: '/nihonme/img/70.png',
    sentences: [
      {
        japanese: 'オーブンでケーキをやきます。',
        romaji: 'Oobun de keeki o yakimasu.',
        indonesian: 'Saya memanggang kue di oven.',
      },
      {
        japanese: 'このオーブンはあたらしいです。',
        romaji: 'Kono oobun wa atarashii desu.',
        indonesian: 'Oven ini baru.',
      },
      {
        japanese: 'ピザをオーブンにいれます。',
        romaji: 'Piza o oobun ni iremasu.',
        indonesian: 'Saya memasukkan pizza ke dalam oven.',
      },
    ],
    description: 'オーブン (oobun) berasal dari \'oven\'. Meskipun tidak se-standar oven microwave di semua dapur Jepang, banyak dapur modern memiliki fungsi オーブン, seringkali digabungkan dengan microwave (オーブンレンジ - oobun renji).',
  },
  'トースター': {
    japanese: 'トースター',
    romaji: 'toosutaa',
    indonesian: 'pemanggang roti',
    imageUrl: '/nihonme/img/71.png',
    sentences: [
      {
        japanese: 'トースターでパンをやきます。',
        romaji: 'Toosutaa de pan o yakimasu.',
        indonesian: 'Saya memanggang roti di pemanggang roti.',
      },
      {
        japanese: 'まいあさトースターをつかいます。',
        romaji: 'Maiasa toosutaa o tsukaimasu.',
        indonesian: 'Saya menggunakan pemanggang roti setiap pagi.',
      },
      {
        japanese: 'このトースターはちいさいです。',
        romaji: 'Kono toosutaa wa chiisai desu.',
        indonesian: 'Pemanggang roti ini kecil.',
      },
    ],
    description: 'トースター (toosutaa) berasal dari \'toaster\', khusus untuk memanggang roti. Banyak orang Jepang menikmati roti panggang tebal (しょくパン - shokupan) untuk sarapan.',
  },
  'ながし': {
    japanese: 'ながし',
    romaji: 'nagashi',
    indonesian: 'bak cuci piring (dapur)',
    imageUrl: '/nihonme/img/72.png',
    sentences: [
      {
        japanese: 'しょっきをながしであらいます。',
        romaji: 'Shokki o nagashi de araimasu.',
        indonesian: 'Saya mencuci piring di bak cuci piring.',
      },
      {
        japanese: 'ながしをきれいにしてください。',
        romaji: 'Nagashi o kirei ni shite kudasai.',
        indonesian: 'Tolong bersihkan bak cuci piring.',
      },
      {
        japanese: 'ながしでてをあらいます。',
        romaji: 'Nagashi de te o araimasu.',
        indonesian: 'Saya mencuci tangan di bak cuci piring.',
      },
    ],
    description: 'ながし (nagashi) atau ながしだい (nagashidai) merujuk pada bak cuci piring dapur. Di sinilah Anda mencuci piring (さらあらい - saraarai) dan menyiapkan makanan.',
  },
  'れいぞうこ': {
    japanese: 'れいぞうこ',
    romaji: 'reizouko',
    indonesian: 'kulkas',
    imageUrl: '/nihonme/img/73.png',
    sentences: [
      {
        japanese: 'たべものをれいぞうこにいれます。',
        romaji: 'Tabemono o reizouko ni iremasu.',
        indonesian: 'Saya memasukkan makanan ke dalam kulkas.',
      },
      {
        japanese: 'れいぞうこのなかにジュースがあります。',
        romaji: 'Reizouko no naka ni juusu ga arimasu.',
        indonesian: 'Ada jus di dalam kulkas.',
      },
      {
        japanese: 'このれいぞうこはおおきいです。',
        romaji: 'Kono reizouko wa ookii desu.',
        indonesian: 'Kulkas ini besar.',
      },
    ],
    description: 'れいぞうこ (reizouko) berarti \'kulkas\'. Ini adalah peralatan penting di setiap rumah untuk menjaga makanan tetap segar. Kulkas Jepang sering memiliki kompartemen khusus.',
  },
  'ほん': {
    japanese: 'ほん',
    romaji: 'hon',
    indonesian: 'buku',
    imageUrl: '/nihonme/img/74.png',
    sentences: [
      {
        japanese: 'わたしはほんをよむのがすきです。',
        romaji: 'Watashi wa hon o yomu no ga suki desu.',
        indonesian: 'Saya suka membaca buku.',
      },
      {
        japanese: 'としょかんでほんをかります。',
        romaji: 'Toshokan de hon o karimasu.',
        indonesian: 'Saya meminjam buku dari perpustakaan.',
      },
      {
        japanese: 'このほんはおもしろいです。',
        romaji: 'Kono hon wa omoshiroi desu.',
        indonesian: 'Buku ini menarik.',
      },
    ],
    description: 'ほん (hon) berarti \'buku\'. Jepang memiliki tradisi sastra yang kaya, dan toko buku (本屋 - honya) umum ditemukan. Manga (まんが) adalah jenis ほん yang sangat populer.',
  },
  'とけい': {
    japanese: 'とけい',
    romaji: 'tokei',
    indonesian: 'jam',
    imageUrl: '/nihonme/img/75.png',
    sentences: [
      {
        japanese: 'へやにかべかけのとけいがあります。',
        romaji: 'Heya ni kabekake no tokei ga arimasu.',
        indonesian: 'Ada jam dinding di kamar.',
      },
      {
        japanese: 'あのふるいとけいはまだうごいています。',
        romaji: 'Ano furui tokei wa mada ugoiteimasu.',
        indonesian: 'Jam tua itu masih berfungsi.',
      },
      {
        japanese: 'デジタルとけいよりアナログとけいがすきです。',
        romaji: 'Dejitaru tokei yori anarogu tokei ga suki desu.',
        indonesian: 'Saya lebih suka jam analog daripada jam digital.',
      },
    ],
    description: 'とけい (tokei) berarti \'jam\'. Ini adalah alat yang digunakan untuk mengetahui waktu, ditemukan di dinding (かべどけい - kabedokei) atau meja di rumah dan gedung.',
  },
  'かびん': {
    japanese: 'かびん',
    romaji: 'kabin',
    indonesian: 'vas',
    imageUrl: '/nihonme/img/76.png',
    sentences: [
      {
        japanese: 'かびんにはなをいけます。',
        romaji: 'Kabin ni hana o ikemasu.',
        indonesian: 'Saya merangkai bunga di vas.',
      },
      {
        japanese: 'このかびんはとてもきれいです。',
        romaji: 'Kono kabin wa totemo kirei desu.',
        indonesian: 'Vas ini sangat indah.',
      },
      {
        japanese: 'テーブルのうえにかびんをおきました。',
        romaji: 'Teeburu no ue ni kabin o okimashita.',
        indonesian: 'Saya meletakkan vas di atas meja.',
      },
    ],
    description: 'かびん (kabin) berarti \'vas\'. Ini digunakan untuk memajang bunga (花 - hana). Merangkai bunga, atau 生け花 (ikebana), adalah seni tradisional Jepang.',
  },
  'はさみ': {
    japanese: 'はさみ',
    romaji: 'hasami',
    indonesian: 'gunting',
    imageUrl: '/nihonme/img/77.png',
    sentences: [
      {
        japanese: 'かみをはさみできります。',
        romaji: 'Kami o hasami de kirimasu.',
        indonesian: 'Saya memotong kertas dengan gunting.',
      },
      {
        japanese: 'このはさみはよくきれますか。',
        romaji: 'Kono hasami wa yoku kiremasu ka.',
        indonesian: 'Apakah gunting ini tajam?',
      },
      {
        japanese: 'こどもはあんぜんなはさみをつかいます。',
        romaji: 'Kodomo wa anzen na hasami o tsukaimasu.',
        indonesian: 'Anak-anak menggunakan gunting yang aman.',
      },
    ],
    description: 'はさみ (hasami) berarti \'gunting\'. Digunakan untuk memotong kertas, kain, dan banyak hal lainnya. Ada berbagai jenis untuk tujuan yang berbeda.',
  },
  'テディベア': {
    japanese: 'テディベア',
    romaji: 'tedi bea',
    indonesian: 'boneka beruang',
    imageUrl: '/nihonme/img/78.png',
    sentences: [
      {
        japanese: 'わたしはちいさいとき、テディベアをもっていました。',
        romaji: 'Watashi wa chiisai toki, tedi bea o motteimashita.',
        indonesian: 'Saya punya boneka beruang ketika saya kecil.',
      },
      {
        japanese: 'このテディベアはとてもかわいいです。',
        romaji: 'Kono tedi bea wa totemo kawaii desu.',
        indonesian: 'Boneka beruang ini sangat lucu.',
      },
      {
        japanese: 'ともだちにテディベアをプレゼントしました。',
        romaji: 'Tomodachi ni tedi bea o purezento shimashita.',
        indonesian: 'Saya memberi teman saya hadiah boneka beruang.',
      },
    ],
    description: 'テディベア (tedi bea) berasal dari \'teddy bear\'. Boneka beruang ini adalah mainan dan barang koleksi populer di Jepang, sama seperti di banyak negara lain.',
  },
  'ヘアドライヤー': {
    japanese: 'ヘアドライヤー',
    romaji: 'hea doraiyaa',
    indonesian: 'pengering rambut',
    imageUrl: '/nihonme/img/79.png',
    sentences: [
      {
        japanese: 'おふろのあと、ヘアドライヤーをつかいます。',
        romaji: 'Ofuro no ato, hea doraiyaa o tsukaimasu.',
        indonesian: 'Saya menggunakan pengering rambut setelah mandi.',
      },
      {
        japanese: 'このヘアドライヤーはあたらしいモデルです。',
        romaji: 'Kono hea doraiyaa wa atarashii moderu desu.',
        indonesian: 'Pengering rambut ini model baru.',
      },
      {
        japanese: 'ヘアドライヤーでかみをかわかします。',
        romaji: 'Hea doraiyaa de kami o kawakashimasu.',
        indonesian: 'Saya mengeringkan rambut dengan pengering rambut.',
      },
    ],
    description: 'ヘアドライヤー (hea doraiyaa) berasal dari \'hair dryer\'. Ini adalah peralatan umum yang digunakan setelah mandi untuk mengeringkan rambut.',
  },
  'はブラシ': {
    japanese: 'はブラシ',
    romaji: 'ha burashi',
    indonesian: 'sikat gigi',
    imageUrl: '/nihonme/img/80.png',
    sentences: [
      {
        japanese: 'まいにち、はブラシではをみがきます。',
        romaji: 'Mainichi, ha burashi de ha o migakimasu.',
        indonesian: 'Setiap hari, saya menggosok gigi dengan sikat gigi.',
      },
      {
        japanese: 'あたらしいはブラシをかいました。',
        romaji: 'Atarashii ha burashi o kaimashita.',
        indonesian: 'Saya membeli sikat gigi baru.',
      },
      {
        japanese: 'このはブラシはやわらかいです。',
        romaji: 'Kono ha burashi wa yawarakai desu.',
        indonesian: 'Sikat gigi ini lembut.',
      },
    ],
    description: 'はブラシ (ha burashi), sering ditulis 歯ブラシ, berarti \'sikat gigi\'. Kebersihan mulut itu penting, dan toko obat di Jepang menawarkan berbagai macam はブラシ.',
  },

  // Add more objects as needed
}; 
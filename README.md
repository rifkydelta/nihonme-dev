# NihonMe
## 🌐 Demo Langsung

Lihat demo langsung aplikasi ini di [NihonMe Demo App](https://rifkydelta.github.io/nihonme/)!

## 📱 Tentang
NihonMe adalah aplikasi pembelajaran bahasa Jepang modern yang menggunakan teknologi AI untuk membantu pengguna mempelajari kosakata bahasa Jepang melalui deteksi benda. Aplikasi ini dirancang untuk membuat pembelajaran bahasa Jepang lebih interaktif dan menyenangkan.

## 🚀 Fitur Pengguna
- 🎯 Kuis Hiragana dan Katakana untuk latihan membaca
- 📚 Artikel pembelajaran bahasa Jepang
- 🎓 Fakta-fakta menarik tentang Jepang
- 🔊 Fitur text-to-speech untuk pelafalan bahasa Jepang
- 📱 Tampilan responsif untuk perangkat mobile dan desktop
- 🔍 Deteksi benda dan terjemahan ke bahasa Jepang

## 🛠️ Teknologi yang Digunakan

### Frontend
- ⚛️ **Framework:** React 18
- 📘 **Bahasa:** TypeScript
- 🛠️ **Build Tool:** Vite
- 🎨 **Styling:** Tailwind CSS
- 🖼️ **Ikon:** Lucide React
- 🛣️ **Routing:** React Router DOM

### AI/ML
- 🤖 **Framework:** TensorFlow.js
- 🔍 **Model:** COCO-SSD
- 🎯 **Fitur AI:**
  - Deteksi objek real-time
  - Bounding box detection

### Performa & Optimasi
- ⚡ **Build Time:** Vite untuk HMR cepat
- 📦 **Bundle Size:** Optimasi dengan code splitting
- 🎯 **Lazy Loading:** Komponen dan gambar
- 🔄 **Caching:** Service Worker untuk offline support

## 📦 Instalasi

1. Clone repositori:
```bash
git clone https://github.com/rifkydelta/nihonme.git
cd nihonme
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan server development:
```bash
npm run dev
```

## 🏗️ Script yang Tersedia

- `npm run dev` - Menjalankan server development
- `npm run build` - Build proyek untuk production
- `npm run lint` - Menjalankan ESLint untuk pengecekan kualitas kode
- `npm run preview` - Preview build production secara lokal

## 🏗️ Struktur Proyek
```
nihonme/
├── src/                    # Source code aplikasi
│   ├── components/         # Komponen React yang dapat digunakan kembali
│   │   ├── kuis/          # Komponen terkait kuis
│   │   ├── DetectionControls.tsx    # Kontrol deteksi objek
│   │   ├── FloatingActionButton.tsx # Tombol aksi mengambang
│   │   ├── Header.tsx     # Komponen header aplikasi
│   │   ├── ImageUploadView.tsx      # Tampilan upload gambar
│   │   ├── JapanFactsCarousel.tsx   # Carousel fakta Jepang
│   │   ├── Layout.tsx     # Layout utama aplikasi
│   │   ├── MobileResultsView.tsx    # Tampilan hasil mobile
│   │   ├── ObjectDetailPage.tsx     # Halaman detail objek
│   │   ├── ResultsList.tsx          # Daftar hasil deteksi
│   │   └── WebcamView.tsx # Tampilan webcam
│   │
│   ├── pages/             # Halaman-halaman aplikasi
│   │   ├── AboutPage.tsx  # Halaman tentang
│   │   ├── AIDetectionPage.tsx      # Halaman deteksi AI
│   │   ├── ArticlesPage.tsx         # Halaman artikel
│   │   └── HomePage.tsx   # Halaman beranda
│   │
│   ├── utils/             # Fungsi utilitas dan data
│   │   ├── detectionUtils.ts        # Utilitas deteksi objek
│   │   ├── japanFactsData.ts        # Data fakta Jepang
│   │   ├── kuisData.ts    # Data kuis
│   │   ├── labelMapping.ts          # Pemetaan label deteksi
│   │   ├── modelLoader.ts # Loader model TensorFlow
│   │   ├── objectData.ts  # Data objek dan terjemahan
│   │   ├── objectDetails.ts         # Detail objek
│   │   └── webCardsData.ts          # Data artikel web
│   │
│   ├── App.tsx            # Komponen utama aplikasi
│   ├── main.tsx           # Entry point aplikasi
│   ├── types.ts           # Definisi tipe TypeScript
│   ├── vite-env.d.ts      # Definisi tipe Vite
│   └── index.css          # Style global
│
├── public/                # Aset publik
│   ├── img/              # Gambar statis
│   └── README.md         # Dokumentasi publik
│
├── .github/              # Konfigurasi GitHub
│   └── workflows/        # GitHub Actions workflows
│
├── dist/                 # Output build production
│
├── index.html            # Entry point HTML
│
├── [config files]        # File konfigurasi
│   ├── vite.config.ts    # Konfigurasi Vite
│   ├── tailwind.config.js # Konfigurasi Tailwind
│   ├── tsconfig.json     # Konfigurasi TypeScript utama
│   ├── tsconfig.app.json # Konfigurasi TypeScript aplikasi
│   ├── tsconfig.node.json # Konfigurasi TypeScript Node
│   ├── eslint.config.js  # Konfigurasi ESLint
│   └── postcss.config.js # Konfigurasi PostCSS
│
├── package.json          # Dependencies dan scripts
├── package-lock.json     # Lock file dependencies
└── README.md             # Dokumentasi proyek
```

## 🔧 File Konfigurasi

- `vite.config.ts` - Konfigurasi Vite
- `tailwind.config.js` - Konfigurasi Tailwind CSS
- `tsconfig.json` - Konfigurasi TypeScript
- `eslint.config.js` - Konfigurasi ESLint
- `postcss.config.js` - Konfigurasi PostCSS

## 🚀 Pengembangan

1. Server development akan berjalan di `http://localhost:5173`
2. Perubahan kode akan langsung terlihat (HMR)
3. Gunakan ESLint untuk menjaga kualitas kode
4. Format kode dengan Prettier

## 🚀 Deployment

### Konfigurasi untuk Self-Deployment

Jika Anda ingin mendeploy aplikasi ini sendiri, berikut adalah hal-hal yang perlu dikonfigurasi:

1. **Base URL**
   - Buka `vite.config.ts`
   - Ubah `base` path sesuai dengan path deployment Anda:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/', // Ubah sesuai dengan path deployment
     // ... konfigurasi lainnya
   })
   ```

2. **Asset Path**
   - Pastikan semua path asset di `public/img/` menggunakan path relatif yang benar
   - Contoh: `/your-repo-name/img/icon/nihonme-icon.svg`

3. **Environment Variables**
   - Buat file `.env` di root proyek
   - Salin isi dari `.env.example`
   - Sesuaikan nilai variabel:
   ```env
   # App Info
   VITE_APP_TITLE=NihonMe

   # Deployment to Github Pages
   VITE_DEPLOY_REPO_URL=https://github.com/your-username/your-repo.git
   VITE_DEPLOY_BRANCH=main
   VITE_DEPLOY_DIST_DIR=dist
   ```
   - Jangan lupa untuk menambahkan `.env` ke `.gitignore`
   - File `.env.example` berfungsi sebagai template untuk pengembang lain

4. **Build Configuration**
   - Jalankan build dengan perintah:
   ```bash
   npm run build
   ```
   - Output akan berada di folder `dist/`
   - Pastikan semua asset ter-copy dengan benar

5. **Deployment Options**

   a. **GitHub Pages**
   ```bash
   npm run deploy
   ```
   Perintah ini menggunakan package `gh-pages` dengan konfigurasi:
   - `-d`: Direktori yang akan di-deploy (dari .env `VITE_DEPLOY_DIST_DIR`)
   - `-b`: Branch tujuan (dari .env `VITE_DEPLOY_BRANCH`)
   - `-r`: URL repository (dari .env `VITE_DEPLOY_REPO_URL`)

   b. **Vercel**
   ```bash
   npm run deploy:vercel
   ```
   Sebelum deploy:
   - Install Vercel CLI: `npm i -g vercel`
   - Login ke Vercel: `vercel login`
   - Konfigurasi project di dashboard Vercel
   - Environment variables bisa diatur di dashboard Vercel

   c. **Netlify**
   ```bash
   npm run deploy:netlify
   ```
   Sebelum deploy:
   - Install Netlify CLI: `npm i -g netlify-cli`
   - Login ke Netlify: `netlify login`
   - Inisialisasi project: `netlify init`
   - Environment variables bisa diatur di dashboard Netlify

6. **Deployment Platform**
   - **GitHub Pages**:
     - Aktifkan GitHub Pages di repository settings
     - Pilih branch `gh-pages` atau folder `docs`
     - Pastikan workflow GitHub Actions sudah dikonfigurasi dengan benar
   
   - **Vercel**:
     - Import repository ke Vercel
     - Konfigurasi build command: `npm run build`
     - Output directory: `dist`
     - Environment variables bisa diatur di dashboard Vercel

   - **Netlify**:
     - Import repository ke Netlify
     - Build command: `npm run build`
     - Publish directory: `dist`
     - Environment variables bisa diatur di dashboard Netlify

7. **CORS Configuration**
   - Jika menggunakan API eksternal, pastikan CORS sudah dikonfigurasi dengan benar
   - Tambahkan domain Anda ke whitelist CORS di server API

8. **Service Worker**
   - Jika menggunakan PWA, pastikan `service-worker.js` sudah dikonfigurasi dengan benar
   - Update `manifest.json` dengan informasi aplikasi Anda

9. **Analytics & Monitoring**
   - Jika menggunakan Google Analytics atau tools monitoring lainnya:
     - Update tracking ID
     - Konfigurasi domain yang diizinkan
     - Sesuaikan event tracking

### Troubleshooting Deployment

1. **404 pada Refresh**
   - Pastikan server dikonfigurasi untuk redirect ke `index.html`
   - Untuk GitHub Pages, tambahkan file `404.html` yang redirect ke `index.html`

2. **Asset Not Found**
   - Periksa path asset di `vite.config.ts`
   - Pastikan semua path menggunakan base URL yang benar

3. **CORS Issues**
   - Periksa konfigurasi CORS di server
   - Pastikan domain deployment sudah di-whitelist

4. **Build Errors**
   - Periksa log build untuk error
   - Pastikan semua dependency terinstall dengan benar
   - Coba hapus `node_modules` dan `package-lock.json`, lalu install ulang

## 🏗️ Build untuk Production

Untuk membuat build production:

```bash
npm run build
```

Output build akan berada di direktori `dist`.

## 📚 Tujuan Pendidikan

Perangkat lunak dan dokumentasinya disediakan untuk tujuan pendidikan saja. Tujuan utama dari proyek ini adalah untuk mendemonstrasikan dan mengajarkan konsep-konsep terkait:

- 📚 Pembelajaran bahasa Jepang
- 🎯 Latihan membaca Hiragana dan Katakana
- 🔍 Pembelajaran kosakata benda dalam bahasa Jepang
- 🎓 Pengetahuan tentang budaya Jepang
- 🤖 Integrasi AI dalam aplikasi web
- ⚛️ Pengembangan aplikasi React modern
- 🎨 Praktik pengembangan web terbaik

### Ketentuan Penggunaan:

- ✅ Penggunaan pendidikan (kelas, workshop, tutorial)
- ✅ Pembelajaran dan eksperimen pribadi
- ✅ Penelitian akademis
- ✅ Proyek non-komersial

### Pembatasan:

- ⚠️ Tidak untuk penggunaan komersial
- ⚠️ Tidak untuk redistribusi untuk keuntungan
- ⚠️ Tidak untuk modifikasi untuk tujuan komersial
- ⚠️ Tidak ada jaminan yang disediakan

### Atribusi:

Saat menggunakan proyek ini untuk tujuan pendidikan, harap sertakan:

- 🔗 Link ke repositori asli
- 👥 Atribusi kepada penulis asli

## 👥 Kontribusi

Kontribusi dipersilakan untuk tujuan pendidikan. Anda dapat:
- Melaporkan bug
- Menyarankan peningkatan
- Mengirim pull request
- Berbagi pengalaman belajar

## 📚 Sumber Belajar

- [TensorFlow.js Documentation](https://www.tensorflow.org/js)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/docs/en/v6)
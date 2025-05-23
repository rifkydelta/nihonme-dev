import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Tentang Aplikasi */}
        <div className="neu-card p-8">
          <h1 className="text-3xl font-bold text-surface-900 mb-6">Tentang NihonMe</h1>
          <p className="text-surface-600 leading-relaxed">
            NihonMe adalah aplikasi pembelajaran bahasa Jepang yang menggunakan teknologi AI untuk membantu pengguna mempelajari kosakata bahasa Jepang melalui deteksi objek. Aplikasi ini dirancang untuk membuat pembelajaran bahasa Jepang lebih interaktif dan menyenangkan.
          </p>
        </div>

        {/* Teknologi yang Digunakan */}
        <div className="neu-card p-8">
          <h2 className="text-2xl font-bold text-surface-900 mb-4">Teknologi yang Digunakan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-surface-800">Frontend</h3>
              <ul className="list-disc list-inside text-surface-600">
                <li>React 18</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Vite</li>
                <li>React Router DOM</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-surface-800">AI & Machine Learning</h3>
              <ul className="list-disc list-inside text-surface-600">
                <li>TensorFlow.js</li>
                <li>COCO-SSD model</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tentang Pengembang */}
        <div className="neu-card p-8">
          <h2 className="text-2xl font-bold text-surface-900 mb-6">Tentang Pengembang</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQEkQs8ABe_Ipg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709478662180?e=1752710400&v=beta&t=CFmIEshJQ2ImGw8HUWRBe4wxRoIEJoc8_EVKhBFU_BI" 
                alt="Foto Pengembang" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-surface-800">Arindra Rifky Saputra</h3>
                <p className="text-surface-600">Mahasiswa Program Studi Pendidikan Bahasa Jepang UNNES</p>
              </div>
              <p className="text-surface-600">
              Seorang mahasiswa yang bersemangat dalam mengembangkan aplikasi web untuk pengenalan kosakata benda dalam bahasa Jepang, yang dirancang khusus untuk pembelajar pemula. Saya bertujuan untuk mengintegrasikan teknologi AI object detection guna menciptakan pengalaman belajar yang sangat visual dan interaktif. Melalui aplikasi ini, pengguna dapat dengan mudah mengarahkan kamera pada objek di sekitar mereka, dan AI akan membantu mengidentifikasi serta menyajikan kosakata bahasa Jepang yang relevan, sehingga proses belajar menjadi lebih menarik, kontekstual, dan efektif dalam meningkatkan keinginan belajar siswa.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/rifkydelta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/rifkydelta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage; 
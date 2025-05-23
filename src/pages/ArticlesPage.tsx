import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { webCards } from '../utils/webCardsData';

const ArticlesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(webCards.length / itemsPerPage);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const displayedArticles = webCards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-surface-900">Belajar Bersama</h1>
            <img 
              src="https://wkwk-japanese.com/wp-content/uploads/2022/12/logo_wkwkjapanese.png" 
              alt="WKWK Japanese Logo" 
              className="h-8 w-auto"
            />
            <span className="text-lg font-medium text-surface-900">WKWK JAPANESE</span>
          </div>
          <Link
            to="/"
            className="px-4 py-2 bg-white/50 rounded-xl border border-white/30
                     hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1
                     active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-0
                     transition-all duration-300 text-surface-900 font-medium"
          >
            Kembali ke Beranda
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedArticles.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/50 rounded-xl overflow-hidden transition-all duration-300
                       hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1
                       active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-0
                       border border-white/30"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-surface-900 mb-2 line-clamp-2">
                  {card.title}
                </h3>
                <p className="text-surface-500 text-sm">
                  {new Date(card.date).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-white/50 rounded-xl border border-white/30
                     hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1
                     active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-0
                     transition-all duration-300 text-surface-900 font-medium
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0"
          >
            Sebelumnya
          </button>
          <span className="px-4 py-2 bg-white/50 rounded-xl border border-white/30 text-surface-900">
            Halaman {currentPage} dari {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-white/50 rounded-xl border border-white/30
                     hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1
                     active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-0
                     transition-all duration-300 text-surface-900 font-medium
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </main>
  );
};

export default ArticlesPage; 
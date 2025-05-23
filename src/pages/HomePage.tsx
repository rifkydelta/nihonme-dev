import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { objectDetailsMap } from '../utils/objectData';
import { webCards } from '../utils/webCardsData';
import JapanFactsCarousel from '../components/JapanFactsCarousel';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleItems, setVisibleItems] = useState(9);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>(
    window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop'
  );

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newScreenSize: 'mobile' | 'tablet' | 'desktop';
      let newVisibleItems: number;

      if (width < 768) {
        newScreenSize = 'mobile';
        newVisibleItems = 4;
      } else if (width < 1024) {
        newScreenSize = 'tablet';
        newVisibleItems = 6;
      } else {
        newScreenSize = 'desktop';
        newVisibleItems = 9;
      }

      setScreenSize(newScreenSize);
      setVisibleItems(newVisibleItems);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredObjects = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return Object.entries(objectDetailsMap).filter(([_, details]) => {
      return (
        details.japanese.toLowerCase().includes(query) ||
        details.romaji.toLowerCase().includes(query) ||
        details.indonesian.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  const handleLoadMore = () => {
    setVisibleItems(prev => {
      switch (screenSize) {
        case 'mobile':
          return prev + 4;
        case 'tablet':
          return prev + 6;
        case 'desktop':
          return prev + 9;
      }
    });
  };

  const displayedObjects = filteredObjects.slice(0, visibleItems);
  const hasMore = visibleItems < filteredObjects.length;

  // Get only first 2 articles
  const featuredArticles = webCards.slice(0, 2);

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <JapanFactsCarousel />
        
        <div className="w-full mb-12">
          <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari kosakata bahasa Jepang..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-xl border border-surface-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-surface-400" size={20} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedObjects.map(([id, details]) => (
            <Link
              key={id}
              to={`/benda/${id}`}
              state={{ from: 'home' }}
              className="group bg-white/50 rounded-xl overflow-hidden transition-all duration-300
                       hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1
                       active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-0
                       border border-white/30"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={details.imageUrl}
                  alt={details.indonesian}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-surface-900 mb-2">
                  {details.japanese} ({details.indonesian})
                </h3>
                <p className="text-surface-600 mb-1">{details.romaji}</p>
              </div>
            </Link>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-white/50 rounded-xl border border-white/30
                       hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1
                       active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-0
                       transition-all duration-300 text-surface-900 font-medium"
            >
              Lihat Lebih Banyak
            </button>
          </div>
        )}

        <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-6 shadow-lg border border-white/20 mt-12">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <h2 className="hidden md:block text-2xl font-bold text-surface-900">Belajar Bersama</h2>
              <img 
                src="https://wkwk-japanese.com/wp-content/uploads/2022/12/logo_wkwkjapanese.png" 
                alt="WKWK Japanese Logo" 
                className="h-8 w-auto"
              />
              <span className="hidden md:block text-lg font-medium text-surface-900">WKWK JAPANESE</span>
            </div>
            <Link
              to="/artikel"
              className="px-4 py-2 bg-white/50 rounded-xl border border-white/30
                       hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1
                       active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-0
                       transition-all duration-300 text-surface-900 font-medium"
            >
              Lihat Artikel
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.map((card, index) => (
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
        </div>
      </main>
    </>
  );
};

export default HomePage; 
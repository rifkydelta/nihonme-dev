import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { objectDetailsMap } from '../utils/objectData';
import { webCards } from '../utils/webCardsData';
import JapanFactsCarousel from '../components/JapanFactsCarousel';

const HomePage: React.FC = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  // 🆕 [DIHAPUS] State isScrolled tidak lagi diperlukan
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect buat scroll listener sudah tidak diperlukan jika search bar tidak sticky
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 20);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const getInitialVisibleItems = () => {
    const width = window.innerWidth;
    if (width < 768) return 4;
    if (width < 1024) return 6;
    return 9;
  };

  const [visibleItems, setVisibleItems] = useState(() => {
    const storedItems = sessionStorage.getItem('visibleItems');
    if (storedItems) return parseInt(storedItems, 10);
    return getInitialVisibleItems();
  });

  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>(() => {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  });

  useEffect(() => {
    const storedScroll = sessionStorage.getItem('scrollPos');
    if (storedScroll) {
      const scrollPosition = parseInt(storedScroll, 10);
      if (!isNaN(scrollPosition)) {
        let scrollTimeoutId = setTimeout(() => {
          requestAnimationFrame(() => {
            window.scrollTo(0, scrollPosition);
          });
        }, 10);
        return () => clearTimeout(scrollTimeoutId);
      }
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('visibleItems');
      sessionStorage.removeItem('scrollPos');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newScreenSizeVal: 'mobile' | 'tablet' | 'desktop';
      let newVisibleItemsBasedOnResize: number;

      if (width < 768) {
        newScreenSizeVal = 'mobile';
        newVisibleItemsBasedOnResize = 4;
      } else if (width < 1024) {
        newScreenSizeVal = 'tablet';
        newVisibleItemsBasedOnResize = 6;
      } else {
        newScreenSizeVal = 'desktop';
        newVisibleItemsBasedOnResize = 9;
      }

      setScreenSize(newScreenSizeVal);
      setVisibleItems(newVisibleItemsBasedOnResize);
      sessionStorage.setItem('visibleItems', newVisibleItemsBasedOnResize.toString());
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
      let added;
      switch (screenSize) {
        case 'mobile': added = 4; break;
        case 'tablet': added = 6; break;
        case 'desktop': default: added = 9; break;
      }
      const newVal = prev + added;
      sessionStorage.setItem('visibleItems', newVal.toString());
      return newVal;
    });
  };

  const displayedObjects = filteredObjects.slice(0, visibleItems);
  const hasMore = visibleItems < filteredObjects.length;
  const featuredArticles = webCards.slice(0, 2);

  const handleCardClick = () => {
    sessionStorage.setItem('visibleItems', visibleItems.toString());
    sessionStorage.setItem('scrollPos', window.scrollY.toString());
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <JapanFactsCarousel />

      {/* kuis Button Section */}
      <div className="mb-12">
        <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-6 shadow-lg border border-white/20">
          <h2 className="text-2xl font-bold text-surface-900 mb-4">Uji Kemampuanmu</h2>
          <p className="text-surface-600 mb-6">Latih kemampuan bahasa Jepangmu dengan berbagai jenis kuis</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/kuis/hiragana"
              className="group bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">あ</span>
                <h3 className="text-lg font-semibold">Kuis Hiragana</h3>
              </div>
              <p className="text-blue-100 text-sm">Latih kemampuan membaca Hiragana</p>
            </Link>
            <Link
              to="/kuis/katakana"
              className="group bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">ア</span>
                <h3 className="text-lg font-semibold">Kuis Katakana</h3>
              </div>
              <p className="text-green-100 text-sm">Latih kemampuan membaca Katakana</p>
            </Link>
            <Link
              to="/kuis/kosakata"
              className="group bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">📚</span>
                <h3 className="text-lg font-semibold">Kuis Kosakata</h3>
              </div>
              <p className="text-purple-100 text-sm">Uji pengetahuan kosakata bahasa Jepang</p>
            </Link>
          </div>
        </div>
      </div>

      {/* 🔧 Search Bar dengan posisi sticky dan padding atas tetap */}
      <div className="w-full mb-12 pt-4 sticky top-14 z-50">
        <div className="backdrop-blur-lg bg-white/90 rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-surface-900">List Benda</h2>
              <span className="hidden md:inline text-surface-500">({filteredObjects.length} benda)</span>
            </div>
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Cari benda..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-xl border border-surface-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-surface-400" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Grid kosakata */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {displayedObjects.map(([id, details]) => (
          <Link
            key={id}
            to={`/benda/${id}`}
            state={{ from: 'homePage' }}
            onClick={handleCardClick}
            className="group bg-white/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-0 border border-white/30"
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

      {/* Load More */}
      {hasMore && (
        <div className="flex justify-center">
          <button
            onClick={handleLoadMore}
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 active:translate-y-0"
          >
            <span className="relative z-10">Lihat Lebih Banyak</span>
            <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      )}

      {/* Artikel Section */}
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
            className="px-4 py-2 bg-white/50 rounded-xl border border-white/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-0 transition-all duration-300 text-surface-900 font-medium"
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
              className="group bg-white/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-0 border border-white/30"
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
  );
};

export default HomePage;
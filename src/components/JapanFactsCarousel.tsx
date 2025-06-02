import React, { useState, useEffect, useMemo } from 'react';
import { japanFacts } from '../utils/japanFactsData';

const JapanFactsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Get 4 random facts
  const randomFacts = useMemo(() => {
    const shuffled = [...japanFacts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % randomFacts.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isHovered, randomFacts.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? randomFacts.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % randomFacts.length
    );
  };

  return (
    <div className="w-full mb-8">
      <div 
        className="backdrop-blur-lg bg-white/30 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-white/20
                   hover:shadow-xl transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={handlePrevious}
            className="hidden sm:block absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full
                     bg-white/50 hover:bg-white/80 transition-all duration-300
                     shadow-lg hover:shadow-xl border border-white/30
                     transform hover:scale-110 active:scale-95"
            aria-label="Previous fact"
          >
            <svg className="w-5 h-5 sm:w-7 sm:h-7 text-surface-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="hidden sm:block absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full
                     bg-white/50 hover:bg-white/80 transition-all duration-300
                     shadow-lg hover:shadow-xl border border-white/30
                     transform hover:scale-110 active:scale-95"
            aria-label="Next fact"
          >
            <svg className="w-5 h-5 sm:w-7 sm:h-7 text-surface-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {randomFacts.map((fact) => (
              <div
                key={fact.id}
                className={`w-full flex-shrink-0 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8
                           bg-gradient-to-r ${fact.gradient} rounded-xl min-h-[180px] sm:min-h-[200px]`}
              >
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full
                              bg-white/50 backdrop-blur-sm shadow-lg border border-white/30
                              transform transition-transform duration-300 hover:scale-110">
                  <span className="text-4xl sm:text-5xl">{fact.icon}</span>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-surface-900 font-medium max-w-2xl leading-relaxed text-center sm:text-left">
                  {fact.fact}
                </p>
              </div>
            ))}
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-8">
            {randomFacts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8 sm:w-10'
                    : 'bg-surface-300 w-2 sm:w-2.5 hover:bg-surface-400'
                }`}
                aria-label={`Go to fact ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation - Only visible on mobile */}
          <div className="sm:hidden flex justify-between mt-4">
            <button
              onClick={handlePrevious}
              className="px-4 py-2 bg-white/50 rounded-xl border border-white/30
                       hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1
                       active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-0
                       transition-all duration-300 text-surface-900 font-medium"
            >
              Sebelumnya
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-white/50 rounded-xl border border-white/30
                       hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1
                       active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-0
                       transition-all duration-300 text-surface-900 font-medium"
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JapanFactsCarousel; 
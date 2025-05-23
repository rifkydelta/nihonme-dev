import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const FloatingActionButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const location = useLocation();

  // Don't show the button on the detection page
  if (location.pathname === '/deteksi-benda') {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-surface-900 text-white rounded-lg shadow-lg
                        transform transition-all duration-300 ease-in-out whitespace-nowrap">
            <div className="text-sm">Deteksi Benda dengan AI</div>
            {/* Tooltip arrow */}
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-surface-900"></div>
          </div>
        )}
        
        {/* Floating Button */}
        <Link
          to="/deteksi-benda"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-600 text-white
                   shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0
                   transition-all duration-300 ease-in-out"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Go to Object Detection"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default FloatingActionButton; 
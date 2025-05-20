import React from 'react';
import { Camera } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkMode }) => {
  return (
    <header className={`py-4 px-6 shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Camera size={28} className="text-blue-500" />
          <h1 className="text-xl font-bold">AI Vision</h1>
        </div>
        
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Browser-Based Object Detection
        </div>
      </div>
    </header>
  );
};

export default Header;
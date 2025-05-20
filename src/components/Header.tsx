import React from 'react';
import { Camera } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 shadow-md bg-surface-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Camera size={28} className="text-primary-500" />
          <h1 className="text-xl font-bold text-surface-900">AI Vision</h1>
        </div>
        
        <div className="text-sm text-surface-600">
          Nihonme
        </div>
      </div>
    </header>
  );
};

export default Header;
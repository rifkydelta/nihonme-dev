import React from 'react';
import Header from './Header';
import FloatingActionButton from './FloatingActionButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-50 to-surface-100">
      <Header />
      {children}
      <FloatingActionButton />
    </div>
  );
};

export default Layout; 
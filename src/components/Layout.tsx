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
      {/* Tinggi header adalah 4rem (py-4 + h-8 logo). 4rem = pt-16 di Tailwind */}
      <main className="pt-16 px-4"> {/* Disesuaikan dari pt-20 menjadi pt-16 */}
        {children}
      </main>
      <FloatingActionButton />
    </div>
  );
};

export default Layout;
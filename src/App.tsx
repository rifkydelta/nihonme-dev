import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AIDetectionPage from './pages/AIDetectionPage';
import ArticlesPage from './pages/ArticlesPage';
import AboutPage from './pages/AboutPage';
import ObjectDetailPage from './components/ObjectDetailPage';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deteksi-benda" element={<AIDetectionPage />} />
        <Route path="/artikel" element={<ArticlesPage />} />
        <Route path="/tentang-kami" element={<AboutPage />} />
        <Route path="/benda/:id" element={<ObjectDetailPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
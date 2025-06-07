import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AIDetectionPage from './pages/AIDetectionPage';
import ArticlesPage from './pages/ArticlesPage';
import ObjectDetailPage from './components/ObjectDetailPage';
import KuisPage from './components/kuis/KuisPage';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentang" element={<AboutPage />} />
        <Route path="/deteksi-benda" element={<AIDetectionPage />} />
        <Route path="/artikel" element={<ArticlesPage />} />
        <Route path="/benda/:id" element={<ObjectDetailPage />} />
        <Route path="/kuis" element={<KuisPage />} />
        <Route path="/kuis/:type" element={<KuisPage />} />
      </Routes>
    </Layout>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AIDetectionPage from './pages/AIDetectionPage';
import ArticlesPage from './pages/ArticlesPage';
import ObjectDetailPage from './components/ObjectDetailPage';

const App: React.FC = () => {
  return (
    <Router basename="/nihonme">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/deteksi-benda" element={<AIDetectionPage />} />
          <Route path="/artikel" element={<ArticlesPage />} />
          <Route path="/benda/:id" element={<ObjectDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
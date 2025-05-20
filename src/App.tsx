import React, { useState, useEffect } from 'react';
import { Moon, Sun, AlertCircle } from 'lucide-react';
import Header from './components/Header';
import DetectionControls from './components/DetectionControls';
import WebcamView from './components/WebcamView';
import ImageUploadView from './components/ImageUploadView';
import ResultsList from './components/ResultsList';
import { loadModel } from './utils/modelLoader';
import { ObjectDetection } from './types';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mode, setMode] = useState<'webcam' | 'upload'>('webcam');
  const [modelLoaded, setModelLoaded] = useState(false);
  const [modelLoading, setModelLoading] = useState(true);
  const [modelError, setModelError] = useState<string | null>(null);
  const [detectionResults, setDetectionResults] = useState<ObjectDetection[]>([]);
  const [filteredClass, setFilteredClass] = useState<string | null>(null);

  useEffect(() => {
    const loadModelAsync = async () => {
      try {
        setModelLoading(true);
        await loadModel();
        setModelLoaded(true);
        setModelError(null);
      } catch (error) {
        console.error('Failed to load model:', error);
        setModelError('Failed to load detection model. Please check your connection and try again.');
      } finally {
        setModelLoading(false);
      }
    };

    loadModelAsync();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleResultsUpdate = (results: ObjectDetection[]) => {
    setDetectionResults(results);
  };

  const handleModeChange = (newMode: 'webcam' | 'upload') => {
    setMode(newMode);
    setDetectionResults([]);
  };

  const handleFilterChange = (className: string | null) => {
    setFilteredClass(className);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header darkMode={darkMode} />
      
      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <DetectionControls 
              mode={mode} 
              onModeChange={handleModeChange} 
              modelLoaded={modelLoaded}
            />
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>

          {modelLoading && (
            <div className="flex-1 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse">
              <div className="text-center">
                <div className="inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-lg font-medium">Loading detection model...</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">This may take a moment</p>
              </div>
            </div>
          )}

          {modelError && (
            <div className="flex-1 flex items-center justify-center bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
              <div className="text-center">
                <AlertCircle size={48} className="mx-auto mb-4 text-red-500" />
                <h3 className="text-lg font-medium text-red-800 dark:text-red-200">Model Loading Error</h3>
                <p className="mt-2 text-red-700 dark:text-red-300">{modelError}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {!modelLoading && !modelError && (
            <>
              {mode === 'webcam' ? (
                <WebcamView 
                  onResults={handleResultsUpdate} 
                  modelLoaded={modelLoaded}
                  filteredClass={filteredClass}
                />
              ) : (
                <ImageUploadView 
                  onResults={handleResultsUpdate}
                  modelLoaded={modelLoaded}
                  filteredClass={filteredClass}
                />
              )}
            </>
          )}
        </div>

        <div className="lg:w-1/3 flex flex-col">
          <ResultsList 
            results={detectionResults}
            onFilterChange={handleFilterChange}
            filteredClass={filteredClass}
            darkMode={darkMode}
          />
        </div>
      </main>

      <footer className={`py-4 px-6 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
        <div className="container mx-auto text-center text-sm">
          <p>AI Vision - Browser-based Object Detection</p>
          <p className="mt-1">Powered by TensorFlow.js & COCO-SSD Model</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import Header from './components/Header';
import DetectionControls from './components/DetectionControls';
import WebcamView from './components/WebcamView';
import ImageUploadView from './components/ImageUploadView';
import ResultsList from './components/ResultsList';
import MobileResultsView from './components/MobileResultsView';
import ObjectDetailPage from './components/ObjectDetailPage';
import { loadModel } from './utils/modelLoader';
import { ObjectDetection } from './types';

function App() {
  const [mode, setMode] = useState<'webcam' | 'upload'>('webcam');
  const [modelLoaded, setModelLoaded] = useState(false);
  const [modelLoading, setModelLoading] = useState(true);
  const [modelError, setModelError] = useState<string | null>(null);
  const [detectionResults, setDetectionResults] = useState<ObjectDetection[]>([]);
  const [filteredClass, setFilteredClass] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isWebcamActive, setIsWebcamActive] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const handleResultsUpdate = (results: ObjectDetection[]) => {
    setDetectionResults(results);
  };

  const handleModeChange = (newMode: 'webcam' | 'upload') => {
    setMode(newMode);
    setDetectionResults([]);
    setIsWebcamActive(false);
  };

  const handleFilterChange = (className: string | null) => {
    setFilteredClass(className);
  };

  const handleWebcamStateChange = (active: boolean) => {
    setIsWebcamActive(active);
  };

  const shouldShowFooter = !isMobile || !isWebcamActive;

  return (
    <Routes>
      <Route path="/object/:label" element={<ObjectDetailPage />} />
      <Route path="/" element={
        <div className="min-h-screen bg-surface-50">
          <Header />
          
          <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
            <div className={`${isMobile ? 'w-full' : 'lg:w-2/3'} flex flex-col gap-6`}>
              <div className="flex justify-between items-center">
                <DetectionControls 
                  mode={mode} 
                  onModeChange={handleModeChange} 
                  modelLoaded={modelLoaded}
                />
              </div>

              <div className="neu-card flex-1">
                {modelLoading && (
                  <div className="flex-1 flex items-center justify-center p-12">
                    <div className="text-center">
                      <div className="inline-block w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                      <p className="text-lg font-medium text-surface-800">Loading detection model...</p>
                      <p className="text-surface-600">This may take a moment</p>
                    </div>
                  </div>
                )}

                {modelError && (
                  <div className="flex-1 flex items-center justify-center p-12">
                    <div className="text-center">
                      <AlertCircle size={48} className="mx-auto mb-4 text-accent-500" />
                      <h3 className="text-lg font-medium text-surface-800 mb-2">Model Loading Error</h3>
                      <p className="text-surface-600 mb-6">{modelError}</p>
                      <button 
                        onClick={() => window.location.reload()}
                        className="neu-button text-primary-600 font-medium"
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
                        onWebcamStateChange={handleWebcamStateChange}
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
            </div>

            {!isMobile && (
              <div className="lg:w-1/3">
                <ResultsList 
                  results={detectionResults}
                  onFilterChange={handleFilterChange}
                  filteredClass={filteredClass}
                />
              </div>
            )}
          </main>

          {isMobile && (
            <MobileResultsView
              results={detectionResults}
              onFilterChange={handleFilterChange}
              filteredClass={filteredClass}
            />
          )}

          {shouldShowFooter && (
            <footer className="py-6 px-6">
              <div className="container mx-auto text-center">
                <p className="text-surface-600 font-medium">AI Vision - Browser-based Object Detection</p>
                <p className="text-surface-500 text-sm mt-1">Powered by TensorFlow.js & COCO-SSD Model</p>
              </div>
            </footer>
          )}
        </div>
      } />
    </Routes>
  );
}

export default App;
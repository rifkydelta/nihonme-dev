import React, { useState, useEffect } from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';
import DetectionControls from '../components/DetectionControls';
import WebcamView from '../components/WebcamView';
import ImageUploadView from '../components/ImageUploadView';
import ResultsList from '../components/ResultsList';
import MobileResultsView from '../components/MobileResultsView';
import { loadModel } from '../utils/modelLoader';
import { ObjectDetection } from '../types';
import { Link } from 'react-router-dom';

const AIDetectionPage: React.FC = () => {
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
        setModelError('Gagal memuat model deteksi. Silakan periksa koneksi Anda dan coba lagi.');
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

  return (
    <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      <div className={`${isMobile ? 'w-full' : 'lg:w-2/3'} flex flex-col gap-6`}>
        <div className="flex justify-between items-center">
          <DetectionControls 
            mode={mode} 
            onModeChange={handleModeChange} 
            modelLoaded={modelLoaded}
          />
        </div>

        {modelError && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl">
            <AlertCircle size={20} />
            <p>{modelError}</p>
          </div>
        )}

        {modelLoading ? (
          <div className="flex flex-col items-center justify-center h-64 bg-white/50 rounded-xl gap-4">
            <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
            <p className="text-surface-600">Model AI sedang dimuat...</p>
          </div>
        ) : (
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

      {!isMobile && (
        <div className="lg:w-1/3">
          <ResultsList 
            results={detectionResults}
            onFilterChange={handleFilterChange}
            filteredClass={filteredClass}
          />
        </div>
      )}

      {isMobile && (
        <MobileResultsView
          results={detectionResults}
          onFilterChange={handleFilterChange}
          filteredClass={filteredClass}
        />
      )}
    </main>
  );
};

export default AIDetectionPage; 
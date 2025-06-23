import React, { useState, useEffect } from 'react';
import Joyride, { Step, CallBackProps } from 'react-joyride';
import { AlertCircle, Loader2, HelpCircle } from 'lucide-react';
import DetectionControls from '../components/DetectionControls';
import WebcamView from '../components/WebcamView';
import ImageUploadView from '../components/ImageUploadView';
import ResultsList from '../components/ResultsList';
import MobileResultsView from '../components/MobileResultsView';
import { loadModel } from '../utils/modelLoader';
import { ObjectDetection } from '../types';

const AIDetectionPage: React.FC = () => {
  const [mode, setMode] = useState<'webcam' | 'upload'>('webcam');
  const [modelLoaded, setModelLoaded] = useState(false);
  const [modelLoading, setModelLoading] = useState(true);
  const [modelError, setModelError] = useState<string | null>(null);
  const [detectionResults, setDetectionResults] = useState<ObjectDetection[]>([]);
  const [filteredClass, setFilteredClass] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const [runTour, setRunTour] = useState(false);

  const tourSteps: Step[] = [
    {
      target: '#startCameraBtn',
      content: 'Klik di sini untuk mengaktifkan kamera.',
      disableBeacon: true,
    },
    {
      target: '#webcamView',
      content: 'Tunjukkan benda ke kamera agar sistem mendeteksinya.',
    },
    {
      target: '#detectedItems',
      content: 'Klik hasil deteksi untuk melihat kosakata dan penjelasan dalam bahasa Jepang.',
    },
    {
      target: '#uploadImageBtn',
      content: 'Kalau punya gambar dari galeri, klik di sini untuk deteksi lewat gambar.',
    },
    {
      target: '#detectedItems',
      content: 'Klik hasil deteksi gambar untuk melihat detail kosakata, sama seperti saat pakai kamera.',
    },
  ];

  useEffect(() => {
    const onboardingLastSeen = localStorage.getItem('onboardingLastSeen');
    const today = new Date().toISOString().split('T')[0];

    if (!onboardingLastSeen || onboardingLastSeen !== today) {
      if (modelLoaded) {
        setRunTour(true);
      }
    }
  }, [modelLoaded]);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    const finishedStatuses: string[] = ['finished', 'skipped'];

    if (finishedStatuses.includes(status)) {
      setRunTour(false);
      if (data.lifecycle === 'init') {
        const today = new Date().toISOString().split('T')[0];
        localStorage.setItem('onboardingLastSeen', today);
      }
    }
  };

  const startManualTour = () => {
    setRunTour(true);
  };

  // Reset state when component mounts
  useEffect(() => {
    setMode('webcam');
    setDetectionResults([]);
    setFilteredClass(null);
    setIsWebcamActive(false);
    setModelLoading(true);
    setModelError(null);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      // Consider both mobile and tablet as mobile view (width <= 1024px)
      setIsMobile(window.innerWidth <= 1024);
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
      <Joyride
        steps={tourSteps}
        run={runTour}
        continuous
        showProgress
        showSkipButton
        callback={handleJoyrideCallback}
        styles={{
          options: {
            arrowColor: 'rgba(255, 255, 255, 0.9)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            primaryColor: '#4F46E5',
            textColor: '#1F2937',
            zIndex: 1000,
          },
          tooltip: {
            borderRadius: '12px',
            padding: '1rem 1.5rem',
          },
          buttonNext: {
            backgroundColor: '#4F46E5',
            borderRadius: '8px',
          },
          buttonBack: {
            color: '#6B7280',
          },
          buttonClose: {
            color: '#9CA3AF',
          },
        }}
        locale={{
          back: 'Kembali',
          close: 'Tutup',
          last: 'Selesai',
          next: 'Lanjut',
          skip: 'Lewati',
        }}
      />
      <div className={`${isMobile ? 'w-full' : 'lg:w-2/3'} flex flex-col gap-6`}>
        <div className="flex justify-between items-center">
          <DetectionControls 
            mode={mode} 
            onModeChange={handleModeChange} 
            modelLoaded={modelLoaded}
          />
          <button
            onClick={startManualTour}
            className="ml-4 p-2 rounded-full bg-surface-100 text-surface-700 shadow-neu hover:bg-surface-200 transition-all"
            title="Mulai Ulang Tutorial"
          >
            <HelpCircle size={20} />
          </button>
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

      {isMobile && detectionResults.length > 0 && (
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
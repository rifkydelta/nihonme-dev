import React, { useRef, useState, useEffect } from 'react';
import { AlertCircle, Camera, X } from 'lucide-react';
import { detectObjects, drawDetections } from '../utils/detectionUtils';
import { ObjectDetection } from '../types';

interface WebcamViewProps {
  onResults: (results: ObjectDetection[]) => void;
  modelLoaded: boolean;
  filteredClass: string | null;
  onWebcamStateChange?: (active: boolean) => void;
}

const WebcamView: React.FC<WebcamViewProps> = ({
  onResults,
  modelLoaded,
  filteredClass,
  onWebcamStateChange
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [webcamActive, setWebcamActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [detections, setDetections] = useState<ObjectDetection[]>([]);
  const intervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const startWebcam = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setError('Browser Anda tidak mendukung akses webcam');
      return;
    }
    
    try {
      setError(null);
      const constraints = {
        video: {
          facingMode: 'environment',
          aspectRatio: isMobile ? 3/4 : 16/9
        }
      };
      
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setWebcamActive(true);
        onWebcamStateChange?.(true);
      }
    } catch (err) {
      console.error('Error accessing webcam:', err);
      setError('Tidak dapat mengakses kamera. Pastikan Anda telah memberikan izin untuk mengakses kamera.');
    }
  };

  const stopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setWebcamActive(false);
      onWebcamStateChange?.(false);
      
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      
      setIsDetecting(false);
      onResults([]);
      setDetections([]);
    }
  };

  const detectFrame = async () => {
    if (!videoRef.current || !canvasRef.current || !modelLoaded) {
      return;
    }
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx || video.paused || video.ended) {
      return;
    }
    
    try {
      // Ensure canvas dimensions match video dimensions
      if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      }
      
      // Use the same detection method for all devices
      const results = await detectObjects(video);
      
      setDetections(results);
      onResults(results);
      
      // Draw detections
      drawDetections(ctx, results, filteredClass);
    } catch (err) {
      console.error('Detection error:', err);
    }
  };

  const handleVideoMetadata = () => {
    if (videoRef.current && canvasRef.current) {
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
    }
  };

  useEffect(() => {
    if (canvasRef.current && detections.length > 0) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        drawDetections(ctx, detections, filteredClass);
      }
    }
  }, [filteredClass, detections]);

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
      stopWebcam();
    };
  }, []);

  useEffect(() => {
    if (webcamActive && modelLoaded && !isDetecting) {
      setIsDetecting(true);
      detectFrame();
      // Increase interval for mobile to reduce CPU usage
      intervalRef.current = window.setInterval(detectFrame, isMobile ? 200 : 100);
    }
  }, [webcamActive, modelLoaded, isMobile]);

  return (
    <div className="relative flex-1 flex flex-col bg-black rounded-2xl overflow-hidden">
      {!webcamActive && !error && (
        <div className={`absolute inset-0 flex items-center justify-center flex-col p-6 z-10 bg-surface-50 ${
          isMobile ? 'aspect-[3/4]' : ''
        }`}>
          <Camera size={48} className="text-surface-400 mb-4" />
          <h3 className="text-lg font-medium mb-2 text-surface-900">Akses Kamera Diperlukan</h3>
          <p className="text-surface-600 text-center mb-4">
            Klik tombol di bawah untuk mengaktifkan kamera Anda untuk deteksi objek secara langsung
          </p>
          <button
            onClick={startWebcam}
            disabled={!modelLoaded}
            className="neu-button text-primary-600 font-medium"
          >
            Aktifkan Kamera
          </button>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center flex-col p-6 z-10 bg-surface-50">
          <AlertCircle size={48} className="text-accent-500 mb-4" />
          <h3 className="text-lg font-medium text-surface-800 mb-2">Error Kamera</h3>
          <p className="text-surface-600 text-center mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="neu-button text-primary-600 font-medium"
          >
            Ulangi
          </button>
        </div>
      )}
      
      <div 
        ref={containerRef}
        className={`relative flex-1 flex items-center justify-center ${
          isMobile ? 'aspect-[3/4]' : 'aspect-[16/9]'
        }`}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          playsInline
          muted
          onLoadedMetadata={handleVideoMetadata}
        />
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />
        
        {webcamActive && isMobile && (
          <button
            onClick={stopWebcam}
            className="absolute top-4 right-4 p-2 bg-surface-800/70 text-white rounded-full hover:bg-surface-700 transition-colors"
            aria-label="Stop camera"
          >
            <X size={20} />
          </button>
        )}
      </div>
      
      {webcamActive && !isMobile && (
        <div className="p-4 flex flex-col sm:flex-row sm:justify-between gap-4 bg-surface-50">
          <div className="text-sm flex items-center justify-center sm:justify-start">
            {isDetecting ? (
              <span className="flex items-center text-primary-600">
                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
                Deteksi aktif
              </span>
            ) : (
              <span className="text-surface-600">Deteksi berhenti</span>
            )}
          </div>
          
          <div className="grid grid-cols-2 sm:flex gap-2">
            <button
              onClick={stopWebcam}
              className="neu-button flex-1 sm:flex-initial min-w-[120px] text-accent-600"
            >
              Hentikan Kamera
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebcamView;
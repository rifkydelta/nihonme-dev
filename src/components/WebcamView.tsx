import React, { useRef, useState, useEffect } from 'react';
import { AlertCircle, Camera } from 'lucide-react';
import { detectObjects, drawDetections } from '../utils/detectionUtils';
import { ObjectDetection } from '../types';

interface WebcamViewProps {
  onResults: (results: ObjectDetection[]) => void;
  modelLoaded: boolean;
  filteredClass: string | null;
}

const WebcamView: React.FC<WebcamViewProps> = ({ 
  onResults, 
  modelLoaded,
  filteredClass
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
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Start webcam
  const startWebcam = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setError('Your browser does not support webcam access');
      return;
    }
    
    try {
      setError(null);
      const constraints = {
        video: {
          facingMode: 'environment',
          width: { ideal: isMobile ? 720 : 1280 },
          height: { ideal: isMobile ? 1280 : 720 },
          aspectRatio: isMobile ? 9/16 : 16/9
        }
      };
      
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setWebcamActive(true);
      }
    } catch (err) {
      console.error('Error accessing webcam:', err);
      setError('Could not access camera. Please ensure you have granted camera permissions.');
    }
  };
  
  // Stop webcam
  const stopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setWebcamActive(false);
      
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      
      setIsDetecting(false);
      onResults([]);
      setDetections([]);
    }
  };
  
  // Toggle detection
  const toggleDetection = () => {
    if (!webcamActive) {
      startWebcam();
      return;
    }
    
    if (isDetecting) {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsDetecting(false);
    } else {
      setIsDetecting(true);
      detectFrame();
      intervalRef.current = window.setInterval(detectFrame, 100);
    }
  };
  
  // Detect objects in a video frame
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
      const results = await detectObjects(video);
      setDetections(results);
      onResults(results);
      
      drawDetections(ctx, results, filteredClass);
    } catch (err) {
      console.error('Detection error:', err);
    }
  };
  
  // Handle video metadata loaded
  const handleVideoMetadata = () => {
    if (videoRef.current && canvasRef.current) {
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
    }
  };
  
  // Update canvas when filtered class changes
  useEffect(() => {
    if (canvasRef.current && detections.length > 0) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        drawDetections(ctx, detections, filteredClass);
      }
    }
  }, [filteredClass, detections]);
  
  // Clean up on component unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
      stopWebcam();
    };
  }, []);
  
  // Start detection when webcam becomes active
  useEffect(() => {
    if (webcamActive && modelLoaded && !isDetecting) {
      toggleDetection();
    }
  }, [webcamActive, modelLoaded]);
  
  return (
    <div className="relative flex-1 flex flex-col bg-black rounded-2xl overflow-hidden">
      {!webcamActive && !error && (
        <div className="absolute inset-0 flex items-center justify-center flex-col p-6 z-10 bg-surface-50">
          <Camera size={48} className="text-surface-400 mb-4" />
          <h3 className="text-lg font-medium mb-2 text-surface-900">Camera Access Required</h3>
          <p className="text-surface-600 text-center mb-4">
            Click the button below to enable your camera for real-time object detection
          </p>
          <button
            onClick={startWebcam}
            disabled={!modelLoaded}
            className="neu-button text-primary-600 font-medium"
          >
            Enable Camera
          </button>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center flex-col p-6 z-10 bg-surface-50">
          <AlertCircle size={48} className="text-accent-500 mb-4" />
          <h3 className="text-lg font-medium text-surface-800 mb-2">Camera Error</h3>
          <p className="text-surface-600 text-center mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="neu-button text-primary-600 font-medium"
          >
            Retry
          </button>
        </div>
      )}
      
      <div 
        ref={containerRef}
        className={`relative flex-1 flex items-center justify-center ${
          isMobile ? 'aspect-[9/16]' : 'aspect-[16/9]'
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
      </div>
      
      {webcamActive && (
        <div className="p-4 flex justify-between items-center bg-surface-50">
          <div className="text-sm">
            {isDetecting ? (
              <span className="flex items-center text-primary-600">
                <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
                Detection active
              </span>
            ) : (
              <span className="text-surface-600">Detection paused</span>
            )}
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={toggleDetection}
              disabled={!modelLoaded}
              className={`neu-button ${
                isDetecting ? 'text-surface-600' : 'text-primary-600'
              }`}
            >
              {isDetecting ? 'Pause' : 'Start'} Detection
            </button>
            
            <button
              onClick={stopWebcam}
              className="neu-button text-accent-600"
            >
              Stop Camera
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebcamView;
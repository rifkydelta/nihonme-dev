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
  const animationRef = useRef<number | null>(null);
  
  // Start webcam
  const startWebcam = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setError('Your browser does not support webcam access');
      return;
    }
    
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
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
      
      // Stop detection loop
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
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
      // Stop detection loop
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      setIsDetecting(false);
    } else {
      // Start detection loop
      setIsDetecting(true);
      detectFrame();
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
    
    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    try {
      // Run detection
      const results = await detectObjects(video);
      setDetections(results);
      onResults(results);
      
      // Draw detections on canvas
      drawDetections(ctx, results, filteredClass);
    } catch (err) {
      console.error('Detection error:', err);
    }
    
    // Continue detection loop
    if (isDetecting) {
      animationRef.current = requestAnimationFrame(detectFrame);
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
    <div className="relative flex-1 flex flex-col bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
      {!webcamActive && !error && (
        <div className="absolute inset-0 flex items-center justify-center flex-col p-6 z-10">
          <Camera size={48} className="text-gray-400 mb-4" />
          <h3 className="text-lg font-medium mb-2">Camera Access Required</h3>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-4">
            Click the button below to enable your camera for real-time object detection
          </p>
          <button
            onClick={startWebcam}
            disabled={!modelLoaded}
            className={`px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors ${
              !modelLoaded ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Enable Camera
          </button>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center flex-col p-6 z-10 bg-red-50 dark:bg-red-900/20">
          <AlertCircle size={48} className="text-red-500 mb-4" />
          <h3 className="text-lg font-medium text-red-800 dark:text-red-200 mb-2">Camera Error</h3>
          <p className="text-red-700 dark:text-red-300 text-center mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      )}
      
      <div className="relative flex-1 flex items-center justify-center">
        <video
          ref={videoRef}
          className="max-h-full max-w-full"
          autoPlay
          playsInline
          muted
        />
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      
      {webcamActive && (
        <div className="p-4 flex justify-between items-center">
          <div className="text-sm">
            {isDetecting ? (
              <span className="flex items-center text-green-500 dark:text-green-400">
                <span className="inline-block w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Detection active
              </span>
            ) : (
              <span className="text-gray-500 dark:text-gray-400">Detection paused</span>
            )}
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={toggleDetection}
              disabled={!modelLoaded}
              className={`px-4 py-1 rounded-md transition-colors ${
                isDetecting
                  ? 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              } ${!modelLoaded ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isDetecting ? 'Pause' : 'Start'} Detection
            </button>
            
            <button
              onClick={stopWebcam}
              className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
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
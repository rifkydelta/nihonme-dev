import React, { useRef, useState, useEffect } from 'react';
import { Upload, X, Download, Image as ImageIcon } from 'lucide-react';
import { detectObjects, drawDetections } from '../utils/detectionUtils';
import { ObjectDetection } from '../types';

interface ImageUploadViewProps {
  onResults: (results: ObjectDetection[]) => void;
  modelLoaded: boolean;
  filteredClass: string | null;
}

const ImageUploadView: React.FC<ImageUploadViewProps> = ({
  onResults,
  modelLoaded,
  filteredClass
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [detections, setDetections] = useState<ObjectDetection[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragCounter = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const handleImageUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (JPEG, PNG, etc.)');
      return;
    }
    
    setError(null);
    const reader = new FileReader();
    
    reader.onload = (e) => {
      if (e.target?.result) {
        setImageUrl(e.target.result as string);
      }
    };
    
    reader.onerror = () => {
      setError('Failed to read the image file');
    };
    
    reader.readAsDataURL(file);
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleImageUpload(files[0]);
    }
  };
  
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  };
  
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setIsDragging(false);
    }
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    dragCounter.current = 0;
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleImageUpload(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };
  
  const clearImage = () => {
    setImageUrl(null);
    setDetections([]);
    onResults([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const processImage = async () => {
    if (!imageRef.current || !canvasRef.current || !modelLoaded) {
      return;
    }
    
    try {
      setIsProcessing(true);
      
      const image = imageRef.current;
      const canvas = canvasRef.current;
      
      // Set canvas dimensions to match the displayed image size
      const container = containerRef.current;
      if (!container) return;
      
      const containerRect = container.getBoundingClientRect();
      const scale = Math.min(
        containerRect.width / image.naturalWidth,
        containerRect.height / image.naturalHeight
      );
      
      canvas.width = image.naturalWidth * scale;
      canvas.height = image.naturalHeight * scale;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Run detection
      const results = await detectObjects(image);
      setDetections(results);
      onResults(results);
      
      // Scale the detections to match the displayed size
      const scaledResults = results.map(result => ({
        ...result,
        bbox: [
          result.bbox[0] * scale,
          result.bbox[1] * scale,
          result.bbox[2] * scale,
          result.bbox[3] * scale
        ] as [number, number, number, number]
      }));
      
      // Draw detections on canvas
      drawDetections(ctx, scaledResults, filteredClass);
    } catch (err) {
      console.error('Detection error:', err);
      setError('Error detecting objects in the image');
    } finally {
      setIsProcessing(false);
    }
  };
  
  useEffect(() => {
    if (canvasRef.current && detections.length > 0) {
      processImage();
    }
  }, [filteredClass]);
  
  useEffect(() => {
    if (imageUrl && imageRef.current && imageRef.current.complete && modelLoaded) {
      processImage();
    }
  }, [imageUrl, modelLoaded]);
  
  useEffect(() => {
    const handleResize = () => {
      if (imageUrl) {
        processImage();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imageUrl]);
  
  const downloadImage = () => {
    if (!canvasRef.current || !imageRef.current) return;
    
    const canvas = document.createElement('canvas');
    canvas.width = imageRef.current.naturalWidth;
    canvas.height = imageRef.current.naturalHeight;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.drawImage(imageRef.current, 0, 0);
    drawDetections(ctx, detections, filteredClass);
    
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'detection-result.png';
    link.click();
  };
  
  return (
    <div 
      className="relative flex-1 flex flex-col bg-black rounded-2xl overflow-hidden"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {!imageUrl ? (
        <div className={`flex-1 flex flex-col items-center justify-center p-8 bg-gradient-to-b from-surface-100 to-surface-50 transition-colors ${
          isDragging ? 'bg-primary-50 from-primary-100/50 to-primary-50/50' : ''
        }`}>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          
          <div className="w-24 h-24 rounded-3xl bg-white shadow-lg flex items-center justify-center mb-6">
            <ImageIcon size={48} className="text-primary-400" />
          </div>
          
          <h3 className="text-xl font-semibold mb-2 text-surface-900">Upload an Image</h3>
          <p className="text-surface-600 text-center mb-8 max-w-md">
            Drag & drop an image here, or click the button below to select one from your device
          </p>
          
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={!modelLoaded}
            className="neu-button text-primary-600 font-medium hover:bg-primary-50 active:bg-primary-100"
          >
            <Upload size={18} className="mr-2" />
            <span>Select Image</span>
          </button>
          
          {isDragging && (
            <div className="absolute inset-4 border-2 border-primary-400 border-dashed rounded-xl flex items-center justify-center bg-primary-50/30">
              <p className="text-primary-600 font-medium">Drop your image here</p>
            </div>
          )}
        </div>
      ) : (
        <div 
          ref={containerRef}
          className="relative flex-1 flex items-center justify-center bg-surface-50"
        >
          {error && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-surface-50/95 backdrop-blur-sm">
              <div className="text-center max-w-md mx-auto p-6">
                <div className="w-16 h-16 rounded-full bg-accent-50 flex items-center justify-center mx-auto mb-4">
                  <AlertCircle size={32} className="text-accent-500" />
                </div>
                <p className="text-accent-600 mb-6">{error}</p>
                <button
                  onClick={clearImage}
                  className="neu-button text-accent-600 font-medium hover:bg-accent-50"
                >
                  Try Another Image
                </button>
              </div>
            </div>
          )}
          
          {isProcessing && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-surface-900/70 backdrop-blur-sm">
              <div className="text-center text-white">
                <div className="inline-block w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-lg font-medium">Analyzing image...</p>
                <p className="text-surface-200 mt-2">This may take a moment</p>
              </div>
            </div>
          )}
          
          <img
            ref={imageRef}
            src={imageUrl}
            alt="Uploaded"
            className="max-h-full max-w-full object-contain"
            onLoad={processImage}
          />
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0"
          />
          
          <button
            onClick={clearImage}
            className="absolute top-4 right-4 p-2 bg-surface-800/70 backdrop-blur-sm text-white rounded-full hover:bg-surface-700/80 transition-colors"
            aria-label="Remove image"
          >
            <X size={20} />
          </button>
        </div>
      )}
      
      {imageUrl && detections.length > 0 && (
        <div className="p-4 bg-surface-50 border-t border-surface-200">
          <button
            onClick={downloadImage}
            className="neu-button text-primary-600 font-medium w-full sm:w-auto hover:bg-primary-50 active:bg-primary-100"
          >
            <Download size={18} className="mr-2" />
            <span>Download Result</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploadView;
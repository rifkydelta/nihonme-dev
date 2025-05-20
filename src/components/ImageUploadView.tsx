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
  const dragCounter = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const handleImageUpload = (file: File) => {
    // Validate file type
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
      const ctx = canvas.getContext('2d');
      
      if (!ctx) return;
      
      // Set canvas dimensions to match image
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      
      // Run detection
      const results = await detectObjects(image);
      setDetections(results);
      onResults(results);
      
      // Draw detections on canvas
      drawDetections(ctx, results, filteredClass);
    } catch (err) {
      console.error('Detection error:', err);
      setError('Error detecting objects in the image');
    } finally {
      setIsProcessing(false);
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
  
  // Process image when it's loaded
  useEffect(() => {
    if (imageUrl && imageRef.current && imageRef.current.complete && modelLoaded) {
      processImage();
    }
  }, [imageUrl, modelLoaded]);
  
  // Download image with detections
  const downloadImage = () => {
    if (!canvasRef.current) return;
    
    // Create a combined canvas with the original image and detections
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx || !imageRef.current) return;
    
    canvas.width = imageRef.current.naturalWidth;
    canvas.height = imageRef.current.naturalHeight;
    
    // Draw the original image
    ctx.drawImage(imageRef.current, 0, 0);
    
    // Draw the detections from our detection canvas
    ctx.drawImage(canvasRef.current, 0, 0);
    
    // Convert to data URL and trigger download
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'detection-result.png';
    link.click();
  };
  
  return (
    <div 
      className="relative flex-1 flex flex-col bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {!imageUrl ? (
        <div className={`flex-1 flex flex-col items-center justify-center p-6 transition-colors ${
          isDragging ? 'bg-blue-50 dark:bg-blue-900/20 border-2 border-dashed border-blue-300 dark:border-blue-700' : ''
        }`}>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          
          <ImageIcon size={48} className="text-gray-400 mb-4" />
          <h3 className="text-lg font-medium mb-2">Upload an Image</h3>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-4">
            Drag & drop an image here, or click the button below to select one
          </p>
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={!modelLoaded}
            className={`flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors ${
              !modelLoaded ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <Upload size={18} />
            <span>Select Image</span>
          </button>
        </div>
      ) : (
        <div className="relative flex-1 flex items-center justify-center">
          {error && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-red-50 dark:bg-red-900/20 p-6">
              <div className="text-center">
                <p className="text-red-700 dark:text-red-300 mb-4">{error}</p>
                <button
                  onClick={clearImage}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Try Another Image
                </button>
              </div>
            </div>
          )}
          
          {isProcessing && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-gray-900/50">
              <div className="text-center text-white">
                <div className="inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p>Processing image...</p>
              </div>
            </div>
          )}
          
          <img
            ref={imageRef}
            src={imageUrl}
            alt="Uploaded"
            className="max-h-full max-w-full"
            onLoad={processImage}
          />
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full"
          />
          
          <button
            onClick={clearImage}
            className="absolute top-4 right-4 p-2 bg-gray-800/70 text-white rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Remove image"
          >
            <X size={20} />
          </button>
        </div>
      )}
      
      {imageUrl && detections.length > 0 && (
        <div className="p-4 flex justify-end">
          <button
            onClick={downloadImage}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <Download size={18} />
            <span>Download Result</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploadView;
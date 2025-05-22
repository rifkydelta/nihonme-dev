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
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [detections, setDetections] = useState<ObjectDetection[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragCounter = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleImageUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (JPEG, PNG, etc.)');
      return;
    }
    
    setError(null);
    setDetections([]);
    onResults([]);
    setIsImageLoaded(false);
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
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleImageUpload(files[0]);
      e.dataTransfer.clearData();
    }
  };
  
  const clearImage = () => {
    setImageUrl(null);
    setIsImageLoaded(false);
    setDetections([]);
    onResults([]);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };
  
  const processImage = async () => {
    if (!imageRef.current || !canvasRef.current || !modelLoaded || !imageUrl || !isImageLoaded) {
      console.log("processImage: Aborting, conditions not met", { modelLoaded, imageUrl, isImageLoaded, imageRef: !!imageRef.current, canvasRef: !!canvasRef.current });
      return;
    }
    
    if (isProcessing) return;
    setIsProcessing(true);
    console.log("processImage: Starting");
    
    try {
      const image = imageRef.current;
      const canvas = canvasRef.current;
      const container = containerRef.current;

      if (!container) {
        console.warn("processImage: Container ref not found.");
        setIsProcessing(false);
        return;
      }
      if (image.naturalWidth === 0 || image.naturalHeight === 0) {
        console.warn("processImage: Image natural dimensions are zero. Image might not be fully loaded or is broken.");
        setIsProcessing(false);
        return;
      }

      const containerRect = container.getBoundingClientRect();
      if (containerRect.width === 0 || containerRect.height === 0) {
        console.warn("processImage: Container dimensions are zero. Cannot scale image for canvas.");
        setIsProcessing(false);
        return;
      }

      const scale = Math.min(
        containerRect.width / image.naturalWidth,
        containerRect.height / image.naturalHeight
      );
      
      canvas.width = image.naturalWidth * scale;
      canvas.height = image.naturalHeight * scale;

      if (canvas.width === 0 || canvas.height === 0) {
          console.warn("processImage: Calculated canvas dimensions are zero. Skipping detection.");
          setIsProcessing(false);
          return;
      }
      
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.warn("processImage: Could not get 2D context from canvas.");
        setIsProcessing(false);
        return;
      }
      
      const results = await detectObjects(image);
      console.log("processImage: Detection results:", results);
      
      setDetections(results);
      onResults(results);
      
      const scaledResults = results.map(result => ({
        ...result,
        bbox: [
          result.bbox[0] * scale,
          result.bbox[1] * scale,
          result.bbox[2] * scale,
          result.bbox[3] * scale
        ] as [number, number, number, number]
      }));
      
      drawDetections(ctx, scaledResults, filteredClass);
    } catch (err) {
      console.error('Detection error in processImage:', err);
      setError('Error detecting objects in the image');
    } finally {
      setIsProcessing(false);
      console.log("processImage: Finished");
    }
  };
  
  useEffect(() => {
    if (imageUrl && isImageLoaded && modelLoaded) {
      console.log("useEffect [imageUrl, isImageLoaded, modelLoaded]: All conditions met, calling processImage.");
      processImage();
    } else {
      console.log("useEffect [imageUrl, isImageLoaded, modelLoaded]: Conditions NOT met.", { imageUrl:!!imageUrl, isImageLoaded, modelLoaded });
    }
  }, [imageUrl, isImageLoaded, modelLoaded]);
  
  useEffect(() => {
    if (canvasRef.current && detections.length > 0 && imageUrl && isImageLoaded) {
        console.log("useEffect [filteredClass, detections, imageUrl, isImageLoaded, isMobile]: Redrawing for filter change.");
        const image = imageRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const container = containerRef.current;

        if (ctx && image && container && image.naturalWidth > 0 && image.naturalHeight > 0) {
            const containerRect = container.getBoundingClientRect();
            if (containerRect.width === 0 || containerRect.height === 0) return;

            const scale = Math.min(
                containerRect.width / image.naturalWidth,
                containerRect.height / image.naturalHeight
            );

            canvas.width = image.naturalWidth * scale;
            canvas.height = image.naturalHeight * scale;
            if (canvas.width === 0 || canvas.height === 0) return;
            
            const scaledResults = detections.map(result => ({
                ...result,
                bbox: [
                    result.bbox[0] * scale,
                    result.bbox[1] * scale,
                    result.bbox[2] * scale,
                    result.bbox[3] * scale
                ] as [number, number, number, number]
            }));
            drawDetections(ctx, scaledResults, filteredClass);
        }
    }
  }, [filteredClass, detections, imageUrl, isImageLoaded, isMobile]);
  
  useEffect(() => {
    const handleResize = () => {
      if (imageUrl && isImageLoaded && modelLoaded) {
        console.log("handleResize: Conditions met, calling processImage after delay.");
        setTimeout(() => processImage(), 100);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imageUrl, isImageLoaded, modelLoaded]);
  
  return (
    <div 
      className="relative flex-1 flex flex-col bg-black rounded-2xl overflow-hidden"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {!imageUrl ? (
        <div 
          className={`relative flex-1 flex flex-col items-center justify-center p-6 bg-surface-50 transition-all duration-300 ${
            isMobile ? 'aspect-[3/4]' : 'aspect-[16/9]'
          } ${isDragging ? 'ring-4 ring-primary-500 bg-primary-50 scale-[0.99]' : ''}`}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          
          {isDragging ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary-50/70 backdrop-blur-sm animate-pulse">
              <Upload size={64} className="text-primary-600 mb-4 animate-bounce" />
              <h3 className="text-xl font-medium text-primary-700">Drop image here</h3>
            </div>
          ) : (
            <>
              <ImageIcon size={48} className="text-surface-400 mb-4" />
              <h3 className="text-lg font-medium mb-2 text-surface-900">Upload an Image</h3>
              <p className="text-surface-600 text-center mb-4">
                Drag & drop an image here, or click the button below to select one
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={!modelLoaded}
                className="neu-button text-primary-600 font-medium inline-flex items-center"
              >
                <Upload size={18} className="mr-2" />
                Select Image
              </button>
            </>
          )}
        </div>
      ) : (
        <>
          <div 
            ref={containerRef}
            className={`relative flex-1 flex items-center justify-center ${
              isMobile ? 'aspect-[3/4]' : 'aspect-[16/9]'
            }`}
          >
            <img 
              ref={imageRef}
              src={imageUrl} 
              alt="Uploaded" 
              className="max-w-full max-h-full object-contain"
              onLoad={() => {
                console.log("img.onLoad: Image has loaded.");
                setIsImageLoaded(true);
              }}
              onError={() => {
                console.error("img.onError: Failed to load image.");
                setError("Failed to load the image. It might be corrupt or an unsupported format.");
                setIsImageLoaded(false);
              }}
            />
            <canvas
              ref={canvasRef}
              className="absolute top-0 left-0 w-full h-full"
            />
            {isProcessing && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="inline-block w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            {isMobile && (
              <button
                onClick={clearImage}
                className="absolute top-4 right-4 p-2 bg-surface-800/70 text-white rounded-full hover:bg-surface-700 transition-colors z-10"
                aria-label="Clear image"
              >
                <X size={20} />
              </button>
            )}
          </div>
          <div className="p-4 bg-surface-50 flex flex-col sm:flex-row gap-2 justify-center">
            <button
              onClick={clearImage}
              className="neu-button text-accent-600 flex-1 sm:flex-initial min-w-[120px] inline-flex items-center justify-center"
            >
              <X size={18} className="mr-2" />
              Clear Image
            </button>
          </div>
        </>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center flex-col p-6 z-20 bg-surface-50">
          <X size={32} className="text-accent-500 mb-4" />
          <h3 className="text-lg font-medium text-surface-800 mb-2">Error</h3>
          <p className="text-surface-600 text-center mb-4">{error}</p>
          <button
            onClick={clearImage}
            className="neu-button text-primary-600 font-medium"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploadView;
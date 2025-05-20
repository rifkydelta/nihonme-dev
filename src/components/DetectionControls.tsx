import React from 'react';
import { Camera, Upload } from 'lucide-react';

interface DetectionControlsProps {
  mode: 'webcam' | 'upload';
  onModeChange: (mode: 'webcam' | 'upload') => void;
  modelLoaded: boolean;
}

const DetectionControls: React.FC<DetectionControlsProps> = ({ 
  mode, 
  onModeChange,
  modelLoaded
}) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => onModeChange('webcam')}
        disabled={!modelLoaded}
        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
          mode === 'webcam' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
        } ${!modelLoaded ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <Camera size={18} />
        <span>Webcam</span>
      </button>
      
      <button
        onClick={() => onModeChange('upload')}
        disabled={!modelLoaded}
        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
          mode === 'upload' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
        } ${!modelLoaded ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <Upload size={18} />
        <span>Upload</span>
      </button>
    </div>
  );
};

export default DetectionControls;
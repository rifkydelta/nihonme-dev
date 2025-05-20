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
    <div className="flex w-full gap-2">
      <button
        onClick={() => onModeChange('webcam')}
        disabled={!modelLoaded}
        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
          mode === 'webcam' 
            ? 'bg-primary-500 text-white shadow-lg' 
            : 'bg-surface-100 text-surface-700 shadow-neu'
        } ${!modelLoaded ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <Camera size={20} />
        <span>Webcam</span>
      </button>
      
      <button
        onClick={() => onModeChange('upload')}
        disabled={!modelLoaded}
        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
          mode === 'upload' 
            ? 'bg-primary-500 text-white shadow-lg' 
            : 'bg-surface-100 text-surface-700 shadow-neu'
        } ${!modelLoaded ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <Upload size={20} />
        <span>Upload</span>
      </button>
    </div>
  );
};

export default DetectionControls;
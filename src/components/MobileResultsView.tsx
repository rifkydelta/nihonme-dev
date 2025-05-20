import React from 'react';
import { ObjectDetection } from '../types';
import { getConfidenceColor } from '../utils/detectionUtils';
import { ChevronUp } from 'lucide-react';

interface MobileResultsViewProps {
  results: ObjectDetection[];
  onFilterChange: (className: string | null) => void;
  filteredClass: string | null;
}

const MobileResultsView: React.FC<MobileResultsViewProps> = ({
  results
}) => {
  if (results.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="glass-panel mx-4 mb-4 overflow-hidden">
        <div className="p-3 flex items-center justify-between border-b border-white/10">
          <span className="text-sm font-medium text-surface-700">
            {results.length} Detection{results.length !== 1 ? 's' : ''}
          </span>
          <ChevronUp size={16} className="text-surface-500" />
        </div>
        
        <div className="max-h-[30vh] overflow-y-auto">
          {results.map((result, index) => (
            <div
              key={index}
              className="p-4 border-b border-white/10 last:border-0 glow-effect"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    result.score > 0.7 
                      ? 'bg-green-500' 
                      : result.score > 0.5 
                        ? 'bg-yellow-500' 
                        : 'bg-red-500'
                  }`} />
                  <span className="font-medium capitalize text-surface-800">
                    {result.class}
                  </span>
                </div>
                <span className={`text-sm font-semibold ${getConfidenceColor(result.score)}`}>
                  {Math.round(result.score * 100)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileResultsView;
import React from 'react';
import { ObjectDetection } from '../types';
import { getConfidenceColor } from '../utils/detectionUtils';

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
    <div className="fixed bottom-0 left-0 right-0 p-4 space-y-2 max-h-[30vh] overflow-y-auto bg-surface-50/80 backdrop-blur-sm">
      {results.map((result, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-xl shadow-sm"
        >
          <div className="flex items-center justify-between">
            <span className="font-medium capitalize text-surface-900">
              {result.class}
            </span>
            <span className={`font-medium ${getConfidenceColor(result.score)}`}>
              {Math.round(result.score * 100)}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileResultsView;
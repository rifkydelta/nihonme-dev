import React, { useState } from 'react';
import { ChevronUp, Filter, ArrowUpDown } from 'lucide-react';
import { ObjectDetection } from '../types';
import { getConfidenceColor } from '../utils/detectionUtils';

interface MobileResultsViewProps {
  results: ObjectDetection[];
  onFilterChange: (className: string | null) => void;
  filteredClass: string | null;
}

const MobileResultsView: React.FC<MobileResultsViewProps> = ({
  results,
  onFilterChange,
  filteredClass,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const uniqueClasses = Array.from(new Set(results.map(result => result.class)));
  
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-surface-50 rounded-t-3xl shadow-lg transition-transform duration-300 transform ${
        isExpanded ? 'h-screen translate-y-0' : 'translate-y-[65%]'
      }`}
    >
      {/* Handle */}
      <div 
        className="h-16 flex items-center justify-center cursor-pointer"
        onClick={handleExpandClick}
      >
        <div className="w-12 h-1 bg-surface-300 rounded-full mb-2"></div>
        <div className="absolute left-4 text-surface-900 font-medium">
          {results.length} {results.length === 1 ? 'object' : 'objects'}
        </div>
        <ChevronUp 
          size={20} 
          className={`absolute right-4 text-surface-600 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </div>

      {/* Content */}
      <div className="px-4 pb-safe-area-inset-bottom overflow-y-auto h-[calc(100%-4rem)]">
        {/* Filters */}
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2 flex items-center text-surface-800">
            <Filter size={16} className="mr-1" />
            Filter by Class
          </h3>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onFilterChange(null)}
              className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                filteredClass === null
                  ? 'bg-primary-500 text-white'
                  : 'bg-surface-200 hover:bg-surface-300'
              }`}
            >
              All ({results.length})
            </button>
            
            {uniqueClasses.map(className => (
              <button
                key={className}
                onClick={() => onFilterChange(className)}
                className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                  filteredClass === className
                    ? 'bg-primary-500 text-white'
                    : 'bg-surface-200 hover:bg-surface-300'
                }`}
              >
                {className} ({results.filter(r => r.class === className).length})
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="space-y-2">
          {results
            .filter(result => filteredClass === null || result.class === filteredClass)
            .map((result, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-xl shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                    <span className="font-medium capitalize text-surface-900">
                      {result.class}
                    </span>
                  </div>
                  <div className={`font-medium ${getConfidenceColor(result.score)}`}>
                    {Math.round(result.score * 100)}%
                  </div>
                </div>
                <div className="mt-1 text-xs text-surface-600">
                  Position: x:{Math.round(result.bbox[0])}, y:{Math.round(result.bbox[1])}
                </div>
              </div>
            ))}
        </div>

        {results.length === 0 && (
          <div className="flex items-center justify-center py-8">
            <p className="text-surface-600 text-center">
              No objects detected yet. Try pointing your camera at different objects.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileResultsView;
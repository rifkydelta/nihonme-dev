import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { getConfidenceColor } from '../utils/detectionUtils';
import { ObjectDetection } from '../types';
import { Filter, ArrowUpDown } from 'lucide-react';

interface ResultsListProps {
  results: ObjectDetection[];
  onFilterChange: (className: string | null) => void;
  filteredClass: string | null;
}

const ResultsList: React.FC<ResultsListProps> = ({
  results,
  onFilterChange,
  filteredClass,
}) => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState<'confidence' | 'class'>('confidence');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  
  const uniqueClasses = useMemo(() => {
    const classes = new Set(results.map(result => result.class));
    return Array.from(classes);
  }, [results]);
  
  const toggleSort = (field: 'confidence' | 'class') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder(field === 'confidence' ? 'desc' : 'asc');
    }
  };
  
  const sortedResults = useMemo(() => {
    return [...results].sort((a, b) => {
      if (sortBy === 'confidence') {
        return sortOrder === 'asc' ? a.score - b.score : b.score - a.score;
      } else {
        return sortOrder === 'asc'
          ? a.class.localeCompare(b.class)
          : b.class.localeCompare(a.class);
      }
    });
  }, [results, sortBy, sortOrder]);
  
  const classCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    results.forEach(result => {
      counts[result.class] = (counts[result.class] || 0) + 1;
    });
    return counts;
  }, [results]);

  const handleObjectClick = (objectClass: string) => {
    navigate(`/object/${objectClass}`);
  };
  
  return (
    <div className="h-full flex flex-col bg-surface-50 rounded-2xl shadow-neu">
      <div className="p-4 border-b border-surface-200">
        <h2 className="text-lg font-semibold mb-1 text-surface-900">Detection Results</h2>
        <p className="text-sm text-surface-600">
          {results.length === 0 
            ? 'No objects detected' 
            : `${results.length} object${results.length !== 1 ? 's' : ''} found`}
        </p>
      </div>
      
      {results.length > 0 && (
        <>
          <div className="p-4 border-b border-surface-200 bg-surface-100">
            <h3 className="text-sm font-medium mb-2 flex items-center text-surface-800">
              <Filter size={16} className="mr-1" />
              Filter by Class
            </h3>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onFilterChange(null)}
                className={`px-2 py-1 text-xs rounded-full transition-colors ${
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
                  className={`px-2 py-1 text-xs rounded-full transition-colors ${
                    filteredClass === className
                      ? 'bg-primary-500 text-white'
                      : 'bg-surface-200 hover:bg-surface-300'
                  }`}
                >
                  {className} ({classCounts[className]})
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-2 border-b border-surface-200">
            <div className="flex items-center text-sm font-medium text-surface-600 px-2">
              <button
                onClick={() => toggleSort('class')}
                className="flex items-center flex-1"
              >
                Class
                {sortBy === 'class' && (
                  <ArrowUpDown size={14} className="ml-1" />
                )}
              </button>
              <button
                onClick={() => toggleSort('confidence')}
                className="flex items-center w-24 justify-end"
              >
                Confidence
                {sortBy === 'confidence' && (
                  <ArrowUpDown size={14} className="ml-1" />
                )}
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {sortedResults
              .filter(result => filteredClass === null || result.class === filteredClass)
              .map((result, index) => (
                <button
                  key={index}
                  onClick={() => handleObjectClick(result.class)}
                  className="w-full text-left p-3 border-b border-surface-200 last:border-0 hover:bg-surface-100 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                      <span className="font-medium capitalize text-surface-900">{result.class}</span>
                    </div>
                    <div className={`font-medium ${getConfidenceColor(result.score)}`}>
                      {Math.round(result.score * 100)}%
                    </div>
                  </div>
                  <div className="mt-1 text-xs text-surface-600">
                    Position: x:{Math.round(result.bbox[0])}, y:{Math.round(result.bbox[1])}
                  </div>
                </button>
              ))}
          </div>
        </>
      )}
      
      {results.length === 0 && (
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <Filter size={24} className="mx-auto mb-2 text-surface-400" />
            <p className="text-surface-600">
              No objects detected yet. Try pointing your camera at different objects or upload an image.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsList;
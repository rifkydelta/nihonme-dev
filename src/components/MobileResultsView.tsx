import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ObjectDetection } from '../types';
import { getConfidenceColor } from '../utils/detectionUtils';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { objectDetailsMap } from '../utils/objectData';

interface MobileResultsViewProps {
  results: ObjectDetection[];
  onFilterChange: (className: string | null) => void;
  filteredClass: string | null;
}

const MobileResultsView: React.FC<MobileResultsViewProps> = ({
  results,
  filteredClass
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('MobileResultsView received results:', results);
  }, [results]);

  if (results.length === 0) return null;

  const handleObjectClick = (objectClass: string) => {
    navigate(`/benda/${objectClass}`);
    setIsExpanded(false);
  };

  return (
    <div id="detectedItems" className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div 
        className={`glass-panel overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[70vh]' : 'max-h-[120px]'
        }`}
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-4 flex items-center justify-between bg-gradient-to-b from-primary-500/10 to-transparent"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {results.slice(0, 3).map((result, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full ring-2 ring-white ${
                    result.score > 0.7 
                      ? 'bg-green-500' 
                      : result.score > 0.5 
                        ? 'bg-yellow-500' 
                        : 'bg-red-500'
                  }`}
                />
              ))}
            </div>
            <span className="font-medium text-surface-800">
              {results.length} Detection{results.length !== 1 ? 's' : ''}
            </span>
          </div>
          {isExpanded ? (
            <ChevronDown size={20} className="text-surface-600" />
          ) : (
            <ChevronUp size={20} className="text-surface-600" />
          )}
        </button>

        <div className="divide-y divide-white/10">
          {results
              .filter(result => filteredClass === null || result.class === filteredClass)
              .map((result, index) => (
            <Link
              key={index}
              to={`/benda/${result.class}`}
              state={{ from: 'detection' }}
              className="group bg-white/50 rounded-xl overflow-hidden transition-all duration-300
                       hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1
                       active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-0
                       border border-white/30"
            >
              <div className="flex items-center justify-between ml-4">
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    result.score > 0.7 
                      ? 'bg-green-500 shadow-lg shadow-green-500/20' 
                      : result.score > 0.5 
                        ? 'bg-yellow-500 shadow-lg shadow-yellow-500/20' 
                        : 'bg-red-500 shadow-lg shadow-red-500/20'
                  }`} />
                  <span className="font-medium capitalize text-surface-800">
                    {result.class}
                    {objectDetailsMap[result.class] && 
                      ` (${objectDetailsMap[result.class].indonesian})`
                    }
                  </span>
                </div>
                <div className={`px-2 py-1 rounded-full text-sm font-semibold ${
                  result.score > 0.7 
                    ? 'bg-green-50 text-green-700' 
                    : result.score > 0.5 
                      ? 'bg-yellow-50 text-yellow-700' 
                      : 'bg-red-50 text-red-700'
                } mr-3`}>
                  {Math.round(result.score * 100)}%
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileResultsView;
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Volume2 } from 'lucide-react';
import { getObjectDetails } from '../utils/objectDetails';

const ObjectDetailPage: React.FC = () => {
  const { label } = useParams<{ label: string }>();
  const details = label ? getObjectDetails(label) : null;
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      
      setIsPlaying(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!details) {
    return (
      <div className="min-h-screen bg-surface-50 p-4">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700">
            <ArrowLeft size={20} className="mr-2" />
            Back to Detection
          </Link>
          <div className="mt-8 text-center">
            <p className="text-surface-600">Object details not found.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-50 p-4">
      <div className="container mx-auto max-w-2xl">
        <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700">
          <ArrowLeft size={20} className="mr-2" />
          Back to Detection
        </Link>

        <div className="mt-8 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-surface-900">{details.japanese}</h1>
                <button
                  onClick={() => speak(details.japanese)}
                  disabled={isPlaying}
                  className={`p-2 rounded-full transition-colors ${
                    isPlaying 
                      ? 'bg-primary-100 text-primary-600' 
                      : 'hover:bg-surface-100 text-surface-600 hover:text-primary-600'
                  }`}
                  aria-label="Play pronunciation"
                >
                  <Volume2 size={20} className={isPlaying ? 'animate-pulse' : ''} />
                </button>
              </div>
              <div className="mt-2 flex items-baseline gap-4">
                <p className="text-lg text-primary-600 font-medium">{details.romaji}</p>
                <p className="text-surface-500 text-sm">Reading</p>
              </div>
            </div>

            <div className="aspect-video bg-surface-100 rounded-lg mb-6 overflow-hidden">
              <img 
                src={details.imageUrl} 
                alt={details.japanese}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-lg font-semibold text-surface-900 mb-3">Example Sentences</h2>
                {details.sentences.map((sentence, index) => (
                  <div key={index} className="mb-4 p-4 bg-surface-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <p className="text-surface-900 mb-1">{sentence.japanese}</p>
                      <button
                        onClick={() => speak(sentence.japanese)}
                        disabled={isPlaying}
                        className={`p-1.5 rounded-full transition-colors ${
                          isPlaying 
                            ? 'bg-primary-100 text-primary-600' 
                            : 'hover:bg-surface-100 text-surface-600 hover:text-primary-600'
                        }`}
                        aria-label="Play sentence pronunciation"
                      >
                        <Volume2 size={16} className={isPlaying ? 'animate-pulse' : ''} />
                      </button>
                    </div>
                    <p className="text-primary-600 text-sm mb-1">{sentence.romaji}</p>
                    <p className="text-surface-600 text-sm">{sentence.english}</p>
                  </div>
                ))}
              </section>

              <section>
                <h2 className="text-lg font-semibold text-surface-900 mb-3">Additional Information</h2>
                <p className="text-surface-600">{details.description}</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectDetailPage;
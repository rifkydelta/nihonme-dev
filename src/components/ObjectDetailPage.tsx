import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Volume2, ExternalLink } from 'lucide-react';
import { getObjectDetails } from '../utils/objectDetails';

const ObjectDetailPage: React.FC = () => {
  const { label } = useParams<{ label: string }>();
  const details = label ? getObjectDetails(label) : null;
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeAudioIndex, setActiveAudioIndex] = useState<number | null>(null);

  const speak = (text: string, index?: number) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.onend = () => {
        setIsPlaying(false);
        setActiveAudioIndex(null);
      };
      utterance.onerror = () => {
        setIsPlaying(false);
        setActiveAudioIndex(null);
      };
      
      setIsPlaying(true);
      if (typeof index === 'number') {
        setActiveAudioIndex(index);
      }
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!details) {
    return (
      <div className="min-h-screen bg-surface-50 p-4">
        <div className="container mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 neu-button"
          >
            <ArrowLeft size={20} className="mr-2" />
            Kembali ke Deteksi
          </Link>
          <div className="mt-8 text-center">
            <p className="text-surface-600">Detail objek tidak ditemukan.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-50 p-4 pb-20">
      <div className="container mx-auto max-w-3xl">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary-600 hover:text-primary-700 neu-button"
        >
          <ArrowLeft size={20} className="mr-2" />
          Kembali ke Deteksi
        </Link>

        <div className="mt-8 neu-card">
          {/* Translation Section */}
          <div className="flex items-center gap-3 mb-8">
            <h1 className="text-3xl font-bold text-surface-900">
              {details.japanese} ({details.indonesian})
            </h1>
            <button
              onClick={() => speak(details.japanese)}
              disabled={isPlaying}
              className={`p-2 rounded-full transition-all ${
                isPlaying 
                  ? 'bg-primary-100 text-primary-600 shadow-inner' 
                  : 'bg-surface-100 hover:bg-surface-200 text-surface-600 hover:text-primary-600'
              }`}
              aria-label="Putar pelafalan"
            >
              <Volume2 size={18} className={isPlaying ? 'animate-pulse' : ''} />
            </button>
          </div>
          <p className="text-xl text-primary-600 font-medium mb-8">{details.romaji}</p>

          {/* Image Section */}
          <div className="relative rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src={details.imageUrl} 
              alt={details.japanese}
              className="w-full aspect-video object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Example Sentences Section */}
            <section>
              <h2 className="text-xl font-semibold text-surface-900 mb-4">
                Contoh Kalimat
              </h2>
              <div className="space-y-4">
                {details.sentences.map((sentence, index) => (
                  <div 
                    key={index} 
                    className="bg-surface-100 rounded-xl p-4 hover:bg-surface-200/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <p className="text-lg text-surface-900 mb-2 leading-relaxed">
                          {sentence.japanese}
                        </p>
                        <p className="text-primary-600 text-sm mb-1.5">{sentence.romaji}</p>
                        <p className="text-surface-600 text-sm">{sentence.indonesian}</p>
                      </div>
                      <button
                        onClick={() => speak(sentence.japanese, index)}
                        disabled={isPlaying}
                        className={`p-2 rounded-full transition-all flex-shrink-0 ${
                          activeAudioIndex === index
                            ? 'bg-primary-100 text-primary-600 shadow-inner' 
                            : 'bg-surface-50 hover:bg-surface-200 text-surface-600 hover:text-primary-600'
                        }`}
                        aria-label="Putar pelafalan kalimat"
                      >
                        <Volume2 
                          size={18} 
                          className={activeAudioIndex === index ? 'animate-pulse' : ''} 
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Additional Information Section */}
            <section>
              <h2 className="text-xl font-semibold text-surface-900 mb-4">
                Informasi Tambahan
              </h2>
              <div className="bg-surface-100 rounded-xl p-6">
                <p className="text-surface-600 leading-relaxed">
                  {details.description}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectDetailPage;
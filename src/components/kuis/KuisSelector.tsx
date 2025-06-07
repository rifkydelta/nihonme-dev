import React from 'react';
import { KuisSelectorProps } from './types';

const KuisSelector: React.FC<KuisSelectorProps> = ({ onSelectKuis }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Pilih Jenis Kuis
        </h1>
        <p className="text-gray-600 text-lg">
          Pilih jenis kuis yang ingin kamu pelajari
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <button
          onClick={() => onSelectKuis('hiragana')}
          className="group relative bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
              <span className="text-2xl font-bold text-white">あ</span>
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-white mb-1">Hiragana</h2>
              <p className="text-sm text-white/80">Belajar huruf Hiragana dasar bahasa Jepang</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => onSelectKuis('katakana')}
          className="group relative bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
              <span className="text-2xl font-bold text-white">ア</span>
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-white mb-1">Katakana</h2>
              <p className="text-sm text-white/80">Belajar huruf Katakana dasar bahasa Jepang</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => onSelectKuis('kosakata')}
          className="group relative bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
              <span className="text-2xl text-white">📚</span>
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-white mb-1">Kosakata</h2>
              <p className="text-sm text-white/80">Belajar kosakata bahasa Jepang sehari-hari</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default KuisSelector; 
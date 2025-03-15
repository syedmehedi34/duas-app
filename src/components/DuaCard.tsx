import React, { useState } from 'react';
import { Dua } from '../types/dua';
import { Play, Pause } from 'lucide-react';

interface DuaCardProps {
  dua: Dua;
}

export const DuaCard: React.FC<DuaCardProps> = ({ dua }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-gray-800">{dua.title}</h3>
        <button
          onClick={toggleAudio}
          className="p-2 rounded-full bg-emerald-100 hover:bg-emerald-200 transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-emerald-600" />
          ) : (
            <Play className="w-5 h-5 text-emerald-600" />
          )}
        </button>
      </div>
      
      <div className="mt-4 space-y-3">
        <p className="text-2xl text-right font-arabic">{dua.arabic}</p>
        <p className="text-gray-600 italic">{dua.transliteration}</p>
        <p className="text-gray-700">{dua.translation}</p>
        {dua.reference && (
          <p className="text-sm text-gray-500">Reference: {dua.reference}</p>
        )}
      </div>

      <audio ref={audioRef} src={dua.audioUrl} onEnded={() => setIsPlaying(false)} />
    </div>
  );
};
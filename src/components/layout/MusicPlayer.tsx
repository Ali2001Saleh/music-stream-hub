
import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(45);
  const [isLiked, setIsLiked] = useState(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Dummy current song
  const currentSong = {
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: 214, // in seconds
    albumArt: "https://images.unsplash.com/photo-1578270336544-1ac43702725a?q=80&w=80&auto=format&fit=crop"
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-spotify-darker border-t border-gray-800 px-4 flex items-center z-10">
      {/* Song Info */}
      <div className="flex items-center w-1/4">
        <img 
          src={currentSong.albumArt} 
          alt={`${currentSong.title} album art`} 
          className="h-14 w-14 rounded-md mr-3"
        />
        <div className="flex flex-col">
          <span className="text-sm text-white font-medium">{currentSong.title}</span>
          <span className="text-xs text-spotify-text">{currentSong.artist}</span>
        </div>
        <button 
          className="ml-4" 
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart 
            className={cn(
              "h-5 w-5 transition-colors", 
              isLiked ? "fill-spotify-purple text-spotify-purple" : "text-spotify-text"
            )} 
          />
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="flex items-center justify-center space-x-4 mb-2">
          <button className="text-spotify-text hover:text-white transition">
            <SkipBack className="h-5 w-5" />
          </button>
          <button 
            className="bg-white rounded-full h-8 w-8 flex items-center justify-center hover:scale-105 transition-transform"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 text-black" />
            ) : (
              <Play className="h-5 w-5 text-black ml-0.5" />
            )}
          </button>
          <button className="text-spotify-text hover:text-white transition">
            <SkipForward className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center w-full max-w-xl">
          <span className="text-xs text-spotify-text mr-2">
            {formatTime(progress / 100 * currentSong.duration)}
          </span>
          <Slider
            value={[progress]}
            max={100}
            step={1}
            className="flex-1"
            onValueChange={(value) => setProgress(value[0])}
          />
          <span className="text-xs text-spotify-text ml-2">
            {formatTime(currentSong.duration)}
          </span>
        </div>
      </div>

      {/* Volume */}
      <div className="flex items-center justify-end w-1/4">
        <Volume2 className="h-5 w-5 text-spotify-text mr-2" />
        <Slider
          value={[volume]}
          max={100}
          step={1}
          className="w-24"
          onValueChange={(value) => setVolume(value[0])}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;


import React, { useState } from 'react';
import { Play, Heart, Pause, MoreHorizontal, Music, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export type Track = {
  id: string;
  name: string;
  artists: string[];
  album: string;
  albumId: string;
  duration: number; // in seconds
  explicit?: boolean;
};

type TrackListProps = {
  tracks: Track[];
  onPlay?: (trackId: string) => void;
  className?: string;
};

const TrackList = ({ tracks, onPlay, className }: TrackListProps) => {
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null);
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set());

  const formatDuration = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handlePlay = (trackId: string) => {
    setPlayingTrack(trackId === playingTrack ? null : trackId);
    if (onPlay) onPlay(trackId);
  };

  const toggleLike = (trackId: string) => {
    const newLikedTracks = new Set(likedTracks);
    if (newLikedTracks.has(trackId)) {
      newLikedTracks.delete(trackId);
    } else {
      newLikedTracks.add(trackId);
    }
    setLikedTracks(newLikedTracks);
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-[16px_4fr_3fr_1fr] gap-4 px-4 py-2 border-b border-spotify-light text-spotify-text text-sm">
        <div>#</div>
        <div>TITLE</div>
        <div>ALBUM</div>
        <div className="flex justify-end">
          <Clock className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-2">
        {tracks.map((track, index) => (
          <div 
            key={track.id}
            className={`grid grid-cols-[16px_4fr_3fr_1fr] gap-4 px-4 py-2 rounded-md text-sm hover:bg-spotify-light group transition-colors ${playingTrack === track.id ? 'bg-spotify-light text-spotify-primary' : 'text-spotify-text'}`}
            onMouseEnter={() => setHoveredTrack(track.id)}
            onMouseLeave={() => setHoveredTrack(null)}
          >
            <div className="flex items-center justify-center">
              {playingTrack === track.id ? (
                <button onClick={() => handlePlay(track.id)}>
                  <Pause className="h-4 w-4 text-spotify-primary" />
                </button>
              ) : hoveredTrack === track.id ? (
                <button onClick={() => handlePlay(track.id)}>
                  <Play className="h-4 w-4 ml-0.5" />
                </button>
              ) : (
                <span className={`${playingTrack === track.id ? 'text-spotify-primary' : ''}`}>
                  {index + 1}
                </span>
              )}
            </div>

            <div className="flex items-center">
              <div className="h-10 w-10 bg-spotify-light flex items-center justify-center rounded mr-3">
                <Music className="h-5 w-5" />
              </div>
              <div>
                <div className={`font-medium ${playingTrack === track.id ? 'text-spotify-primary' : 'text-white'}`}>
                  {track.name}
                </div>
                <div className="text-xs">{track.artists.join(', ')}</div>
              </div>
            </div>

            <div className="flex items-center">
              {track.album}
            </div>

            <div className="flex items-center justify-end gap-3">
              <button 
                className={`opacity-0 group-hover:opacity-100 transition-opacity ${likedTracks.has(track.id) ? 'opacity-100' : ''}`}
                onClick={() => toggleLike(track.id)}
              >
                <Heart 
                  className={`h-4 w-4 ${likedTracks.has(track.id) ? 'fill-spotify-primary text-spotify-primary' : ''}`} 
                />
              </button>
              <span>{formatDuration(track.duration)}</span>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackList;

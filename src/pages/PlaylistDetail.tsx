
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Play, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TrackList, { Track } from '@/components/ui/TrackList';

const mockPlaylists = {
  'todays-hits': {
    id: 'todays-hits',
    name: "Today's Top Hits",
    description: "The most popular tracks right now. Updated daily.",
    followers: 32456789,
    coverImage: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=500&h=500&auto=format&fit=crop",
    tracks: [
      {
        id: 'track-1',
        name: "Blinding Lights",
        artists: ["The Weeknd"],
        album: "After Hours",
        albumId: "after-hours",
        duration: 200,
        explicit: false
      },
      {
        id: 'track-2',
        name: "Don't Start Now",
        artists: ["Dua Lipa"],
        album: "Future Nostalgia",
        albumId: "future-nostalgia",
        duration: 183,
        explicit: false
      },
      {
        id: 'track-3',
        name: "WAP",
        artists: ["Cardi B", "Megan Thee Stallion"],
        album: "WAP (Single)",
        albumId: "wap-single",
        duration: 187,
        explicit: true
      },
      {
        id: 'track-4',
        name: "Dynamite",
        artists: ["BTS"],
        album: "Dynamite (Single)",
        albumId: "dynamite-single",
        duration: 199,
        explicit: false
      },
      {
        id: 'track-5',
        name: "positions",
        artists: ["Ariana Grande"],
        album: "positions",
        albumId: "positions-album",
        duration: 172,
        explicit: true
      }
    ]
  },
  'discover-weekly': {
    id: 'discover-weekly',
    name: "Discover Weekly",
    description: "Your weekly mixtape of fresh music. Enjoy new discoveries and deep cuts chosen just for you.",
    followers: 17852964,
    coverImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&auto=format&fit=crop",
    tracks: [
      {
        id: 'track-6',
        name: "Levitating",
        artists: ["Dua Lipa", "DaBaby"],
        album: "Future Nostalgia",
        albumId: "future-nostalgia",
        duration: 203,
        explicit: false
      },
      {
        id: 'track-7',
        name: "Therefore I Am",
        artists: ["Billie Eilish"],
        album: "Therefore I Am (Single)",
        albumId: "therefore-i-am-single",
        duration: 175,
        explicit: true
      },
      {
        id: 'track-8',
        name: "Mood",
        artists: ["24kGoldn", "iann dior"],
        album: "Mood (Single)",
        albumId: "mood-single",
        duration: 140,
        explicit: true
      },
      {
        id: 'track-9',
        name: "Savage Love (Laxed - Siren Beat)",
        artists: ["Jawsh 685", "Jason Derulo"],
        album: "Savage Love (Single)",
        albumId: "savage-love-single",
        duration: 171,
        explicit: false
      },
      {
        id: 'track-10',
        name: "Holy",
        artists: ["Justin Bieber", "Chance the Rapper"],
        album: "Holy (Single)",
        albumId: "holy-single",
        duration: 212,
        explicit: false
      }
    ]
  },
};

const formatFollowers = (count: number) => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};

const PlaylistDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [playlist, setPlaylist] = useState<any>(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // In a real app, fetch playlist data from API
    // For now, use mock data
    if (id && mockPlaylists[id as keyof typeof mockPlaylists]) {
      setPlaylist(mockPlaylists[id as keyof typeof mockPlaylists]);
    } else {
      // Default to first playlist if ID not found
      setPlaylist(mockPlaylists['todays-hits']);
    }
  }, [id]);

  if (!playlist) {
    return <div className="p-8 text-white">Loading...</div>;
  }

  return (
    <div className="pb-8">
      <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-6">
        <img 
          src={playlist.coverImage} 
          alt={playlist.name}
          className="w-60 h-60 shadow-2xl"
        />
        <div className="text-left">
          <p className="uppercase text-xs font-bold mb-2">Playlist</p>
          <h1 className="text-5xl font-bold text-white mb-4">{playlist.name}</h1>
          <p className="text-sm text-spotify-text mb-4">{playlist.description}</p>
          <div className="flex items-center text-sm">
            <span className="font-bold text-white">Spotify</span>
            <span className="mx-1">•</span>
            <span>{formatFollowers(playlist.followers)} likes</span>
            <span className="mx-1">•</span>
            <span>{playlist.tracks.length} songs</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-black/20 to-spotify-dark py-6 px-8 mb-6">
        <div className="flex items-center gap-6">
          <Button className="rounded-full h-14 w-14 bg-spotify-primary hover:bg-spotify-primary hover:scale-105 transition-transform">
            <Play className="h-6 w-6 text-black ml-1" fill="black" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full border-gray-400"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-spotify-primary text-spotify-primary' : ''}`} />
          </Button>
        </div>
      </div>

      <TrackList tracks={playlist.tracks} />
    </div>
  );
};

export default PlaylistDetail;

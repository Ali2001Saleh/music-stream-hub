
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PlaylistCard from '@/components/ui/PlaylistCard';
import AlbumCard from '@/components/ui/AlbumCard';

const Library = () => {
  const [filter, setFilter] = useState('all');

  // Mock data for library
  const playlists = [
    {
      id: 'liked-songs',
      name: "Liked Songs",
      description: "All the songs you've liked",
      coverImage: "https://images.unsplash.com/photo-1495305379050-64540d6ee95d?w=300&h=300&auto=format&fit=crop"
    },
    {
      id: 'workout-mix',
      name: "Workout Mix",
      description: "Energy boosting tracks for your workout",
      coverImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=300&auto=format&fit=crop"
    },
    {
      id: 'chill-vibes',
      name: "Chill Vibes",
      description: "Relaxing tracks for your downtime",
      coverImage: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=300&h=300&auto=format&fit=crop"
    },
    {
      id: 'focus-study',
      name: "Focus Study",
      description: "Concentration enhancing tracks",
      coverImage: "https://images.unsplash.com/photo-1513682121497-80211f36a7d3?w=300&h=300&auto=format&fit=crop"
    }
  ];

  const albums = [
    {
      id: 'after-hours',
      name: "After Hours",
      artist: "The Weeknd",
      coverImage: "https://images.unsplash.com/photo-1578270336544-1ac43702725a?w=300&h=300&auto=format&fit=crop"
    },
    {
      id: 'future-nostalgia',
      name: "Future Nostalgia",
      artist: "Dua Lipa",
      coverImage: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=300&h=300&auto=format&fit=crop"
    },
    {
      id: 'inside',
      name: "Inside",
      artist: "Bo Burnham",
      coverImage: "https://images.unsplash.com/photo-1557155958-91dc5022ffbf?w=300&h=300&auto=format&fit=crop"
    },
    {
      id: 'sour',
      name: "SOUR",
      artist: "Olivia Rodrigo",
      coverImage: "https://images.unsplash.com/photo-1559321806-0d149172727d?w=300&h=300&auto=format&fit=crop"
    }
  ];

  const artists = [
    {
      id: 'the-weeknd',
      name: "The Weeknd",
      artist: "Artist",
      coverImage: "https://images.unsplash.com/photo-1578270336544-1ac43702725a?w=300&h=300&auto=format&fit=crop"
    },
    {
      id: 'dua-lipa',
      name: "Dua Lipa",
      artist: "Artist",
      coverImage: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=300&h=300&auto=format&fit=crop"
    },
    {
      id: 'kendrick-lamar',
      name: "Kendrick Lamar",
      artist: "Artist",
      coverImage: "https://images.unsplash.com/photo-1613053341085-db794820ce43?w=300&h=300&auto=format&fit=crop"
    },
    {
      id: 'billie-eilish',
      name: "Billie Eilish",
      artist: "Artist",
      coverImage: "https://images.unsplash.com/photo-1576525865268-9d6bdb686538?w=300&h=300&auto=format&fit=crop"
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Your Library</h1>
      
      <Tabs defaultValue="playlists" className="w-full">
        <TabsList className="bg-spotify-darkAlt mb-6">
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
          <TabsTrigger value="albums">Albums</TabsTrigger>
          <TabsTrigger value="artists">Artists</TabsTrigger>
        </TabsList>
        
        <TabsContent value="playlists" className="animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {playlists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                id={playlist.id}
                name={playlist.name}
                description={playlist.description}
                coverImage={playlist.coverImage}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="albums" className="animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {albums.map((album) => (
              <AlbumCard
                key={album.id}
                id={album.id}
                name={album.name}
                artist={album.artist}
                coverImage={album.coverImage}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="artists" className="animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {artists.map((artist) => (
              <AlbumCard
                key={artist.id}
                id={artist.id}
                name={artist.name}
                artist={artist.artist}
                coverImage={artist.coverImage}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Library;

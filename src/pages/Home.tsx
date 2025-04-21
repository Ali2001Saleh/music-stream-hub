
import React from 'react';
import { Link } from 'react-router-dom';
import AlbumCard from '@/components/ui/AlbumCard';
import PlaylistCard from '@/components/ui/PlaylistCard';

// Mock data - in a real app we would fetch this from an API
const featuredPlaylists = [
  {
    id: 'todays-hits',
    name: "Today's Top Hits",
    description: "The most popular tracks right now",
    coverImage: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=300&h=300&auto=format&fit=crop"
  },
  {
    id: 'discover-weekly',
    name: "Discover Weekly",
    description: "Your weekly mixtape of fresh music",
    coverImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&auto=format&fit=crop"
  },
  {
    id: 'chill-vibes',
    name: "Chill Vibes",
    description: "Laid back beats to relax to",
    coverImage: "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=300&h=300&auto=format&fit=crop"
  },
  {
    id: 'workout-energy',
    name: "Workout Energy",
    description: "Power your workout with these high-energy tracks",
    coverImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=300&auto=format&fit=crop"
  },
  {
    id: 'focus-flow',
    name: "Focus Flow",
    description: "Music to help you concentrate",
    coverImage: "https://images.unsplash.com/photo-1513682121497-80211f36a7d3?w=300&h=300&auto=format&fit=crop"
  }
];

const recentlyPlayed = [
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
    id: 'chromatica',
    name: "Chromatica",
    artist: "Lady Gaga",
    coverImage: "https://images.unsplash.com/photo-1563891172507-5bf31dafb0c2?w=300&h=300&auto=format&fit=crop"
  },
  {
    id: 'fine-line',
    name: "Fine Line",
    artist: "Harry Styles",
    coverImage: "https://images.unsplash.com/photo-1576525865268-9d6bdb686538?w=300&h=300&auto=format&fit=crop"
  }
];

const Home = () => {
  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Featured Playlists</h2>
          <Link to="/featured" className="text-sm font-semibold text-spotify-text hover:underline">
            See all
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featuredPlaylists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              id={playlist.id}
              name={playlist.name}
              description={playlist.description}
              coverImage={playlist.coverImage}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Recently Played</h2>
          <Link to="/history" className="text-sm font-semibold text-spotify-text hover:underline">
            See all
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentlyPlayed.map((album) => (
            <AlbumCard
              key={album.id}
              id={album.id}
              name={album.name}
              artist={album.artist}
              coverImage={album.coverImage}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Made For You</h2>
          <Link to="/recommendations" className="text-sm font-semibold text-spotify-text hover:underline">
            See all
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <PlaylistCard
            id="daily-mix-1"
            name="Daily Mix 1"
            description="Bruno Mars, The Weeknd, Doja Cat and more"
            coverImage="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=300&h=300&auto=format&fit=crop"
          />
          <PlaylistCard
            id="daily-mix-2"
            name="Daily Mix 2"
            description="Adele, Billie Eilish, Taylor Swift and more"
            coverImage="https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=300&h=300&auto=format&fit=crop"
          />
          <PlaylistCard
            id="release-radar"
            name="Release Radar"
            description="New music from artists you follow"
            coverImage="https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=300&h=300&auto=format&fit=crop"
          />
          <PlaylistCard
            id="time-capsule"
            name="Your Time Capsule"
            description="A blast from your past"
            coverImage="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&auto=format&fit=crop"
          />
          <PlaylistCard
            id="on-repeat"
            name="On Repeat"
            description="Songs you've been playing on repeat"
            coverImage="https://images.unsplash.com/photo-1501612780327-45045538702b?w=300&h=300&auto=format&fit=crop"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

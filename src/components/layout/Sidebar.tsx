
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Library, PlusSquare, Heart, BookAudio, Music } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type SidebarProps = {
  collapsed?: boolean;
  onToggle?: () => void;
};

const Sidebar = ({ collapsed = false, onToggle }: SidebarProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col h-full bg-black text-spotify-text overflow-hidden transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="p-6">
        {collapsed ? (
          <Music className="h-8 w-8 text-white" />
        ) : (
          <h1 className="text-2xl font-bold text-white flex items-center">
            <Music className="h-8 w-8 mr-2" /> 
            MusicStream
          </h1>
        )}
      </div>

      {/* Main Navigation */}
      <nav className="mb-4">
        <ul className="space-y-2 px-2">
          <li>
            <Link 
              to="/" 
              className="flex items-center py-2 px-4 text-sm rounded-md hover:bg-spotify-light hover:text-white transition"
            >
              <Home className="h-5 w-5 mr-4" />
              {!collapsed && <span>Home</span>}
            </Link>
          </li>
          <li>
            <Link 
              to="/search" 
              className="flex items-center py-2 px-4 text-sm rounded-md hover:bg-spotify-light hover:text-white transition"
            >
              <Search className="h-5 w-5 mr-4" />
              {!collapsed && <span>Search</span>}
            </Link>
          </li>
          <li>
            <Link 
              to="/library" 
              className="flex items-center py-2 px-4 text-sm rounded-md hover:bg-spotify-light hover:text-white transition"
            >
              <Library className="h-5 w-5 mr-4" />
              {!collapsed && <span>Your Library</span>}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Create and Liked sections */}
      <div className="mt-4 px-2">
        <ul className="space-y-2">
          <li>
            <Link 
              to="/create-playlist" 
              className="flex items-center py-2 px-4 text-sm rounded-md hover:bg-spotify-light hover:text-white transition"
            >
              <PlusSquare className="h-5 w-5 mr-4" />
              {!collapsed && <span>Create Playlist</span>}
            </Link>
          </li>
          <li>
            <Link 
              to="/liked-songs" 
              className="flex items-center py-2 px-4 text-sm rounded-md hover:bg-spotify-light hover:text-white transition"
            >
              <Heart className="h-5 w-5 mr-4" />
              {!collapsed && <span>Liked Songs</span>}
            </Link>
          </li>
        </ul>
      </div>

      {/* Playlists */}
      {!collapsed && (
        <div className="mt-6 px-6 overflow-y-auto flex-grow">
          <h2 className="uppercase text-xs font-bold mb-4 text-spotify-text">Playlists</h2>
          <ul className="space-y-2">
            {['Chill Vibes', 'Workout Mix', 'Study Focus', 'Dance Party', 'Throwback Hits'].map((playlist) => (
              <li key={playlist}>
                <Link 
                  to={`/playlist/${playlist.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block py-1 text-sm hover:text-white transition"
                >
                  {playlist}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Collapse button */}
      <div className="p-4 mt-auto">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onToggle}
          className="w-full justify-center text-spotify-text hover:text-white"
        >
          {collapsed ? "→" : "←"}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;

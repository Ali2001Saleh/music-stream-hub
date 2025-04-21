
import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type PlaylistCardProps = {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  className?: string;
};

const PlaylistCard = ({ id, name, description, coverImage, className }: PlaylistCardProps) => {
  return (
    <div className={cn("spotify-card group relative", className)}>
      <Link to={`/playlist/${id}`} className="block">
        <div className="relative">
          <img 
            src={coverImage} 
            alt={name}
            className="w-full aspect-square object-cover rounded-md mb-4"
          />
          <button className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 bg-spotify-primary rounded-full h-12 w-12 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <Play className="h-6 w-6 text-black ml-1" fill="black" />
          </button>
        </div>
        <h3 className="text-white font-semibold line-clamp-1">{name}</h3>
        <p className="text-sm text-spotify-text mt-1 line-clamp-2">{description}</p>
      </Link>
    </div>
  );
};

export default PlaylistCard;


import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import PlaylistCard from '@/components/ui/PlaylistCard';

const categories = [
  { id: 'pop', name: 'Pop', color: 'bg-pink-500' },
  { id: 'hip-hop', name: 'Hip-Hop', color: 'bg-orange-500' },
  { id: 'rock', name: 'Rock', color: 'bg-red-600' },
  { id: 'indie', name: 'Indie', color: 'bg-green-500' },
  { id: 'electronic', name: 'Electronic', color: 'bg-blue-500' },
  { id: 'jazz', name: 'Jazz', color: 'bg-purple-500' },
  { id: 'r-b', name: 'R&B', color: 'bg-yellow-500' },
  { id: 'classical', name: 'Classical', color: 'bg-teal-500' },
  { id: 'country', name: 'Country', color: 'bg-amber-500' },
  { id: 'metal', name: 'Metal', color: 'bg-slate-600' },
  { id: 'latin', name: 'Latin', color: 'bg-emerald-500' },
  { id: 'folk', name: 'Folk & Acoustic', color: 'bg-indigo-500' },
];

// Mock search results data
const searchResults = {
  playlists: [
    {
      id: 'summer-hits',
      name: "Summer Hits 2025",
      description: "The hottest tracks of the summer",
      coverImage: "https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?w=300&h=300&auto=format&fit=crop"
    },
    {
      id: 'beach-party',
      name: "Beach Party",
      description: "Perfect for those sunny days at the beach",
      coverImage: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=300&h=300&auto=format&fit=crop"
    },
    {
      id: 'party-anthems',
      name: "Party Anthems",
      description: "The ultimate party playlist",
      coverImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&auto=format&fit=crop"
    },
    {
      id: 'throwback-hits',
      name: "Throwback Hits",
      description: "Classic hits from the past decades",
      coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&auto=format&fit=crop"
    }
  ]
};

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId === activeCategory ? null : categoryId);
  };

  return (
    <div>
      {/* Replace the normal header with a search header */}
      <Header showSearch={true} />
      
      {!searchQuery && !activeCategory && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-white mb-6">Browse All</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <div 
                key={category.id}
                className={`${category.color} rounded-lg aspect-square relative overflow-hidden cursor-pointer transition-transform hover:scale-105`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <span className="absolute bottom-2 left-3 text-white font-bold text-xl">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeCategory && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-6 capitalize">{categories.find(c => c.id === activeCategory)?.name} Playlists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {searchResults.playlists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                id={playlist.id}
                name={playlist.name}
                description={playlist.description}
                coverImage={playlist.coverImage}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;

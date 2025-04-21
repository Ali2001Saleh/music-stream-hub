
import React from 'react';
import { ChevronLeft, ChevronRight, Search, User, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type HeaderProps = {
  showSearch?: boolean;
};

const Header = ({ showSearch = false }: HeaderProps) => {
  const navigate = useNavigate();
  
  return (
    <header className="flex items-center justify-between p-4 bg-spotify-dark bg-opacity-95 sticky top-0 z-10">
      <div className="flex items-center">
        <div className="flex space-x-2 mr-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-black bg-opacity-60 rounded-full h-8 w-8"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="bg-black bg-opacity-60 rounded-full h-8 w-8"
            onClick={() => navigate(1)}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        {showSearch && (
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-2.5 text-gray-400" />
            <Input 
              className="bg-spotify-light h-10 pl-9 text-sm rounded-full focus-visible:ring-red-400" 
              placeholder="Search donors, blood types..." 
            />
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="bg-black hover:bg-spotify-darkAlt rounded-full h-8 w-8 relative"
        >
          <Bell className="h-4 w-4 text-white" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full h-4 w-4 flex items-center justify-center">3</span>
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="bg-black hover:bg-spotify-darkAlt rounded-full h-8 w-8"
        >
          <User className="h-4 w-4 text-white" />
        </Button>
      </div>
    </header>
  );
};

export default Header;

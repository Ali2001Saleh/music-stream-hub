import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Library, PlusSquare, Heart, Droplet, Users, Calendar, List } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type SidebarProps = {
  collapsed?: boolean;
  onToggle?: () => void;
};

const Sidebar = ({ collapsed = false, onToggle }: SidebarProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

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
          <Droplet className="h-8 w-8 text-red-500" />
        ) : (
          <h1 className="text-2xl font-bold text-white flex items-center">
            <Droplet className="h-7 w-7 text-red-500 mr-2" /> 
            BloodBank
          </h1>
        )}
      </div>

      {/* Main Navigation */}
      <nav className="mb-4">
        <ul className="space-y-2 px-2">
          <li>
            <Link 
              to="/dashboard" 
              className={cn(
                "flex items-center py-2 px-4 text-sm rounded-md transition",
                isActive("/dashboard") 
                  ? "bg-spotify-light text-white" 
                  : "hover:bg-spotify-light hover:text-white"
              )}
            >
              <Home className="h-5 w-5 mr-4" />
              {!collapsed && <span>Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link 
              to="/donors" 
              className={cn(
                "flex items-center py-2 px-4 text-sm rounded-md transition",
                isActive("/donors") 
                  ? "bg-spotify-light text-white" 
                  : "hover:bg-spotify-light hover:text-white"
              )}
            >
              <Users className="h-5 w-5 mr-4" />
              {!collapsed && <span>Donors</span>}
            </Link>
          </li>
          <li>
            <Link 
              to="/inventory" 
              className={cn(
                "flex items-center py-2 px-4 text-sm rounded-md transition",
                isActive("/inventory") 
                  ? "bg-spotify-light text-white" 
                  : "hover:bg-spotify-light hover:text-white"
              )}
            >
              <Droplet className="h-5 w-5 mr-4" />
              {!collapsed && <span>Inventory</span>}
            </Link>
          </li>
          <li>
            <Link 
              to="/requests" 
              className={cn(
                "flex items-center py-2 px-4 text-sm rounded-md transition",
                isActive("/requests") 
                  ? "bg-spotify-light text-white" 
                  : "hover:bg-spotify-light hover:text-white"
              )}
            >
              <Calendar className="h-5 w-5 mr-4" />
              {!collapsed && <span>Requests</span>}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Other sections */}
      <div className="mt-4 px-2">
        <ul className="space-y-2">
          <li>
            <Link 
              to="/reports" 
              className="flex items-center py-2 px-4 text-sm rounded-md hover:bg-spotify-light hover:text-white transition"
            >
              <List className="h-5 w-5 mr-4" />
              {!collapsed && <span>Reports</span>}
            </Link>
          </li>
        </ul>
      </div>

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

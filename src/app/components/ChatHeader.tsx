/* Mohammed Vepari
ID: 5145543
Tuesday November 11th 2025
*/


import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Bell, Settings, LogOut } from 'lucide-react';

interface ChatHeaderProps {
  onOpenNotifications: () => void;
  onOpenSettings: () => void;
  onOpenProfile: () => void;
  onLogout: () => void;
  notificationCount?: number;
}

export function ChatHeader({ 
  onOpenNotifications, 
  onOpenSettings, 
  onOpenProfile, 
  onLogout,
  notificationCount = 3 
}: ChatHeaderProps) {
  return (
    <div 
      className="absolute top-0 right-0 p-4 flex items-center gap-4 z-50"
      style={{
        background: 'linear-gradient(to right, rgba(190, 75, 136, 0.9), rgba(234, 88, 12, 0.9))',
        borderRadius: '0 0 0 16px'
      }}
    >
      {/* Notification Bell */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onOpenNotifications}
        className="relative text-white hover:text-white hover:bg-white/10 p-2"
      >
        <Bell className="w-6 h-6" />
        {notificationCount > 0 && (
          <Badge className="absolute -top-1 -right-1 bg-white text-purple-600 border-0 text-xs h-5 min-w-5 flex items-center justify-center px-1.5">
            {notificationCount}
          </Badge>
        )}
      </Button>

      {/* Settings */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onOpenSettings}
        className="text-white hover:text-white hover:bg-white/10 p-2"
      >
        <Settings className="w-6 h-6" />
      </Button>

      {/* Divider */}
      <div className="w-px h-8 bg-white/30"></div>

      {/* Profile Avatar and "You" */}
      <button
        onClick={onOpenProfile}
        className="flex items-center gap-2 hover:bg-white/10 rounded-xl px-2 py-1 transition-colors"
      >
        <Avatar className="w-10 h-10 border-2 border-white/40">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=You" />
          <AvatarFallback>You</AvatarFallback>
        </Avatar>
        <span className="text-white">You</span>
      </button>

      {/* Logout */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onLogout}
        className="text-white hover:text-white hover:bg-white/10 p-2"
      >
        <LogOut className="w-6 h-6" />
      </Button>
    </div>
  );
}

'use client';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Notifications } from './Notifications';
import type { LucideIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  Home,
  MessageCircle,
  Video,
  Users,
  Camera,
  Settings,
  LogOut,
  Zap
} from 'lucide-react';
import type { AppView } from '../types/app';
import { cn } from './ui/utils';

interface NavigationProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  onLogout: () => void;
  onOpenSettings: () => void;
}

export function Navigation({ currentView, onNavigate, onLogout, onOpenSettings }: NavigationProps) {
  const { resolvedTheme } = useTheme();
  const isLightTheme = resolvedTheme === 'light';

  const navItems: Array<{ id: AppView; icon: LucideIcon; label: string; badge?: number }> = [
    { id: 'feed', icon: Home, label: 'Feed' },
    { id: 'messages', icon: MessageCircle, label: 'Messages', badge: 5 },
    { id: 'video', icon: Video, label: 'Video' },
    { id: 'friends', icon: Users, label: 'Friends' },
    { id: 'stories', icon: Camera, label: 'Stories', badge: 3 }
  ];

  const navItemBaseClass =
    'relative px-4 py-2 rounded-xl flex items-center gap-2 transition-all';
  const navItemActiveClass = isLightTheme
    ? 'bg-white/90 text-slate-900 shadow-sm'
    : 'bg-white/20 text-white';
  const navItemInactiveClass = isLightTheme
    ? 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
    : 'text-white/60 hover:text-white hover:bg-white/10';
  const iconButtonClass = isLightTheme
    ? 'text-slate-600 hover:text-slate-900 hover:bg-white/70 transition-colors duration-200'
    : 'text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200';
  const dividerClass = isLightTheme ? 'bg-slate-200' : 'bg-white/20';
  const nameTextClass = isLightTheme ? 'text-slate-800' : 'text-white';
  const avatarBorderClass = isLightTheme ? 'border-slate-200' : 'border-white/20';

  return (
    <nav
      className={cn(
        'backdrop-blur-xl border-b sticky top-0 z-50 transition-colors duration-300',
        isLightTheme ? 'bg-white/80 border-slate-200' : 'bg-white/10 border-white/20'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className={cn('text-xl hidden md:block font-semibold transition-colors', nameTextClass)}>
              MoveYSplash
            </span>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={cn(
                  navItemBaseClass,
                  currentView === item.id ? navItemActiveClass : navItemInactiveClass
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="hidden md:inline">{item.label}</span>
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <Notifications onNavigate={onNavigate} />
            
            <Button
              variant="ghost"
              size="sm"
              onClick={onOpenSettings}
              className={iconButtonClass}
            >
              <Settings className="w-5 h-5" />
            </Button>

            <div className={cn('w-px h-6 mx-2 transition-colors duration-300', dividerClass)}></div>

            <button 
              onClick={() => onNavigate('profile')}
              className={cn(
                'flex items-center gap-2 rounded-xl px-2 py-1 transition-colors',
                isLightTheme ? 'hover:bg-white/70' : 'hover:bg-white/10'
              )}
            >
              <Avatar className={cn('w-8 h-8 border-2', avatarBorderClass)}>
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=You" />
                <AvatarFallback>You</AvatarFallback>
              </Avatar>
              <span className={cn('hidden md:inline transition-colors', nameTextClass)}>You</span>
            </button>

            <Button
              variant="ghost"
              size="sm"
              onClick={onLogout}
              className={iconButtonClass}
            >
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* Mohammed Vepari
   ID: 5145543
   Sunday November 30th 2025
  */
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { X } from 'lucide-react';
import { Button } from './ui/button';

interface NotificationToastProps {
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  icon: React.ReactNode;
  onDismiss?: () => void;
  onClick?: () => void;
}

export function NotificationToast({ 
  user, 
  content, 
  icon, 
  onDismiss, 
  onClick 
}: NotificationToastProps) {
  return (
    <div
      className="backdrop-blur-xl bg-gradient-to-br from-purple-900/95 to-pink-900/95 border border-white/20 rounded-2xl p-4 shadow-2xl cursor-pointer transition-transform duration-200 ease-out hover:scale-[1.02]"
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <div className="relative flex-shrink-0">
          <Avatar className="w-10 h-10 border-2 border-white/20">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-purple-900 to-pink-900 rounded-full flex items-center justify-center border border-white/20">
            {icon}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm">
            <span className="font-medium">{user.name}</span>
            {' '}
            <span className="text-white/70">{content}</span>
          </p>
        </div>

        {onDismiss && (
          <Button
            size="sm"
            variant="ghost"
            onClick={(e) => {
              e.stopPropagation();
              onDismiss();
            }}
            className="text-white/50 hover:text-white hover:bg-white/10 h-6 w-6 p-0"
          >
            <X className="w-3 h-3" />
          </Button>
        )}
      </div>
    </div>
  );
}

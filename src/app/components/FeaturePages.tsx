'use client';

import { Button } from './ui/button';
import { Card } from './ui/card';
import { 
  ArrowLeft, 
  MessageSquare, 
  Video, 
  Monitor, 
  Zap, 
  Users, 
  Sparkles,
  Lock,
  Clock,
  Image as ImageIcon,
  Mic,
  FileText,
  Heart,
  Star,
  Camera,
  Eye,
  Flame,
  Share2,
  UserPlus,
  MessageCircle,
  CheckCircle,
  Globe,
  TrendingUp,
  Music
} from 'lucide-react';

interface FeaturePagesProps {
  feature: 'group-chats' | 'video-calls' | 'screen-share' | 'stories' | 'friends' | 'gen-z';
  onBack: () => void;
  onGetStarted?: () => void;
}

export function FeaturePages({ feature, onBack, onGetStarted }: FeaturePagesProps) {
  const getFeatureContent = () => {
    switch (feature) {
      case 'group-chats':
        return <GroupChatsFeature onBack={onBack} onGetStarted={onGetStarted} />;
      case 'video-calls':
        return <VideoCallsFeature onBack={onBack} onGetStarted={onGetStarted} />;
      case 'screen-share':
        return <ScreenShareFeature onBack={onBack} onGetStarted={onGetStarted} />;
      case 'stories':
        return <StoriesFeature onBack={onBack} onGetStarted={onGetStarted} />;
      case 'friends':
        return <FriendsFeature onBack={onBack} onGetStarted={onGetStarted} />;
      case 'gen-z':
        return <GenZVibesFeature onBack={onBack} onGetStarted={onGetStarted} />;
      default:
        return null;
    }
  };

  return getFeatureContent();
}

// Group Chats Feature Page
function GroupChatsFeature({ onBack, onGetStarted }: { onBack: () => void; onGetStarted?: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto p-6">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-white/70 hover:text-white hover:bg-white/10 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
            <MessageSquare className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-white text-6xl mb-4">Group Chats</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Bring your whole squad together with group chats that support up to 20 people. 
            Share moments, coordinate plans, and stay connected - all in one place.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white text-xl mb-2">Up to 20 People</h3>
            <p className="text-white/70">
              Create massive group chats for your friend groups, teams, or family. Everyone stays in the loop.
            </p>
          </Card>

          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
              <ImageIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white text-xl mb-2">Rich Media Sharing</h3>
            <p className="text-white/70">
              Share photos, videos, voice messages, files, and links. Everything your group needs to communicate.
            </p>
          </Card>

          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white text-xl mb-2">Star Messages</h3>
            <p className="text-white/70">
              Mark important messages with a star so your group can find them easily later.
            </p>
          </Card>
        </div>

        {/* Detailed Features */}
        <div className="space-y-6 mb-12">
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8">
            <h2 className="text-white text-3xl mb-6">Powerful Group Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <FeatureItem 
                  icon={<MessageCircle className="w-5 h-5" />}
                  title="Text Messages"
                  description="Send unlimited text messages with emoji support and formatting"
                />
                <FeatureItem 
                  icon={<Camera className="w-5 h-5" />}
                  title="Photo & Video Sharing"
                  description="Share photos and videos instantly with the whole group"
                />
                <FeatureItem 
                  icon={<Mic className="w-5 h-5" />}
                  title="Voice Messages"
                  description="Record and send voice messages when typing isn&apos;t enough"
                />
                <FeatureItem 
                  icon={<FileText className="w-5 h-5" />}
                  title="File Sharing"
                  description="Share documents, PDFs, and files up to 100MB"
                />
              </div>
              <div className="space-y-4">
                <FeatureItem 
                  icon={<Heart className="w-5 h-5" />}
                  title="Message Reactions"
                  description="React to messages with emojis - ❤️ 😂 😮 and more"
                />
                <FeatureItem 
                  icon={<Star className="w-5 h-5" />}
                  title="Starred Messages"
                  description="Save important messages by starring them for quick access"
                />
                <FeatureItem 
                  icon={<Users className="w-5 h-5" />}
                  title="Group Admin Controls"
                  description="Admins can add/remove members and manage group settings"
                />
                <FeatureItem 
                  icon={<Bell className="w-5 h-5" />}
                  title="Custom Notifications"
                  description="Set notification preferences per group - mute or customize alerts"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Use Cases */}
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8 mb-12">
          <h2 className="text-white text-3xl mb-6">Perfect For Every Squad</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <UseCase icon="👥" title="Friend Groups" description="Keep the crew connected" />
            <UseCase icon="🎓" title="Study Groups" description="Coordinate homework & projects" />
            <UseCase icon="🏠" title="Family Chats" description="Stay close with loved ones" />
            <UseCase icon="💼" title="Work Teams" description="Collaborate on projects" />
            <UseCase icon="🎮" title="Gaming Squads" description="Plan game sessions" />
            <UseCase icon="🎉" title="Event Planning" description="Organize parties & meetups" />
            <UseCase icon="🏃" title="Sports Teams" description="Coordinate practices & games" />
            <UseCase icon="🎨" title="Creative Projects" description="Share ideas & feedback" />
          </div>
        </Card>

        {/* CTA */}
        <Card className="backdrop-blur-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border-purple-400/30 p-12 text-center">
          <h2 className="text-white text-4xl mb-4">Ready to Connect Your Squad?</h2>
          <p className="text-white/80 text-lg mb-6">
            Create your first group chat in seconds and bring everyone together.
          </p>
          <Button
            onClick={() => onGetStarted?.()}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 text-lg px-8 py-6"
          >
            Start Group Chat
          </Button>
        </Card>
      </div>
    </div>
  );
}

// Video Calls Feature Page
function VideoCallsFeature({ onBack, onGetStarted }: { onBack: () => void; onGetStarted?: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto p-6">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-white/70 hover:text-white hover:bg-white/10 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-6">
            <Video className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-white text-6xl mb-4">Video Calls</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Stunning 4K UHD video calls with up to 20 participants. See your friends&apos; faces in incredible detail, 
            share your screen, and feel like you&apos;re in the same room - no matter where you are.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <StatCard number="20" label="Participants" color="from-blue-500 to-cyan-500" />
          <StatCard number="4K" label="UHD Quality" color="from-purple-500 to-pink-500" />
          <StatCard number="∞" label="Call Duration" color="from-green-500 to-emerald-500" />
          <StatCard number="0" label="Call Limits" color="from-yellow-500 to-orange-500" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
              <Video className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-white text-2xl mb-3">4K UHD Video & Audio</h3>
            <p className="text-white/70 mb-4">
              Stunning 4K UHD (3840x2160) video quality with intelligent adaptive streaming. 
              Automatically detects your webcam capabilities and internet speed for the best 
              possible quality - from 4K UHD down to HD as needed.
            </p>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>✓ Up to 4K UHD (3840x2160) @ 30fps</li>
              <li>✓ Auto-fallback to Full HD (1920x1080) or HD (1280x720)</li>
              <li>✓ Echo cancellation & noise reduction</li>
              <li>✓ Automatic quality optimization</li>
              <li>✓ Low-latency audio streaming</li>
            </ul>
          </Card>

          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-white text-2xl mb-3">Group Video Calls</h3>
            <p className="text-white/70 mb-4">
              Host video calls with up to 20 people simultaneously. Perfect for friend groups, 
              family gatherings, study sessions, or remote team meetings.
            </p>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>✓ Up to 20 simultaneous participants</li>
              <li>✓ Grid or speaker view layouts</li>
              <li>✓ See who&apos;s talking with active speaker indicator</li>
              <li>✓ Join from mobile or desktop</li>
            </ul>
          </Card>

          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
              <Monitor className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-white text-2xl mb-3">Screen Sharing</h3>
            <p className="text-white/70 mb-4">
              Share your entire screen, specific window, or browser tab. Perfect for presentations, 
              watching videos together, or helping friends troubleshoot.
            </p>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>✓ Share full screen or specific windows</li>
              <li>✓ Audio sharing included</li>
              <li>✓ HD quality screen streaming</li>
              <li>✓ Easy one-click sharing</li>
            </ul>
          </Card>

          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-4">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-white text-2xl mb-3">Demo Mode</h3>
            <p className="text-white/70 mb-4">
              Presenting on another call? Enable Demo Mode to simulate your camera without accessing 
              it, preventing conflicts with other video apps.
            </p>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>✓ Safe for presentations</li>
              <li>✓ No camera conflicts</li>
              <li>✓ Animated demo feed</li>
              <li>✓ Toggle anytime during calls</li>
            </ul>
          </Card>
        </div>

        {/* Comparison Table */}
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8 mb-12">
          <h2 className="text-white text-3xl mb-6">How MoveSplash Compares</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-white py-3 px-4">Platform</th>
                  <th className="text-white py-3 px-4">Video Quality</th>
                  <th className="text-white py-3 px-4">Screen Share</th>
                  <th className="text-white py-3 px-4">Participants</th>
                  <th className="text-white py-3 px-4">Price</th>
                </tr>
              </thead>
              <tbody className="text-white/70">
                <tr className="border-b border-white/10 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                  <td className="py-3 px-4 text-white">✨ MoveSplash</td>
                  <td className="py-3 px-4 text-green-400">4K UHD</td>
                  <td className="py-3 px-4 text-green-400">8K UHD</td>
                  <td className="py-3 px-4 text-green-400">20</td>
                  <td className="py-3 px-4 text-green-400">FREE</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Zoom</td>
                  <td className="py-3 px-4">1080p</td>
                  <td className="py-3 px-4">1080p</td>
                  <td className="py-3 px-4">100 (paid)</td>
                  <td className="py-3 px-4">$14.99/mo</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Google Meet</td>
                  <td className="py-3 px-4">1080p</td>
                  <td className="py-3 px-4">1080p</td>
                  <td className="py-3 px-4">100 (paid)</td>
                  <td className="py-3 px-4">$6-18/mo</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Discord</td>
                  <td className="py-3 px-4">1080p</td>
                  <td className="py-3 px-4">4K (Nitro)</td>
                  <td className="py-3 px-4">25</td>
                  <td className="py-3 px-4">$9.99/mo</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Messenger</td>
                  <td className="py-3 px-4">720p</td>
                  <td className="py-3 px-4">720p</td>
                  <td className="py-3 px-4">8</td>
                  <td className="py-3 px-4">Free</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Snapchat</td>
                  <td className="py-3 px-4">720p</td>
                  <td className="py-3 px-4">N/A</td>
                  <td className="py-3 px-4">15</td>
                  <td className="py-3 px-4">Free</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-white/60 text-sm mt-4 text-center">
            MoveSplash offers the highest video and screen sharing quality of any social platform - completely free! 🚀
          </p>
        </Card>

        {/* Controls */}
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8 mb-12">
          <h2 className="text-white text-3xl mb-6">Intuitive Call Controls</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white mb-2">Mute/Unmute</h3>
              <p className="text-white/60 text-sm">Quick toggle for your microphone</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white mb-2">Camera On/Off</h3>
              <p className="text-white/60 text-sm">Toggle your video feed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white mb-2">8K Screen Share</h3>
              <p className="text-white/60 text-sm">Share in up to 8K UHD quality</p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border-blue-400/30 p-12 text-center">
          <h2 className="text-white text-4xl mb-4">Start Your First Video Call</h2>
          <p className="text-white/80 text-lg mb-6">
            Connect face-to-face with friends, family, or colleagues in stunning 4K UHD quality.
          </p>
          <Button
            onClick={() => onGetStarted?.()}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 text-lg px-8 py-6"
          >
            Make a Call
          </Button>
        </Card>
      </div>
    </div>
  );
}

// Screen Share Feature (continued in next file...)
function ScreenShareFeature({ onBack, onGetStarted }: { onBack: () => void; onGetStarted?: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto p-6">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-white/70 hover:text-white hover:bg-white/10 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-6">
            <Monitor className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-white text-6xl mb-4">8K Screen Sharing</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Share your screen in stunning 8K UHD quality (7680x4320) during video calls. 
            Perfect for ultra-high-res presentations, design work, tutorials, or remote collaboration 
            with uncompromising clarity.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <StatCard number="8K" label="UHD Quality" color="from-green-500 to-emerald-500" />
          <StatCard number="7680" label="Pixels Wide" color="from-blue-500 to-cyan-500" />
          <StatCard number="30fps" label="Frame Rate" color="from-purple-500 to-pink-500" />
          <StatCard number="∞" label="Share Time" color="from-yellow-500 to-orange-500" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8">
            <h3 className="text-white text-2xl mb-4">🖥️ 8K UHD Full Screen Sharing</h3>
            <p className="text-white/70 mb-4">
              Share your entire screen at up to 8K UHD resolution (7680x4320). Perfect for 
              ultra-high-resolution displays, professional presentations, design reviews, 
              and content creation workflows where every pixel matters.
            </p>
            <ul className="space-y-2 text-white/60">
              <li>✓ Up to 8K UHD (7680x4320) quality</li>
              <li>✓ Auto-detects display resolution</li>
              <li>✓ Falls back to 5K/4K/QHD/Full HD/HD as needed</li>
              <li>✓ Smooth 30fps frame rate</li>
              <li>✓ Audio sharing included</li>
              <li>✓ Works on mobile & desktop</li>
            </ul>
          </Card>

          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8">
            <h3 className="text-white text-2xl mb-4">🪟 Selective Window Sharing</h3>
            <p className="text-white/70 mb-4">
              Share just a specific window or application in full quality. Keep your notifications, 
              messages, and other windows completely private while sharing.
            </p>
            <ul className="space-y-2 text-white/60">
              <li>✓ Privacy-focused sharing</li>
              <li>✓ Choose specific apps or browser tabs</li>
              <li>✓ Hide sensitive information</li>
              <li>✓ Easy app switching during share</li>
              <li>✓ Full quality for selected window</li>
              <li>✓ Share audio from specific tabs</li>
            </ul>
          </Card>
        </div>

        {/* Quality Tiers */}
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8 mb-12">
          <h2 className="text-white text-3xl mb-6">Intelligent Quality Adaptation</h2>
          <p className="text-white/70 mb-6">
            MoveSplash automatically detects your display resolution and internet connection 
            to deliver the best possible screen sharing quality:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 p-4 rounded-lg">
              <h3 className="text-white mb-2">🌟 8K UHD</h3>
              <p className="text-white/60 text-sm mb-2">7680 x 4320 pixels</p>
              <p className="text-white/60 text-xs">For ultra-high-res displays and professional work</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 p-4 rounded-lg">
              <h3 className="text-white mb-2">✨ 5K UHD</h3>
              <p className="text-white/60 text-sm mb-2">5120 x 2880 pixels</p>
              <p className="text-white/60 text-xs">For iMac 5K and similar displays</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 p-4 rounded-lg">
              <h3 className="text-white mb-2">💎 4K UHD</h3>
              <p className="text-white/60 text-sm mb-2">3840 x 2160 pixels</p>
              <p className="text-white/60 text-xs">Standard 4K displays and monitors</p>
            </div>
            <div className="bg-white/10 border border-white/20 p-4 rounded-lg">
              <h3 className="text-white mb-2">📺 QHD</h3>
              <p className="text-white/60 text-sm mb-2">2560 x 1440 pixels</p>
              <p className="text-white/60 text-xs">2K/1440p displays</p>
            </div>
            <div className="bg-white/10 border border-white/20 p-4 rounded-lg">
              <h3 className="text-white mb-2">🖥️ Full HD</h3>
              <p className="text-white/60 text-sm mb-2">1920 x 1080 pixels</p>
              <p className="text-white/60 text-xs">Standard 1080p displays</p>
            </div>
            <div className="bg-white/10 border border-white/20 p-4 rounded-lg">
              <h3 className="text-white mb-2">📱 HD</h3>
              <p className="text-white/60 text-sm mb-2">1280 x 720 pixels</p>
              <p className="text-white/60 text-xs">Mobile devices and lower-res screens</p>
            </div>
          </div>
        </Card>

        {/* Use Cases */}
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8 mb-12">
          <h2 className="text-white text-3xl mb-6">Perfect For</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <UseCase icon="🎨" title="Design Reviews" description="Show high-res mockups & prototypes" />
            <UseCase icon="🎬" title="Video Editing" description="Share 8K footage & timelines" />
            <UseCase icon="📊" title="Data Visualization" description="Share detailed dashboards" />
            <UseCase icon="🏗️" title="CAD/3D Work" description="Present architectural designs" />
            <UseCase icon="📸" title="Photography" description="Review high-res photos" />
            <UseCase icon="💻" title="Code Reviews" description="Share IDE with clarity" />
            <UseCase icon="🎓" title="Teaching" description="Clear presentations & tutorials" />
            <UseCase icon="🎮" title="Gaming" description="Stream gameplay in detail" />
          </div>
        </Card>

        <Card className="backdrop-blur-xl bg-gradient-to-br from-green-500/30 to-teal-500/30 border-green-400/30 p-12 text-center">
          <h2 className="text-white text-4xl mb-4">Experience 8K Screen Sharing</h2>
          <p className="text-white/80 text-lg mb-6">
            The most advanced screen sharing technology available on any social platform.
          </p>
          <Button
            onClick={() => onGetStarted?.()}
            className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white border-0 text-lg px-8 py-6"
          >
            Start Sharing in 8K
          </Button>
        </Card>
      </div>
    </div>
  );
}

// Stories Feature
function StoriesFeature({ onBack, onGetStarted }: { onBack: () => void; onGetStarted?: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-orange-900 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto p-6">
        <Button variant="ghost" onClick={onBack} className="text-white/70 hover:text-white hover:bg-white/10 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 mb-6">
            <Zap className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-white text-6xl mb-4">Stories & Snaps</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Share your moments with disappearing Stories that vanish after 24 hours. 
            Snapchat-style ephemeral content that&apos;s perfect for sharing your day without the permanence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <Clock className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-white text-xl mb-2">24-Hour Stories</h3>
            <p className="text-white/70">
              Stories disappear after 24 hours. Share freely without worrying about permanent posts.
            </p>
          </Card>

          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <Eye className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-white text-xl mb-2">See Who Viewed</h3>
            <p className="text-white/70">
              Track who&apos;s viewing your stories and when they watched them.
            </p>
          </Card>

          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <Heart className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-white text-xl mb-2">React & Reply</h3>
            <p className="text-white/70">
              Friends can react with emojis or send quick replies to your stories.
            </p>
          </Card>
        </div>

        <Card className="backdrop-blur-xl bg-gradient-to-br from-pink-500/30 to-orange-500/30 border-pink-400/30 p-12 text-center">
          <h2 className="text-white text-4xl mb-4">Start Sharing Your Story</h2>
          <Button
            onClick={() => onGetStarted?.()}
            className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white border-0 text-lg px-8 py-6"
          >
            Post Your First Story
          </Button>
        </Card>
      </div>
    </div>
  );
}

// Friends Network Feature
function FriendsFeature({ onBack, onGetStarted }: { onBack: () => void; onGetStarted?: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto p-6">
        <Button variant="ghost" onClick={onBack} className="text-white/70 hover:text-white hover:bg-white/10 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 mb-6">
            <Users className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-white text-6xl mb-4">Friends Network</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Build your social circle. Connect with friends, discover new people, 
            and manage your network with powerful friend management tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8">
            <UserPlus className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-white text-2xl mb-3">Easy Friend Requests</h3>
            <p className="text-white/70">
              Search for friends by name or username. Send friend requests and build your network easily.
            </p>
          </Card>

          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8">
            <Globe className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-white text-2xl mb-3">Friend Suggestions</h3>
            <p className="text-white/70">
              Discover mutual friends and get personalized friend recommendations.
            </p>
          </Card>

          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8">
            <Lock className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-white text-2xl mb-3">Privacy Controls</h3>
            <p className="text-white/70">
              Control who can send you requests, see your posts, and view your profile.
            </p>
          </Card>

          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8">
            <CheckCircle className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-white text-2xl mb-3">Friend Lists</h3>
            <p className="text-white/70">
              Organize friends into custom lists: Close Friends, Family, Work, etc.
            </p>
          </Card>
        </div>

        <Card className="backdrop-blur-xl bg-gradient-to-br from-indigo-500/30 to-purple-500/30 border-indigo-400/30 p-12 text-center">
          <h2 className="text-white text-4xl mb-4">Grow Your Network</h2>
          <Button
            onClick={() => onGetStarted?.()}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-0 text-lg px-8 py-6"
          >
            Find Friends
          </Button>
        </Card>
      </div>
    </div>
  );
}

// Gen Z Vibes Feature
function GenZVibesFeature({ onBack, onGetStarted }: { onBack: () => void; onGetStarted?: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-pink-900 to-purple-900 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto p-6">
        <Button variant="ghost" onClick={onBack} className="text-white/70 hover:text-white hover:bg-white/10 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-yellow-500 via-pink-500 to-purple-500 mb-6">
            <Flame className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-white text-6xl mb-4">Gen Z Vibes ✨</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Built by Gen Z, for Gen Z. We speak your language with a design that&apos;s 
            aesthetic AF, features that matter, and vibes that just hit different.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="backdrop-blur-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-pink-400/30 p-6">
            <Sparkles className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-white text-xl mb-2">Glassmorphism Design</h3>
            <p className="text-white/70">
              That smooth, frosted glass aesthetic everyone&apos;s obsessed with. Liquid gradients, blur effects, and vibes.
            </p>
          </Card>

          <Card className="backdrop-blur-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-400/30 p-6">
            <Heart className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-white text-xl mb-2">Emoji Everything</h3>
            <p className="text-white/70">
              Full emoji support everywhere. React, express, and communicate in the language of the internet.
            </p>
          </Card>

          <Card className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-400/30 p-6">
            <TrendingUp className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-white text-xl mb-2">Always Evolving</h3>
            <p className="text-white/70">
              We&apos;re constantly adding new features based on what YOU want. Your feedback shapes the app.
            </p>
          </Card>
        </div>

        <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8 mb-12">
          <h2 className="text-white text-3xl mb-6">Why Gen Z Loves MoveSplash</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Flame className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white mb-1">No Toxic Algorithms</h3>
                <p className="text-white/60 text-sm">See what your friends share, not what a faceless ranking system decides you care about.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Lock className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white mb-1">Privacy First</h3>
                <p className="text-white/60 text-sm">Your data is yours. We don&apos;t sell it, period.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white mb-1">Lightning Fast</h3>
                <p className="text-white/60 text-sm">No lag, no loading, just instant vibes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white mb-1">Mental Health Friendly</h3>
                <p className="text-white/60 text-sm">No follower counts, no public likes, less stress</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Music className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white mb-1">Aesthetic AF</h3>
                <p className="text-white/60 text-sm">Every screen is screenshot-worthy</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Share2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white mb-1">Made for Sharing</h3>
                <p className="text-white/60 text-sm">Stories, snaps, memes - share it all your way</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="backdrop-blur-xl bg-gradient-to-br from-yellow-500/30 via-pink-500/30 to-purple-500/30 border-yellow-400/30 p-12 text-center">
          <h2 className="text-white text-4xl mb-4">Join the MoveSplash Generation</h2>
          <p className="text-white/80 text-lg mb-6">
            Where your vibe matters more than your follower count 💯
          </p>
          <Button
            onClick={() => onGetStarted?.()}
            className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 hover:opacity-90 text-white border-0 text-lg px-8 py-6"
          >
            Get Started - It&apos;s Free
          </Button>
        </Card>
      </div>
    </div>
  );
}

// Helper Components
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
        {icon}
      </div>
      <div>
        <h4 className="text-white mb-1">{title}</h4>
        <p className="text-white/60 text-sm">{description}</p>
      </div>
    </div>
  );
}

function UseCase({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white/5 p-4 rounded-lg text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className="text-white text-sm mb-1">{title}</h4>
      <p className="text-white/50 text-xs">{description}</p>
    </div>
  );
}

function StatCard({ number, label, color }: { number: string; label: string; color: string }) {
  return (
    <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6 text-center">
      <div className={`text-5xl text-transparent bg-clip-text bg-gradient-to-r ${color} mb-2`}>
        {number}
      </div>
      <div className="text-white/70">{label}</div>
    </Card>
  );
}

function Bell({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  );
}

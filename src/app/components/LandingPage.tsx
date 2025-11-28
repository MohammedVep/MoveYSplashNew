'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { 
  MessageCircle, 
  Video, 
  Users, 
  Zap, 
  Share2, 
  Heart,
  Camera,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingPageProps {
  onGetStarted: () => void;
  onLogin: () => void;
  onViewFeature?: (feature: 'group-chats' | 'video-calls' | 'screen-share' | 'stories' | 'friends' | 'gen-z') => void;
  onViewHelp?: () => void;
  onViewPrivacy?: () => void;
  onViewTerms?: () => void;
  onViewAbout?: () => void;
  onViewCookies?: () => void;
}

export function LandingPage({ 
  onGetStarted, 
  onLogin, 
  onViewFeature,
  onViewHelp,
  onViewPrivacy,
  onViewTerms,
  onViewAbout,
  onViewCookies 
}: LandingPageProps) {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: MessageCircle,
      title: "Group Chats",
      description: "Keep your entire crew in one thread without losing context.",
      color: "from-pink-500 to-purple-500",
      id: "group-chats" as const
    },
    {
      icon: Video,
      title: "4K Video Calls",
      description: "Face-to-face chats that actually look like real life.",
      color: "from-blue-500 to-cyan-500",
      id: "video-calls" as const
    },
    {
      icon: Share2,
      title: "8K Screen Share",
      description: "Crisp screen shares for homework help, beats, or builds.",
      color: "from-green-500 to-emerald-500",
      id: "screen-share" as const
    },
    {
      icon: Camera,
      title: "Stories & Snaps",
      description: "Post quick moments that disappear before things get messy.",
      color: "from-yellow-500 to-orange-500",
      id: "stories" as const
    },
    {
      icon: Users,
      title: "Friends Network",
      description: "Organize friends, teams, and clubs without juggling apps.",
      color: "from-red-500 to-pink-500",
      id: "friends" as const
    },
    {
      icon: Sparkles,
      title: "Gen Z Vibes",
      description: "Glass, gradients, and motion that feel intentional—not corporate.",
      color: "from-purple-500 to-indigo-500",
      id: "gen-z" as const
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 relative">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-white text-2xl">MoveYSplash</span>
        </div>
        <Button 
          onClick={onLogin}
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
        >
          Log In
        </Button>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white/90 text-sm">Built for real friends, not bots.</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-purple-200">
            One place for the people you actually talk to.
          </h1>
          
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            MoveSplash combines group chats, zero-lag video calls, and disappearing stories so you do not have
            to bounce between five different apps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={onGetStarted}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 px-8 py-6 text-lg group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg"
            >
              See it in action
            </Button>
          </div>
        </div>

        {/* Glass morphism showcase cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              onClick={() => onViewFeature?.(feature.id)}
              className={`p-6 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 transition-all duration-300 cursor-pointer ${
                hoveredFeature === index ? 'transform scale-105 bg-white/15' : ''
              }`}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white text-xl mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
              <div className="text-white/50 text-sm mt-2 flex items-center gap-1">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="relative z-10 bg-white/5 backdrop-blur-lg border-y border-white/10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-white mb-2">10M+</div>
              <div className="text-white/60">Active Users</div>
            </div>
            <div>
              <div className="text-4xl text-white mb-2">500M+</div>
              <div className="text-white/60">Messages Sent</div>
            </div>
            <div>
              <div className="text-4xl text-white mb-2">50M+</div>
              <div className="text-white/60">Video Calls</div>
            </div>
            <div>
              <div className="text-4xl text-white mb-2">100M+</div>
              <div className="text-white/60">Stories Shared</div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Highlight Section */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl text-white mb-6">
              Group chat energy without the chaos.
            </h2>
            <p className="text-white/80 text-lg mb-6">
              Twenty-person threads stay organized with inline replies, reactions, and pinned
              highlights. Everything delivers instantly, so plans do not go stale.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/90">
                💬 Inline replies
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/90">
                😊 Custom emoji packs
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/90">
                📸 Drop-anything sharing
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 p-6">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1584947113929-2d02f9c06203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwc29jaWFsfGVufDF8fHx8MTc2MDcyNzI5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Chat interface"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 container mx-auto px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center p-12 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20">
          <h2 className="text-4xl text-white mb-6">
            Ready to stop hopping between apps?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            MoveSplash keeps chats, calls, stories, and plans in one place so you can just hang out.
          </p>
          <Button 
            onClick={onGetStarted}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 px-8 py-6 text-lg"
          >
            Create Free Account
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-8 h-8 text-purple-400" />
                <span className="text-2xl text-white">MoveSplash</span>
              </div>
              <p className="text-white/60 text-sm">
                A calmer social app for real-life friends, side projects, and late-night ideas.
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-white mb-4">Features</h3>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><button onClick={() => onViewFeature?.('group-chats')} className="hover:text-white transition-colors">Group Chats</button></li>
                <li><button onClick={() => onViewFeature?.('video-calls')} className="hover:text-white transition-colors">Video Calls</button></li>
                <li><button onClick={() => onViewFeature?.('screen-share')} className="hover:text-white transition-colors">Screen Share</button></li>
                <li><button onClick={() => onViewFeature?.('stories')} className="hover:text-white transition-colors">Stories & Snaps</button></li>
                <li><button onClick={() => onViewFeature?.('friends')} className="hover:text-white transition-colors">Friends Network</button></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white mb-4">Company</h3>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><button onClick={onViewHelp} className="hover:text-white transition-colors">Help Center</button></li>
                <li><button onClick={onViewAbout} className="hover:text-white transition-colors">About Us</button></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><button onClick={onViewPrivacy} className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><button onClick={onViewTerms} className="hover:text-white transition-colors">Terms of Use</button></li>
                <li><button onClick={onViewCookies} className="hover:text-white transition-colors">Cookie Policy</button></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © 2025 MoveYSplash, Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                <Heart className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-colors">
                <Sparkles className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

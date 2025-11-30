/* Mohammed Vepari
   ID: 5145543
   Sunday November 30th 2025
  */

import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft, Heart, Zap, Users, Sparkles, Globe, Shield, Rocket } from 'lucide-react';

interface AboutUsProps {
  onBack: () => void;
}

export function AboutUs({ onBack }: AboutUsProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-pink-500/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl top-1/3 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl -bottom-48 left-1/3 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto p-6 py-12">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-white/70 hover:text-white hover:bg-white/10 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 mb-6">
            <Zap className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-white text-6xl mb-4">About MoveYSplash</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            The most vibrant social platform designed for Gen Z. Built with love, powered by innovation.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-white text-2xl mb-3">Our Mission</h2>
              <p className="text-white/70 leading-relaxed">
                We started MoveYSplash because our own group chats were split across four different apps. 
                Instead of bolting on more features, we rebuilt the basics—fast messaging, crisp video,
                expressive design—and kept the experience opinionated but simple.
              </p>
            </div>
          </div>
        </Card>

        {/* Our Values */}
        <div className="mb-12">
          <h2 className="text-white text-3xl mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white text-xl mb-2">Innovation First</h3>
              <p className="text-white/70">
                We only ship features when they make conversations feel more natural—4K video, buttery
                screen share, and tools that do not get in the way.
              </p>
            </Card>

            <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white text-xl mb-2">Community Focused</h3>
              <p className="text-white/70">
                Every roadmap discussion starts with “will this help a friend group stay close?” If not,
                it does not make the cut.
              </p>
            </Card>

            <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white text-xl mb-2">Privacy & Security</h3>
              <p className="text-white/70">
                Encryption, disappearing stories, and clear controls keep your info yours. No data brokers,
                no surprise dark patterns.
              </p>
            </Card>

            <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white text-xl mb-2">Inclusive Design</h3>
              <p className="text-white/70">
                High-contrast themes, captions, and keyboard-friendly flows make the app usable whether
                you are on a phone, tablet, or laptop.
              </p>
            </Card>
          </div>
        </div>

        {/* What Makes Us Different */}
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-white text-2xl mb-3">What Makes Us Different</h2>
            </div>
          </div>
          
          <div className="space-y-4 text-white/70">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>
                <span className="text-white">Honest quality:</span> 4K video and 8K screen share are standard,
                not hidden behind a pricing grid.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>
                <span className="text-white">One tap away:</span> Feeds, stories, calls, and DMs sit under the
                same roof so your group never splinters.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>
                <span className="text-white">Design with taste:</span> The interface nods to glass and neon
                without sacrificing readability or speed.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>
                <span className="text-white">Demo saves the day:</span> If Zoom already owns your camera,
                we fake one so presentations keep rolling.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>
                <span className="text-white">No paywall:</span> Use every feature without upgrading or
                watching ads. We&apos;re focused on building trust, not squeezing wallets.
              </p>
            </div>
          </div>
        </Card>

        {/* Our Story */}
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8 mb-8">
          <h2 className="text-white text-2xl mb-4">Our Story</h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              MoveSplash started as a side project to fix our own friend group problems. We were hopping between
              Snapchat for stories, Discord for planning, and Zoom for calls. It felt ridiculous.
            </p>
            <p>
              Instead of cloning another feed, we stitched the pieces together—hi-res video, stories that do not
              overstay their welcome, and a feed that does not punish you for disappearing for a weekend.
            </p>
            <p>
              Today we are still a small team, but we ship fast, talk to users every week, and keep the product
              honest. If it does not help you connect with real people, it does not ship.
            </p>
          </div>
        </Card>

        {/* Join Us CTA */}
        <Card className="backdrop-blur-xl bg-gradient-to-br from-pink-500/30 to-purple-500/30 border-pink-400/30 p-12 text-center">
          <h2 className="text-white text-4xl mb-4">Join us if you&apos;re tired of noisy feeds.</h2>
          <p className="text-white/80 text-lg mb-6">
            Sign up free, bring your people, and let us worry about the infrastructure.
          </p>
          <Button 
            onClick={onBack}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 text-lg px-8 py-6"
          >
            Get Started Now
          </Button>
        </Card>
      </div>
    </div>
  );
}

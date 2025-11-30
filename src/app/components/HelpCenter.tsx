'use client';
/* Mohammed Vepari
   ID: 5145543
   Sunday November 30th 2025
  */
import { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import {
  Search,
  MessageSquare,
  Video,
  Users,
  Settings,
  Shield,
  Smartphone,
  ArrowLeft,
  HelpCircle,
  Image as ImageIcon
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface HelpCenterProps {
  onBack: () => void;
}

export function HelpCenter({ onBack }: HelpCenterProps) {
  const [searchQuery, setSearchQuery] = useState('');

  type HelpArticle = {
    question: string;
    answer: string;
  };

  type HelpCategory = {
    id: string;
    title: string;
    icon: LucideIcon;
    color: string;
    articles: HelpArticle[];
  };

  const categories: HelpCategory[] = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
      articles: [
        {
          question: "How do I sign up?",
          answer: "Tap 'Get Started,' add your name, email, and a password, then pick a birthday. We drop you into the app right away so you can finish setup later."
        },
        {
          question: "How do I find friends quickly?",
          answer: "Head to the Friends tab, search by name or @handle, or share your personal invite link. Accept requests from the same screen."
        },
        {
          question: "Why use MoveSplash instead of juggling other apps?",
          answer: "Group chat, calls, stories, and the feed live in one place with a mostly chronological timeline. No noisy ads or mystery ranking rules."
        }
      ]
    },
    {
      id: "messaging",
      title: "Messaging & Chat",
      icon: MessageSquare,
      color: "from-purple-500 to-pink-500",
      articles: [
        {
          question: "How do I send a message?",
          answer: "Open Messages, pick a friend, type, and hit enter. Drop emojis, GIFs, or /giphy commands if you want to spice it up."
        },
        {
          question: "What about group chats?",
          answer: "Select 'New Group,' choose up to 20 friends, and name the thread. Everyone can share photos, polls, files, and reactions immediately."
        },
        {
          question: "How do I share media?",
          answer: "Click the paperclip or drag files right into the composer. Large videos compress automatically so they still send quickly."
        },
        {
          question: "Can I send voice notes?",
          answer: "Hold the mic icon to record, release to send, swipe left to cancel. Perfect when you are walking or just cannot type."
        }
      ]
    },
    {
      id: "video-calls",
      title: "Video & Voice Calls",
      icon: Video,
      color: "from-green-500 to-emerald-500",
      articles: [
        {
          question: "How do I start a call?",
          answer: "Open any chat and tap the camera or phone icon. Group chats instantly turn into conference calls with up to 20 people."
        },
        {
          question: "What quality should I expect?",
          answer: "If your gear and connection can handle it we will push 4K video. Otherwise we gracefully fall back to 1080p or 720p so calls stay smooth."
        },
        {
          question: "How do I share my screen?",
          answer: "During a call, hit the monitor icon and choose your window, tab, or full desktop. A border shows what everyone can see."
        },
        {
          question: "What is demo mode?",
          answer: "When another app already owns your camera, demo mode fakes a video feed so you can keep presenting without replugging gear."
        }
      ]
    },
    {
      id: "stories",
      title: "Stories & Moments",
      icon: ImageIcon,
      color: "from-orange-500 to-yellow-500",
      articles: [
        {
          question: "How do I post a story?",
          answer: "Tap your avatar with the plus sign, shoot something new or upload from the camera roll, add stickers or text, then post."
        },
        {
          question: "Who sees my story?",
          answer: "Friends by default, but you can switch to Close Friends or a custom list before publishing each story."
        },
        {
          question: "Can I see who watched it?",
          answer: "Open your own story and swipe up to see a viewer list with timestamps."
        },
        {
          question: "Do stories auto-save?",
          answer: "We stash a copy in your private Memories view and you can download it whenever you want."
        }
      ]
    },
    {
      id: "feed",
      title: "Social Feed",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      articles: [
        {
          question: "How does the feed work?",
          answer: "It is mostly chronological from the people you follow with gentle bumps for posts you missed. No endless recommended junk."
        },
        {
          question: "How do I create a post?",
          answer: "Click 'What's on your mind?', type your update, add media if you want, choose the audience, and press Post."
        },
        {
          question: "What can I share?",
          answer: "Text, photos, videos, playlists, polls, and location tags all live side by side. Mix and match."
        },
        {
          question: "How do reactions work?",
          answer: "Tap the heart for a quick like or hold it to pick from the emoji stack - each one animates differently."
        }
      ]
    },
    {
      id: "privacy",
      title: "Privacy & Security",
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
      articles: [
        {
          question: "Is my data safe?",
          answer: "Messages are encrypted in transit and at rest. We do not sell personal info. Details live in the Privacy Policy."
        },
        {
          question: "How do I control who sees my posts?",
          answer: "Every post has a visibility picker (Public, Friends, Close Friends, Custom). We remember your last choice."
        },
        {
          question: "How do I block or report someone?",
          answer: "From their profile, open the three-dot menu and choose Block or Report. We review reports quickly and keep you anonymous."
        },
        {
          question: "Can I deactivate or delete my account?",
          answer: "Go to Settings -> Account. Deactivate to take a break, or start a permanent deletion which finishes after 30 days."
        }
      ]
    },
    {
      id: "settings",
      title: "Settings & Account",
      icon: Settings,
      color: "from-teal-500 to-cyan-500",
      articles: [
        {
          question: "How do I change my profile photo?",
          answer: "Open your profile, tap the avatar, and upload a new shot or snap one on the spot."
        },
        {
          question: "Where do I manage notifications?",
          answer: "Settings -> Notifications lets you toggle DMs, calls, mentions, and set quiet hours so MoveSplash stays chill while you sleep."
        },
        {
          question: "Can I tweak the theme?",
          answer: "MoveSplash follows your system light or dark mode and lets you customize accent colors plus chat bubble gradients."
        },
        {
          question: "How do I change my password?",
          answer: "Settings -> Account -> Change Password. Enter the current password once and the new one twice to confirm."
        }
      ]
    }
  ];


  const filteredCategories = categories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      searchQuery === '' ||
      article.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.articles.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-white/70 hover:text-white hover:bg-white/10 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="text-center space-y-4 mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-white text-5xl">Help Center</h1>
            <p className="text-white/70 text-lg">
              Find answers to common questions and learn how to use MoveSplash
            </p>
          </div>

          {/* Search Bar */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
              <Input
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
          </Card>
        </div>

        {/* Categories Grid */}
        {searchQuery === '' && (
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.id}
                  className="backdrop-blur-xl bg-white/10 border-white/20 p-6 hover:bg-white/15 transition-all"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${category.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white text-lg mb-2">{category.title}</h3>
                  <p className="text-white/60 text-sm">{category.articles.length} articles</p>
                </Card>
              );
            })}
          </div>
        )}

        {/* FAQ Sections */}
        <div className="space-y-6">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                className="backdrop-blur-xl bg-white/10 border-white/20 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${category.color}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-white text-2xl">{category.title}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-2">
                  {category.articles.map((article, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.id}-${index}`}
                      className="border-white/10 rounded-lg overflow-hidden"
                    >
                      <AccordionTrigger className="text-white hover:text-white/80 px-4 py-3 hover:bg-white/5">
                        {article.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/70 px-4 pb-3">
                        {article.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

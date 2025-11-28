'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ScrollArea } from './ui/scroll-area';
import { Sparkles, Wand2, Send, Copy, RefreshCw, Check } from 'lucide-react';
import { toast } from 'sonner';

interface MessageInspirationProps {
  onInsertMessage: (message: string) => void;
}

export function MessageInspiration({ onInsertMessage }: MessageInspirationProps) {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  // Lightweight prompt-based generator that swaps in a few curated suggestions
  const generateMessage = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt');
      return;
    }

    setIsGenerating(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate contextual responses based on prompt keywords
    let message = '';
    const lowerPrompt = prompt.toLowerCase();

    if (lowerPrompt.includes('congratulate') || lowerPrompt.includes('congrats')) {
      message = `Congratulations! 🎉 That's absolutely amazing news! I'm so proud of you and all the hard work you've put in. You totally deserve this!`;
    } else if (lowerPrompt.includes('apologize') || lowerPrompt.includes('sorry')) {
      message = `Hey, I wanted to reach out and sincerely apologize for what happened. I really didn't mean for things to go that way, and I feel terrible about it. Can we talk about this?`;
    } else if (lowerPrompt.includes('thank')) {
      message = `Thank you so much! 🙏 I really appreciate your help and support. It means the world to me, and I couldn't have done it without you!`;
    } else if (lowerPrompt.includes('invite') || lowerPrompt.includes('hang out')) {
      message = `Hey! I was wondering if you'd like to hang out this weekend? We could grab coffee, catch a movie, or just chill. Let me know what works for you! ☕🎬`;
    } else if (lowerPrompt.includes('busy') || lowerPrompt.includes('can\'t make it')) {
      message = `Hey, I'm really sorry but I won't be able to make it today. Something came up that I need to take care of. Can we reschedule for another time? I promise I'll make it up to you!`;
    } else if (lowerPrompt.includes('birthday') || lowerPrompt.includes('bday')) {
      message = `Happy Birthday! 🎂🎉 Hope you have the most amazing day filled with joy, laughter, and all your favorite things. You deserve the best! 🎈✨`;
    } else if (lowerPrompt.includes('good morning') || lowerPrompt.includes('morning')) {
      message = `Good morning! ☀️ Hope you slept well and are ready to crush this day! Let me know if you want to grab breakfast or coffee later. Have an awesome day! 💪`;
    } else if (lowerPrompt.includes('good night') || lowerPrompt.includes('night')) {
      message = `Good night! 🌙 Sleep well and sweet dreams! Tomorrow's going to be another great day. Rest up! ✨💤`;
    } else if (lowerPrompt.includes('meeting') || lowerPrompt.includes('schedule')) {
      message = `Hi! I wanted to check if we could schedule a meeting to discuss this further. I'm available most of this week. What time works best for you? Looking forward to connecting!`;
    } else if (lowerPrompt.includes('miss you')) {
      message = `I miss you too! 💕 It's been way too long since we last hung out. We definitely need to catch up soon. When are you free?`;
    } else if (lowerPrompt.includes('love')) {
      message = `You mean the world to me! ❤️ I'm so grateful to have you in my life. Thank you for always being there and being amazing!`;
    } else if (lowerPrompt.includes('funny') || lowerPrompt.includes('joke')) {
      message = `Haha, you won't believe what just happened! 😂 I was literally just thinking about that and it happened again. The universe has a weird sense of humor lol`;
    } else if (lowerPrompt.includes('excited')) {
      message = `OMG I'm SO excited! 🤩 This is literally the best thing ever! I can't wait to tell you all about it! When can we meet up?`;
    } else if (lowerPrompt.includes('help') || lowerPrompt.includes('support')) {
      message = `I'm here for you! 💙 Whatever you need, just let me know. We'll figure this out together. You're not alone in this!`;
    } else if (lowerPrompt.includes('work') || lowerPrompt.includes('project')) {
      message = `Hey! Just wanted to check in on the project. How's everything going on your end? Let me know if you need any help or if there's anything I can do to support you!`;
    } else {
      // Generic response based on the prompt
      message = `Hey! ${prompt} I'd love to hear your thoughts on this. What do you think? Let's chat about it soon! 💬`;
    }

    setGeneratedMessage(message);
    setIsGenerating(false);
    toast.success('Message generated! ✨');
  };

  const handleInsert = () => {
    if (generatedMessage) {
      onInsertMessage(generatedMessage);
      setOpen(false);
      setPrompt('');
      setGeneratedMessage('');
      toast.success('Message inserted! 📝');
    }
  };

  const handleCopy = () => {
    if (generatedMessage) {
      navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      toast.success('Copied to clipboard! 📋');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleRegenerate = () => {
    generateMessage();
  };

  const quickPrompts = [
    'Congratulate someone on their achievement',
    'Apologize for missing an event',
    'Thank someone for their help',
    'Invite friends to hang out',
    'Say good morning cheerfully',
    'Wish someone happy birthday',
    'Ask to reschedule a meeting',
    'Express that you miss someone'
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button 
          size="sm"
          variant="ghost"
          className="text-white/70 hover:text-white hover:bg-white/10 relative group"
        >
          <Sparkles className="w-5 h-5" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
        </Button>
      </PopoverTrigger>
      
      <PopoverContent 
        className="w-[500px] p-0 backdrop-blur-xl bg-gradient-to-br from-purple-900/95 to-pink-900/95 border-white/20" 
        align="end"
        side="top"
      >
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
              <Wand2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white">Message Jumpstart</h3>
              <p className="text-white/60 text-sm">Stuck on words? Try a quick suggestion.</p>
            </div>
          </div>

          {/* Prompt Input */}
          <div className="space-y-3 mb-4">
            <div className="flex gap-2">
              <Input
                placeholder="Describe what you want to say..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && generateMessage()}
                className="flex-1 bg-white/5 border-white/20 text-white placeholder:text-white/50"
              />
              <Button
                onClick={generateMessage}
                disabled={isGenerating || !prompt.trim()}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white border-0"
              >
                {isGenerating ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Sparkles className="w-4 h-4" />
                )}
              </Button>
            </div>

            {/* Quick Prompts */}
            <ScrollArea className="h-24">
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((quickPrompt, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(quickPrompt)}
                    className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white/70 hover:text-white rounded-full text-xs transition-all"
                  >
                    {quickPrompt}
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Generated Message */}
          {generatedMessage && (
            <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-4 mb-4">
              <div className="flex items-start gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-white text-sm leading-relaxed">{generatedMessage}</p>
                </div>
              </div>
              
              <div className="flex gap-2 justify-end">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCopy}
                  className="text-white/70 hover:text-white hover:bg-white/10"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-1" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleRegenerate}
                  disabled={isGenerating}
                  className="text-white/70 hover:text-white hover:bg-white/10"
                >
                  <RefreshCw className={`w-4 h-4 mr-1 ${isGenerating ? 'animate-spin' : ''}`} />
                  Regenerate
                </Button>
                <Button
                  size="sm"
                  onClick={handleInsert}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0"
                >
                  <Send className="w-4 h-4 mr-1" />
                  Insert
                </Button>
              </div>
            </Card>
          )}

          {/* Loading State */}
          {isGenerating && (
            <div className="flex items-center justify-center py-8">
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 border-4 border-white/20 border-t-yellow-400 rounded-full animate-spin"></div>
                  <Sparkles className="w-6 h-6 text-yellow-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <p className="text-white/70 text-sm">Generating message...</p>
              </div>
            </div>
          )}

          {/* Tips */}
          {!generatedMessage && !isGenerating && (
            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
              <p className="text-white/60 text-xs mb-2">💡 Tips:</p>
              <ul className="text-white/50 text-xs space-y-1">
                <li>• Be specific about the tone (friendly, formal, casual)</li>
                <li>• Mention the context (birthday, apology, invitation)</li>
                <li>• Include any specific details you want in the message</li>
              </ul>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

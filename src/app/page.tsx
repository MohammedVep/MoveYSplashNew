'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { Navigation } from './components/Navigation';
import { MainFeed } from './components/MainFeed';
import { ChatInterface } from './components/ChatInterface';
import { VideoChat } from './components/VideoChat';
import { FriendsList } from './components/FriendsList';
import { Stories } from './components/Stories';
import { Settings } from './components/Settings';
import { Profile } from './components/Profile';
import { HelpCenter } from './components/HelpCenter';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';
import { AboutUs } from './components/AboutUs';
import { CookiePolicy } from './components/CookiePolicy';
import { FeaturePages } from './components/FeaturePages';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner';
import { UserProvider, useUser } from './utils/userContext';
import type { AppState, AppView, CallType, FeatureType } from './types/app';
import { cn } from './components/ui/utils';
import type { ShareToMessagesPayload } from './utils/shareUtils';

const LOGIN_BASE = '/login';
const DEFAULT_VIEW: AppView = 'feed';

const viewPathSegments: Record<AppView, string> = {
  feed: 'feed',
  messages: 'messages',
  video: 'videochat',
  friends: 'friendsList',
  stories: 'stories',
  settings: 'settings',
  profile: 'profile',
  help: 'help',
  privacy: 'privacy',
  terms: 'terms'
};

const pathSegmentToView = Object.entries(viewPathSegments).reduce<Record<string, AppView>>(
  (acc, [view, segment]) => {
    acc[segment.toLowerCase()] = view as AppView;
    return acc;
  },
  {}
);

const featurePathSegments: Record<FeatureType, string> = {
  'group-chats': 'messaging',
  'video-calls': 'videochat',
  'screen-share': 'screenshare',
  stories: 'stories',
  friends: 'friends',
  'gen-z': 'genz'
};

const pathSegmentToFeature = Object.entries(featurePathSegments).reduce<Record<string, FeatureType>>(
  (acc, [feature, segment]) => {
    acc[segment.toLowerCase()] = feature as FeatureType;
    return acc;
  },
  {}
);

const staticLandingRoutes: Record<string, AppState> = {
  help: 'help',
  privacy: 'privacy',
  terms: 'terms',
  about: 'about',
  cookies: 'cookies',
  signup: 'signup'
};

const staticStatePaths: Partial<Record<AppState, string>> = {
  landing: '/',
  signup: '/signup',
  help: '/help',
  privacy: '/privacy',
  terms: '/terms',
  about: '/about',
  cookies: '/cookies'
};

type DerivedLocationState = {
  state: AppState;
  feature: FeatureType | null;
  view: AppView;
};

function deriveStateFromPath(pathname: string): DerivedLocationState {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return { state: 'landing', feature: null, view: DEFAULT_VIEW };
  }

  const [first, second] = segments.map((segment) => segment.toLowerCase());

  if (first === 'login') {
    if (!second) {
      return { state: 'login', feature: null, view: DEFAULT_VIEW };
    }
    const matchedView = pathSegmentToView[second];
    if (matchedView) {
      return { state: 'app', feature: null, view: matchedView };
    }
    return { state: 'login', feature: null, view: DEFAULT_VIEW };
  }

  const staticState = staticLandingRoutes[first];
  if (staticState) {
    return { state: staticState, feature: null, view: DEFAULT_VIEW };
  }

  const matchedFeature = pathSegmentToFeature[first];
  if (matchedFeature) {
    return { state: 'feature', feature: matchedFeature, view: DEFAULT_VIEW };
  }

  return { state: 'landing', feature: null, view: DEFAULT_VIEW };
}

function pathForState(state: AppState, feature: FeatureType | null, view: AppView): string {
  if (state === 'login') {
    return LOGIN_BASE;
  }

  if (state === 'app') {
    const segment = viewPathSegments[view] ?? viewPathSegments[DEFAULT_VIEW];
    return `${LOGIN_BASE}/${segment}`;
  }

  if (state === 'feature' && feature) {
    return `/${featurePathSegments[feature]}`;
  }

  return staticStatePaths[state] ?? '/';
}

function AppShell() {
  const { login, signup, logout, currentUser, loadProfileUser } = useUser();
  const router = useRouter();
  const pathname = usePathname() || '/';
  const derivedFromPath = deriveStateFromPath(pathname);
  const [appState, setAppState] = useState<AppState>(derivedFromPath.state);
  const [currentView, setCurrentView] = useState<AppView>(derivedFromPath.view);
  const [activeCall, setActiveCall] = useState<CallType>(null);
  const [currentFeature, setCurrentFeature] = useState<FeatureType | null>(derivedFromPath.feature);
  const [pendingShareDraft, setPendingShareDraft] = useState<ShareToMessagesPayload | null>(null);
  const [pendingMessageTarget, setPendingMessageTarget] = useState<string | null>(null);
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(null);
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const { resolvedTheme } = useTheme();
  const isLightTheme = resolvedTheme === 'light';

  const appContainerClass = cn(
    'min-h-screen relative overflow-hidden transition-colors duration-500',
    isLightTheme
      ? 'bg-gradient-to-br from-rose-100 via-purple-100 to-sky-100 text-slate-900'
      : 'bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 text-white'
  );

  const backgroundBlobs = isLightTheme
    ? [
        'absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob',
        'absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000',
        'absolute -bottom-40 left-20 w-96 h-96 bg-gradient-to-r from-sky-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000'
      ]
    : [
        'absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob',
        'absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000',
        'absolute -bottom-40 left-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000'
      ];

  useEffect(() => {
    const derived = deriveStateFromPath(pathname);

    if (derived.state === 'app') {
      setAppState('app');
      setCurrentView(derived.view);
      setCurrentFeature(null);
      return;
    }

    if (derived.state === 'feature') {
      setAppState('feature');
      setCurrentFeature(derived.feature);
      return;
    }

    setAppState(derived.state);
    setCurrentFeature(null);
  }, [pathname]);

  useEffect(() => {
    const targetPath = pathForState(appState, currentFeature, currentView);
    if (pathname !== targetPath) {
      router.replace(targetPath, { scroll: false });
    }
  }, [appState, currentFeature, currentView, pathname, router]);

  useEffect(() => {
    if (!currentUser) {
      setSelectedProfileId(null);
      return;
    }

    setSelectedProfileId(prev => (prev ? prev : currentUser.id));
  }, [currentUser]);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (selectedProfileId === null) {
        setIsProfileLoading(false);
        await loadProfileUser(null);
        return;
      }

      setIsProfileLoading(true);
      const success = await loadProfileUser(selectedProfileId);
      if (cancelled) {
        return;
      }

      setIsProfileLoading(false);
      if (!success) {
        toast.error('Unable to load that profile right now.');
      }
    };

    void run();

    return () => {
      cancelled = true;
    };
  }, [selectedProfileId, loadProfileUser]);

  const handleLogin = async (email: string, password: string) => {
    const success = await login(email, password);
    if (success) {
      toast.success('Welcome back! 🎉');
      setSelectedProfileId(null);
      setAppState('app');
      setCurrentView('feed');
    } else {
      toast.error('Invalid email or password');
    }
  };

  const handleSignup = async (name: string, email: string, password: string, birthdate: string) => {
    const success = await signup(name, email, password, birthdate);
    if (success) {
      toast.success(`Welcome to MoveSplash, ${name}! 🚀`);
      setSelectedProfileId(null);
      setAppState('app');
      setCurrentView('feed');
    } else {
      toast.error('Email already in use');
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('See you later! 👋');
    setSelectedProfileId(null);
    setPendingMessageTarget(null);
    setIsProfileLoading(false);
    setAppState('landing');
  };

  const handleNavigate = (view: AppView) => {
    if (view === 'profile') {
      setSelectedProfileId(currentUser ? currentUser.id : null);
    }
    setCurrentView(view);
    setActiveCall(null); // Clear active call when navigating
  };

  const handleStartCall = (type: 'audio' | 'video') => {
    setActiveCall(type);
    setCurrentView('video');
  };

  const handleEndCall = () => {
    setActiveCall(null);
    setCurrentView('messages'); // Return to messages after call ends
  };

  const handleOpenSettings = () => {
    setCurrentView('settings');
    setActiveCall(null);
  };

  const handleOpenHelpCenterInApp = () => {
    setActiveCall(null);
    setCurrentView('help');
  };

  const handleOpenPrivacyPolicyInApp = () => {
    setActiveCall(null);
    setCurrentView('privacy');
  };

  const handleOpenTermsInApp = () => {
    setActiveCall(null);
    setCurrentView('terms');
  };

  const handleCloseSettings = () => {
    setCurrentView('feed');
  };

  const handleShareToMessages = (payload: ShareToMessagesPayload) => {
    setPendingShareDraft(payload);
    setCurrentView('messages');
  };

  const handleOpenMessagesForUser = (userId: string) => {
    setPendingMessageTarget(userId);
    setCurrentView('messages');
  };

  const handleOpenProfile = (userId: string) => {
    setSelectedProfileId(userId);
    setCurrentView('profile');
  };

  const handleProfileBack = () => {
    if (currentUser) {
      setSelectedProfileId(currentUser.id);
    }
    setCurrentView('friends');
  };

  const handleOpenLoginFlow = () => {
    setCurrentFeature(null);
    setAppState('login');
  };

  const handleOpenFeature = (feature: FeatureType) => {
    setCurrentFeature(feature);
    setAppState('feature');
  };

  const handleCloseFeature = () => {
    setCurrentFeature(null);
    setAppState('landing');
  };

  // Render different states
  if (appState === 'help') {
    return (
      <>
        <HelpCenter onBack={() => setAppState('landing')} />
        <Toaster position="top-center" />
      </>
    );
  }

  if (appState === 'privacy') {
    return (
      <>
        <PrivacyPolicy onBack={() => setAppState('landing')} />
        <Toaster position="top-center" />
      </>
    );
  }

  if (appState === 'terms') {
    return (
      <>
        <TermsOfUse onBack={() => setAppState('landing')} />
        <Toaster position="top-center" />
      </>
    );
  }

  if (appState === 'about') {
    return (
      <>
        <AboutUs onBack={() => setAppState('landing')} />
        <Toaster position="top-center" />
      </>
    );
  }

  if (appState === 'cookies') {
    return (
      <>
        <CookiePolicy onBack={() => setAppState('landing')} />
        <Toaster position="top-center" />
      </>
    );
  }

  if (appState === 'feature' && currentFeature) {
    return (
      <>
        <FeaturePages 
          feature={currentFeature} 
          onBack={handleCloseFeature}
          onGetStarted={() => setAppState('signup')}
        />
        <Toaster position="top-center" />
      </>
    );
  }

  if (appState === 'landing') {
    return (
      <>
        <LandingPage
          onGetStarted={() => setAppState('signup')}
          onLogin={handleOpenLoginFlow}
          onViewFeature={handleOpenFeature}
          onViewHelp={() => setAppState('help')}
          onViewPrivacy={() => setAppState('privacy')}
          onViewTerms={() => setAppState('terms')}
          onViewAbout={() => setAppState('about')}
          onViewCookies={() => setAppState('cookies')}
        />
        <Toaster position="top-center" />
      </>
    );
  }

  if (appState === 'login') {
    return (
      <>
        <LoginPage
          onLogin={handleLogin}
          onBack={() => setAppState('landing')}
          onSignup={() => setAppState('signup')}
        />
        <Toaster position="top-center" />
      </>
    );
  }

  if (appState === 'signup') {
    return (
      <>
        <SignupPage
          onSignup={handleSignup}
          onBack={() => setAppState('landing')}
          onLogin={handleOpenLoginFlow}
        />
        <Toaster position="top-center" />
      </>
    );
  }

  // Main App View
  return (
    <div className={appContainerClass}>
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {backgroundBlobs.map((className, index) => (
          <div key={index} className={className}></div>
        ))}
      </div>

      {/* Navigation */}
      <Navigation
        currentView={currentView}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        onOpenSettings={handleOpenSettings}
      />

      {/* Main Content */}
      <main className="relative z-10 p-6">
        {currentView === 'feed' && (
          <div className="space-y-6">
            <Stories />
            <MainFeed onShareToMessages={handleShareToMessages} />
          </div>
        )}
        {currentView === 'messages' && !activeCall && (
          <ChatInterface
            onStartCall={handleStartCall}
            shareDraft={pendingShareDraft?.message ?? null}
            onShareDraftConsumed={() => setPendingShareDraft(null)}
            focusUserId={pendingMessageTarget}
            onFocusUserConsumed={() => setPendingMessageTarget(null)}
          />
        )}
        {(currentView === 'video' || activeCall) && (
          <VideoChat 
            callType={activeCall || 'video'} 
            onEndCall={handleEndCall}
          />
        )}
        {currentView === 'friends' && (
          <FriendsList
            onOpenProfile={handleOpenProfile}
            onOpenMessage={handleOpenMessagesForUser}
          />
        )}
        {currentView === 'stories' && <Stories />}
        {currentView === 'settings' && (
          <Settings
            onClose={handleCloseSettings}
            onLogout={handleLogout}
            onOpenHelpCenter={handleOpenHelpCenterInApp}
            onOpenPrivacyPolicy={handleOpenPrivacyPolicyInApp}
            onOpenTermsOfService={handleOpenTermsInApp}
          />
        )}
        {currentView === 'help' && (
          <HelpCenter onBack={() => setCurrentView('settings')} />
        )}
        {currentView === 'privacy' && (
          <PrivacyPolicy onBack={() => setCurrentView('settings')} />
        )}
        {currentView === 'terms' && (
          <TermsOfUse onBack={() => setCurrentView('settings')} />
        )}
        {currentView === 'profile' && (
          <Profile
            onShareToMessages={handleShareToMessages}
            profileUserId={selectedProfileId}
            isLoading={isProfileLoading}
            onBackToFriends={handleProfileBack}
          />
        )}
      </main>

      <Toaster position="top-center" />

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

export default function App() {
  return (
    <UserProvider>
      <AppShell />
    </UserProvider>
  );
}

/* Mohammed Vepari
Tuesday November 11th 2025
ID: 5145543
*/




import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyProps {
  onBack: () => void;
}

export function CookiePolicy({ onBack }: CookiePolicyProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-yellow-900 to-amber-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-orange-500/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-yellow-500/30 rounded-full blur-3xl top-1/3 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-96 h-96 bg-amber-500/30 rounded-full blur-3xl -bottom-48 left-1/3 animate-pulse" style={{ animationDelay: '2s' }}></div>
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 mb-6">
            <Cookie className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-white text-6xl mb-4">Cookie Policy</h1>
          <p className="text-white/70 text-lg">
            Last Updated: January 17, 2025
          </p>
        </div>

        {/* Introduction */}
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8 mb-6">
          <h2 className="text-white text-2xl mb-4">What Are Cookies?</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Cookies are tiny text snippets your browser saves so a site remembers you the next time.
          </p>
          <p className="text-white/70 leading-relaxed">
            MoveSplash uses cookies to keep you signed in, load things faster, and figure out which features
            deserve more love.
          </p>
        </Card>

        {/* Types of Cookies */}
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8 mb-6">
          <h2 className="text-white text-2xl mb-6">Types of Cookies We Use</h2>
          
          <div className="space-y-6">
            {/* Essential Cookies */}
            <div>
              <h3 className="text-white text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl">🔐</span> Essential Cookies (Required)
              </h3>
              <p className="text-white/70 leading-relaxed mb-3">
                These are the behind-the-scenes helpers that keep MoveSplash usable. Without them you
                couldn&apos;t log in, load your feed, or protect your account.
              </p>
              <ul className="space-y-2 text-white/60 text-sm ml-8">
                <li>• Authentication tokens so you stay signed in.</li>
                <li>• Session cookies that remember which tab is yours.</li>
                <li>• Security cookies that catch suspicious logins.</li>
                <li>• Load-balancer notes to keep the app speedy.</li>
              </ul>
              <p className="text-white/50 text-sm mt-2">
                ⚠️ If you disable these, the app simply won&apos;t run.
              </p>
            </div>

            {/* Functional Cookies */}
            <div>
              <h3 className="text-white text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl">⚙️</span> Functional Cookies
              </h3>
              <p className="text-white/70 leading-relaxed mb-3">
                These remember the little things so you don&apos;t have to redo them every visit.
              </p>
              <ul className="space-y-2 text-white/60 text-sm ml-8">
                <li>• Language and region settings.</li>
                <li>• Light/dark mode and accessibility tweaks.</li>
                <li>• Video quality defaults for calls and streams.</li>
                <li>• Notification and mute choices.</li>
                <li>• Demo mode toggles when you block hardware access.</li>
                <li>• Volume, playback, and camera preferences.</li>
              </ul>
            </div>

            {/* Analytics Cookies */}
            <div>
              <h3 className="text-white text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl">📊</span> Analytics Cookies
              </h3>
              <p className="text-white/70 leading-relaxed mb-3">
                These help us understand what&apos;s working and what&apos;s confusing so we can make better decisions.
              </p>
              <ul className="space-y-2 text-white/60 text-sm ml-8">
                <li>• Which screens people bounce from immediately.</li>
                <li>• Feature usage stats so we know what to improve.</li>
                <li>• Performance metrics and crash reports.</li>
                <li>• Approximate time spent inside different areas.</li>
                <li>• Anonymous device/browser combos to reproduce bugs.</li>
              </ul>
              <p className="text-white/60 text-sm mt-2">
                We aggregate this data and never sell individual information.
              </p>
            </div>

            {/* Performance Cookies */}
            <div>
              <h3 className="text-white text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl">⚡</span> Performance Cookies
              </h3>
              <p className="text-white/70 leading-relaxed mb-3">
                These keep things smooth even when your Wi-Fi isn&apos;t.
              </p>
              <ul className="space-y-2 text-white/60 text-sm ml-8">
                <li>• Cached assets so feeds don&apos;t reload on every scroll.</li>
                <li>• CDN routing choices to serve content from nearby servers.</li>
                <li>• Adaptive video streaming that matches your connection.</li>
                <li>• Network monitoring to catch regional outages quickly.</li>
              </ul>
            </div>

            {/* Social Media Cookies */}
            <div>
              <h3 className="text-white text-xl mb-2 flex items-center gap-2">
                <span className="text-2xl">📱</span> Social Media & Integration Cookies
              </h3>
              <p className="text-white/70 leading-relaxed mb-3">
                These power things like social logins and embedded content.
              </p>
              <ul className="space-y-2 text-white/60 text-sm ml-8">
                <li>• Share buttons and live embeds.</li>
                <li>• OAuth logins through Apple, Google, or others.</li>
                <li>• Playing nicely with calendars, docs, or other shared content.</li>
                <li>• Remembering permissions you&apos;ve granted to integrations.</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Third-Party Cookies */}
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8 mb-6">
          <h2 className="text-white text-2xl mb-4">Third-Party Cookies</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Some of the tools we lean on drop their own cookies. We only work with vendors we trust and we keep the list short:
          </p>
          <ul className="space-y-3 text-white/60">
            <li className="flex items-start gap-3">
              <span className="text-white">•</span>
              <div>
                <span className="text-white">Analytics partners:</span> Help us spot bugs, crashes, and clunky flows.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white">•</span>
              <div>
                <span className="text-white">Authentication providers:</span> Power single-sign-on through services like Google or Apple.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white">•</span>
              <div>
                <span className="text-white">CDNs:</span> Serve photos and videos quickly from servers near you.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white">•</span>
              <div>
                <span className="text-white">Video infrastructure:</span> Keep 4K calls and screen shares stable.
              </div>
            </li>
          </ul>
        </Card>

        {/* Managing Cookies */}
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8 mb-6">
          <h2 className="text-white text-2xl mb-4">Managing Your Cookie Preferences</h2>
          
          <div className="space-y-4 text-white/70 leading-relaxed">
            <div>
              <h3 className="text-white text-lg mb-2">Browser Settings</h3>
              <p className="mb-2">
                Head to your browser&apos;s privacy panel to tweak cookies. Typical controls include:
              </p>
              <ul className="space-y-2 text-white/60 ml-6">
                <li>• Viewing or deleting saved cookies.</li>
                <li>• Blocking every cookie (the app will struggle if you do).</li>
                <li>• Blocking only third-party cookies while keeping essentials.</li>
                <li>• Auto-clearing cookies each time you close the browser.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg mb-2">In-App Settings</h3>
              <p>
                Inside MoveSplash go to Settings → Privacy → Cookie Preferences to:
              </p>
              <ul className="space-y-2 text-white/60 ml-6 mt-2">
                <li>• Clear cached data without deleting the app.</li>
                <li>• Adjust notification and tracking permissions.</li>
                <li>• Review active sessions and log out devices.</li>
              </ul>
            </div>

            <div className="bg-yellow-500/20 border border-yellow-400/30 p-4 rounded-lg">
              <p className="text-yellow-200">
                ⚠️ <strong>Heads up:</strong> Disabling essential cookies breaks logins and live features.
                If something feels off after changing settings, re-enable required cookies and refresh.
              </p>
            </div>
          </div>
        </Card>

        {/* Cookie Duration */}
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8 mb-6">
          <h2 className="text-white text-2xl mb-4">How Long Do Cookies Last?</h2>
          
          <div className="space-y-3 text-white/70">
            <div>
              <h3 className="text-white mb-1">Session Cookies</h3>
              <p className="text-sm">
                Short-lived and gone when you close the tab. These keep you logged in while you bounce between screens.
              </p>
            </div>
            <div>
              <h3 className="text-white mb-1">Persistent Cookies</h3>
              <p className="text-sm">
                Stick around for 30 days to a year so we remember things like your theme or camera settings.
              </p>
            </div>
          </div>
        </Card>

        {/* Updates */}
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-8 mb-6">
          <h2 className="text-white text-2xl mb-4">Updates to This Policy</h2>
          <p className="text-white/70 leading-relaxed">
            If we tweak how we use cookies, we&apos;ll update this page and refresh the “Last Updated” date.
            Big changes also trigger an in-app heads-up.
          </p>
        </Card>

        {/* Back to Top */}
        <div className="text-center mt-12">
          <Button
            onClick={onBack}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white border-0 px-8 py-6"
          >
            Back to MoveSplash
          </Button>
        </div>
      </div>
    </div>
  );
}

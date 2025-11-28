import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft, Shield, Eye, Lock, Database, Bell, Cookie, Mail } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto p-6">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-white/70 hover:text-white hover:bg-white/10 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-4">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-white text-5xl mb-4">Privacy Policy</h1>
          <p className="text-white/70">
            Last Updated: October 17, 2025
          </p>
        </div>

        {/* Quick Overview */}
        <Card className="backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-400/30 p-6 mb-6">
          <h2 className="text-white text-2xl mb-4">🛡️ Your Privacy Matters</h2>
          <p className="text-white/80 leading-relaxed">
            Privacy shouldn&apos;t require a law degree. This page spells out what we collect, why we collect it,
            and the shortcuts you have to control it. No dark patterns—just the facts.
          </p>
        </Card>

        {/* Sections */}
        <div className="space-y-6">
          {/* Information We Collect */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-white text-2xl">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-white/70">
              <div>
                <h3 className="text-white text-lg mb-2">Account Information</h3>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>The name and email you typed in when creating your account.</li>
                  <li>Any profile photo, pronouns, or bio you choose to share.</li>
                  <li>Optional recovery info like a phone number so we can help if you get locked out.</li>
                  <li>Birthday details so we can confirm you meet the minimum age.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-lg mb-2">Content You Create</h3>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Chats, comments, and stories you post or send to friends.</li>
                  <li>Photos, videos, audio notes, and files you drop into the app.</li>
                  <li>Optional call recordings when everyone on the call says yes.</li>
                  <li>Reactions, likes, and any other in-app signals you create.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-lg mb-2">Usage Information</h3>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Which features you tap on and how often you use them.</li>
                  <li>Rough session stats like how long you hang out in the app.</li>
                  <li>Basic device details (model, OS, browser) so we can debug things.</li>
                  <li>Your IP address and general location (city/country—not your street).</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* How We Use Your Information */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-white text-2xl">How We Use Your Information</h2>
            </div>
            <div className="space-y-3 text-white/70">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <span className="text-white">Run the product:</span> We need certain data to power chats, calls, and feed features.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <span className="text-white">Improve experience:</span> Usage trends help us fix bugs and surface better suggestions.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <span className="text-white">Safety & security:</span> Logs help us flag spam, prevent abuse, and keep accounts secure.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <span className="text-white">Communications:</span> We use contact info for product updates, receipts, and support replies.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <span className="text-white">Analytics:</span> Aggregated stats tell us which features people love (or ignore).
                </div>
              </div>
            </div>
          </Card>

          {/* Data Security */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-white text-2xl">Data Security</h2>
            </div>
            <div className="space-y-3 text-white/70">
              <p>
                Security is an ongoing job, so we layer multiple protections instead of relying on a single switch:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Messages and calls are encrypted end-to-end by default.</li>
                <li>Everything travels over HTTPS while in transit.</li>
                <li>Independent partners run routine pen-tests and code reviews.</li>
                <li>Optional 2FA keeps strangers from hijacking your account.</li>
                <li>Production databases stay encrypted at rest with limited access.</li>
                <li>Only vetted employees can reach user data, and every query is logged.</li>
              </ul>
            </div>
          </Card>

          {/* Sharing Information */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-white text-2xl">When We Share Information</h2>
            </div>
            <div className="space-y-3 text-white/70">
              <p className="text-white">We don&apos;t sell or rent your personal data. That&apos;s not our business model.</p>
              <p>We only share info when it&apos;s absolutely necessary:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><span className="text-white">You tell us to:</span> Sharing publicly or inviting friends obviously sends them your content.</li>
                <li><span className="text-white">Vetted partners:</span> Hosting, analytics, and support providers under strict confidentiality clauses.</li>
                <li><span className="text-white">Law enforcement:</span> When a valid legal request arrives or there&apos;s an immediate risk of harm.</li>
                <li><span className="text-white">Company changes:</span> If we merge or get acquired, we&apos;ll let you know before data changes hands.</li>
              </ul>
            </div>
          </Card>

          {/* Your Rights */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-white text-2xl">Your Privacy Rights</h2>
            </div>
            <div className="space-y-3 text-white/70">
              <p>Here are the switches you control at any time:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-white mb-2">✓ Access Your Data</h3>
                  <p className="text-sm">Ask for a copy of the info we store about your account.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-white mb-2">✓ Correct Information</h3>
                  <p className="text-sm">Fix typos or outdated details whenever you want.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-white mb-2">✓ Delete Your Account</h3>
                  <p className="text-sm">Close your account and wipe most data within about 30 days.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-white mb-2">✓ Export Your Data</h3>
                  <p className="text-sm">Grab your photos, chats, and other content in a portable format.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-white mb-2">✓ Control Visibility</h3>
                  <p className="text-sm">Choose who can see your posts, stories, and profile details.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-white mb-2">✓ Opt-Out</h3>
                  <p className="text-sm">Mute marketing emails and personalized suggestions.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Cookies */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <Cookie className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-white text-2xl">Cookies & Tracking</h2>
            </div>
            <div className="space-y-3 text-white/70">
              <p>
                Cookies keep you logged in, remember your theme, and let us know if a feature totally flops.
                Don&apos;t want them? Most browsers let you block or clear cookies in a couple of taps.
              </p>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-white mb-2">Types of cookies we use:</p>
                <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
                  <li>Essential cookies that keep sessions active.</li>
                  <li>Preference cookies for things like dark mode.</li>
                  <li>Analytics cookies so we know which screens crash.</li>
                  <li>Limited ad cookies when we run promos with partners.</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Children&apos;s Privacy */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h2 className="text-white text-2xl mb-3">Children&apos;s Privacy</h2>
            <p className="text-white/70">
              This community is for ages 13+. If we discover someone younger snuck in, we scrub their data and
              close the account. Parents or guardians can reach us at{' '}
              <span className="text-white">privacy@movesplash.com</span> for help.
            </p>
          </Card>

          {/* International Users */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h2 className="text-white text-2xl mb-3">International Data Transfers</h2>
            <p className="text-white/70">
              Our servers live mainly in the United States. If you&apos;re somewhere else, your data may move
              across borders but always under GDPR/CCPA-style protections and approved transfer agreements.
            </p>
          </Card>

          {/* Changes to Policy */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h2 className="text-white text-2xl mb-3">Changes to This Policy</h2>
            <p className="text-white/70">
              When we revise this policy, we&apos;ll highlight the update in the app and send an email summary.
              Keep using MoveSplash after the effective date and you&apos;re agreeing to the new language.
            </p>
          </Card>

          {/* Contact */}
          <Card className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400/30 p-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-2xl">Questions About Privacy?</h3>
              <p className="text-white/70">
                Ping <span className="text-white">privacy@movesplash.com</span> and someone from the privacy crew will reply within a few days.
              </p>
              <p className="text-white/70 text-sm">
                MoveSplash, Inc.<br />
                123 Social Street<br />
                San Francisco, CA 94103<br />
                United States
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

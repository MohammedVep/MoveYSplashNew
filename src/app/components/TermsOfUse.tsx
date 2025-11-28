import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft, FileText, AlertCircle, Scale, Ban, Shield } from 'lucide-react';

interface TermsOfUseProps {
  onBack: () => void;
}

export function TermsOfUse({ onBack }: TermsOfUseProps) {
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-white text-5xl mb-4">Terms of Use</h1>
          <p className="text-white/70">
            Last Updated: October 17, 2025
          </p>
        </div>

        {/* Quick Overview */}
        <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-400/30 p-6 mb-6">
          <h2 className="text-white text-2xl mb-4">📜 Agreement Overview</h2>
          <p className="text-white/80 leading-relaxed">
            Thanks for hanging out on MoveSplash. These are the house rules: they explain what we
            offer, what we expect in return, and what happens when things go sideways. If something
            here doesn&apos;t sit right with you, skip the app instead of rolling the dice.
          </p>
        </Card>

        {/* Sections */}
        <div className="space-y-6">
          {/* Acceptance */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-white text-2xl">1. Acceptance of Terms</h2>
            </div>
            <div className="text-white/70 space-y-3">
              <p>
                Opening the app, creating an account, or even checking out public content means you accept
                these Terms plus our Privacy Policy. That&apos;s true whether you&apos;re lurking, livestreaming,
                or running a community.
              </p>
              <p>
                We tweak these terms when laws change or we launch new stuff. When that happens we&apos;ll call
                it out in-product or by email. Keep using MoveSplash after the update and you&apos;re agreeing
                to the new version.
              </p>
            </div>
          </Card>

          {/* Eligibility */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h2 className="text-white text-2xl mb-3">2. Eligibility</h2>
            <div className="text-white/70 space-y-2">
              <p>MoveSplash is meant for people who can legally be responsible for what they post.</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>You must be 13 or older in the United States (check your local rules elsewhere).</li>
                <li>You can&apos;t join if you&apos;re barred from online services where you live.</li>
                <li>Previous bans stick. If we removed you once, don&apos;t sneak back in.</li>
                <li>Sign-up info should be real and current—no burner names or fake birthdays.</li>
              </ul>
              <p className="mt-3">
                If you&apos;re under 18, loop in a parent or guardian so everyone understands the deal.
              </p>
            </div>
          </Card>

          {/* Account Responsibilities */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-white text-2xl">3. Account Responsibilities</h2>
            </div>
            <div className="text-white/70 space-y-3">
              <div>
                <h3 className="text-white mb-2">Account Security</h3>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Pick a password you don&apos;t reuse anywhere else and keep it private.</li>
                  <li>Let us know right away if you suspect someone logged in as you.</li>
                  <li>You&apos;re on the hook for anything that happens on your profile until you report the issue.</li>
                  <li>Sharing accounts isn&apos;t allowed—even with roommates or teammates.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white mb-2">Account Information</h3>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Keep your profile details accurate so friends know it&apos;s you.</li>
                  <li>No impersonation, parody, or duplicate accounts without our written okay.</li>
                  <li>If your contact info changes, update it so we can reach you about important stuff.</li>
                  <li>Businesses and creators who need more than one account must talk to us first.</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Acceptable Use */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-white text-2xl">4. Acceptable Use Policy</h2>
            </div>
            <div className="text-white/70 space-y-3">
              <p className="text-white">You agree NOT to use MoveSplash to:</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg">
                  <h3 className="text-red-400 mb-1">✗ Harassment & Bullying</h3>
                  <p className="text-sm">No pile-ons, doxxing, threats, or coordinated takedowns. Disagree without being cruel.</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg">
                  <h3 className="text-red-400 mb-1">✗ Hate Speech</h3>
                  <p className="text-sm">Any slur, coded language, or encouragement of violence aimed at a protected group is an instant ban.</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg">
                  <h3 className="text-red-400 mb-1">✗ Illegal Content</h3>
                  <p className="text-sm">Don&apos;t upload or organize anything illegal—including knock-off merch, drugs, or dangerous challenges.</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg">
                  <h3 className="text-red-400 mb-1">✗ Spam & Scams</h3>
                  <p className="text-sm">No mass DMs, pyramid pitches, phishing, or fake giveaways. Keep conversations real.</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg">
                  <h3 className="text-red-400 mb-1">✗ Adult Content</h3>
                  <p className="text-sm">Graphic sexual content, exploitation, and gore are never welcome here.</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg">
                  <h3 className="text-red-400 mb-1">✗ Intellectual Property</h3>
                  <p className="text-sm">Share work you own or have permission to repost. Credit alone doesn&apos;t make it legal.</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg">
                  <h3 className="text-red-400 mb-1">✗ System Abuse</h3>
                  <p className="text-sm">No reverse engineering, load testing, or exploits meant to break our infrastructure.</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg">
                  <h3 className="text-red-400 mb-1">✗ Data Mining</h3>
                  <p className="text-sm">Scraping profiles, harvesting handles, or exporting other people&apos;s data is off-limits.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Content Rights */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h2 className="text-white text-2xl mb-3">5. Content & Intellectual Property</h2>
            <div className="text-white/70 space-y-3">
              <div>
                <h3 className="text-white mb-2">Your Content</h3>
                <p>
                  Everything you create is still yours. Sharing it on MoveSplash gives us a limited,
                  revocable license to host it, display it to the people you choose, and make backup copies
                  so the app works. Delete the post and the license ends once it clears our caches.
                </p>
              </div>
              <div>
                <h3 className="text-white mb-2">Our Content</h3>
                <p>
                  The brand, codebase, product copy, and design system belong to MoveSplash. Please don&apos;t
                  rip our UI, reuse our logo, or ship a look-alike experience without written permission.
                </p>
              </div>
              <div>
                <h3 className="text-white mb-2">Reporting Violations</h3>
                <p>
                  Spot something that steals your work? Email{' '}
                  <span className="text-white">copyright@movesplash.com</span>
                  {' '}with the link, proof you own it, and how to reach you. We respond as fast as possible.
                </p>
              </div>
            </div>
          </Card>

          {/* Privacy */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h2 className="text-white text-2xl mb-3">6. Privacy & Data</h2>
            <p className="text-white/70">
              We only collect the info we need to keep MoveSplash running (think account basics, usage
              stats, and stuff you intentionally share). The full breakdown lives in our{' '}
              <span className="text-white underline cursor-pointer">Privacy Policy</span>. Using the app
              means you&apos;re cool with those practices.
            </p>
          </Card>

          {/* Termination */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
                <Ban className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-white text-2xl">7. Termination</h2>
            </div>
            <div className="text-white/70 space-y-3">
              <div>
                <h3 className="text-white mb-2">By You</h3>
                <p>
                  Done with MoveSplash? Head to Settings and delete your account. We start wiping things
                  within 30 days unless the law says we have to hold onto them a little longer (for example,
                  fraud investigations).
                </p>
              </div>
              <div>
                <h3 className="text-white mb-2">By Us</h3>
                <p>
                  We can pause or remove accounts that break these rules, hurt other people, or threaten
                  the service. We&apos;ll usually send a warning, but for serious stuff we can cut access
                  immediately.
                </p>
              </div>
            </div>
          </Card>

          {/* Disclaimers */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h2 className="text-white text-2xl mb-3">8. Disclaimers & Limitations</h2>
            <div className="text-white/70 space-y-3">
              <p>
                <span className="text-white">Service is &quot;as-is&quot;:</span> We work hard to keep MoveSplash fast
                and reliable, but bugs and outages happen. We can&apos;t promise uninterrupted service,
                perfect security, or zero data loss.
              </p>
              <p>
                <span className="text-white">Limited liability:</span> If something breaks, we&apos;re not liable
                for lost profits, data, or other indirect damage the law lets us disclaim.
              </p>
              <p>
                <span className="text-white">User content:</span> You control what you share and who sees it.
                We don&apos;t endorse user posts and we&apos;re not responsible for what someone else says or does.
              </p>
            </div>
          </Card>

          {/* Indemnification */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h2 className="text-white text-2xl mb-3">9. Indemnification</h2>
            <p className="text-white/70">
              If your actions or content cause us legal trouble, you&apos;ll cover the reasonable costs—
              including lawyers—so the rest of the community doesn&apos;t have to.
            </p>
          </Card>

          {/* Dispute Resolution */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h2 className="text-white text-2xl mb-3">10. Dispute Resolution</h2>
            <div className="text-white/70 space-y-3">
              <p>
                <span className="text-white">Governing law:</span> California law applies, even if you use
                MoveSplash somewhere else.
              </p>
              <p>
                <span className="text-white">Arbitration first:</span> Shoot us a note at
                {' '}support@movesplash.com and we&apos;ll try to fix issues quickly. If that doesn&apos;t work,
                we&apos;ll resolve things through binding arbitration (unless you qualify for small-claims court).
              </p>
            </div>
          </Card>

          {/* Changes to Terms */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h2 className="text-white text-2xl mb-3">11. Changes to Terms</h2>
            <p className="text-white/70">
              When we change these terms, we&apos;ll give you a heads up (email + in-app banner) about 30 days
              before the update takes effect. Don&apos;t like the new version? Remove your account before the
              date listed and you won&apos;t be bound by it going forward.
            </p>
          </Card>

          {/* Miscellaneous */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h2 className="text-white text-2xl mb-3">12. Miscellaneous</h2>
            <div className="text-white/70 space-y-2">
              <p>
                <span className="text-white">Entire agreement:</span> These terms and the Privacy Policy
                replace any previous conversations you had with us about using MoveSplash.
              </p>
              <p>
                <span className="text-white">If one part fails:</span> The rest still counts even if a single
                sentence is struck down in court.
              </p>
              <p>
                <span className="text-white">No silent waivers:</span> If we don&apos;t enforce a rule right away,
                it doesn&apos;t mean we gave up the right to enforce it later.
              </p>
              <p>
                <span className="text-white">Assignment:</span> You can&apos;t transfer your account or these terms
                to someone else. We can assign our rights if we merge, get acquired, or restructure.
              </p>
            </div>
          </Card>

          {/* Contact */}
          <Card className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-400/30 p-8">
            <div className="text-center space-y-4">
              <h3 className="text-white text-2xl">Need a real person?</h3>
              <p className="text-white/70">
                Email <span className="text-white">legal@movesplash.com</span> or drop a line through the
                in-app help form. Real humans read both.
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

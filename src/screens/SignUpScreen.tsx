import React, { useState } from 'react';
import { NetflixLogo } from '../components/NetflixLogo';
import {
  Lock,
  CheckCircle,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  CalendarX,
  CreditCard,
  Tv,
  Check,
  Globe,
  User,
  Sparkles
} from 'lucide-react';

interface SignUpScreenProps {
  initialEmail?: string;
  onCompleteSignUp: (plan: string, email: string) => void;
  onNavigateToSignIn: () => void;
  onNavigateHome: () => void;
}

export type PlanType = 'ads' | 'standard' | 'premium';

export const SignUpScreen: React.FC<SignUpScreenProps> = ({
  initialEmail = 'alex.turner@cinemaphile.io',
  onCompleteSignUp,
  onNavigateToSignIn,
  onNavigateHome
}) => {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [optOutPromo, setOptOutPromo] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('premium');
  const [showToast, setShowToast] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'es'>('en');

  // Calculate password strength
  const getPasswordStrength = (val: string) => {
    if (!val || val.length === 0) return { score: 0, text: 'Must be 6+ chars', color: 'text-neutral-400' };
    let score = 0;
    if (val.length >= 6) score++;
    if (val.length >= 10) score++;
    if (/[A-Z]/.test(val) && /[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    if (score === 1) return { score: 1, text: 'Weak', color: 'text-[#ffb4ab]' };
    if (score === 2) return { score: 2, text: 'Fair', color: 'text-amber-400' };
    if (score === 3) return { score: 3, text: 'Good', color: 'text-emerald-300' };
    return { score: 4, text: 'Strong', color: 'text-[#55e074]' };
  };

  const strength = getPasswordStrength(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      onCompleteSignUp(selectedPlan, email);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] font-sans antialiased selection:bg-[#E50914] selection:text-white flex flex-col justify-between">
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-b from-[#0e0e0e] via-[#0e0e0e]/80 to-transparent backdrop-blur-sm transition-all duration-300">
        <div className="h-20 w-full px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button onClick={onNavigateHome} className="cursor-pointer" aria-label="Netflix Home">
              <NetflixLogo className="h-8 w-auto" />
            </button>
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-400">
              <button onClick={onNavigateHome} className="hover:text-white transition-colors cursor-pointer">Home</button>
              <span className="hover:text-white transition-colors cursor-pointer">TV Shows</span>
              <span className="hover:text-white transition-colors cursor-pointer">Movies</span>
              <span className="hover:text-white transition-colors cursor-pointer">New & Popular</span>
              <span className="hover:text-white transition-colors cursor-pointer">My List</span>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex items-center bg-[#353534]/60 rounded px-2.5 py-1">
              <Globe className="w-4 h-4 text-neutral-300 mr-1.5" />
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value as any)}
                className="bg-transparent text-xs font-medium text-white focus:outline-none cursor-pointer pr-4 appearance-none"
              >
                <option value="en" className="bg-[#2a2a2a] text-white">English</option>
                <option value="es" className="bg-[#2a2a2a] text-white">Español</option>
              </select>
              <span className="text-neutral-400 text-xs pointer-events-none -ml-2">▼</span>
            </div>

            <button
              onClick={onNavigateToSignIn}
              className="inline-flex items-center justify-center bg-[#E50914] hover:bg-[#c0000c] text-white font-semibold text-xs px-4 py-1.5 rounded transition-colors shadow-sm cursor-pointer"
            >
              Sign In
            </button>

            <div className="w-8 h-8 rounded-full bg-[#ffb4aa] flex items-center justify-center text-[#690003]">
              <User className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="w-full pt-28 pb-16 flex-1 relative overflow-hidden">
        {/* Ambient Cinematic Scrim Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden h-[620px] -z-10">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[840px] h-[520px] bg-[#E50914]/15 rounded-full blur-[140px] opacity-40 mix-blend-screen" />
          <div className="absolute top-48 left-1/4 w-[360px] h-[360px] bg-[#2a2a2a]/40 rounded-full blur-[90px] opacity-30" />
        </div>

        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 flex flex-col items-center">
          {/* Top Step Micro-Bar */}
          <div className="w-full max-w-lg mb-6 flex flex-col items-start gap-1">
            <div className="flex items-center justify-between w-full text-xs">
              <span className="text-neutral-400 tracking-widest uppercase font-bold text-[11px]">
                Step <span className="text-[#E50914] font-black">1</span> of 3
              </span>
              <span className="text-neutral-300 flex items-center gap-1.5 font-medium">
                <Lock className="w-3.5 h-3.5 text-[#55e074]" />
                Encrypted & Secure
              </span>
            </div>

            {/* Dual Segment Progress Rail */}
            <div className="w-full h-1 bg-[#353534] rounded-full overflow-hidden flex">
              <div className="w-1/3 bg-[#E50914] h-full transition-all duration-500" />
              <div className="w-2/3 bg-[#353534] h-full" />
            </div>
          </div>

          {/* Main Registration Shell */}
          <div className="w-full max-w-lg bg-[#1c1b1b]/90 border border-neutral-800 backdrop-blur-xl rounded-xl p-6 sm:p-10 shadow-2xl flex flex-col gap-6">
            {/* Heading Block */}
            <div className="flex flex-col gap-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#353534]/60 w-fit mb-1 border border-neutral-700/60">
                <Tv className="w-4 h-4 text-[#E50914]" />
                <span className="text-xs font-semibold text-white">Stream on TV, Mobile, Tablet & Web</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Create a password to start your membership
              </h1>
              <p className="text-sm text-neutral-400">
                Just a few more steps and you're done! We hate paperwork, too.
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Email Floating Input */}
              <div className="relative flex flex-col">
                <div className="relative bg-[#353534]/80 rounded transition-all focus-within:bg-[#2a2a2a] focus-within:shadow-md">
                  <input
                    id="regEmail"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=" "
                    className="peer w-full h-14 px-4 pt-4 pb-1 bg-transparent text-white text-sm focus:outline-none placeholder-transparent"
                  />
                  <label
                    htmlFor="regEmail"
                    className="absolute left-4 top-2 text-[10px] font-semibold text-[#E50914] transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-neutral-400 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#E50914]"
                  >
                    Email address
                  </label>
                  <div className="absolute right-3 top-4 text-[#55e074]">
                    <CheckCircle className="w-5 h-5 fill-[#55e074]/20 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* Password Input with Dynamic Strength Indicator */}
              <div className="flex flex-col gap-1.5">
                <div className="relative bg-[#353534]/80 rounded transition-all focus-within:bg-[#2a2a2a] focus-within:shadow-md">
                  <input
                    id="regPassword"
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder=" "
                    className="peer w-full h-14 px-4 pt-4 pb-1 pr-12 bg-transparent text-white text-sm focus:outline-none placeholder-transparent"
                  />
                  <label
                    htmlFor="regPassword"
                    className="absolute left-4 top-2 text-[10px] font-semibold text-[#E50914] transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-neutral-400 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#E50914]"
                  >
                    Add a password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {/* Dynamic Strength Meter */}
                <div className="flex items-center gap-2 pt-1 px-1">
                  <div className="flex-1 h-1 bg-[#353534] rounded-full overflow-hidden flex gap-1">
                    <div
                      className={`h-full w-1/4 transition-colors duration-300 ${
                        strength.score >= 1 ? (strength.score === 1 ? 'bg-red-500' : 'bg-amber-400') : 'bg-[#393939]'
                      }`}
                    />
                    <div
                      className={`h-full w-1/4 transition-colors duration-300 ${
                        strength.score >= 2 ? (strength.score === 2 ? 'bg-amber-400' : 'bg-[#55e074]') : 'bg-[#393939]'
                      }`}
                    />
                    <div
                      className={`h-full w-1/4 transition-colors duration-300 ${
                        strength.score >= 3 ? 'bg-[#55e074]' : 'bg-[#393939]'
                      }`}
                    />
                    <div
                      className={`h-full w-1/4 transition-colors duration-300 ${
                        strength.score >= 4 ? 'bg-[#55e074]' : 'bg-[#393939]'
                      }`}
                    />
                  </div>
                  <span className={`text-[11px] font-bold min-w-[70px] text-right ${strength.color}`}>
                    {strength.text}
                  </span>
                </div>
              </div>

              {/* Marketing Opt-Out Toggle */}
              <label className="flex items-start gap-3 cursor-pointer select-none py-1 group">
                <div className="relative flex items-center mt-0.5">
                  <input
                    type="checkbox"
                    checked={optOutPromo}
                    onChange={(e) => setOptOutPromo(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 rounded bg-[#353534] peer-checked:bg-[#E50914] peer-focus:ring-2 peer-focus:ring-[#E50914]/40 flex items-center justify-center transition-colors">
                    <Check className="w-3.5 h-3.5 text-white scale-0 peer-checked:scale-100 transition-transform font-bold" />
                  </div>
                </div>
                <span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors leading-relaxed">
                  Please do not email me Netflix special offers, personalized recommendations, and product updates.
                </span>
              </label>

              {/* CTA Action */}
              <button
                type="submit"
                className="w-full py-4 bg-[#E50914] hover:bg-[#c0000c] active:scale-[0.99] text-white font-bold text-base rounded-md flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[#E50914]/20 mt-2 cursor-pointer"
              >
                <span>Next</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {/* Trust Badges Strip */}
            <div className="pt-2 flex items-center justify-around bg-[#201f1f]/80 border border-neutral-800 rounded-lg p-3 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#e9bcb6]" />
                <span>256-bit SSL</span>
              </div>
              <div className="h-3 w-[1px] bg-[#353534]" />
              <div className="flex items-center gap-1.5">
                <CalendarX className="w-4 h-4 text-[#e9bcb6]" />
                <span>Cancel anytime</span>
              </div>
              <div className="h-3 w-[1px] bg-[#353534]" />
              <div className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[#e9bcb6]" />
                <span>No hidden fees</span>
              </div>
            </div>
          </div>

          {/* Step 2: Choose Your Plan Selection Section */}
          <div className="w-full mt-14 pt-4 flex flex-col items-center gap-8">
            <div className="text-center max-w-xl flex flex-col items-center gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E50914]">
                Upcoming Step 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Choose the plan that's right for you
              </h2>
              <p className="text-sm text-neutral-400">
                Watch all you want. Instant streaming in HD or Ultra HD across all your gear.
              </p>
            </div>

            {/* Plan Cards Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Plan 1: Standard with ads */}
              <div
                onClick={() => setSelectedPlan('ads')}
                className={`cursor-pointer relative rounded-xl p-6 flex flex-col justify-between transition-all duration-300 border ${
                  selectedPlan === 'ads'
                    ? 'bg-[#2a2a2a] ring-2 ring-[#E50914] border-transparent shadow-2xl scale-[1.02]'
                    : 'bg-[#1c1b1b] hover:bg-[#201f1f] border-neutral-800'
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-white">Standard with ads</span>
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        selectedPlan === 'ads' ? 'bg-[#E50914] text-white' : 'bg-[#353534]'
                      }`}
                    >
                      {selectedPlan === 'ads' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">$6.99</span>
                    <span className="text-xs text-neutral-400 font-medium">/ month</span>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Great value with a few brief advert breaks in full 1080p high definition.
                  </p>

                  <div className="flex flex-col gap-2 pt-3 border-t border-neutral-800 text-xs">
                    <div className="flex items-center gap-2 text-neutral-200">
                      <Tv className="w-4 h-4 text-neutral-400 shrink-0" />
                      <span>1080p Full HD resolution</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-200">
                      <Tv className="w-4 h-4 text-neutral-400 shrink-0" />
                      <span>Watch on 2 supported devices</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-200">
                      <CreditCard className="w-4 h-4 text-neutral-400 shrink-0" />
                      <span>Download on 2 devices</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-800">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                    Ad-supported
                  </span>
                </div>
              </div>

              {/* Plan 2: Standard */}
              <div
                onClick={() => setSelectedPlan('standard')}
                className={`cursor-pointer relative rounded-xl p-6 flex flex-col justify-between transition-all duration-300 border ${
                  selectedPlan === 'standard'
                    ? 'bg-[#2a2a2a] ring-2 ring-[#E50914] border-transparent shadow-2xl scale-[1.02]'
                    : 'bg-[#1c1b1b] hover:bg-[#201f1f] border-neutral-800'
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-white">Standard</span>
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        selectedPlan === 'standard' ? 'bg-[#E50914] text-white' : 'bg-[#353534]'
                      }`}
                    >
                      {selectedPlan === 'standard' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">$15.49</span>
                    <span className="text-xs text-neutral-400 font-medium">/ month</span>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Unlimited ad-free movies, series, and games in crisp 1080p.
                  </p>

                  <div className="flex flex-col gap-2 pt-3 border-t border-neutral-800 text-xs">
                    <div className="flex items-center gap-2 text-neutral-200">
                      <Tv className="w-4 h-4 text-neutral-400 shrink-0" />
                      <span>1080p Full HD resolution</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-200">
                      <Tv className="w-4 h-4 text-neutral-400 shrink-0" />
                      <span>Watch on 2 supported devices</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-200">
                      <CreditCard className="w-4 h-4 text-neutral-400 shrink-0" />
                      <span>Completely ad-free</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-800">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                    Most Flexible
                  </span>
                </div>
              </div>

              {/* Plan 3: Premium (Featured) */}
              <div
                onClick={() => setSelectedPlan('premium')}
                className={`cursor-pointer relative rounded-xl p-6 flex flex-col justify-between transition-all duration-300 border ${
                  selectedPlan === 'premium'
                    ? 'bg-[#2a2a2a] ring-2 ring-[#E50914] border-transparent shadow-2xl scale-[1.02]'
                    : 'bg-[#1c1b1b] hover:bg-[#201f1f] border-neutral-800'
                }`}
              >
                {/* Popular Accent Pill */}
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#E50914] to-[#c0000c] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Popular</span>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-white flex items-center gap-1.5">
                      Premium
                      <CheckCircle className="w-4 h-4 text-[#E50914] fill-current" />
                    </span>
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        selectedPlan === 'premium' ? 'bg-[#E50914] text-white' : 'bg-[#353534]'
                      }`}
                    >
                      {selectedPlan === 'premium' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-[#ffb4aa]">$22.99</span>
                    <span className="text-xs text-neutral-400 font-medium">/ month</span>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Our premier ultra-cinematic audio & visual experience for your whole home.
                  </p>

                  <div className="flex flex-col gap-2 pt-3 border-t border-neutral-800 text-xs">
                    <div className="flex items-center gap-2 text-white font-medium">
                      <Tv className="w-4 h-4 text-[#55e074] shrink-0" />
                      <span>4K (Ultra HD) + HDR streaming</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-200">
                      <Tv className="w-4 h-4 text-[#55e074] shrink-0" />
                      <span>Netflix Spatial Audio included</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-200">
                      <Tv className="w-4 h-4 text-[#55e074] shrink-0" />
                      <span>Watch on 4 supported devices</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-200">
                      <CreditCard className="w-4 h-4 text-[#55e074] shrink-0" />
                      <span>Download on 6 devices</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-800">
                  <span className="text-[10px] font-bold text-[#55e074] uppercase tracking-wider block">
                    Ultimate Theater Quality
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Matrix Checklist */}
            <div className="w-full bg-[#1c1b1b] border border-neutral-800 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#353534] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#E50914]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-white">Commitment-free entertainment</span>
                  <span className="text-xs text-neutral-400">
                    Switch plans or cancel online at any moment with a single click.
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-200 font-semibold">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#55e074] stroke-[3]" />
                  <span>No extra contracts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#55e074] stroke-[3]" />
                  <span>Zero cancellation fees</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#55e074] stroke-[3]" />
                  <span>Worldwide availability</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal & Security Recaptcha Footer Info */}
          <div className="w-full max-w-lg mt-8 text-center flex flex-col gap-2">
            <p className="text-xs text-neutral-400">
              By tapping Next, you agree to our{' '}
              <a href="#" className="text-white underline hover:text-[#ffb4aa] transition-colors">
                Terms of Use
              </a>{' '}
              and acknowledge you have read our{' '}
              <a href="#" className="text-white underline hover:text-[#ffb4aa] transition-colors">
                Privacy Statement
              </a>.
            </p>
            <p className="text-[11px] text-neutral-500 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
            </p>
          </div>
        </div>

        {/* Notification Toast Modal */}
        {showToast && (
          <div className="fixed bottom-6 right-6 bg-[#353534]/95 border border-neutral-700 text-white p-4 rounded-lg shadow-2xl flex items-center gap-3 z-50 animate-fade-in">
            <div className="w-8 h-8 rounded-full bg-[#008536] flex items-center justify-center text-white">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm">Account Initialized</span>
              <span className="text-xs text-neutral-300">
                Plan {selectedPlan.toUpperCase()} selected! Loading streaming catalog...
              </span>
            </div>
          </div>
        )}
      </main>

      {/* Global Footer */}
      <footer className="w-full bg-[#0e0e0e] text-neutral-400 mt-auto py-10 border-t border-neutral-800">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-6">
          <p className="text-sm">
            Questions? Call{' '}
            <a href="tel:1-844-505-2993" className="hover:underline text-white">
              1-844-505-2993
            </a>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-6 text-xs">
            <button onClick={onNavigateHome} className="hover:underline text-left cursor-pointer">FAQ</button>
            <a href="#" className="hover:underline">Help Center</a>
            <button onClick={onNavigateToSignIn} className="hover:underline text-left cursor-pointer">Account</button>
            <a href="#" className="hover:underline">Media Center</a>
            <a href="#" className="hover:underline">Investor Relations</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Redeem Gift Cards</a>
            <a href="#" className="hover:underline">Buy Gift Cards</a>
            <a href="#" className="hover:underline">Ways to Watch</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
            <a href="#" className="hover:underline">Corporate Information</a>
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Speed Test</a>
            <a href="#" className="hover:underline">Legal Notices</a>
            <a href="#" className="hover:underline">Only on Netflix</a>
          </div>

          <p className="text-xs text-neutral-500">Netflix United States</p>
        </div>
      </footer>
    </div>
  );
};

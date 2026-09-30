import React, { useState } from 'react';
import { NetflixLogo } from '../components/NetflixLogo';
import { Lock, Eye, EyeOff, ArrowRight, KeyRound, Check, Globe } from 'lucide-react';

interface SignInScreenProps {
  initialEmail?: string;
  onSignInSuccess: (email: string) => void;
  onNavigateToSignUp: () => void;
  onNavigateHome: () => void;
}

export const SignInScreen: React.FC<SignInScreenProps> = ({
  initialEmail = 'alex.turner@cinemaphile.io',
  onSignInSuccess,
  onNavigateToSignUp,
  onNavigateHome
}) => {
  const [identifier, setIdentifier] = useState(initialEmail);
  const [password, setPassword] = useState('SecretAlex2025!');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [showRecaptchaDetails, setShowRecaptchaDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'es' | 'fr' | 'de'>('en');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!identifier.trim() || identifier.length < 4) {
      setErrorMessage('Please enter a valid email or phone number.');
      return;
    }

    if (!password || password.length < 4) {
      setErrorMessage('Your password must contain between 4 and 60 characters.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSignInSuccess(identifier);
    }, 900);
  };

  const handleUseSignInCode = () => {
    setToastMessage('A single-use passkey sign-in code has been dispatched to your linked device.');
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-black text-[#e5e2e1] antialiased overflow-hidden selection:bg-[#E50914] selection:text-white">
      {/* Immersive Cinematic Tiled Backdrop with Atmospheric Vignette Scrim */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center -z-10 scale-105 transform"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDcLsgcs4MoGF9a0N7_Ao3o42H4eqSKTtgtIO3Sv80C_rOH3evfy09pyG7sJCc8WyhDtKKdqh5SMqjsQ7O1d2fdBlCYzHNRlxs6KfA5C-c2eK69RNjxzjWJwtiiCo1uT2lKc_-pngj5PlxHqLx0JFE9Gm9WpAw8uanKVvsV8fZ0oGHyLvXI45gf-p_RkNAL-0Ev7mG_jRL0xAmZOeO_WioH4jCk92_bYXLupxvmetfe7pydNuS72RUYJw')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-[#0e0e0e]/75 backdrop-blur-[2px]" />
      </div>

      {/* Top Brand Navigation Bar */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-7 flex items-center justify-between z-10">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 group transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <NetflixLogo className="h-9 md:h-11 w-auto drop-shadow-[0_4px_16px_rgba(229,9,20,0.5)]" />
        </button>

        <div className="flex items-center gap-3">
          {/* Language Selector Pill */}
          <div className="relative inline-flex items-center bg-[#201f1f]/80 border border-neutral-700/80 rounded-lg px-3 py-1.5 backdrop-blur-md">
            <Globe className="w-4 h-4 text-neutral-400 mr-1.5" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value as any)}
              className="bg-transparent text-neutral-300 text-xs font-semibold pr-5 pl-0.5 py-0.5 focus:outline-none cursor-pointer appearance-none"
            >
              <option value="en" className="bg-[#2a2a2a] text-white">English</option>
              <option value="es" className="bg-[#2a2a2a] text-white">Español</option>
              <option value="fr" className="bg-[#2a2a2a] text-white">Français</option>
              <option value="de" className="bg-[#2a2a2a] text-white">Deutsch</option>
            </select>
            <span className="text-neutral-400 text-xs absolute right-2 pointer-events-none">▼</span>
          </div>
        </div>
      </header>

      {/* Central Dedicated Sign In Card */}
      <main className="w-full flex-1 flex items-center justify-center px-4 py-8 z-10">
        <div className="w-full max-w-[450px] bg-black/80 sm:bg-[#0e0e0e]/85 backdrop-blur-xl rounded-xl p-8 sm:p-14 shadow-2xl border border-neutral-800/80 transition-all duration-300">
          {/* Card Title & Security Badge Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">Sign In</h1>
            <span title="Secure End-to-End SSL Session">
              <Lock className="w-5 h-5 text-neutral-500 opacity-70" />
            </span>
          </div>

          {/* Error Message Box */}
          {errorMessage && (
            <div className="mb-5 p-3 rounded-lg bg-[#93000a]/40 border border-[#ffb4ab]/40 text-[#ffdad6] text-xs font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* User Identifier Floating Input */}
            <div className="relative group">
              <input
                id="userIdentifier"
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder=" "
                className="peer w-full bg-[#353534]/90 text-white text-sm px-5 pt-6 pb-2 rounded-lg placeholder-transparent focus:outline-none focus:bg-[#393939] focus:ring-1 focus:ring-neutral-400 transition-colors duration-200"
              />
              <label
                htmlFor="userIdentifier"
                className="absolute left-5 top-4 text-xs font-semibold text-neutral-400 transition-all duration-200 pointer-events-none peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-neutral-300 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-neutral-300"
              >
                Email or mobile number
              </label>
            </div>

            {/* Password Input with Visibility Reveal */}
            <div className="relative group">
              <input
                id="passwordField"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                className="peer w-full bg-[#353534]/90 text-white text-sm px-5 pt-6 pb-2 pr-12 rounded-lg placeholder-transparent focus:outline-none focus:bg-[#393939] focus:ring-1 focus:ring-neutral-400 transition-colors duration-200"
              />
              <label
                htmlFor="passwordField"
                className="absolute left-5 top-4 text-xs font-semibold text-neutral-400 transition-all duration-200 pointer-events-none peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-neutral-300 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-neutral-300"
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white p-1 transition-colors cursor-pointer"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Primary Action Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#E50914] hover:bg-[#c11119] active:scale-[0.99] text-white py-3.5 rounded-lg font-bold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-[#E50914]/20 flex items-center justify-center gap-2 mt-6 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Divider Row: "OR" */}
            <div className="relative flex items-center justify-center py-3 my-2">
              <div className="w-full h-px bg-neutral-800" />
              <span className="absolute px-4 text-xs font-bold text-neutral-400 bg-[#0e0e0e] select-none uppercase">
                OR
              </span>
            </div>

            {/* Secondary CTA: Use a Sign-In Code */}
            <button
              type="button"
              onClick={handleUseSignInCode}
              className="w-full bg-[#353534]/70 hover:bg-[#393939] text-white text-xs font-semibold py-3 rounded-lg tracking-wide transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <KeyRound className="w-4 h-4 text-neutral-400" />
              <span>Use a Sign-In Code</span>
            </button>

            {/* Remember Me Checkbox & Forgot Password */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-4 h-4 rounded bg-[#393939] peer-checked:bg-white flex items-center justify-center transition-colors">
                  <Check className="w-3 h-3 text-black scale-0 peer-checked:scale-100 transition-transform font-bold" />
                </div>
                <span className="text-xs text-neutral-400 hover:text-white transition-colors">
                  Remember me
                </span>
              </label>
              <a href="#" className="text-xs text-neutral-400 hover:text-white hover:underline transition-colors">
                Forgot password?
              </a>
            </div>
          </form>

          {/* Feedback Toast Notification */}
          {toastMessage && (
            <div className="mt-4 p-3 bg-emerald-950/80 border border-emerald-800 text-emerald-200 rounded-lg text-xs flex items-center gap-2 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* Card Footer: Sign Up Prompt & reCAPTCHA */}
          <div className="mt-10 pt-4 flex flex-col gap-4 border-t border-neutral-800/60">
            <div className="text-sm text-neutral-400">
              New to Netflix?{' '}
              <button
                type="button"
                onClick={onNavigateToSignUp}
                className="text-white font-semibold hover:underline ml-1 cursor-pointer"
              >
                Sign up now.
              </button>
            </div>

            {/* Google reCAPTCHA Disclaimer */}
            <div className="text-xs text-neutral-500 leading-relaxed">
              <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
              <button
                type="button"
                onClick={() => setShowRecaptchaDetails(!showRecaptchaDetails)}
                className="text-[#E50914] hover:underline ml-1 font-semibold cursor-pointer"
              >
                {showRecaptchaDetails ? 'Show less' : 'Learn more.'}
              </button>

              {showRecaptchaDetails && (
                <div className="mt-3 text-neutral-400 text-[11px] leading-relaxed space-y-2 animate-fade-in">
                  <p>
                    The information collected by Google reCAPTCHA is subject to the Google Privacy Policy
                    and Terms of Service, and is used for providing, maintaining, and improving the
                    reCAPTCHA service and for general security purposes (it is not used for personalized
                    advertising by Google).
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Global Legal Footer */}
      <footer className="w-full bg-[#0e0e0e]/90 backdrop-blur-md mt-auto py-10 px-6 sm:px-12 z-10 border-t border-neutral-800/60">
        <div className="max-w-5xl mx-auto space-y-6">
          <p className="text-sm text-neutral-400">
            Questions? Call{' '}
            <a href="tel:1-844-505-2993" className="hover:underline text-white font-semibold ml-1">
              1-844-505-2993
            </a>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-neutral-400">
            <button onClick={onNavigateHome} className="hover:underline hover:text-white text-left cursor-pointer">FAQ</button>
            <a href="#" className="hover:underline hover:text-white">Help Center</a>
            <a href="#" className="hover:underline hover:text-white">Terms of Use</a>
            <a href="#" className="hover:underline hover:text-white">Privacy</a>
            <a href="#" className="hover:underline hover:text-white">Cookie Preferences</a>
            <a href="#" className="hover:underline hover:text-white">Corporate Information</a>
            <a href="#" className="hover:underline hover:text-white">Ad Choices</a>
            <a href="#" className="hover:underline hover:text-white">Legal Notices</a>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-500">
            <span>Netflix Services Worldwide, LLC © 2025</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#55e074] animate-pulse" />
              <span className="text-neutral-300 font-medium">Streaming Systems Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

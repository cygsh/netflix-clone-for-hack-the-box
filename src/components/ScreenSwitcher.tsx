import React, { useState } from 'react';
import { Layers, ChevronDown, Check } from 'lucide-react';

export type ScreenType = 'landing' | 'signin' | 'signup' | 'browse';

interface ScreenSwitcherProps {
  currentScreen: ScreenType;
  onSelectScreen: (screen: ScreenType) => void;
}

export const ScreenSwitcher: React.FC<ScreenSwitcherProps> = ({ currentScreen, onSelectScreen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const screens: { id: ScreenType; label: string; badge: string }[] = [
    { id: 'landing', label: '1. Landing Page', badge: 'Public' },
    { id: 'signin', label: '2. Sign In', badge: 'Auth' },
    { id: 'signup', label: '3. Sign Up & Plans', badge: 'Onboarding' },
    { id: 'browse', label: '4. Browse (Home)', badge: 'App Dashboard' },
  ];

  const currentLabel = screens.find((s) => s.id === currentScreen)?.label || 'Switch Screen';

  return (
    <aside aria-label="Demo screen navigation" className="fixed bottom-5 right-5 z-[90]">
      <div className="relative">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 bg-[#141414]/90 hover:bg-[#202020] text-white border border-neutral-700/80 px-4 py-2 rounded-full shadow-2xl backdrop-blur-md transition-all duration-200 cursor-pointer text-xs font-semibold hover:border-neutral-500"
          title="Switch between the 4 authentic screens"
        >
          <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
          <Layers className="w-4 h-4 text-[#E50914]" />
          <span>Screen: <strong className="text-white font-bold">{currentLabel}</strong></span>
          <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute bottom-12 right-0 w-64 bg-[#181818]/95 border border-neutral-700/80 rounded-xl p-2 shadow-2xl backdrop-blur-xl flex flex-col gap-1 z-50 animate-fade-in">
            <div className="px-3 py-2 text-[11px] font-bold text-neutral-400 uppercase tracking-wider border-b border-neutral-800">
              Interactive Prototype Screens
            </div>
            {screens.map((screen) => (
              <button
                key={screen.id}
                onClick={() => {
                  onSelectScreen(screen.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all text-left ${
                  currentScreen === screen.id
                    ? 'bg-[#E50914] text-white font-bold shadow'
                    : 'text-neutral-300 hover:bg-neutral-800/80 hover:text-white'
                }`}
              >
                <div className="flex flex-col">
                  <span>{screen.label}</span>
                  <span className={`text-[10px] ${currentScreen === screen.id ? 'text-white/80' : 'text-neutral-500'}`}>
                    {screen.badge}
                  </span>
                </div>
                {currentScreen === screen.id && <Check className="w-4 h-4" />}
              </button>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

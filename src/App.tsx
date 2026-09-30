/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenSwitcher, ScreenType } from './components/ScreenSwitcher';
import { LandingScreen } from './screens/LandingScreen';
import { SignInScreen } from './screens/SignInScreen';
import { SignUpScreen } from './screens/SignUpScreen';
import { BrowseScreen } from './screens/BrowseScreen';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { TitleDetailModal } from './components/TitleDetailModal';
import { TitleItem, MY_LIST_TITLES } from './data/mockMedia';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('landing');
  const [userEmail, setUserEmail] = useState('alex.turner@cinemaphile.io');
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [myList, setMyList] = useState<TitleItem[]>(MY_LIST_TITLES);
  const [activeVideoPlayerTitle, setActiveVideoPlayerTitle] = useState<TitleItem | null>(null);
  const [activeDetailTitle, setActiveDetailTitle] = useState<TitleItem | null>(null);

  // Toggle Add / Remove from My List
  const handleToggleMyList = (item: TitleItem) => {
    setMyList((prev) => {
      const exists = prev.some((t) => t.id === item.id);
      if (exists) {
        return prev.filter((t) => t.id !== item.id);
      } else {
        return [item, ...prev];
      }
    });
  };

  const handleGetStartedFromLanding = (email: string) => {
    if (email) setUserEmail(email);
    setCurrentScreen('signup');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignInSuccess = (email: string) => {
    if (email) setUserEmail(email);
    setCurrentScreen('browse');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteSignUp = (plan: string, email: string) => {
    if (plan) setSelectedPlan(plan);
    if (email) setUserEmail(email);
    setCurrentScreen('browse');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlayTitle = (item: TitleItem) => {
    setActiveDetailTitle(null);
    setActiveVideoPlayerTitle(item);
  };

  return (
    <div className="min-h-screen bg-black text-white relative font-sans">
      {/* Active Screen Rendering */}
      {currentScreen === 'landing' && (
        <LandingScreen
          onNavigate={(screen) => {
            setCurrentScreen(screen);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onGetStarted={handleGetStartedFromLanding}
          onSelectTitle={(title) => setActiveDetailTitle(title)}
        />
      )}

      {currentScreen === 'signin' && (
        <SignInScreen
          initialEmail={userEmail}
          onSignInSuccess={handleSignInSuccess}
          onNavigateToSignUp={() => {
            setCurrentScreen('signup');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateHome={() => {
            setCurrentScreen('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {currentScreen === 'signup' && (
        <SignUpScreen
          initialEmail={userEmail}
          onCompleteSignUp={handleCompleteSignUp}
          onNavigateToSignIn={() => {
            setCurrentScreen('signin');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateHome={() => {
            setCurrentScreen('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {currentScreen === 'browse' && (
        <BrowseScreen
          userEmail={userEmail}
          myList={myList}
          onToggleMyList={handleToggleMyList}
          onPlayTitle={handlePlayTitle}
          onOpenDetail={(title) => setActiveDetailTitle(title)}
          onSignOut={() => {
            setCurrentScreen('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Screen Switcher Floating Bar (allows easy testing of all 4 authentic screens) */}
      <ScreenSwitcher
        currentScreen={currentScreen}
        onSelectScreen={(screen) => {
          setCurrentScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Fullscreen Video Player Simulation Modal */}
      {activeVideoPlayerTitle && (
        <VideoPlayerModal
          title={activeVideoPlayerTitle}
          onClose={() => setActiveVideoPlayerTitle(null)}
        />
      )}

      {/* Title Detail Modal */}
      {activeDetailTitle && (
        <TitleDetailModal
          title={activeDetailTitle}
          onClose={() => setActiveDetailTitle(null)}
          onPlay={handlePlayTitle}
          isSavedInList={myList.some((t) => t.id === activeDetailTitle.id)}
          onToggleMyList={handleToggleMyList}
        />
      )}
    </div>
  );
}

import React, { useState, useMemo } from 'react';
import { NetflixLogo } from '../components/NetflixLogo';
import {
  BILLBOARD_TITLE,
  CONTINUE_WATCHING_TITLES,
  TRENDING_TITLES,
  TOP_10_MOVIES,
  SCI_FI_ACTION_TITLES,
  TitleItem,
  ALL_TITLES
} from '../data/mockMedia';
import {
  Play,
  Info,
  Volume2,
  VolumeX,
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  ThumbsUp,
  X,
  Check,
  Plus,
  Globe,
  Camera,
  Hash,
  Tv
} from 'lucide-react';

interface BrowseScreenProps {
  userEmail?: string;
  myList: TitleItem[];
  onToggleMyList: (title: TitleItem) => void;
  onPlayTitle: (title: TitleItem) => void;
  onOpenDetail: (title: TitleItem) => void;
  onSignOut: () => void;
}

export const BrowseScreen: React.FC<BrowseScreenProps> = ({
  userEmail = 'alex.turner@cinemaphile.io',
  myList,
  onToggleMyList,
  onPlayTitle,
  onOpenDetail,
  onSignOut
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'tv' | 'movies' | 'latest' | 'mylist'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isKidsMode, setIsKidsMode] = useState(false);

  // Filtered titles based on search
  const filteredSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return ALL_TITLES.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        t.cast.some((c) => c.toLowerCase().includes(q)) ||
        (t.subtitle && t.subtitle.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const notifications = [
    {
      id: 1,
      title: 'New Season Available',
      desc: 'The Blackwood Verdict Season 4 is now streaming.',
      time: '1h ago',
      unread: true
    },
    {
      id: 2,
      title: 'Continue Watching',
      desc: 'Finish watching Chronovoid Chapter 1.',
      time: '3h ago',
      unread: true
    },
    {
      id: 3,
      title: 'Top 10 Pick',
      desc: 'Stargazer: Onslaught hit #1 in Movies today.',
      time: '1d ago',
      unread: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#e5e2e1] font-sans antialiased selection:bg-[#E50914] selection:text-white flex flex-col justify-between">
      {/* ==================== GLOBAL APP HEADER ==================== */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-[#0e0e0e] via-[#0e0e0e]/85 to-transparent backdrop-blur-md transition-colors duration-300">
        <div className="h-16 w-full px-4 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Left Brand + Navigation */}
          <div className="flex items-center gap-6 lg:gap-10">
            <button
              onClick={() => {
                setActiveTab('home');
                setSearchQuery('');
              }}
              className="flex items-center shrink-0 cursor-pointer"
              aria-label="Netflix Home"
            >
              <NetflixLogo className="h-7 sm:h-8 w-auto" />
            </button>

            <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-xs sm:text-sm font-medium">
              <button
                onClick={() => setActiveTab('home')}
                className={`transition-colors cursor-pointer ${
                  activeTab === 'home' ? 'text-white font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveTab('tv')}
                className={`transition-colors cursor-pointer ${
                  activeTab === 'tv' ? 'text-white font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                TV Shows
              </button>
              <button
                onClick={() => setActiveTab('movies')}
                className={`transition-colors cursor-pointer ${
                  activeTab === 'movies' ? 'text-white font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Movies
              </button>
              <button
                onClick={() => setActiveTab('latest')}
                className={`transition-colors cursor-pointer ${
                  activeTab === 'latest' ? 'text-white font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                New & Popular
              </button>
              <button
                onClick={() => setActiveTab('mylist')}
                className={`transition-colors cursor-pointer ${
                  activeTab === 'mylist' ? 'text-white font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                My List ({myList.length})
              </button>
            </nav>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Search Bar (Expandable) */}
            <div className="relative flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center bg-[#181818] border border-neutral-600 rounded-full px-3 py-1 transition-all w-48 sm:w-64 animate-fade-in shadow-lg">
                  <Search className="w-4 h-4 text-neutral-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    autoFocus
                    placeholder="Titles, people, genres..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-xs text-white focus:outline-none placeholder-neutral-500"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-neutral-400 hover:text-white p-0.5 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="ml-1 text-neutral-400 hover:text-white p-0.5 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-white hover:text-neutral-300 p-1.5 transition-colors cursor-pointer"
                  aria-label="Search Catalog"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Kids Mode Toggle */}
            <button
              onClick={() => setIsKidsMode(!isKidsMode)}
              className={`hidden sm:inline-block text-xs font-semibold px-2 py-0.5 rounded transition-colors cursor-pointer ${
                isKidsMode
                  ? 'bg-amber-400 text-black font-bold'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Kids
            </button>

            {/* Notifications Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative text-white hover:text-neutral-300 p-1.5 transition-colors cursor-pointer"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#E50914] ring-2 ring-[#0e0e0e]" />
              </button>

              {showNotifications && (
                <div className="absolute right-0 top-10 w-72 sm:w-80 bg-[#181818] border border-neutral-700/80 rounded-xl p-3 shadow-2xl z-50 animate-fade-in flex flex-col gap-2">
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider px-2 py-1 border-b border-neutral-800">
                    Notifications
                  </div>
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className="p-2.5 rounded-lg hover:bg-neutral-800/80 transition-colors flex flex-col gap-1 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-white">{n.title}</span>
                        <span className="text-[10px] text-neutral-500">{n.time}</span>
                      </div>
                      <p className="text-xs text-neutral-400 leading-snug">{n.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Profile Avatar & Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-1.5 cursor-pointer group p-1"
                aria-label="User Profile"
              >
                <div className="w-8 h-8 rounded bg-[#E50914] flex items-center justify-center font-bold text-white text-xs shadow">
                  A
                </div>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-transform ${
                    showProfileMenu ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 top-11 w-56 bg-[#181818] border border-neutral-700/80 rounded-xl p-2 shadow-2xl z-50 animate-fade-in flex flex-col gap-1">
                  <div className="px-3 py-2 border-b border-neutral-800 flex items-center gap-3">
                    <div className="w-7 h-7 rounded bg-[#E50914] flex items-center justify-center font-bold text-white text-xs">
                      A
                    </div>
                    <div className="flex flex-col truncate">
                      <span className="font-bold text-xs text-white truncate">Alex Turner</span>
                      <span className="text-[10px] text-neutral-400 truncate">{userEmail}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsKidsMode(!isKidsMode);
                      setShowProfileMenu(false);
                    }}
                    className="w-full px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-800 rounded text-left flex items-center gap-2 cursor-pointer"
                  >
                    <span>{isKidsMode ? 'Switch to Standard' : 'Switch to Kids Profile'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('mylist');
                      setShowProfileMenu(false);
                    }}
                    className="w-full px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-800 rounded text-left flex items-center justify-between cursor-pointer"
                  >
                    <span>My List</span>
                    <span className="text-[10px] text-neutral-400">{myList.length} titles</span>
                  </button>

                  <div className="border-t border-neutral-800 pt-1 mt-1">
                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        onSignOut();
                      }}
                      className="w-full px-3 py-2 text-xs text-[#ffb4ab] hover:bg-neutral-800/80 rounded text-left font-semibold cursor-pointer"
                    >
                      Sign Out of Netflix
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full flex-1 pb-16">
        {/* If Active Search Query is present, show Instant Search Results Grid */}
        {searchQuery ? (
          <div className="pt-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Search Results for <span className="text-[#E50914]">"{searchQuery}"</span>
            </h2>

            {filteredSearchResults.length === 0 ? (
              <div className="py-20 text-center text-neutral-400">
                <p className="text-lg">Your search for "{searchQuery}" did not have any matches.</p>
                <p className="text-sm mt-2 text-neutral-500">
                  Suggestions: Try searching for a movie title, a cast member, or genre like "Sci-Fi"
                  or "Action".
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredSearchResults.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onOpenDetail(item)}
                    className="group relative aspect-[16/9] rounded overflow-hidden bg-[#201f1f] cursor-pointer hover:scale-105 transition-all duration-300 shadow-md"
                  >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-end">
                      <span className="font-bold text-xs text-white truncate">{item.title}</span>
                      <div className="flex items-center gap-1.5 text-[10px] text-neutral-300">
                        <span className="text-[#46D369] font-bold">{item.matchScore}%</span>
                        <span>{item.rating}</span>
                        <span>{item.durationOrSeasons}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : activeTab === 'mylist' ? (
          /* ==================== DEDICATED MY LIST VIEW ==================== */
          <div className="pt-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
            <div className="flex items-baseline justify-between mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">My List</h1>
              <span className="text-sm text-neutral-400">{myList.length} titles</span>
            </div>

            {myList.length === 0 ? (
              <div className="py-24 text-center text-neutral-400">
                <p className="text-lg">You haven't added any titles to your list yet.</p>
                <button
                  onClick={() => setActiveTab('home')}
                  className="mt-4 px-6 py-2 bg-[#E50914] text-white rounded text-sm font-semibold hover:bg-[#c11119] cursor-pointer"
                >
                  Explore Titles
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {myList.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onOpenDetail(item)}
                    className="group relative aspect-[16/9] rounded overflow-hidden bg-[#201f1f] cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90 p-2.5 flex flex-col justify-between">
                      <div className="flex justify-end">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleMyList(item);
                          }}
                          className="w-7 h-7 rounded-full bg-black/60 hover:bg-[#E50914] text-white flex items-center justify-center transition-colors shadow"
                          title="Remove from My List"
                        >
                          <Check className="w-4 h-4 text-emerald-400" />
                        </button>
                      </div>
                      <div>
                        <span className="font-bold text-xs text-white truncate block">{item.title}</span>
                        <div className="flex items-center gap-1.5 text-[10px]">
                          <span className="text-[#46D369] font-bold">{item.matchScore}% Match</span>
                          <span className="text-neutral-400">• {item.durationOrSeasons}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* ==================== STANDARD BROWSE HOME ==================== */
          <>
            {/* HERO BILLBOARD SECTION */}
            <section className="relative w-full -mt-16 overflow-hidden">
              <div
                className="relative w-full h-[760px] min-h-[580px] max-h-[820px] bg-cover bg-center flex items-center"
                style={{
                  backgroundImage: `url('${BILLBOARD_TITLE.heroImage}')`
                }}
              >
                {/* Multi-stop Edge Vignettes & Bottom Feather */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/80 to-transparent w-full md:w-3/4 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/40 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 h-40 w-full bg-gradient-to-b from-[#0e0e0e]/80 to-transparent z-10 pointer-events-none" />

                {/* Hero Content Layer */}
                <div className="relative z-20 w-full px-4 sm:px-8 md:px-12 pt-20 flex flex-col justify-end h-full pb-24 md:pb-28">
                  {/* Franchise / Brand Badge */}
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="inline-flex items-center justify-center text-[10px] tracking-widest uppercase bg-[#E50914] text-white px-1.5 py-0.5 rounded font-black">
                      N
                    </span>
                    <span className="text-xs tracking-[0.25em] text-neutral-300 uppercase font-bold">
                      Series
                    </span>
                  </div>

                  {/* Billboard Title Artwork */}
                  <div className="max-w-xl md:max-w-2xl mb-2 select-none">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none drop-shadow-2xl">
                      CHRONO<span className="text-[#E50914]">VOID</span>
                    </h1>
                    <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-neutral-300 font-bold mt-1">
                      Origins of the Fracture
                    </p>
                  </div>

                  {/* Top 10 Ranking Badge & Tags */}
                  <div className="flex items-center gap-3 mb-4 flex-wrap text-xs">
                    <div className="flex items-center gap-1.5 bg-[#2a2a2a]/80 backdrop-blur-md px-2.5 py-1 rounded">
                      <span className="bg-[#E50914] text-white text-[10px] font-black px-1 py-0.5 rounded uppercase">
                        Top 10
                      </span>
                      <span className="text-white font-semibold">#1 in TV Shows Today</span>
                    </div>
                    <span className="text-[#46D369] font-bold">99% Match</span>
                    <span className="px-1.5 py-0.5 bg-[#353534]/90 text-white rounded uppercase font-semibold text-[10px]">
                      TV-MA
                    </span>
                    <span className="px-1.5 py-0.5 bg-[#353534]/90 text-white rounded uppercase font-semibold text-[10px]">
                      4K Ultra HD
                    </span>
                    <span className="text-neutral-400 font-medium hidden sm:inline">
                      Dolby Atmos • 5.1
                    </span>
                  </div>

                  {/* Synopsis Logline */}
                  <p className="text-sm sm:text-base text-neutral-200 max-w-xl line-clamp-3 mb-6 drop-shadow-md">
                    {BILLBOARD_TITLE.description}
                  </p>

                  {/* Action Buttons Row */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onPlayTitle(BILLBOARD_TITLE)}
                      className="flex items-center gap-2 bg-white text-black hover:bg-neutral-200 transition-all transform active:scale-95 px-6 sm:px-7 py-2.5 rounded font-bold text-sm sm:text-base shadow-2xl cursor-pointer"
                    >
                      <Play className="w-5 h-5 fill-current" />
                      <span>Play</span>
                    </button>

                    <button
                      onClick={() => onOpenDetail(BILLBOARD_TITLE)}
                      className="flex items-center gap-2 bg-[#353534]/80 hover:bg-[#353534] text-white backdrop-blur-md transition-all transform active:scale-95 px-5 sm:px-6 py-2.5 rounded font-semibold text-sm sm:text-base cursor-pointer shadow-lg"
                    >
                      <Info className="w-5 h-5" />
                      <span>More Info</span>
                    </button>
                  </div>
                </div>

                {/* Right Controls: Sound Toggle & Age Badge */}
                <div className="absolute right-0 bottom-28 z-20 flex items-center gap-3">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md flex items-center justify-center text-white transition-transform hover:scale-110 cursor-pointer shadow-md"
                    aria-label="Toggle Mute Sound"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <div className="bg-[#2a2a2a]/80 backdrop-blur-md py-1 pl-3 pr-6 border-l-2 border-[#E50914] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    16+
                  </div>
                </div>
              </div>
            </section>

            {/* CONTENT RAILS WRAPPER */}
            <div className="relative z-30 flex flex-col gap-10 -mt-16 md:-mt-20 pb-12">
              {/* ROW 1: CONTINUE WATCHING FOR ALEX */}
              <section className="flex flex-col gap-2 group/shelf">
                <div className="px-4 sm:px-8 md:px-12 flex items-baseline justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1 cursor-pointer group-hover/shelf:text-white transition-colors">
                    <span>Continue Watching for Alex</span>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover/shelf:opacity-100 transition-opacity transform group-hover/shelf:translate-x-1" />
                  </h2>
                  <span className="text-xs text-neutral-400 uppercase tracking-widest hidden sm:inline">
                    {CONTINUE_WATCHING_TITLES.length} in queue
                  </span>
                </div>

                <div className="relative w-full">
                  <div className="flex items-stretch gap-3 sm:gap-4 overflow-x-auto px-4 sm:px-8 md:px-12 scrollbar-none py-2 scroll-smooth">
                    {CONTINUE_WATCHING_TITLES.map((card) => (
                      <div
                        key={card.id}
                        onClick={() => onOpenDetail(card)}
                        className="group relative flex-none w-[260px] sm:w-[280px] md:w-[320px] aspect-[16/9] rounded overflow-hidden bg-[#201f1f] shadow-md transition-all duration-300 hover:scale-105 hover:z-40 cursor-pointer"
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                        {/* Hover Quick Action Layer */}
                        <div className="absolute inset-0 p-3 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm">
                          <div className="flex justify-end gap-1.5">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onPlayTitle(card);
                              }}
                              className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow hover:scale-110 transition-transform cursor-pointer"
                              title="Play"
                            >
                              <Play className="w-4 h-4 fill-current ml-0.5" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onToggleMyList(card);
                              }}
                              className="w-8 h-8 rounded-full bg-[#353534]/90 hover:bg-[#393939] flex items-center justify-center text-white shadow cursor-pointer"
                              title="Add to My List"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-1 text-xs">
                              <span className="text-[#46D369] font-bold">{card.matchScore}% Match</span>
                              <span className="px-1 bg-[#201f1f] text-neutral-300 rounded text-[10px]">
                                {card.durationOrSeasons}
                              </span>
                            </div>
                            <p className="text-sm text-white font-bold truncate">{card.title}</p>
                          </div>
                        </div>

                        {/* Red Progress Bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#353534]">
                          <div
                            className="h-full bg-[#E50914]"
                            style={{ width: `${card.progressPercent || 50}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ROW 2: TRENDING NOW */}
              <section className="flex flex-col gap-2 group/shelf">
                <div className="px-4 sm:px-8 md:px-12 flex items-baseline justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1 cursor-pointer">
                    <span>Trending Now</span>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover/shelf:opacity-100 transition-opacity transform group-hover/shelf:translate-x-1" />
                  </h2>
                  <span className="text-xs text-neutral-400 uppercase tracking-widest hidden sm:inline">
                    Explore All
                  </span>
                </div>

                <div className="relative w-full">
                  <div className="flex items-stretch gap-3 sm:gap-4 overflow-x-auto px-4 sm:px-8 md:px-12 scrollbar-none py-2 scroll-smooth">
                    {TRENDING_TITLES.map((card) => (
                      <div
                        key={card.id}
                        onClick={() => onOpenDetail(card)}
                        className="group relative flex-none w-[220px] sm:w-[250px] md:w-[290px] aspect-[16/9] rounded overflow-hidden bg-[#201f1f] shadow transition-all duration-300 hover:scale-110 hover:z-40 cursor-pointer"
                      >
                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                        {card.badge && (
                          <div className="absolute top-2 left-2 z-10">
                            <span className="bg-[#E50914] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                              {card.badge}
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-3">
                          <p className="text-sm font-bold text-white truncate">{card.title}</p>
                          <div className="flex items-center gap-2 text-xs">
                            <span className="text-[#46D369] font-bold">{card.matchScore}% Match</span>
                            <span className="text-neutral-400">• {card.durationOrSeasons}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ROW 3: TOP 10 MOVIES IN THE U.S. TODAY (HOLLOW NUMERALS + POSTERS) */}
              <section className="flex flex-col gap-2 group/shelf">
                <div className="px-4 sm:px-8 md:px-12 flex items-baseline justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1 cursor-pointer">
                    <span>Top 10 Movies in the U.S. Today</span>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover/shelf:opacity-100 transition-opacity transform group-hover/shelf:translate-x-1" />
                  </h2>
                </div>

                <div className="relative w-full">
                  <div className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-8 md:px-12 scrollbar-none py-2 scroll-smooth">
                    {TOP_10_MOVIES.map((movie) => (
                      <div
                        key={movie.id}
                        onClick={() => onOpenDetail(movie)}
                        className="flex-none flex items-center cursor-pointer group hover:scale-105 transition-transform duration-300"
                      >
                        {/* Giant Hollow Numerals */}
                        <div className="relative flex items-center justify-end w-20 sm:w-28 h-56 select-none -mr-4 z-10">
                          <span
                            className="text-[120px] sm:text-[160px] font-black text-transparent select-none leading-none tracking-tighter"
                            style={{
                              WebkitTextStroke: '4px #555555',
                              textShadow: '0 0 10px rgba(0,0,0,0.8)'
                            }}
                          >
                            {movie.rank}
                          </span>
                        </div>

                        {/* Vertical Poster 2:3 */}
                        <div className="relative w-36 sm:w-44 h-56 rounded overflow-hidden bg-[#201f1f] shadow-xl">
                          <img
                            src={movie.image}
                            alt={movie.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute top-2 right-2 bg-[#E50914] text-white px-1.5 py-0.5 rounded font-black text-[9px] uppercase tracking-tighter">
                            TOP 10
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ROW 4: CRITICALLY ACCLAIMED SCI-FI & ACTION */}
              <section className="flex flex-col gap-2 group/shelf">
                <div className="px-4 sm:px-8 md:px-12 flex items-baseline justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1 cursor-pointer">
                    <span>Critically Acclaimed Sci-Fi & Action</span>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover/shelf:opacity-100 transition-opacity transform group-hover/shelf:translate-x-1" />
                  </h2>
                  <span className="text-xs text-neutral-400 uppercase tracking-widest hidden sm:inline">
                    Explore All
                  </span>
                </div>

                <div className="relative w-full">
                  <div className="flex items-stretch gap-3 sm:gap-4 overflow-x-auto px-4 sm:px-8 md:px-12 scrollbar-none py-2 scroll-smooth">
                    {SCI_FI_ACTION_TITLES.map((card) => (
                      <div
                        key={card.id}
                        onClick={() => onOpenDetail(card)}
                        className="group relative flex-none w-[220px] sm:w-[250px] md:w-[290px] aspect-[16/9] rounded overflow-hidden bg-[#201f1f] shadow transition-all duration-300 hover:scale-110 hover:z-40 cursor-pointer"
                      >
                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-3">
                          <p className="text-sm font-bold text-white truncate">{card.title}</p>
                          <div className="flex items-center gap-2 text-xs">
                            <span className="text-[#46D369] font-bold">{card.matchScore}% Match</span>
                            <span className="text-neutral-400">• {card.quality}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ROW 5: MY LIST ROW */}
              <section className="flex flex-col gap-2 group/shelf">
                <div className="px-4 sm:px-8 md:px-12 flex items-baseline justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1 cursor-pointer">
                    <span>My List</span>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover/shelf:opacity-100 transition-opacity transform group-hover/shelf:translate-x-1" />
                  </h2>
                  <span className="text-xs text-neutral-400 uppercase tracking-widest hidden sm:inline">
                    {myList.length} Titles
                  </span>
                </div>

                <div className="relative w-full">
                  <div className="flex items-stretch gap-3 sm:gap-4 overflow-x-auto px-4 sm:px-8 md:px-12 scrollbar-none py-2 scroll-smooth">
                    {myList.map((card) => (
                      <div
                        key={card.id}
                        onClick={() => onOpenDetail(card)}
                        className="group relative flex-none w-[220px] sm:w-[250px] md:w-[290px] aspect-[16/9] rounded overflow-hidden bg-[#201f1f] shadow transition-all duration-300 hover:scale-110 hover:z-40 cursor-pointer"
                      >
                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-between p-3 opacity-90 group-hover:opacity-100 transition-opacity">
                          <div className="flex justify-end">
                            <span className="w-7 h-7 rounded-full bg-[#353534]/90 flex items-center justify-center text-[#55e074]">
                              <Check className="w-4 h-4 stroke-[3]" />
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white truncate">{card.title}</p>
                            <div className="flex items-center gap-2 text-xs">
                              <span className="text-[#46D369] font-bold">{card.matchScore}% Match</span>
                              <span className="text-neutral-400">• {card.durationOrSeasons}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </>
        )}
      </main>

      {/* Global Netflix App Footer */}
      <footer className="w-full bg-[#0e0e0e] mt-12 pb-16 pt-8 text-neutral-400 border-t border-neutral-900">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12">
          {/* Social Icons Strip */}
          <div className="flex items-center gap-6 mb-6 text-neutral-400">
            <a href="#" className="hover:text-white transition-colors" aria-label="Website">
              <Globe className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Photos">
              <Camera className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Tags">
              <Hash className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Display">
              <Tv className="w-6 h-6" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6 text-xs leading-relaxed">
            <div className="flex flex-col gap-2.5">
              <a href="#" className="hover:underline">Audio Description</a>
              <a href="#" className="hover:underline">Investor Relations</a>
              <a href="#" className="hover:underline">Legal Notices</a>
            </div>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="hover:underline">Help Center</a>
              <a href="#" className="hover:underline">Jobs</a>
              <a href="#" className="hover:underline">Cookie Preferences</a>
            </div>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="hover:underline">Gift Cards</a>
              <a href="#" className="hover:underline">Terms of Use</a>
              <a href="#" className="hover:underline">Corporate Information</a>
            </div>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="hover:underline">Media Center</a>
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Contact Us</a>
            </div>
          </div>

          <div className="mb-6">
            <button
              type="button"
              className="px-3 py-1 text-xs text-neutral-400 hover:text-white border border-neutral-700 bg-[#1c1b1b] rounded cursor-pointer"
            >
              Service Code
            </button>
          </div>

          <p className="text-xs text-neutral-500">© 1997-2025 Netflix, Inc.</p>
        </div>
      </footer>
    </div>
  );
};

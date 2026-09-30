import React, { useState } from 'react';
import { NetflixLogo } from '../components/NetflixLogo';
import { ChevronRight, Plus, X, Globe, Play, DownloadCloud, Tv, Laptop, Users } from 'lucide-react';
import { TitleItem } from '../data/mockMedia';

interface LandingScreenProps {
  onNavigate: (screen: 'landing' | 'signin' | 'signup' | 'browse') => void;
  onGetStarted: (email: string) => void;
  onSelectTitle: (title: TitleItem) => void;
}

export const LandingScreen: React.FC<LandingScreenProps> = ({
  onNavigate,
  onGetStarted,
  onSelectTitle
}) => {
  const [heroEmail, setHeroEmail] = useState('');
  const [faqEmail, setFaqEmail] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [trendingCategory, setTrendingCategory] = useState<'movies' | 'shows' | 'global'>('movies');
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'es'>('en');

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroEmail.trim()) {
      onGetStarted(heroEmail);
    } else {
      onNavigate('signup');
    }
  };

  const handleFaqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (faqEmail.trim()) {
      onGetStarted(faqEmail);
    } else {
      onNavigate('signup');
    }
  };

  const trendingItems = [
    {
      rank: 1,
      title: 'Midnight Shadows',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbTwVrcSauEL_dPUAUUDvAblVsZuV49xywOpCq-Z-7WSvXOCIDYVAksduoyQ0EvPjYygrygkwbdka9enK2ceG6Y_XZVpJZb2cKcCWcW6uTHXiHmG2eKRdyuFYNNyoO_bnV5l3tTAm63CutRLsoPUAou8ivkaQXo4LtPzZvg2N_Fd3s18m_w_ntPIuQr8CRnrAkXnPOJSZYucYvMHN7EvvFc_0XCsPwDFrrQSL6UF2Pg9ZRA8ow16HHmw',
      matchScore: 98,
      rating: 'TV-MA' as const,
      duration: '2h 15m'
    },
    {
      rank: 2,
      title: 'Echoes in Orbit',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd-7AF8ETlu_mPWKEHUuWgVrY7sPigbnpmaQp18eKq7VOVg9X4xPNMEPB1U3UqpfLomC8oD4Tcda0-zHqDMLmPVDL2p7HZwoYK0q6Lwq5clohTPeMNkcA6vB4ansHGLUS2htWqB-Ar9t4fItU7nF2fR3KXCh3tEa8RstyO3wBQeFBoRFTIWXIej2HXwAOPkx-fu2fBP1uYXSAKj6hGSQcLcngUJQbrlERagvNFGQISoZyvhW-8PxAfnQ',
      matchScore: 96,
      rating: 'PG-13' as const,
      duration: '1h 58m'
    },
    {
      rank: 3,
      title: 'Crown of Cinders',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCScx8xJYyDPdc_G4Kn75Qaq-Nd52JGBHgbj2QjERw6yvbMduu1io2ERfERFSxqX_zg42QPiM6uFakMw4ucHmpRm2DJ2MVyGY7Elky7k7edj8KllAyPqwHBU0RZ7Z08HOFEVtMOo1k5X5f2DlMoLP3ENA8SBYxKyuSUEDjNown_P6subGv8dfctjcCfKl8VwoLF8s1E0_3Rr9Pp2hAObPWnp7bABQQJtKf5XBWbUi3wn0r7_gjkQbJ9Gg',
      matchScore: 94,
      rating: 'TV-MA' as const,
      duration: '2h 4m'
    },
    {
      rank: 4,
      title: 'The Velvet Protocol',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjEIly3uBDLN23sBkDCTLieEUukLpFw0oCuTOJQYDdEY2PN1sZs5-S1TZ6HwkO66th4_i9JHkuiDkXKKX-YmtEI_W3BXG-3nFxB2oZTALDCN930vIjqsfWAw87EoxL1JBQUpk6R3gvillNTPHI9lxZVhFybOZD1nXdML7bcFenktrEjSJ8H3P1kHyIc0eTNAik7T7qbvnuXx7-JhVYF9CUmDo5bCEK8Swx_IYL5gN1kRU6YW-miFqn-g',
      matchScore: 92,
      rating: 'R' as const,
      duration: '2h 10m'
    },
    {
      rank: 5,
      title: 'Hollow Whispers',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmGZ7phTUD-j6NICpcT66UJQKj66TRXaxijktFF5beXvFHiJvlscgCtNJFRSiTGrg8Dxo0CMM2xotMSjJw9KBW_2MTgU6slTfirGk0CARyoWmc8026l02GhSxWH05EVhCUVOb03DJ9KDXMwuCqaNppWi6uFtIb4dSEFXhzdCYTgtQx9jhFn5MqoiyIEJ81Ut6rztIgeUjbkEfoLvhkhr2nGze_eZhIaR9ajnHXquq3VMi9MQekvcQ1DQ',
      matchScore: 95,
      rating: 'TV-MA' as const,
      duration: '1h 50m'
    }
  ];

  const faqs = [
    {
      q: 'What is Netflix?',
      a: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    },
    {
      q: 'How much does Netflix cost?',
      a: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $22.99 a month. No extra costs, no contracts.'
    },
    {
      q: 'Where can I watch?',
      a: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favorite shows with the iOS or Android app. Use downloads to watch while you’re on the go and without an internet connection. Take Netflix with you anywhere.'
    },
    {
      q: 'How do I cancel?',
      a: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
    },
    {
      q: 'What can I watch on Netflix?',
      a: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
    },
    {
      q: 'Is Netflix good for kids?',
      a: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\n\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between selection:bg-[#E50914] selection:text-white">
      {/* AUTHENTIC NETFLIX HEADER */}
      <header className="absolute top-0 left-0 right-0 z-50 w-full bg-gradient-to-b from-black/90 via-black/40 to-transparent">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <button onClick={() => onNavigate('landing')} className="cursor-pointer" aria-label="Netflix">
            <NetflixLogo className="h-8 md:h-10 w-auto" />
          </button>

          {/* Right Controls: Language & Sign In */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative flex items-center bg-black/40 border border-neutral-500/70 hover:border-white rounded px-3 py-1.5 transition">
              <Globe className="w-4 h-4 text-white mr-1.5" />
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value as 'en' | 'es')}
                className="bg-transparent text-sm font-medium text-white focus:outline-none cursor-pointer pr-4 appearance-none"
              >
                <option value="en" className="bg-neutral-900 text-white">English</option>
                <option value="es" className="bg-neutral-900 text-white">Español</option>
              </select>
              <span className="text-white text-xs pointer-events-none -ml-2">▼</span>
            </div>

            <button
              onClick={() => onNavigate('signin')}
              className="bg-[#E50914] hover:bg-[#c11119] text-white font-semibold text-sm px-4 py-1.5 rounded transition duration-200 cursor-pointer shadow-md"
            >
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* 1. HERO BILLBOARD SECTION WITH ICONIC NETFLIX ARC */}
      <section className="relative w-full min-h-[700px] lg:min-h-[760px] flex items-center justify-center pt-28 pb-24 overflow-hidden curve-container">
        {/* Background Film Montage */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsGI212YsfciIBTBw7XcTUrjixs1REmdAOx6oxcA8FzE2KxrccPjfzGFvATDyb6Rorg0Ok7RKDxkafWD6_W2COH00mbRa1Ldp5Wy6SFQ2EPusUGiHkBOkRvY1g3W7j8BwqUZzca_jTJXw3a8x8hSISXpYcRibzUezXYDw0g_X31qIqsLlWAGcHTRy7m5ZkKDu-4W8dHb91XjvPXaif7nwCRAakI-5btSXeR1_-iCjduGu5ePZIrkq-4g')"
          }}
        />

        {/* Multi-tier Authentic Netflix Shading */}
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%)'
          }}
        />

        {/* Hero Center Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-3xl mb-4">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-lg md:text-2xl font-normal text-white/95 mb-4">
            Starts at $6.99. Cancel anytime.
          </p>
          <p className="text-base md:text-lg text-white/90 mb-6 font-normal">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          {/* Floating Email Input + Get Started Button */}
          <form
            onSubmit={handleHeroSubmit}
            className="w-full max-w-2xl flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2.5"
          >
            <div className="relative w-full sm:flex-1">
              <input
                id="hero-email"
                type="email"
                required
                value={heroEmail}
                onChange={(e) => setHeroEmail(e.target.value)}
                placeholder=" "
                className="peer w-full h-14 bg-black/60 border border-neutral-500/80 rounded px-4 pt-4 pb-1 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-base"
              />
              <label
                htmlFor="hero-email"
                className="absolute left-4 top-4 text-neutral-400 text-base pointer-events-none transition-all duration-200 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-neutral-300 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-neutral-300"
              >
                Email address
              </label>
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto h-14 px-7 bg-[#E50914] hover:bg-[#c11119] text-white font-bold text-xl md:text-2xl rounded flex items-center justify-center gap-2 transition duration-200 shrink-0 shadow-lg tracking-wide cursor-pointer"
            >
              <span>Get Started</span>
              <ChevronRight className="w-6 h-6 stroke-[3]" />
            </button>
          </form>
        </div>

        {/* Signature Glowing Red Arc Divider at base of Hero */}
        <div className="curve-arc" />
      </section>

      {/* 2. TRENDING NOW SECTION */}
      <section className="w-full bg-black py-12 md:py-16 relative z-10 border-t-8 border-[#232323]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Trending Now</h2>
            <div className="flex items-center gap-2.5">
              <div className="relative bg-[#161616] border border-neutral-600/80 rounded-md px-3.5 py-1.5 flex items-center">
                <select
                  value={trendingCategory}
                  onChange={(e) => setTrendingCategory(e.target.value as any)}
                  className="bg-transparent text-sm font-semibold text-white focus:outline-none cursor-pointer pr-5 appearance-none"
                >
                  <option value="movies">Movies – English</option>
                  <option value="shows">TV Shows – English</option>
                  <option value="global">Global Top 10</option>
                </select>
                <span className="text-white text-xs pointer-events-none absolute right-2.5">▼</span>
              </div>
            </div>
          </div>

          {/* Horizontal Scroll Shelf of Top 10 with giant hollow numerals */}
          <div className="relative w-full overflow-x-auto pb-4 pt-2 scrollbar-none flex gap-6 snap-x snap-mandatory">
            {trendingItems.map((item) => (
              <div
                key={item.rank}
                onClick={() => {
                  onSelectTitle({
                    id: `trending-land-${item.rank}`,
                    title: item.title,
                    type: 'movie',
                    image: item.image,
                    matchScore: item.matchScore,
                    year: 2024,
                    rating: item.rating,
                    durationOrSeasons: item.duration,
                    quality: '4K Ultra HD',
                    tags: ['Trending', 'Action', 'Drama'],
                    description: `Experience the critically acclaimed story of ${item.title}, now ranking #${item.rank} on Netflix.`,
                    cast: ['Starring Ensemble Cast']
                  });
                }}
                className="relative flex-none w-48 md:w-56 snap-start group cursor-pointer"
              >
                <div className="relative flex items-end">
                  <span className="text-8xl md:text-9xl font-black text-stroke-netflix select-none -mr-7 -mb-2 z-10 transition-transform duration-300 group-hover:scale-105">
                    {item.rank}
                  </span>
                  <div className="relative w-36 md:w-44 aspect-[2/3] rounded-lg overflow-hidden bg-[#232323] transition-transform duration-300 group-hover:scale-105 shadow-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 left-2 bg-[#E50914] text-white px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider">
                      Top 10
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURE VALUE PROP 1: ENJOY ON YOUR TV */}
      <section className="w-full py-16 md:py-20 px-6 md:px-12 bg-black border-t-8 border-[#232323]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Enjoy on your TV
            </h2>
            <p className="text-lg md:text-2xl text-neutral-300 font-normal">
              Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
            </p>
          </div>

          {/* TV Mockup with Screen */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-video rounded-xl bg-[#141414] p-3 border-4 border-[#2b2b2b] shadow-2xl overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnNE5Kw4r_64irNJh-JwO_WCfjxu45VZKUPRFZcEG0HH9ZhvjCVNJDFdJqzqz0cIrt6S3YjrNPok9wq4u1WxWILrljvnho8iQJC-2PTisDsvo6fE56nvJaYDA5jNobZYYOmCVqypzZKE3bKU6vR6vqWOEPlrwiH5YCCM-Pt5eTlpUYdFDtPu0nqDRbC-nqT6l30VZVvKmS9O7bSAe7Mtln9JRGcIcGTgipEX4oZfmju1R2cl-TbF2Llw"
                alt="Video stream playback"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <Play className="w-5 h-5 text-[#E50914] fill-current" />
                  <span className="font-bold text-sm">Peak Ascent • S1:E4</span>
                </div>
                <div className="w-28 bg-neutral-700 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-[#E50914] h-full w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURE VALUE PROP 2: DOWNLOAD TO WATCH OFFLINE */}
      <section className="w-full py-16 md:py-20 px-6 md:px-12 bg-black border-t-8 border-[#232323]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Phone & Download Card */}
          <div className="order-2 lg:order-1 relative flex justify-center items-center">
            <div className="relative w-full max-w-xs md:max-w-sm aspect-[9/13] rounded-3xl bg-[#111] p-3 border-4 border-[#2b2b2b] shadow-2xl overflow-hidden flex flex-col justify-end">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-C2WsXSjxHMYguJBkL9exqG16T41Wu_wemHOSDBg8-xer7grOfjpAcYOMRzoPfu7r_knXH3U3wMWEfYEEXoyWszyY2MXLVvwo2Fm1xZFLuStTOvDegKwLZrBIA-CnAAf8uvimOpxH5KXGdGYi28TCnXcMv9F4QXiF9J12iavoCy2IcFbAvf5I7qLevlHDx7-WJppiiK2UNQktEi0CZ0AwhCcva7h-SRk64S43kzmycB5VJv1iyNb4zw"
                alt="Stranger Things"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* Floating Download status badge */}
              <div className="relative z-10 mb-4 p-2.5 bg-black/90 border border-neutral-700/80 rounded-xl shadow-2xl flex items-center gap-3">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL7YteAq3J9Cx_Wq9H6MdWcvaajgDb1sXcmguP3iFWs5dKKxsyokl_wsgR4Znnba0zSGDlgQ8YtOzrFDpN1aMLKp-L-QykUNrrACHkH2TrvPIQGDB2i_mBM3w1AD39L8DpTSPTWIplZQW8nwgJscVL6a8D4JhkSKx1_tWlr2bnhZoufinKWXlK-SwBksp2OytWTtUEN4nd-8LKp7cw52pu582bt0dwZ4bOtUkYG3PoXHTBLtjgOc_M2Q"
                  alt="Thumbnail"
                  className="w-10 h-14 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm text-white truncate">Stranger Things</div>
                  <div className="text-xs text-[#0071eb] font-semibold">Downloading...</div>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <DownloadCloud className="w-5 h-5 text-white animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Download your shows to watch offline
            </h2>
            <p className="text-lg md:text-2xl text-neutral-300 font-normal">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FEATURE VALUE PROP 3: WATCH EVERYWHERE */}
      <section className="w-full py-16 md:py-20 px-6 md:px-12 bg-black border-t-8 border-[#232323]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Watch everywhere
            </h2>
            <p className="text-lg md:text-2xl text-neutral-300 font-normal">
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </p>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-video rounded-xl bg-[#141414] p-3 border-4 border-[#2b2b2b] shadow-2xl overflow-hidden flex items-center justify-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ_UUCEBRVMr_8FNtjPPbWOfMHWDs6OdQENgWsV1EqCtOvKeaQfJQg6oU9g7ZoISf08Hor_LgQHyQIliqgnJOe2Kd8RINpVi4RxM_xWrZZyou5AYRWMOQdDBEwEy3WtRz9DZp4RYY5oL9dpDNY7336q9SW4n1ca5OgcKZVKw3cDTpXvlcIGbJkWFd2Cj-YBBDLWZtFgyUgUK7j9WuwbVfORT7AJWrVu8Co4N36gJcZHynr-VxMzDu_QQ"
                alt="Watch everywhere showcase"
                className="w-full h-full object-cover rounded-lg opacity-70"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute text-center p-6 bg-black/70 backdrop-blur-md rounded-xl border border-neutral-700/60 max-w-xs shadow-2xl">
                <Laptop className="w-10 h-10 text-[#E50914] mx-auto mb-1" />
                <div className="font-bold text-lg text-white">Any Device, Anytime</div>
                <div className="text-xs text-neutral-400 mt-1">Smart TVs, Phones, Tablets & PCs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURE VALUE PROP 4: CREATE PROFILES FOR KIDS */}
      <section className="w-full py-16 md:py-20 px-6 md:px-12 bg-black border-t-8 border-[#232323]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="order-2 lg:order-1 relative flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-video rounded-2xl bg-[#141414] border-4 border-[#2b2b2b] shadow-2xl overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9HbYDC4fWI05q46lRBzZkeArz_nuOZLg8Zgk-nKz7wuWQjpKi4HETQeMOmDBReaunLUfZCnycg2Hi4V7y2A2aCINDOUQPlNjmJxb_Dqux6Pp8JmlaVX4S7a9SsffMgM5A-oGOSw6v7gLxhsnMIsjiukrP0V1AgpIfJJ6VD1td1R64ZThjHQAYO4RJLj4Lak-oCX3MZPc6RaXf6t6tmpGCByqt-dJyHckggI2S2KJ3QRsDr8-ZaIgLBQ"
                alt="Kids profiles showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Create profiles for kids
            </h2>
            <p className="text-lg md:text-2xl text-neutral-300 font-normal">
              Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="w-full py-16 md:py-24 px-6 md:px-12 bg-black border-t-8 border-[#232323]">
        <div className="max-w-[1140px] mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-8 md:mb-12">
            Frequently Asked Questions
          </h2>

          {/* Accordion Panels */}
          <div className="w-full flex flex-col gap-2 mb-12">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="w-full bg-[#2d2d2d] hover:bg-[#414141] transition duration-200">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between font-normal text-xl md:text-2xl text-white focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="transition-transform duration-200">
                      {isOpen ? (
                        <X className="w-8 h-8 font-light" />
                      ) : (
                        <Plus className="w-8 h-8 font-light" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 bg-[#2d2d2d] border-t border-black text-lg md:text-xl text-neutral-200 leading-relaxed whitespace-pre-line animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Repeated Email CTA at Bottom of FAQ */}
          <div className="w-full max-w-2xl text-center flex flex-col items-center">
            <p className="text-base md:text-lg text-white/90 mb-5">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <form
              onSubmit={handleFaqSubmit}
              className="w-full flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2.5"
            >
              <div className="relative w-full sm:flex-1">
                <input
                  id="faq-email"
                  type="email"
                  required
                  value={faqEmail}
                  onChange={(e) => setFaqEmail(e.target.value)}
                  placeholder=" "
                  className="peer w-full h-14 bg-black/60 border border-neutral-500/80 rounded px-4 pt-4 pb-1 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-base"
                />
                <label
                  htmlFor="faq-email"
                  className="absolute left-4 top-4 text-neutral-400 text-base pointer-events-none transition-all duration-200 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-neutral-300 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-neutral-300"
                >
                  Email address
                </label>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto h-14 px-7 bg-[#E50914] hover:bg-[#c11119] text-white font-bold text-xl md:text-2xl rounded flex items-center justify-center gap-2 transition duration-200 shrink-0 shadow-lg tracking-wide cursor-pointer"
              >
                <span>Get Started</span>
                <ChevronRight className="w-6 h-6 stroke-[3]" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 8. AUTHENTIC NETFLIX FOOTER */}
      <footer className="w-full bg-black text-neutral-400 py-16 px-6 md:px-12 border-t-8 border-[#232323]">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-8 text-sm">
          <div>
            Questions? Call{' '}
            <a href="tel:1-844-505-2993" className="hover:underline text-neutral-300">
              1-844-505-2993
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-3 gap-x-6 text-xs md:text-sm">
            <button onClick={() => setOpenFaqIndex(0)} className="hover:underline text-left cursor-pointer">FAQ</button>
            <a href="#" className="hover:underline">Help Center</a>
            <button onClick={() => onNavigate('signin')} className="hover:underline text-left cursor-pointer">Account</button>
            <a href="#" className="hover:underline">Media Center</a>
            <a href="#" className="hover:underline">Investor Relations</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Netflix Shop</a>
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

          <div className="pt-2">
            <div className="inline-flex items-center bg-black border border-neutral-600 rounded px-3 py-1.5">
              <Globe className="w-4 h-4 text-white mr-1.5" />
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value as any)}
                className="bg-transparent text-sm font-medium text-white focus:outline-none cursor-pointer pr-4 appearance-none"
              >
                <option value="en" className="bg-neutral-900 text-white">English</option>
                <option value="es" className="bg-neutral-900 text-white">Español</option>
              </select>
              <span className="text-white text-xs pointer-events-none -ml-2">▼</span>
            </div>
          </div>

          <p className="text-xs text-neutral-500">Netflix United States</p>
        </div>
      </footer>
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { TitleItem } from '../data/mockMedia';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  RotateCw, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  ArrowLeft,
  Subtitles,
  Gauge,
  Check
} from 'lucide-react';

interface VideoPlayerModalProps {
  title: TitleItem;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ title, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(245); // in seconds
  const totalDuration = 3240; // 54 mins
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [showAudioMenu, setShowAudioMenu] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState('English [Original] (Dolby Atmos 5.1)');
  const [selectedSubtitles, setSelectedSubtitles] = useState('English [CC]');

  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Playback timer ticker
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => (prev >= totalDuration ? 0 : prev + 1 * playbackSpeed));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  // Auto-hide controls when mouse is idle
  const handleMouseMove = () => {
    setShowControls(true);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
        setShowSpeedMenu(false);
        setShowAudioMenu(false);
      }
    }, 3500);
  };

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    setCurrentTime(Math.floor(pos * totalDuration));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const progressPercent = (currentTime / totalDuration) * 100;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="fixed inset-0 z-[100] bg-black text-white flex flex-col justify-between select-none overflow-hidden"
    >
      {/* Background Simulated Cinema Stream Scene */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={title.heroImage || title.image}
          alt={title.title}
          className="w-full h-full object-cover scale-105 filter brightness-[0.75] contrast-[1.05]"
        />
        {/* Cinematic atmospheric pulse & subtle lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] pointer-events-none" />
      </div>

      {/* Top Header Bar */}
      <div
        className={`relative z-10 p-6 flex items-center justify-between transition-opacity duration-300 bg-gradient-to-b from-black/80 to-transparent ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer text-white"
            aria-label="Back to browse"
          >
            <ArrowLeft className="w-7 h-7" />
          </button>
          <div>
            <h1 className="text-xl md:text-2xl font-black tracking-tight">{title.title}</h1>
            <p className="text-sm text-neutral-300 font-medium">
              {title.type === 'series' ? 'S1:E1 • Chapter One: The Oregon Rift' : title.durationOrSeasons}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 border border-neutral-500 rounded text-xs text-neutral-300 font-bold uppercase">
            {title.quality}
          </span>
          <span className="px-2 py-0.5 bg-neutral-800/80 rounded text-xs text-neutral-300 font-bold uppercase">
            {title.rating}
          </span>
        </div>
      </div>

      {/* Center Ambient Play/Pause overlay click */}
      <div
        onClick={() => setIsPlaying(!isPlaying)}
        className="relative z-10 flex-1 flex items-center justify-center cursor-pointer"
      >
        {!isPlaying && (
          <div className="w-20 h-20 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl transition-transform transform scale-110">
            <Play className="w-10 h-10 fill-white text-white ml-1" />
          </div>
        )}
      </div>

      {/* Bottom Control Bar */}
      <div
        className={`relative z-10 px-6 pb-6 pt-12 transition-opacity duration-300 bg-gradient-to-t from-black/95 via-black/70 to-transparent ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Scrubber Progress Bar */}
        <div
          onClick={handleSeek}
          className="relative w-full h-2 bg-neutral-700/80 hover:h-3 rounded-full cursor-pointer transition-all duration-200 group mb-4"
        >
          {/* Buffered track */}
          <div
            className="absolute top-0 left-0 h-full bg-neutral-500/60 rounded-full"
            style={{ width: `${Math.min(progressPercent + 25, 100)}%` }}
          />
          {/* Played track */}
          <div
            className="absolute top-0 left-0 h-full bg-[#E50914] rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
          {/* Scrubber Thumb */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#E50914] rounded-full shadow-md scale-0 group-hover:scale-100 transition-transform -ml-2"
            style={{ left: `${progressPercent}%` }}
          />
        </div>

        {/* Action Controls Row */}
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Play/Pause */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="hover:text-neutral-300 transition-transform active:scale-95 cursor-pointer"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 fill-current" />
              ) : (
                <Play className="w-7 h-7 fill-current" />
              )}
            </button>

            {/* Replay 10s */}
            <button
              onClick={() => setCurrentTime((t) => Math.max(t - 10, 0))}
              className="hover:text-neutral-300 transition-transform active:scale-90 cursor-pointer"
              title="Rewind 10 seconds"
            >
              <RotateCcw className="w-6 h-6" />
            </button>

            {/* Forward 10s */}
            <button
              onClick={() => setCurrentTime((t) => Math.min(t + 10, totalDuration))}
              className="hover:text-neutral-300 transition-transform active:scale-90 cursor-pointer"
              title="Forward 10 seconds"
            >
              <RotateCw className="w-6 h-6" />
            </button>

            {/* Volume & Mute */}
            <div className="flex items-center gap-2 group/vol">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="hover:text-neutral-300 cursor-pointer"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-6 h-6 text-red-500" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(Number(e.target.value));
                  if (isMuted) setIsMuted(false);
                }}
                className="w-16 sm:w-24 h-1 bg-neutral-600 rounded-lg appearance-none cursor-pointer accent-[#E50914]"
              />
            </div>

            {/* Time display */}
            <span className="text-xs sm:text-sm text-neutral-300 font-medium tabular-nums">
              {formatTime(currentTime)} / {formatTime(totalDuration)}
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Speed Selector */}
            <div className="relative">
              <button
                onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                className="hover:text-neutral-300 flex items-center gap-1 text-sm font-semibold cursor-pointer px-2 py-1 rounded hover:bg-neutral-800"
                title="Playback speed"
              >
                <Gauge className="w-5 h-5" />
                <span className="hidden sm:inline">{playbackSpeed}x</span>
              </button>

              {showSpeedMenu && (
                <div className="absolute bottom-10 right-0 bg-neutral-900 border border-neutral-700 rounded-lg p-2 min-w-[130px] shadow-2xl flex flex-col gap-1 z-30">
                  <div className="text-xs font-bold text-neutral-400 px-3 py-1 uppercase tracking-wider">
                    Speed
                  </div>
                  {[0.75, 1, 1.25, 1.5, 2].map((spd) => (
                    <button
                      key={spd}
                      onClick={() => {
                        setPlaybackSpeed(spd);
                        setShowSpeedMenu(false);
                      }}
                      className={`flex items-center justify-between px-3 py-1.5 text-xs rounded transition-colors text-left ${
                        playbackSpeed === spd
                          ? 'bg-[#E50914] text-white font-bold'
                          : 'text-neutral-300 hover:bg-neutral-800'
                      }`}
                    >
                      <span>{spd}x</span>
                      {playbackSpeed === spd && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Audio & Subtitles Menu */}
            <div className="relative">
              <button
                onClick={() => setShowAudioMenu(!showAudioMenu)}
                className="hover:text-neutral-300 p-1.5 rounded hover:bg-neutral-800 transition-colors cursor-pointer"
                title="Audio & Subtitles"
              >
                <Subtitles className="w-6 h-6" />
              </button>

              {showAudioMenu && (
                <div className="absolute bottom-10 right-0 bg-neutral-900 border border-neutral-700 rounded-lg p-4 w-72 sm:w-80 shadow-2xl z-30 flex flex-col gap-3">
                  <div>
                    <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      Audio
                    </h3>
                    {['English [Original] (Dolby Atmos 5.1)', 'Español', 'Français', 'Deutsch'].map(
                      (audio) => (
                        <button
                          key={audio}
                          onClick={() => setSelectedAudio(audio)}
                          className={`w-full flex items-center justify-between px-2.5 py-1.5 text-xs rounded text-left ${
                            selectedAudio === audio
                              ? 'bg-neutral-800 text-[#E50914] font-bold'
                              : 'text-neutral-300 hover:bg-neutral-800/60'
                          }`}
                        >
                          <span>{audio}</span>
                          {selectedAudio === audio && <Check className="w-3.5 h-3.5 text-[#E50914]" />}
                        </button>
                      )
                    )}
                  </div>

                  <div className="border-t border-neutral-700/80 pt-2">
                    <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      Subtitles
                    </h3>
                    {['Off', 'English [CC]', 'Español', 'Français'].map((sub) => (
                      <button
                        key={sub}
                        onClick={() => setSelectedSubtitles(sub)}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 text-xs rounded text-left ${
                          selectedSubtitles === sub
                            ? 'bg-neutral-800 text-[#E50914] font-bold'
                            : 'text-neutral-300 hover:bg-neutral-800/60'
                        }`}
                      >
                        <span>{sub}</span>
                        {selectedSubtitles === sub && (
                          <Check className="w-3.5 h-3.5 text-[#E50914]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Fullscreen toggle */}
            <button
              onClick={toggleFullscreen}
              className="hover:text-neutral-300 p-1.5 rounded hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            >
              {isFullscreen ? (
                <Minimize className="w-6 h-6" />
              ) : (
                <Maximize className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { TitleItem, ALL_TITLES } from '../data/mockMedia';
import { Play, Plus, Check, ThumbsUp, X, Volume2, VolumeX } from 'lucide-react';

interface TitleDetailModalProps {
  title: TitleItem;
  onClose: () => void;
  onPlay: (item: TitleItem) => void;
  isSavedInList: boolean;
  onToggleMyList: (item: TitleItem) => void;
}

export const TitleDetailModal: React.FC<TitleDetailModalProps> = ({
  title,
  onClose,
  onPlay,
  isSavedInList,
  onToggleMyList
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Recommendations: Other titles in similar category
  const similarTitles = ALL_TITLES.filter((t) => t.id !== title.id).slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 backdrop-blur-md px-4 py-8 sm:py-12 animate-fade-in">
      {/* Click outside to close backdrop */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#181818] rounded-xl overflow-hidden shadow-2xl border border-neutral-800 text-white my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-[#181818]/70 hover:bg-[#181818] border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer shadow-lg"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Banner */}
        <div className="relative w-full aspect-[16/9] max-h-[460px] overflow-hidden bg-neutral-900">
          <img
            src={title.heroImage || title.image}
            alt={title.title}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-black/40" />

          {/* Action Row over Banner */}
          <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between z-20">
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-xl uppercase">
                {title.title}
              </h1>
              {title.subtitle && (
                <p className="text-sm font-semibold tracking-widest text-neutral-300 uppercase">
                  {title.subtitle}
                </p>
              )}

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => onPlay(title)}
                  className="flex items-center gap-2 bg-white hover:bg-neutral-200 text-black px-7 py-2.5 rounded font-bold text-base transition-transform active:scale-95 cursor-pointer shadow-xl"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span>Play</span>
                </button>

                <button
                  onClick={() => onToggleMyList(title)}
                  className={`w-11 h-11 rounded-full border border-neutral-400 hover:border-white flex items-center justify-center transition-all cursor-pointer ${
                    isSavedInList ? 'bg-white/20 text-[#55e074]' : 'bg-[#2a2a2a]/60 text-white'
                  }`}
                  title={isSavedInList ? 'Remove from My List' : 'Add to My List'}
                >
                  {isSavedInList ? <Check className="w-5 h-5 text-emerald-400" /> : <Plus className="w-5 h-5" />}
                </button>

                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`w-11 h-11 rounded-full border border-neutral-400 hover:border-white flex items-center justify-center transition-all cursor-pointer ${
                    isLiked ? 'bg-white/20 text-[#E50914]' : 'bg-[#2a2a2a]/60 text-white'
                  }`}
                  title="Like this title"
                >
                  <ThumbsUp className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="w-10 h-10 rounded-full bg-[#181818]/60 hover:bg-[#181818] border border-white/20 flex items-center justify-center text-white cursor-pointer shadow-md"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Details Content Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-8">
          {/* Metadata & Synopsis Split */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-3 flex-wrap text-sm">
                <span className="text-[#46D369] font-bold text-base">{title.matchScore}% Match</span>
                <span className="text-neutral-400">{title.year}</span>
                <span className="px-1.5 py-0.5 border border-neutral-600 rounded text-xs text-neutral-300 font-semibold uppercase">
                  {title.rating}
                </span>
                <span className="text-neutral-400">{title.durationOrSeasons}</span>
                <span className="px-1.5 py-0.5 border border-neutral-600 rounded text-xs font-bold text-neutral-300 uppercase">
                  {title.quality}
                </span>
                {title.audio && (
                  <span className="text-neutral-400 text-xs hidden sm:inline">{title.audio}</span>
                )}
              </div>

              <p className="text-base text-neutral-200 leading-relaxed font-normal">
                {title.description}
              </p>
            </div>

            {/* Right Column: Cast, Genres, Mood */}
            <div className="flex flex-col gap-3 text-sm text-neutral-400">
              <div>
                <span className="text-neutral-500 font-medium">Cast: </span>
                <span className="text-neutral-300">{title.cast.join(', ')}</span>
              </div>
              <div>
                <span className="text-neutral-500 font-medium">Genres: </span>
                <span className="text-neutral-300">{title.tags.join(', ')}</span>
              </div>
              {title.creator && (
                <div>
                  <span className="text-neutral-500 font-medium">Creators: </span>
                  <span className="text-neutral-300">{title.creator}</span>
                </div>
              )}
              <div>
                <span className="text-neutral-500 font-medium">Maturity Rating: </span>
                <span className="text-neutral-300 font-semibold">{title.rating} (Recommended for mature audiences)</span>
              </div>
            </div>
          </div>

          {/* If Title has Episodes, show episode picker */}
          {title.episodes && title.episodes.length > 0 && (
            <div className="border-t border-neutral-800 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Episodes</h3>
                <span className="text-sm text-neutral-400 font-medium">Season 1</span>
              </div>

              <div className="flex flex-col divide-y divide-neutral-800">
                {title.episodes.map((ep) => (
                  <div
                    key={ep.id}
                    onClick={() => onPlay(title)}
                    className="py-4 flex items-center gap-4 hover:bg-neutral-800/50 p-3 rounded-lg transition-colors cursor-pointer group"
                  >
                    <span className="text-xl font-bold text-neutral-500 w-6 text-center">
                      {ep.id}
                    </span>
                    <div className="relative w-28 sm:w-36 aspect-video rounded overflow-hidden bg-neutral-800 shrink-0">
                      <img src={ep.image} alt={ep.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-8 h-8 fill-white text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-white group-hover:text-[#E50914] transition-colors truncate">
                          {ep.title}
                        </h4>
                        <span className="text-xs text-neutral-400 font-medium">{ep.duration}</span>
                      </div>
                      <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                        {ep.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* More Like This Grid */}
          <div className="border-t border-neutral-800 pt-6">
            <h3 className="text-xl font-bold text-white mb-4">More Like This</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {similarTitles.map((sim) => (
                <div
                  key={sim.id}
                  onClick={() => onPlay(sim)}
                  className="bg-[#232323] rounded-md overflow-hidden hover:scale-105 transition-all duration-200 cursor-pointer shadow-lg group"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={sim.image}
                      alt={sim.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-black/70 px-1.5 py-0.5 rounded text-[10px] font-bold">
                      {sim.durationOrSeasons}
                    </div>
                  </div>
                  <div className="p-3 flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#46D369] font-bold">{sim.matchScore}% Match</span>
                      <span className="border border-neutral-600 px-1 rounded text-[10px]">
                        {sim.rating}
                      </span>
                    </div>
                    <h5 className="text-sm font-bold text-white truncate">{sim.title}</h5>
                    <p className="text-xs text-neutral-400 line-clamp-2">{sim.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

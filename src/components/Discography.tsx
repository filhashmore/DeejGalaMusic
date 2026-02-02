import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Star, Calendar, Clock, Disc } from 'lucide-react';
import { siteConfig } from '../config/site-config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Discography() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  const allReleases = [
    ...siteConfig.discography.ep.map((ep) => ({ ...ep, isEP: true })),
    ...siteConfig.discography.singles.map((single) => ({ ...single, isEP: false })),
  ];

  return (
    <section id="music" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 245, 255, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-magenta text-sm tracking-[0.3em] uppercase mb-4 block">
            Discography
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-gradient">Music</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Explore the complete collection of releases, from the debut EP to the latest singles.
          </p>
        </motion.div>

        {/* Spotify Player Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="max-w-3xl mx-auto glass rounded-xl p-6">
            <iframe
              src={`https://open.spotify.com/embed/artist/${siteConfig.spotifyEmbed.artistId}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-lg"
              style={{ borderRadius: '12px' }}
            />
          </div>
        </motion.div>

        {/* Releases Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allReleases.map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative"
            >
              <div
                className={`glass rounded-lg p-5 h-full transition-all duration-300 cursor-pointer
                  ${
                    selectedTrack === release.title
                      ? 'border-neon-cyan shadow-neon-cyan'
                      : 'hover:border-neon-cyan/50'
                  }`}
                onClick={() =>
                  setSelectedTrack(selectedTrack === release.title ? null : release.title)
                }
              >
                {/* Type Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      release.isEP
                        ? 'bg-neon-purple/20 text-neon-purple'
                        : 'bg-neon-cyan/20 text-neon-cyan'
                    }`}
                  >
                    {release.isEP ? 'EP' : 'Single'}
                  </span>
                  {'popular' in release && release.popular && (
                    <Star
                      className="w-4 h-4 text-neon-magenta fill-neon-magenta"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-text-primary mb-1 group-hover:text-neon-cyan transition-colors">
                  {release.title}
                </h3>

                {'subtitle' in release && release.subtitle && (
                  <p className="text-text-secondary text-sm mb-2">{release.subtitle}</p>
                )}

                {/* Meta */}
                <div className="flex items-center gap-4 text-text-secondary text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {release.year}
                  </span>
                  {'duration' in release && release.duration && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {release.duration}
                    </span>
                  )}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-5 h-5 text-neon-cyan" fill="currentColor" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Track Preview Modal */}
        <AnimatePresence>
          {selectedTrack && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-50"
            >
              <div className="glass rounded-xl p-4 shadow-neon-cyan">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center">
                    <Disc className="w-6 h-6 text-background" />
                  </div>
                  <div className="flex-1">
                    <p className="text-text-primary font-semibold">{selectedTrack}</p>
                    <p className="text-text-secondary text-sm">Click to play on Spotify</p>
                  </div>
                  <a
                    href={siteConfig.social.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-neon-cyan flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Play className="w-5 h-5 text-background" fill="currentColor" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

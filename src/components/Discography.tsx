import { motion } from 'framer-motion';
import { Play, Star, Calendar, Clock } from 'lucide-react';
import { siteConfig } from '../config/site-config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Discography() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const allReleases = [
    ...siteConfig.discography.ep.map((ep) => ({ ...ep, isEP: true })),
    ...siteConfig.discography.singles.map((single) => ({ ...single, isEP: false })),
  ];

  return (
    <section id="music" className="relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      />
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 245, 255, 0.08) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, rgba(255, 0, 255, 0.08) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center" style={{ marginBottom: '5rem' }}
        >
          <span
            className="section-label block"
            style={{ color: 'var(--neon-magenta)' }}
          >
            Discography
          </span>
          <h2 className="section-title">
            The <span className="text-gradient">Music</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the complete collection of releases, from the debut EP to the latest singles.
          </p>
        </motion.div>

        {/* Spotify Player Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginBottom: '5rem' }}
        >
          <div className="max-w-4xl mx-auto glass-card-strong p-6 md:p-8">
            <iframe
              src={`https://open.spotify.com/embed/artist/${siteConfig.spotifyEmbed.artistId}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ borderRadius: '12px' }}
            />
          </div>
        </motion.div>

        {/* Releases Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allReleases.map((release, index) => {
            const isPopular = 'popular' in release && release.popular;
            return (
              <motion.a
                key={release.title}
                href={siteConfig.social.spotify}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className={`track-card group ${isPopular ? 'track-card-popular' : ''}`}
              >
                {/* Header Row */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`badge ${release.isEP ? 'badge-purple' : 'badge-cyan'}`}
                    style={{ padding: '0.3rem 0.7rem', fontSize: '0.7rem', fontWeight: '600' }}
                  >
                    {release.isEP ? 'EP' : 'Single'}
                  </span>
                  {isPopular && (
                    <div className="flex items-center gap-1">
                      <Star
                        className="w-3.5 h-3.5"
                        style={{ color: 'var(--neon-magenta)' }}
                        fill="var(--neon-magenta)"
                      />
                      <span
                        className="text-xs font-medium"
                        style={{ color: 'var(--neon-magenta)' }}
                      >
                        Popular
                      </span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3
                  className="font-display text-lg font-semibold mb-1 transition-colors group-hover:text-cyan-400"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {release.title}
                </h3>

                {'subtitle' in release && release.subtitle && (
                  <p className="text-gray-500 text-xs mb-2">{release.subtitle}</p>
                )}

                {/* Meta */}
                <div className="flex items-center gap-3 text-gray-500 text-xs mt-auto pt-2">
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

                {/* Play Indicator */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      backgroundColor: 'var(--neon-cyan)',
                      boxShadow: '0 4px 15px rgba(0, 245, 255, 0.4)'
                    }}
                  >
                    <Play
                      className="w-4 h-4 ml-0.5"
                      style={{ color: 'var(--bg-primary)' }}
                      fill="var(--bg-primary)"
                    />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

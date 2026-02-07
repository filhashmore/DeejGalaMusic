import { motion } from 'framer-motion';
import { siteConfig } from '../config/site-config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Official Spotify logo
const SpotifyLogo = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={style}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

// SoundCloud logo - simplified cloud with sound bars
const SoundCloudLogo = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={style}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M7 17V9h1v8H7zm2.5 0V7h1v10h-1zm2.5 0V11h1v6h-1zm2.5 0V8h1v9h-1zM17 17V6h1v11h-1zM1 14v3h1v-3H1zm2.5-1v4h1v-4h-1zM6 12v5h1v-5H6zm14.5-3c-.3 0-.5.1-.8.2-.3-1.7-1.8-3-3.5-3-.5 0-1 .1-1.4.3-.2.1-.3.2-.3.4v8.9c0 .2.1.3.3.4h5.7c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.7-2.5-2.7z"/>
  </svg>
);

// Official Instagram logo
const InstagramLogo = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={style}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// Official X (Twitter) logo
const XLogo = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={style}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socials = [
  {
    name: 'Spotify',
    icon: SpotifyLogo,
    url: siteConfig.social.spotify,
    color: '#1DB954',
    gradient: 'linear-gradient(135deg, #1DB954 0%, #1ed760 100%)',
    glow: 'rgba(29, 185, 84, 0.5)',
  },
  {
    name: 'SoundCloud',
    icon: SoundCloudLogo,
    url: siteConfig.social.soundcloud,
    color: '#FF5500',
    gradient: 'linear-gradient(135deg, #FF5500 0%, #ff7700 100%)',
    glow: 'rgba(255, 85, 0, 0.5)',
  },
  {
    name: 'Instagram',
    icon: InstagramLogo,
    url: siteConfig.social.instagram,
    color: '#E4405F',
    gradient: 'linear-gradient(135deg, #833AB4 0%, #E4405F 50%, #FCAF45 100%)',
    glow: 'rgba(228, 64, 95, 0.5)',
  },
  {
    name: 'X',
    icon: XLogo,
    url: siteConfig.social.twitter,
    color: '#ffffff',
    gradient: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
    glow: 'rgba(255, 255, 255, 0.3)',
  },
];

export function SocialLinks() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="connect" className="relative overflow-hidden" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      />
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(157, 78, 221, 0.12) 0%, transparent 60%)`,
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label block" style={{ color: 'var(--neon-cyan)' }}>
            Connect
          </span>
          <h2 className="section-title mb-4">
            Stay in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto" style={{ marginBottom: '4rem' }}>
            Follow along for new releases, behind-the-scenes content, and updates on the journey.
          </p>
        </motion.div>

        {/* Social Links Grid - 2x2 on mobile, 4 across on larger */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                textAlign: 'center',
                padding: '1.25rem 1rem 1rem',
                borderRadius: '20px',
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                textDecoration: 'none',
                overflow: 'hidden',
              }}
            >
              {/* Hover glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${social.glow} 0%, transparent 70%)`,
                  filter: 'blur(20px)',
                }}
              />

              {/* Icon container with brand gradient */}
              <div
                className="relative flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:shadow-lg"
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  background: social.gradient,
                  boxShadow: `0 4px 20px ${social.glow}`,
                }}
              >
                <social.icon
                  className="w-6 h-6"
                  style={{ color: '#ffffff' }}
                />
              </div>

              {/* Platform name - positioned with flex-grow spacer for equal spacing */}
              <p
                className="relative text-white font-semibold text-sm tracking-wide transition-colors duration-300"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                  marginTop: 'auto',
                  paddingTop: '0.75rem',
                }}
              >
                {social.name}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Contact Note */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-500 text-sm" style={{ marginTop: '4rem' }}
        >
          {siteConfig.contact.bookingNote}
        </motion.p>
      </div>
    </section>
  );
}

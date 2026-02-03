import { motion } from 'framer-motion';
import { Instagram, Music2 } from 'lucide-react';
import { siteConfig } from '../config/site-config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Custom X (formerly Twitter) logo component
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
    handle: '@deejgala',
    icon: Music2,
    url: siteConfig.social.spotify,
    color: '#1DB954',
    bgColor: 'rgba(29, 185, 84, 0.15)',
  },
  {
    name: 'Instagram',
    handle: '@deejgala',
    icon: Instagram,
    url: siteConfig.social.instagram,
    color: '#E4405F',
    bgColor: 'rgba(228, 64, 95, 0.15)',
  },
  {
    name: 'X',
    handle: '@deejgala',
    icon: XLogo,
    url: siteConfig.social.twitter,
    color: '#000000',
    bgColor: 'rgba(255, 255, 255, 0.12)',
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

        {/* Social Links Grid */}
        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1rem 0.75rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
              }}
            >
              <div
                className="flex items-center justify-center rounded-lg mb-2"
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  backgroundColor: social.bgColor,
                }}
              >
                <social.icon
                  className="w-5 h-5"
                  style={{ color: social.color }}
                />
              </div>
              <p className="text-white font-medium text-xs">{social.name}</p>
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

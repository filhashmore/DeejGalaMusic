import { motion } from 'framer-motion';
import { Instagram, Twitter, Music2 } from 'lucide-react';
import { siteConfig } from '../config/site-config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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
    name: 'X / Twitter',
    handle: '@deejgala',
    icon: Twitter,
    url: siteConfig.social.twitter,
    color: '#1DA1F2',
    bgColor: 'rgba(29, 161, 242, 0.15)',
  },
];

export function SocialLinks() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="connect" className="relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
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
        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="social-card group"
              style={{
                flexDirection: 'column',
                textAlign: 'center',
                padding: '1.5rem',
              }}
            >
              <div
                className="social-icon mx-auto mb-3"
                style={{ backgroundColor: social.bgColor }}
              >
                <social.icon
                  className="w-6 h-6"
                  style={{ color: social.color }}
                />
              </div>
              <p className="text-white font-semibold text-sm">{social.name}</p>
              <p className="text-gray-500 text-xs mt-1">{social.handle}</p>
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

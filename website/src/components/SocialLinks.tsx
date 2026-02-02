import { motion } from 'framer-motion';
import { Instagram, Twitter, Music2 } from 'lucide-react';
import { siteConfig } from '../config/site-config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const socials = [
  {
    name: 'Spotify',
    icon: Music2,
    url: siteConfig.social.spotify,
    color: '#1DB954',
    hoverClass: 'hover:shadow-[0_0_30px_rgba(29,185,84,0.5)]',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: siteConfig.social.instagram,
    color: '#E4405F',
    hoverClass: 'hover:shadow-[0_0_30px_rgba(228,64,95,0.5)]',
  },
  {
    name: 'X / Twitter',
    icon: Twitter,
    url: siteConfig.social.twitter,
    color: '#1DA1F2',
    hoverClass: 'hover:shadow-[0_0_30px_rgba(29,161,242,0.5)]',
  },
];

export function SocialLinks() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="connect" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(157, 78, 221, 0.15) 0%, transparent 60%)`,
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-neon-cyan text-sm tracking-[0.3em] uppercase mb-4 block">
            Connect
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Stay in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-12">
            Follow along for new releases, behind-the-scenes content, and updates on the journey.
          </p>
        </motion.div>

        {/* Social Links Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`group w-full sm:w-auto`}
            >
              <div
                className={`glass rounded-xl p-6 flex items-center gap-4 transition-all duration-300 ${social.hoverClass} hover:scale-105`}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: `${social.color}20` }}
                >
                  <social.icon
                    className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: social.color }}
                  />
                </div>
                <div className="text-left">
                  <p className="text-text-primary font-semibold">{social.name}</p>
                  <p className="text-text-secondary text-sm">@deejgala</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-text-secondary text-sm">
            {siteConfig.contact.bookingNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

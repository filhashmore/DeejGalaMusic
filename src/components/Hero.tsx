import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import { siteConfig } from '../config/site-config';
import { useParallax } from '../hooks/useScrollAnimation';

export function Hero() {
  const parallaxOffset = useParallax(0.3);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src={siteConfig.images.hero}
          alt="Deej Gala"
          className="w-full h-full object-cover object-center scale-110"
        />
        {/* Gradient Overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(10,10,15,0.5) 0%, rgba(10,10,15,0.3) 50%, rgba(10,10,15,1) 100%)'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(10,10,15,0.7) 0%, transparent 50%, rgba(10,10,15,0.7) 100%)'
          }}
        />
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 245, 255, 0.03) 2px,
              rgba(0, 245, 255, 0.03) 4px
            )`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-8 max-w-4xl mx-auto">
        {/* Artist Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl tracking-wider mb-6">
            <span className="neon-text-cyan">DEEJ</span>
            <br />
            <span className="neon-text-magenta">GALA</span>
          </h1>
        </motion.div>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-base md:text-lg tracking-[0.3em] uppercase mb-4"
        >
          {siteConfig.artist.role}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white text-lg md:text-xl max-w-xl mx-auto" style={{ marginBottom: '4rem' }}
        >
          {siteConfig.artist.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={siteConfig.social.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Play className="w-5 h-5" fill="currentColor" />
            Listen on Spotify
          </a>
          <a href="#music" className="btn-secondary">
            Explore Music
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: '#00f5ff',
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import { siteConfig } from '../config/site-config';
import { useParallax } from '../hooks/useScrollAnimation';
import { useMemo } from 'react';

export function Hero() {
  const parallaxOffset = useParallax(0.3);

  // Different parallax speeds for layered depth effect
  const parallaxSlow = useParallax(0.08);    // Distant particles - barely move
  const parallaxMedium = useParallax(0.15);  // Mid-distance
  const parallaxReverse = useParallax(-0.05); // Push-pull effect - moves opposite

  // Generate stable particle configs once
  const particles = useMemo(() => {
    return [...Array(25)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2.5,
      layer: i % 3, // 0 = slow/far, 1 = medium, 2 = reverse/close
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 5,
      driftX: (Math.random() - 0.5) * 40,
      driftY: -30 - Math.random() * 50,
      color: i % 4 === 0 ? '#ff00ff' : '#00f5ff',
    }));
  }, []);

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
          className="text-gray-400 text-xs md:text-lg tracking-[0.15em] md:tracking-[0.3em] uppercase mb-4"
        >
          {siteConfig.artist.role}
        </motion.p>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-md md:max-w-xl mx-auto px-4" style={{ marginBottom: '4rem' }}
        >
          <p className="text-white text-base md:text-xl">
            Welcome to the music of Deej Gala.
          </p>
          <p className="text-white text-base md:text-xl mt-1">
            Cheers ✌️🌎
          </p>
        </motion.div>

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

      {/* Floating Particles - Multi-layer parallax for depth */}
      {/* Layer 0: Slow/Distant - barely moves, feels far away */}
      <div
        className="absolute inset-0 z-5 pointer-events-none overflow-hidden"
        style={{ transform: `translateY(${parallaxSlow}px)` }}
      >
        {particles.filter(p => p.layer === 0).map((p) => (
          <motion.div
            key={`slow-${p.id}`}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size * 0.7,
              height: p.size * 0.7,
              backgroundColor: p.color,
              opacity: 0.3,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}40`,
            }}
            animate={{
              y: [0, p.driftY * 0.5, p.driftY * 0.3, p.driftY * 0.7, 0],
              x: [0, p.driftX * 0.3, p.driftX * 0.5, p.driftX * 0.2, 0],
              opacity: [0.2, 0.4, 0.3, 0.5, 0.2],
              scale: [1, 1.1, 0.95, 1.15, 1],
            }}
            transition={{
              duration: p.duration * 1.5,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Layer 1: Medium - moves with background */}
      <div
        className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
        style={{ transform: `translateY(${parallaxMedium}px)` }}
      >
        {particles.filter(p => p.layer === 1).map((p) => (
          <motion.div
            key={`med-${p.id}`}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 4}px ${p.color}60`,
            }}
            animate={{
              y: [0, p.driftY, p.driftY * 0.5, p.driftY * 0.8, 0],
              x: [0, p.driftX * 0.5, p.driftX, p.driftX * 0.3, 0],
              opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
              scale: [1, 1.2, 0.9, 1.3, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Layer 2: Reverse/Close - moves opposite direction, feels close */}
      <div
        className="absolute inset-0 z-15 pointer-events-none overflow-hidden"
        style={{ transform: `translateY(${parallaxReverse}px)` }}
      >
        {particles.filter(p => p.layer === 2).map((p) => (
          <motion.div
            key={`close-${p.id}`}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size * 1.3,
              height: p.size * 1.3,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 6}px ${p.color}80`,
            }}
            animate={{
              y: [0, p.driftY * 0.7, p.driftY * 0.4, p.driftY, 0],
              x: [0, p.driftX, p.driftX * 0.6, p.driftX * 0.8, 0],
              opacity: [0.4, 0.7, 0.5, 0.8, 0.4],
              scale: [1, 1.3, 1.1, 1.4, 1],
            }}
            transition={{
              duration: p.duration * 0.8,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}

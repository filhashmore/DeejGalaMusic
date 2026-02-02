import { motion } from 'framer-motion';
import { Music, Mic2, Headphones } from 'lucide-react';
import { siteConfig } from '../config/site-config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  { icon: Mic2, label: 'Singer', color: '#00f5ff', bgColor: 'rgba(0, 245, 255, 0.1)' },
  { icon: Music, label: 'Songwriter', color: '#ff00ff', bgColor: 'rgba(255, 0, 255, 0.1)' },
  { icon: Headphones, label: 'Producer', color: '#9d4edd', bgColor: 'rgba(157, 78, 221, 0.1)' },
];

export function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary), var(--bg-primary))'
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="gallery-image">
              <img
                src={siteConfig.images.about}
                alt="Deej Gala"
                className="w-full h-auto"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,245,255,0.1) 0%, transparent 50%, rgba(255,0,255,0.1) 100%)'
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=""
          >
            {/* Section Label */}
            <span className="section-label block" style={{ color: 'var(--neon-cyan)' }}>
              About
            </span>

            {/* Heading */}
            <h2 className="section-title mb-6">
              The Story Behind
              <br />
              <span className="text-gradient">The Sound</span>
            </h2>

            {/* Bio */}
            <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-line">
              {siteConfig.artist.bio}
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-4" style={{ marginTop: '1.5rem' }}>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center rounded-xl"
                  style={{
                    padding: '0.75rem 1.25rem',
                    gap: '0.75rem',
                    background: `linear-gradient(135deg, ${feature.bgColor} 0%, rgba(255,255,255,0.02) 100%)`,
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: `1px solid ${feature.color}50`,
                    boxShadow: `0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)`,
                  }}
                >
                  <feature.icon
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: feature.color }}
                  />
                  <span className="text-white font-medium text-sm">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

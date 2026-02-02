import { motion } from 'framer-motion';
import { Music, Mic2, Headphones } from 'lucide-react';
import { siteConfig } from '../config/site-config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  { icon: Mic2, label: 'Singer', color: 'neon-cyan' },
  { icon: Music, label: 'Songwriter', color: 'neon-magenta' },
  { icon: Headphones, label: 'Producer', color: 'neon-purple' },
];

export function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={siteConfig.images.about}
                alt="Deej Gala"
                className="w-full h-auto rounded-lg"
              />
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/20 via-transparent to-neon-magenta/20 pointer-events-none" />
            </div>
            {/* Decorative Border */}
            <div className="absolute -inset-2 border border-neon-cyan/30 rounded-lg -z-10" />
            <div className="absolute -inset-4 border border-neon-magenta/20 rounded-lg -z-20" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Section Label */}
            <span className="text-neon-cyan text-sm tracking-[0.3em] uppercase mb-4 block">
              About
            </span>

            {/* Heading */}
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              The Story Behind
              <br />
              <span className="text-gradient">The Sound</span>
            </h2>

            {/* Bio */}
            <p className="text-text-secondary text-lg leading-relaxed mb-8 whitespace-pre-line">
              {siteConfig.artist.bio}
            </p>

            {/* Feature Icons */}
            <div className="flex flex-wrap gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 glass px-4 py-3 rounded-lg"
                >
                  <feature.icon
                    className={`w-5 h-5 text-${feature.color}`}
                    style={{
                      color:
                        feature.color === 'neon-cyan'
                          ? '#00f5ff'
                          : feature.color === 'neon-magenta'
                          ? '#ff00ff'
                          : '#9d4edd',
                    }}
                  />
                  <span className="text-text-primary text-sm">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

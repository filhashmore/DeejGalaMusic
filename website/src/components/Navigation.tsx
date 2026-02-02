import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../config/site-config';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-display font-bold text-xl tracking-wider hover:text-neon-cyan transition-colors"
          >
            <span className="neon-text">DEEJ</span>
            <span className="text-neon-magenta ml-1">GALA</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-text-secondary hover:text-neon-cyan transition-all duration-300 text-sm tracking-wide uppercase"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.social.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-neon-cyan text-neon-cyan rounded hover:bg-neon-cyan hover:text-background transition-all duration-300 text-sm tracking-wide uppercase neon-border"
            >
              Listen Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-primary hover:text-neon-cyan transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {siteConfig.navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl font-display tracking-wider hover:text-neon-cyan transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={siteConfig.social.spotify}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 px-8 py-3 border border-neon-cyan text-neon-cyan rounded hover:bg-neon-cyan hover:text-background transition-all duration-300 tracking-wide uppercase neon-border"
              >
                Listen on Spotify
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

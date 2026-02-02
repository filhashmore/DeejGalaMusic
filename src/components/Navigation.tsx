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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled ? 'nav-glass py-4' : 'py-6'
        }`}
        style={{
          paddingTop: 'env(safe-area-inset-top, 0px)',
          borderBottom: '1px solid transparent',
          background: isScrolled ? undefined : 'transparent',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between" style={{ padding: '0 0.25rem' }}>
          {/* Logo */}
          <a href="#home" className="font-display font-bold text-xl tracking-wider">
            <span className="neon-text-cyan">DEEJ</span>
            <span className="neon-text-magenta ml-1">GALA</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.social.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                padding: '0.625rem 1.25rem',
                color: 'var(--neon-cyan)',
                background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.15) 0%, rgba(0, 245, 255, 0.05) 50%, rgba(0, 245, 255, 0.1) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(0, 245, 255, 0.3)',
                boxShadow: '0 4px 16px rgba(0, 245, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 245, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 245, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(0, 245, 255, 0.3)';
              }}
            >
              Listen Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-cyan-400 transition-all duration-300 rounded-xl"
            style={{
              padding: '0.5rem',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.08) 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 pt-20 px-6 md:hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(10, 10, 15, 0.85) 0%, rgba(15, 15, 25, 0.9) 50%, rgba(10, 10, 15, 0.95) 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            {/* Decorative glow */}
            <div
              className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(0, 245, 255, 0.08) 0%, transparent 70%)',
              }}
            />
            <div
              className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255, 0, 255, 0.06) 0%, transparent 70%)',
              }}
            />

            <div className="relative flex flex-col items-center gap-6 mt-4">
              {siteConfig.navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                  className="text-xl font-display tracking-wider text-white transition-all duration-300"
                  style={{
                    padding: '0.75rem 2rem',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                    minWidth: '200px',
                    textAlign: 'center',
                  }}
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
                className="btn-primary mt-4"
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

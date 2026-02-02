import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-8 border-t border-text-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-display font-bold text-lg tracking-wider">
            <span className="neon-text">DEEJ</span>
            <span className="text-neon-magenta ml-1">GALA</span>
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-text-secondary text-sm flex items-center gap-2"
          >
            © {new Date().getFullYear()} Deej Gala. Made with{' '}
            <Heart className="w-4 h-4 text-neon-magenta fill-neon-magenta" /> and good vibes.
          </motion.p>

          {/* Back to Top */}
          <a
            href="#home"
            className="text-text-secondary hover:text-neon-cyan text-sm transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

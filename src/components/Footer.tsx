import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer
      className="relative py-8"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-display font-bold text-lg tracking-wider">
            <span className="neon-text-cyan">DEEJ</span>
            <span className="neon-text-magenta ml-1">GALA</span>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} Deej Gala. Made with{' '}
            <Heart className="w-4 h-4" style={{ color: 'var(--neon-magenta)' }} fill="var(--neon-magenta)" />
            {' '}and good vibes.
          </p>

          {/* Back to Top */}
          <a
            href="#home"
            className="text-gray-500 hover:text-cyan-400 text-sm transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

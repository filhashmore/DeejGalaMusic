import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { siteConfig } from '../config/site-config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Gallery() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '8rem' }}>
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary), var(--bg-primary))'
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center" style={{ marginBottom: '4rem' }}
        >
          <span className="section-label block" style={{ color: 'var(--neon-purple)' }}>
            Visuals
          </span>
          <h2 className="section-title mb-4">
            The <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A visual journey through the world of Deej Gala.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {siteConfig.images.gallery.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="gallery-image group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[4/5]">
                <img
                  src={image}
                  alt={`Deej Gala visual ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,10,15,0.9) 0%, rgba(10,10,15,0.3) 50%, transparent 100%)'
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm"
                    style={{
                      backgroundColor: 'rgba(0, 245, 255, 0.2)',
                      border: '1px solid rgba(0, 245, 255, 0.5)'
                    }}
                  >
                    <ZoomIn className="w-6 h-6" style={{ color: 'var(--neon-cyan)' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{
              backgroundColor: 'rgba(10, 10, 15, 0.95)',
              backdropFilter: 'blur(16px)'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={selectedImage}
              alt="Gallery full view"
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

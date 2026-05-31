import { motion } from 'motion/react';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518310383802-640c2de31649?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599058917212-9d7eca343c4a?q=80&w=1000&auto=format&fit=crop',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            GYM <span className="text-gold-500">GALLERY</span>
          </motion.h2>
          <p className="text-slate-400">Step inside the premium environment of Royal GYM.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="relative aspect-square overflow-hidden group cursor-pointer rounded-xl md:rounded-2xl"
              onClick={() => setSelectedImage(src)}
            >
              <div className="absolute inset-0 bg-gold-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <ZoomIn className="text-white w-8 h-8" />
              </div>
              <img 
                src={src} 
                alt="Gym Gallery" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 sepia-[.3] group-hover:sepia-0"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm">
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img src={selectedImage} alt="Focused Gym" className="max-w-full max-h-[90vh] object-contain rounded-xl" />
        </div>
      )}
    </section>
  );
}

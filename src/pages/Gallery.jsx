import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import GalleryHero from '../components/gallery/GalleryHero';
import AppRoutes from '../routes/AppRoutes';
import { useSeo } from '../seo/useSeo';

const categories = ['All', 'Rooms', 'Exterior', 'Dining', 'Pool'];

const galleryImages = [
  {
    category: 'Exterior',
    src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670&auto=format&fit=crop',
    alt: 'Resort Aerial View',
  },
  {
    category: 'Pool',
    src: 'https://images.unsplash.com/photo-1571896349842-6e5a51335022?q=80&w=2670&auto=format&fit=crop',
    alt: 'Infinity Pool',
  },
  {
    category: 'Rooms',
    src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2670&auto=format&fit=crop',
    alt: 'Luxury Suite',
  },
  {
    category: 'Dining',
    src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop',
    alt: 'Cocktails by the Beach',
  },
  {
    category: 'Exterior',
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574&auto=format&fit=crop',
    alt: 'Garden Villa Exterior',
  },
  {
    category: 'Rooms',
    src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2574&auto=format&fit=crop',
    alt: 'Overwater Bungalow',
  },
  {
    category: 'Pool',
    src: 'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=2727&auto=format&fit=crop',
    alt: 'Poolside Lounge',
  },
  {
    category: 'Dining',
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop',
    alt: 'Fine Dining Setup',
  },
  {
    category: 'Rooms',
    src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2670&auto=format&fit=crop',
    alt: 'Family Suite',
  },
];

const Gallery = () => {
  useSeo({
    title: 'Photo Gallery | BlueCove Resort',
    description:
      'View photos of our beautiful resort, amenities, and ocean views.',
  });

  const [filter, setFilter] = useState('All');

  const filteredImages =
    filter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-50"
    >
      <GalleryHero />
      <Section className="py-20">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all ${
                filter === cat
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-white text-slate-600 hover:bg-cyan-50 hover:text-cyan-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((img, index) => (
            <motion.div
              layout
              key={img.src} // better key if unique
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-light tracking-wider">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </motion.div>
  );
};

export default Gallery;

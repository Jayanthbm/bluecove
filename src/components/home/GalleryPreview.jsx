import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

import { galleryImages as images } from '../../data/gallery';

const GalleryPreview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Limit to first 6 images for preview
  const previewImages = images.slice(0, 6);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % previewImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section className="bg-slate-50">
      <SectionTitle title="Moments of Bliss" subtitle="Our Gallery" />

      {/* Mobile Slideshow */}
      <div className="md:hidden relative h-64 mb-12 overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={previewImages[currentSlide].src}
            alt={previewImages[currentSlide].alt}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {previewImages.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors ${idx === currentSlide ? 'bg-white' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 md:h-[500px]">
        {previewImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-xl cursor-pointer group ${
              index === 0
                ? 'md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2'
                : index === 1
                  ? 'md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-2'
                  : 'md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1'
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button to="/gallery" variant="outline-blue">
          View Full Gallery
        </Button>
      </div>
    </Section>
  );
};

export default GalleryPreview;

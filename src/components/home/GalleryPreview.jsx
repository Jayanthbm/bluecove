import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2574&auto=format&fit=crop', // Maldives water
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop', // Massage
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2670&auto=format&fit=crop', // Resort view
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop', // Drink
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2525&auto=format&fit=crop', // Interior
  'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2670&auto=format&fit=crop', // Pool
];

const GalleryPreview = () => {
  return (
    <Section className="bg-slate-50">
      <SectionTitle title="Moments of Bliss" subtitle="Our Gallery" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 h-96 md:h-[500px]">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-xl cursor-pointer group ${
              index === 0
                ? 'col-span-2 row-span-2 lg:col-span-2 lg:row-span-2'
                : index === 1
                  ? 'col-span-1 row-span-1 lg:col-span-2 lg:row-span-2'
                  : 'col-span-1 row-span-1 lg:col-span-1 lg:row-span-1'
            }`}
          >
            <img
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button
          to="/gallery"
          variant="outline"
          className="border-blue-600 text-blue-600 hover:bg-blue-50"
        >
          View Full Gallery
        </Button>
      </div>
    </Section>
  );
};

export default GalleryPreview;

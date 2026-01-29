import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

import { homeAmenities as amenities } from '../../data/amenities';
import { images } from '../../data/images';

const HomeAmenities = () => {
  const [currentAmenity, setCurrentAmenity] = React.useState(0);

  const nextAmenity = () => {
    setCurrentAmenity((prev) => (prev + 1) % amenities.length);
  };

  const prevAmenity = () => {
    setCurrentAmenity(
      (prev) => (prev - 1 + amenities.length) % amenities.length
    );
  };

  // Auto-slide
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextAmenity();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentAmenity]);

  return (
    <Section>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Side: Content */}
        <div className="w-full space-y-8">
          <div>
            <SectionTitle
              title="World Class Amenities"
              subtitle="Curated Experiences"
              center={false}
              className="mb-4"
            />
          </div>

          <div className="relative">
            <div className="overflow-hidden min-h-[200px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAmenity}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="space-y-4"
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-6xl font-serif text-cyan-100 font-bold opacity-80 select-none">
                      {String(currentAmenity + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-serif text-slate-900 leading-tight">
                      {amenities[currentAmenity].title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                    {amenities[currentAmenity].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-slate-100 mt-8 mb-8 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-cyan-500"
                initial={{ width: 0 }}
                animate={{
                  width: `${((currentAmenity + 1) / amenities.length) * 100}%`,
                }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Navigation & CTA */}
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={prevAmenity}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300 group"
                  aria-label="Previous amenity"
                >
                  <ChevronLeft
                    size={22}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                </button>
                <button
                  onClick={nextAmenity}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300 group"
                  aria-label="Next amenity"
                >
                  <ChevronRight
                    size={22}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              <Button
                to="/amenities"
                variant="link"
                className="text-cyan-600 font-medium hover:text-cyan-700"
              >
                View All Amenities
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side: Dynamic Image */}
        <div className="hidden lg:block w-full lg:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentAmenity}
              src={amenities[currentAmenity].image}
              alt={amenities[currentAmenity].title}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          {/* Subtle gradient overlay for better text contrast/depth if needed, or clear for vibrancy */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Remove bottom button since I moved it to the controls area for a cleaner layout */}
    </Section>
  );
};

export default HomeAmenities;

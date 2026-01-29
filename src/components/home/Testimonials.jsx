import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { testimonials, SHOW_TESTIMONIALS } from '../../data/testimonials';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(1);
  const [isHovered, setIsHovered] = React.useState(false);

  // Responsive items per page
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide
  React.useEffect(() => {
    if (isHovered || testimonials.length <= itemsPerPage) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered, itemsPerPage]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleReviews = getVisibleReviews();
  const shouldShowSlider =
    testimonials.length > itemsPerPage || itemsPerPage === 1;

  if (!SHOW_TESTIMONIALS) return null;

  return (
    <Section className="bg-slate-50 relative overflow-hidden">
      {/* Decorative blobs - Keeping Cyan/Teal for Ocean vibe background, but maybe warmer accents? Let's mix. */}
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-amber-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-cyan-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative z-10">
        <SectionTitle title="Guest Reviews" subtitle="What People Say" center />

        <div
          className="relative px-4 md:px-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          {shouldShowSlider && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-slate-400 hover:text-amber-600 transition-colors bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-100 hidden md:block"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-slate-400 hover:text-amber-600 transition-colors bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-100 hidden md:block"
                aria-label="Next review"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Mobile Nav overlay */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-md text-slate-600 md:hidden"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-md text-slate-600 md:hidden"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`}
          >
            <AnimatePresence mode="popLayout">
              {visibleReviews.map((review) => (
                <motion.div
                  layout
                  key={review.id}
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 relative group h-full flex flex-col"
                >
                  <div className="absolute top-6 right-6 text-amber-100 group-hover:text-amber-500 transition-colors duration-300">
                    <Quote size={40} className="fill-current opacity-20" />
                  </div>

                  <div className="flex gap-1 mb-4 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed relative z-10 flex-grow">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-slate-50 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {review.name}
                      </h4>
                      <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">
                        {review.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;

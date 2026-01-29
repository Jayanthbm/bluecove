import React, { useState } from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import {
  ArrowRight,
  User,
  Maximize,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { rooms as allRooms } from '../../data/rooms';

const rooms = allRooms.filter((room) => room.isFeatured);

const GalleryModal = ({ room, onClose }) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-white z-[110]"
      >
        <X size={32} />
      </button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full max-w-5xl h-[80vh] overflow-y-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {room.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${room.title} view ${idx + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const FeaturedRooms = () => {
  const [galleryRoom, setGalleryRoom] = useState(null);

  /* Slider Logic */
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(1);

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

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide
  React.useEffect(() => {
    if (isHovered || rooms.length <= itemsPerPage) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered, itemsPerPage]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % rooms.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  // Get visible rooms with circular loop
  const getVisibleRooms = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % rooms.length;
      visible.push(rooms[index]);
    }
    return visible;
  };

  const visibleRooms = getVisibleRooms();
  const shouldShowSlider = rooms.length > itemsPerPage || itemsPerPage === 1;

  // Grid columns class based on itemsPerPage
  const getGridClass = () => {
    if (itemsPerPage === 1) return 'grid-cols-1';
    if (itemsPerPage === 2) return 'grid-cols-1 sm:grid-cols-2';
    return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
  };

  return (
    <Section className="bg-slate-50">
      <SectionTitle
        title="Luxury Accommodations"
        subtitle="Your Private Sanctuary"
      />

      <div
        className="relative px-4 md:px-12 mb-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Buttons - Show only if needed */}
        {shouldShowSlider && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-slate-400 hover:text-cyan-600 transition-colors bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-100 hidden md:block"
              aria-label="Previous room"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-slate-400 hover:text-cyan-600 transition-colors bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-100 hidden md:block"
              aria-label="Next room"
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

        {/* Room Grid / Slider Track */}
        <div className={`grid ${getGridClass()} gap-8`}>
          <AnimatePresence mode="popLayout">
            {visibleRooms.map((room) => (
              <motion.div
                layout
                key={room.id}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <Card
                  images={room.images}
                  title={room.title}
                  description={room.description}
                  onFullScreen={() => setGalleryRoom(room)}
                  footer={
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-center text-slate-500 text-sm">
                        <div className="flex items-center gap-2">
                          <Maximize className="w-4 h-4" />
                          <span>{room.size}</span>
                        </div>
                        <div
                          className="flex items-center gap-2"
                          title="Guest Capacity"
                        >
                          <User className="w-4 h-4" />
                          <span>
                            {room.adults} Adults
                            {room.children > 0 && `, ${room.children} Children`}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-slate-700 font-bold text-lg">
                          {room.price}
                        </span>
                        <Button
                          to="/rooms"
                          variant="link"
                          className="text-cyan-500 text-sm font-medium hover:underline flex items-center gap-1 p-0"
                        >
                          Details <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="text-center">
        <Button to="/rooms" variant="outline-blue" className="">
          View All Rooms
        </Button>
      </div>

      <AnimatePresence>
        {galleryRoom && (
          <GalleryModal
            room={galleryRoom}
            onClose={() => setGalleryRoom(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
};

export default FeaturedRooms;

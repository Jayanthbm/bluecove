import React, { useState } from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { ArrowRight, User, Maximize, X } from 'lucide-react';
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

  return (
    <Section className="bg-slate-50">
      <SectionTitle
        title="Luxury Accommodations"
        subtitle="Your Private Sanctuary"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    <span className="text-blue-600 font-bold text-lg">
                      {room.price}
                    </span>
                    <Button
                      to="/rooms"
                      variant="link"
                      className="text-blue-500 text-sm font-medium hover:underline flex items-center gap-1 p-0"
                    >
                      Details <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              }
            />
          </motion.div>
        ))}
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

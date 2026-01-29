import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RoomsHero from '../components/rooms/RoomsHero';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useSeo } from '../seo/useSeo';
import {
  ArrowRight,
  User,
  Maximize,
  Wifi,
  Coffee,
  Sun,
  X,
  Phone,
  MessageCircle,
  Image as ImageIcon,
} from 'lucide-react';

import { rooms as allRooms } from '../data/rooms';
import { COMMON_DATA } from '../data/common';

const BookingModal = ({ room, onClose }) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-900"
        >
          <X size={24} />
        </button>
        <h3 className="text-2xl font-serif text-slate-900 mb-2">
          Book Your Stay
        </h3>
        <p className="text-slate-500 mb-6">
          Selected Room:{' '}
          <span className="font-semibold text-slate-800">{room.title}</span>
        </p>

        <div className="space-y-4">
          <a
            href={`tel:${COMMON_DATA.mobile[0].replace(/\s+/g, '')}`}
            className="flex items-center justify-center gap-3 w-full py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
          >
            <Phone size={20} /> Call for Reservation
          </a>
          <a
            href={`https://wa.me/${COMMON_DATA.whatsapp.replace(/\+/g, '').replace(/\s+/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
          >
            <MessageCircle size={20} /> Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
};

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

const Rooms = () => {
  useSeo({
    title: 'Luxury Rooms & Suites | Shivani Sunset Bay Beach Resort',
    description:
      'Explore our luxurious rooms and suites with breathtaking ocean views.',
  });

  const [bookingRoom, setBookingRoom] = useState(null);
  const [galleryRoom, setGalleryRoom] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <RoomsHero />
      <Section>
        <SectionTitle
          title="Our Accommodations"
          subtitle="Find Your Perfect Stay"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
                      <div
                        className="flex items-center gap-2"
                        title="Room Size"
                      >
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
                    {/* Amenities Icons with Group Tooltip */}
                    <div className="flex gap-3 text-slate-400">
                      {room.amenities.map((Icon, idx) => (
                        <div key={idx} className="relative group/tooltip">
                          <Icon
                            size={16}
                            className="hover:text-amber-500 transition-colors cursor-help"
                          />
                          {/* Simple Tooltip */}
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-slate-800 rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {Icon.displayName || 'Amenity'}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-2 pt-4 border-t border-slate-100">
                      <span className="text-slate-700 font-bold text-xl">
                        {room.price}
                      </span>

                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => setBookingRoom(room)}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {bookingRoom && (
          <BookingModal
            room={bookingRoom}
            onClose={() => setBookingRoom(null)}
          />
        )}
        {galleryRoom && (
          <GalleryModal
            room={galleryRoom}
            onClose={() => setGalleryRoom(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Rooms;

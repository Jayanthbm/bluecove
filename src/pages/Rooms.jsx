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

const allRooms = [
  {
    id: 1,
    title: 'Ocean View Suite',
    description:
      'Wake up to the sound of waves in our premium ocean view suites with private balcony. Featuring a king-size bed and a spacious living area.',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2670&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2525&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574&auto=format&fit=crop',
    ],
    price: '$450 / night',
    size: '65m²',
    guests: '2 Adults',
    amenities: [Wifi, Coffee, Sun],
  },
  {
    id: 2,
    title: 'Garden Villa',
    description:
      'Surrounded by lush tropical gardens, offering ultimate privacy and tranquility. Includes a private patio and outdoor rain shower.',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-6e53ce41be03?q=80&w=2670&auto=format&fit=crop',
    ],
    price: '$380 / night',
    size: '80m²',
    guests: '4 Guests',
    amenities: [Wifi, Coffee],
  },
  {
    id: 3,
    title: 'Overwater Bungalow',
    description:
      'Direct ocean access from your private deck. The ultimate luxury experience with glass floor panels and infinity plunge pool.',
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2574&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=2727&auto=format&fit=crop',
    ],
    price: '$850 / night',
    size: '110m²',
    guests: '2 Adults',
    amenities: [Wifi, Coffee, Sun],
  },
  {
    id: 4,
    title: 'Family Coastal Suite',
    description:
      'Designed for families, this spacious suite offers two bedrooms, a large living area, and easy access to the kids club and main pool.',
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2670&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512918760383-568802a3c369?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2670&auto=format&fit=crop',
    ],
    price: '$550 / night',
    size: '95m²',
    guests: '2 Adults, 2 Kids',
    amenities: [Wifi, Sun],
  },
  {
    id: 5,
    title: 'Presidential Penthouse',
    description:
      'Top-floor exclusivity with panoramic ocean views, private jacuzzi, butler service, and a dedicated dining room for in-suite meals.',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop',
    ],
    price: '$1200 / night',
    size: '200m²',
    guests: '4 Adults',
    amenities: [Wifi, Coffee, Sun],
  },
];

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
            href="tel:+919876543210"
            className="flex items-center justify-center gap-3 w-full py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
          >
            <Phone size={20} /> Call for Reservation
          </a>
          <a
            href="https://wa.me/919876543210"
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
    title: 'Luxury Rooms & Suites | BlueCove Resort',
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
            >
              <Card
                image={room.image}
                title={room.title}
                description={room.description}
                footer={
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center text-slate-500 text-sm">
                      <div className="flex items-center gap-2">
                        <Maximize className="w-4 h-4" />
                        <span>{room.size}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{room.guests}</span>
                      </div>
                    </div>
                    {/* Amenities Icons */}
                    <div className="flex gap-3 text-slate-400">
                      {room.amenities.map((Icon, idx) => (
                        <Icon key={idx} size={16} />
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-2 pt-4 border-t border-slate-100">
                      <div className="flex flex-col">
                        <span className="text-blue-600 font-bold text-xl">
                          {room.price}
                        </span>
                        <button
                          onClick={() => setGalleryRoom(room)}
                          className="text-slate-400 text-xs hover:text-blue-500 flex items-center gap-1 mt-1 transition-colors"
                        >
                          <ImageIcon size={12} /> View Photos
                        </button>
                      </div>

                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => setBookingRoom(room)}
                        // to="/contact" // Replaced by modal logic
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

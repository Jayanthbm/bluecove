import React from 'react';
import { motion } from 'framer-motion';
import RoomsHero from '../components/rooms/RoomsHero';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useSeo } from '../seo/useSeo';
import { ArrowRight, User, Maximize, Wifi, Coffee, Sun } from 'lucide-react';

const allRooms = [
  {
    id: 1,
    title: 'Ocean View Suite',
    description:
      'Wake up to the sound of waves in our premium ocean view suites with private balcony. Featuring a king-size bed and a spacious living area.',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2670&auto=format&fit=crop',
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
    price: '$1200 / night',
    size: '200m²',
    guests: '4 Adults',
    amenities: [Wifi, Coffee, Sun],
  },
];

const Rooms = () => {
  useSeo({
    title: 'Luxury Rooms & Suites | BlueCove Resort',
    description:
      'Explore our luxurious rooms and suites with breathtaking ocean views.',
  });

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
                      <span className="text-blue-600 font-bold text-xl">
                        {room.price}
                      </span>
                      <Button variant="primary" size="sm" to="/contact">
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
    </motion.div>
  );
};

export default Rooms;

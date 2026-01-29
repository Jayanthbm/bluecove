import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { ArrowRight, User, Maximize } from 'lucide-react';
import { motion } from 'framer-motion';

const rooms = [
  {
    id: 1,
    title: 'Ocean View Suite',
    description:
      'Wake up to the sound of waves in our premium ocean view suites with private balcony.',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2670&auto=format&fit=crop',
    price: '$450 / night',
    size: '65m²',
    guests: '2 Adults',
  },
  {
    id: 2,
    title: 'Garden Villa',
    description:
      'Surrounded by lush tropical gardens, offering ultimate privacy and tranquility.',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574&auto=format&fit=crop',
    price: '$380 / night',
    size: '80m²',
    guests: '4 Guests',
  },
  {
    id: 3,
    title: 'Overwater Bungalow',
    description:
      'Direct ocean access from your private deck. The ultimate luxury experience.',
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2574&auto=format&fit=crop',
    price: '$850 / night',
    size: '110m²',
    guests: '2 Adults',
  },
];

const FeaturedRooms = () => {
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
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-blue-600 font-bold text-lg">
                      {room.price}
                    </span>
                    <span className="text-blue-500 text-sm font-medium hover:underline flex items-center gap-1 cursor-pointer">
                      Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              }
            />
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button
          to="/rooms"
          variant="outline"
          className="border-blue-600 text-blue-600 hover:bg-blue-50"
        >
          View All Rooms
        </Button>
      </div>
    </Section>
  );
};

export default FeaturedRooms;

import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { Wifi, Coffee, MapPin, Sun, Waves, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

const amenities = [
  {
    icon: Waves,
    title: 'Private Beach',
    description: 'Exclusive access to pristine white sand beaches.',
  },
  {
    icon: Utensils,
    title: 'Fine Dining',
    description: 'Experience world-class culinary delights.',
  },
  {
    icon: Sun,
    title: 'Infinity Pool',
    description: 'Relax in our climate-controlled outdoor pools.',
  },
  {
    icon: Coffee,
    title: 'Luxury Spa',
    description: 'Rejuvenate with our premium spa treatments.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Wifi',
    description: 'Stay connected with complimentary high-speed internet.',
  },
  {
    icon: MapPin,
    title: 'Island Tours',
    description: 'Explore the local beauty with guided tours.',
  },
];

const HomeAmenities = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <div>
          <SectionTitle
            title="World Class Amenities"
            subtitle="Everything You Need"
            center={false}
          />
          <p className="text-slate-600 mb-8 leading-relaxed">
            At BlueCove, we believe that true luxury lies in the details. From
            our attentive service to our state-of-the-art facilities, everything
            is designed to provide you with an unforgettable experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {amenities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Image Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4 pt-12"
            >
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop"
                alt="Spa"
                className="rounded-2xl shadow-lg object-cover h-64 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1571896349842-6e5a51335022?q=80&w=2670&auto=format&fit=crop"
                alt="Room"
                className="rounded-2xl shadow-lg object-cover h-48 w-full"
              />
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop"
                alt="Cocktail"
                className="rounded-2xl shadow-lg object-cover h-48 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=2727&auto=format&fit=crop"
                alt="Pool"
                className="rounded-2xl shadow-lg object-cover h-64 w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeAmenities;

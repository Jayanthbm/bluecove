import React from 'react';
import { motion } from 'framer-motion';
import AmenitiesHero from '../components/amenities/AmenitiesHero';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { useSeo } from '../seo/useSeo';
import {
  Utensils,
  Sun,
  Coffee,
  Waves,
  Wifi,
  MapPin,
  Trees,
  Dumbbell,
} from 'lucide-react';

import {
  amenitiesPageData as amenitiesDetails,
  amenitiesFeatures as features,
} from '../data/amenities';

const Amenities = () => {
  useSeo({
    title: 'Amenities | BlueCove Resort',
    description:
      'Discover our world-class amenities including spa, pool, and dining.',
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AmenitiesHero />

      {/* Main Amenities Sections */}
      <div className="bg-slate-50 py-10">
        <Section className="py-20">
          <SectionTitle
            title="Experience Luxury"
            subtitle="Curated For You"
            className="mb-20"
          />

          <div className="space-y-24">
            {amenitiesDetails.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  item.reverse ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 bg-cyan-900/10 group-hover:bg-transparent transition-all duration-500 z-10" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 mb-4">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-3xl font-serif text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {item.description}
                  </p>
                  <Button variant="outline" to="/contact" size="sm">
                    Inquire More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* Additional Features Grid */}
      <Section bgColor="bg-cyan-900" className="text-white py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">More to Enjoy</h2>
          <p className="text-white/90 text-lg">
            Every detail handled with care for your seamless stay.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center gap-4 p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
            >
              <feature.icon className="w-10 h-10 text-white" />
              <span className="font-medium tracking-wide text-white">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Section>
    </motion.div>
  );
};

export default Amenities;

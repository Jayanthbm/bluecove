import React from 'react';
import { motion } from 'framer-motion';
import HomeHero from '../components/home/HomeHero';
import FeaturedRooms from '../components/home/FeaturedRooms';
import HomeAmenities from '../components/home/HomeAmenities';
import GalleryPreview from '../components/home/GalleryPreview';
import Testimonials from '../components/home/Testimonials';
import CtaSection from '../components/home/CtaSection';
import { useSeo } from '../seo/useSeo';

const Home = () => {
  useSeo({
    title: 'Shivani Sunset Bay Beach Resort | Luxury Oceanfront Getaway',
    description:
      'Experience the ultimate luxury at Shivani Sunset Bay Beach Resort. Sea facing rooms, private beaches, and world class amenities.',
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HomeHero />
      <FeaturedRooms />
      <HomeAmenities />
      <GalleryPreview />
      <Testimonials />
      <CtaSection />
    </motion.div>
  );
};

export default Home;

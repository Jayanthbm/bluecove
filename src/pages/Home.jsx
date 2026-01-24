import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedRooms from '../components/home/FeaturedRooms';
import HomeAmenities from '../components/home/HomeAmenities';
import GalleryPreview from '../components/home/GalleryPreview';
import Testimonials from '../components/home/Testimonials';
import CtaSection from '../components/home/CtaSection';
import { useSeo } from '../seo/useSeo';

const Home = () => {
  useSeo({
    title: 'BlueCove Resort | Luxury Oceanfront Getaway',
    description:
      'Experience the ultimate luxury at BlueCove Resort. Sea facing rooms, private beaches, and world class amenities.',
  });

  return (
    <div>
      <Hero />
      <FeaturedRooms />
      <HomeAmenities />
      <GalleryPreview />
      <Testimonials />
      <CtaSection />
    </div>
  );
};

export default Home;

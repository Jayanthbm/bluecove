import React from 'react';
import Hero from '../common/Hero';

import { images } from '../../data/images';

const GalleryHero = () => {
  return (
    <Hero
      imageSrc={images.heros.gallery}
      title="Visual Journey"
      subtitle="Gallery"
      height="h-[60vh] min-h-[500px]"
    >
      <p className="text-white/90 text-base mb-6 font-light max-w-xl mx-auto">
        Explore the visual tapestry of Shivani Sunset Bay Beach Resort. From
        sun-drenched beaches to elegant interiors, let the images speak for
        themselves.
      </p>
    </Hero>
  );
};

export default GalleryHero;

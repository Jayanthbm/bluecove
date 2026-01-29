import React from 'react';
import Hero from '../common/Hero';

import { images } from '../../data/images';

const AmenitiesHero = () => {
  return (
    <Hero
      imageSrc={images.heros.amenities}
      title="Indulge Your Senses"
      subtitle="Amenities & Experiences"
      height="h-[60vh] min-h-[500px]"
    >
      <p className="text-white/90 text-base mb-6 font-light max-w-xl mx-auto">
        From infinity pools to gourmet dining, every detail is curated for your
        relaxation and delight.
      </p>
    </Hero>
  );
};

export default AmenitiesHero;

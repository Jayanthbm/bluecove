import React from 'react';
import Hero from '../common/Hero';

const AmenitiesHero = () => {
  return (
    <Hero
      imageSrc="https://images.unsplash.com/photo-1571896349842-6e53ce41be03?q=80&w=2670&auto=format&fit=crop"
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

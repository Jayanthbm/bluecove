import React from 'react';
import Hero from '../common/Hero';

const RoomsHero = () => {
  return (
    <Hero
      imageSrc="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574&auto=format&fit=crop"
      title="Luxury Sanctuary"
      subtitle="Accommodations"
      height="h-[60vh] min-h-[500px]"
    >
      <p className="text-white/90 text-base mb-6 font-light max-w-xl mx-auto">
        Experience unparalleled comfort in our ocean-facing suites, designed to
        bring the tranquility of the sea into your personal space.
      </p>
    </Hero>
  );
};

export default RoomsHero;

import React from 'react';
import Hero from '../common/Hero';

const GalleryHero = () => {
  return (
    <Hero
      imageSrc="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop"
      title="Visual Journey"
      subtitle="Gallery"
      height="h-[60vh] min-h-[500px]"
    >
      <p className="text-white/90 text-base mb-6 font-light max-w-xl mx-auto">
        Explore the visual tapestry of BlueCove Resort. From sun-drenched
        beaches to elegant interiors, let the images speak for themselves.
      </p>
    </Hero>
  );
};

export default GalleryHero;

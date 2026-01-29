import React from 'react';
import Hero from '../common/Hero';

const AboutHero = () => {
  return (
    <Hero
      imageSrc="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop"
      title="Our Story"
      subtitle="About BlueCove"
      height="h-[60vh] min-h-[500px]"
    >
      <p className="text-white/90 text-base mb-6 font-light max-w-xl mx-auto">
        A legacy of hospitality nestled on the pristine shores of Murudeshwara.
        Discover the heart behind the haven.
      </p>
    </Hero>
  );
};

export default AboutHero;

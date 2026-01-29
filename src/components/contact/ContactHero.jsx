import React from 'react';
import Hero from '../common/Hero';

import { images } from '../../data/images';

const ContactHero = () => {
  return (
    <Hero
      imageSrc={images.heros.contact}
      title="Get in Touch"
      subtitle="Contact Us"
      height="h-[60vh] min-h-[500px]"
    >
      <p className="text-white/90 text-base mb-6 font-light max-w-xl mx-auto">
        We are here to help you plan your perfect getaway. Reach out to us for
        reservations, special requests, or any inquiries.
      </p>
    </Hero>
  );
};

export default ContactHero;

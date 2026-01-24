import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/30 md:bg-black/20" />{' '}
        {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto mt-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block py-1 px-3 mb-6 border border-white/60 rounded-full text-white/90 text-sm tracking-[0.2em] backdrop-blur-sm"
        >
          LUXURY RESORT & SPA
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Paradise Found at <span className="text-blue-300">BlueCove</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Experience the ultimate oceanfront getaway where luxury meets nature.
          Unwind in our exclusive suites and rediscover tranquility.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button to="/rooms" variant="primary" size="lg">
            View Rooms & Suites
          </Button>
          <Button
            to="/contact"
            variant="outline"
            size="lg"
            className="backdrop-blur-sm"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
      >
        <span className="text-sm tracking-widest uppercase opacity-70">
          Scroll
        </span>
      </motion.div>
    </div>
  );
};

export default Hero;

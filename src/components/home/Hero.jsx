import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import BeachAudio from '../../assets/audio/waves.mp3';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  useEffect(() => {
    if (!audioRef.current) return;

    if (soundOn) {
      audioRef.current.volume = 0.4; // soft luxury volume
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [soundOn]);

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden"
    >
      <audio ref={audioRef} src={BeachAudio} loop preload="none" />
      {/* Background Video */}
      <motion.video
        style={{ y }}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670&auto=format&fit=crop"
        ref={videoRef}
        onTimeUpdate={() => {
          if (videoRef.current && videoRef.current.currentTime >= 15) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
          }
        }}
      >
        <source
          src="https://denissonsbeachresort.com/wp-content/uploads/2025/06/Denissons-Video.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* Overlay */}
      <div className="absolute inset-5 bg-gradient-to-b from-black/40 via-black/40 to-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block py-1 px-4 mb-6 border border-white/70 rounded-full text-white/90 text-xs tracking-[0.25em] backdrop-blur-sm"
        >
          SEAFRONT RESORT · MURUDESHWARA
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="
    text-5xl md:text-7xl
font-baskerville
    font-normal
    text-white/85
    leading-[1.08]
    tracking-tight
    mb-6
  "
          style={{
            textShadow: '0 12px 40px rgba(0,0,0,0.45)',
          }}
        >
          Where the Sea Wakes You First
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white/80 text-sm mb-10 tracking-wide"
        >
          Private Beach Access · Ocean View Suites · Spa & Coastal Dining
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            to="/about"
            variant="outline"
            size="lg"
            className="backdrop-blur-sm"
          >
            Explore the Resort
          </Button>
        </motion.div>
      </div>

      {/* Sound Toggle */}
      <button
        onClick={() => setSoundOn(!soundOn)}
        className="absolute bottom-10 right-8 z-20 text-white/80 text-sm backdrop-blur-md px-3 py-2 rounded-full border border-white/30 hover:text-white transition"
      >
        {soundOn ? '🔊 Sound On' : '🔇 Sound Off'}
      </button>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest animate-bounce"
      >
        SCROLL
      </motion.div>
    </section>
  );
};

export default Hero;

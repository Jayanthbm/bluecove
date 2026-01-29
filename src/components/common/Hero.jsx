import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = ({
  videoSrc,
  imageSrc,
  title,
  subtitle,
  children,
  height = 'h-screen',
  overlayOpacity = 0.4,
}) => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={heroRef}
      className={`relative ${height} min-h-[600px] flex items-center justify-center overflow-hidden`}
    >
      {/* Background Media */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={imageSrc}
            ref={videoRef}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <img
            src={imageSrc}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black z-0"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 px-6 max-w-5xl mx-auto text-center flex flex-col items-center"
      >
        {subtitle && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block py-1 px-4 mb-6 border border-white/60 rounded-full text-white/90 text-xs md:text-sm tracking-[0.25em] backdrop-blur-sm uppercase"
          >
            {subtitle}
          </motion.span>
        )}

        {title && (
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-tight shadow-black/50 drop-shadow-lg"
          >
            {title}
          </motion.h1>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

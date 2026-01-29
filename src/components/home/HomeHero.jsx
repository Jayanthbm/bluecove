import React, { useState, useRef, useEffect } from 'react';
import Hero from '../common/Hero';
import Button from '../ui/Button';
import videoSrc from '../../assets/videos/intro.mp4';
import audioSrc from '../../assets/audio/waves.mp3';
import { Volume2, VolumeX } from 'lucide-react';

const HomeHero = () => {
  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem('bluecove_sound') === 'muted';
  });
  const [isInView, setIsInView] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 800; // Threshold
      setIsInView(!scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    localStorage.setItem('bluecove_sound', newMuted ? 'muted' : 'on');
  };

  useEffect(() => {
    if (!audioRef.current) return;

    const shouldPlay = !isMuted && isInView;

    if (shouldPlay) {
      audioRef.current.volume = 0.4;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Audio playback failed:', error);
          // Don't auto-mute in state to strictly follow user pref, just fail gracefully
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isMuted, isInView]);

  return (
    <div className="relative">
      <Hero
        videoSrc={videoSrc}
        title="Where the Sea Wakes You First"
        subtitle="Seafront Resort · Murudeshwara"
        overlayOpacity={0.3}
      >
        <p className="text-white/90 text-sm md:text-base mb-10 tracking-wide font-light max-w-lg mx-auto">
          Private Beach Access · Ocean View Suites · Spa & Coastal Dining
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/rooms" variant="primary" size="md" className="shadow-xl">
            Check Availability
          </Button>
          <Button
            to="/about"
            variant="outline"
            size="md"
            className="backdrop-blur-sm bg-white/10 border-white/40 hover:bg-white/20"
          >
            Explore Resort
          </Button>
        </div>
      </Hero>

      {/* Audio Control */}
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />
      <button
        onClick={toggleSound}
        className="absolute bottom-24 right-6 md:bottom-10 md:right-10 z-20 flex items-center gap-2 text-white/80 text-xs font-medium tracking-widest backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 hover:text-white transition-all uppercase"
      >
        {!isMuted ? (
          <>
            <Volume2 size={14} /> Sound On
          </>
        ) : (
          <>
            <VolumeX size={14} /> Sound Off
          </>
        )}
      </button>
    </div>
  );
};

export default HomeHero;

import React from 'react';
import Button from '../ui/Button';

const CtaSection = () => {
  return (
    <section className="relative py-24 flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2664&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready for Your Dream Vacation?
        </h2>
        <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-2xl mx-auto">
          Book your stay today and experience the magic of BlueCove Resort.
        </p>
        <Button to="/rooms" variant="primary" size="lg" className="shadow-xl">
          Start Your Journey
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;

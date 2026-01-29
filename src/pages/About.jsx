import React from 'react';
import { motion } from 'framer-motion';
import AboutHero from '../components/about/AboutHero';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { useSeo } from '../seo/useSeo';

import { stats, values } from '../data/about';
import { images } from '../data/images';

const About = () => {
  useSeo({
    title: 'About Us | Shivani Sunset Bay Beach Resort',
    description:
      'Learn about the story of Shivani Sunset Bay Beach Resort and our commitment to luxury.',
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutHero />

      {/* Our Story */}
      <Section className="bg-white">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold text-amber-600 tracking-widest uppercase mb-3">
                Our Heritage
              </h2>
              <h3 className="text-4xl font-serif text-slate-900 mb-6 leading-tight">
                A Legacy of Coastal Elegance
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Founded in 2010, Shivani Sunset Bay began as a dream to create a
                sanctuary where modern luxury could coexist with the raw,
                untouched beauty of Murudeshwara’s coastline. What started as a
                small boutique inn has blossomed into the region’s premier
                luxury resort.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our philosophy is simple: to offer an escape that feels both
                grand and intimate. Every stone, every fabric, and every smile
                at Shivani Sunset Bay is curated to ensure that your stay is
                nothing short of magical.
              </p>
              <div className="h-1 w-20 bg-amber-500" />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src={images.about.heritage}
              alt="Resort Exterior"
              className="rounded-lg shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-50 z-0 rounded-lg" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-slate-100 z-0 rounded-lg" />
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 uppercase tracking-wider text-xs font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <Section className="bg-slate-50">
        <SectionTitle title="Our Philosophy" subtitle="Driven by Values" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-6">
                <item.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">
                {item.title}
              </h4>
              <p className="text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
          Ready to experience Shivani Sunset Bay?
        </h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          Join us for a stay that you will cherish forever. Whether for romance,
          relaxation, or adventure, we are here to welcome you.
        </p>
        <Button to="/rooms" size="lg" className="px-10">
          Book Your Stay Now
        </Button>
      </Section>
    </motion.div>
  );
};

export default About;

import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

import { testimonials, SHOW_TESTIMONIALS } from '../../data/testimonials';

const Testimonials = () => {
  if (!SHOW_TESTIMONIALS) return null;

  return (
    <Section className="bg-slate-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-cyan-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-teal-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative z-10">
        <SectionTitle title="Guest Reviews" subtitle="What People Say" center />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 relative group"
            >
              <div className="absolute top-6 right-6 text-cyan-100 group-hover:text-cyan-500 transition-colors duration-300">
                <Quote size={40} className="fill-current opacity-20" />
              </div>

              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-current" />
                ))}
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {review.name}
                  </h4>
                  <span className="text-xs text-slate-400 font-medium tracking-wide uppercase">
                    {review.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;

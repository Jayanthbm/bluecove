import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, center = true, className = '' }) => {
  return (
    <div
      className={`mb-12 ${center ? 'text-center' : 'text-left'} ${className}`}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-amber-600 font-medium tracking-wider uppercase text-sm block mb-3"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`h-1 w-20 bg-amber-500 rounded-full ${center ? 'mx-auto' : 'mr-auto'}`}
      />
    </div>
  );
};

export default SectionTitle;

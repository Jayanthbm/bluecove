import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  image,
  title,
  description,
  footer,
  onClick,
  className = '',
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
      onClick={onClick}
    >
      {image && (
        <div className="h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        )}
        {description && (
          <p className="text-slate-600 mb-4 leading-relaxed">{description}</p>
        )}
        {footer && (
          <div className="mt-4 pt-4 border-t border-slate-100">{footer}</div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;

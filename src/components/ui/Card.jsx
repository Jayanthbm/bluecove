import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Card = ({
  images,
  image,
  title,
  description,
  footer,
  onClick,
  onFullScreen,
  className = '',
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const descriptionRef = useRef(null);

  // Normalize images to an array
  const imageList = images && images.length > 0 ? images : image ? [image] : [];

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + imageList.length) % imageList.length
    );
  };

  useEffect(() => {
    if (descriptionRef.current) {
      // Check if scrollHeight is greater than clientHeight (implies overflow with line-clamp)
      const isOverflowing =
        descriptionRef.current.scrollHeight >
        descriptionRef.current.clientHeight;
      setShowReadMore(isOverflowing || description.length > 150); // Fallback length check just in case
    }
  }, [description]);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col ${className}`}
      onClick={onClick}
    >
      {imageList.length > 0 && (
        <div className="relative h-64 shrink-0 overflow-hidden group">
          <img
            src={imageList[currentImageIndex]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500"
          />

          {/* Navigation Arrows */}
          {imageList.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/30 hover:bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/30 hover:bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Fullscreen Icon */}
          {onFullScreen && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onFullScreen();
              }}
              className="absolute top-2 right-2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
              title="View Fullscreen"
            >
              <Maximize2 size={16} />
            </button>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        {title && (
          <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        )}
        {description && (
          <div className="mb-4">
            <p
              ref={descriptionRef}
              className={`text-slate-600 leading-relaxed transition-all duration-300 ${
                isExpanded ? '' : 'line-clamp-4'
              }`}
            >
              {description}
            </p>
            {showReadMore && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="text-blue-600 text-sm font-medium mt-1 hover:underline focus:outline-none"
              >
                {isExpanded ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>
        )}
        {footer && (
          <div className="mt-auto pt-4 border-t border-slate-100">{footer}</div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;

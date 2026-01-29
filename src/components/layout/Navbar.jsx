import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import useWindowSize from '../../hooks/useWindowSize';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { width } = useWindowSize();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change or resize
  useEffect(() => {
    setIsOpen(false);
  }, [location, width]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-4 border-b border-white/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group z-50 relative">
          <Anchor
            className={`w-8 h-8 transition-colors ${
              scrolled || isOpen ? 'text-blue-600' : 'text-blue-500'
            }`}
          />
          <span
            className={`text-2xl font-bold tracking-tight transition-colors ${
              scrolled || isOpen ? 'text-slate-900' : 'text-white'
            }`}
          >
            Blue<span className="text-blue-500">Cove</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                scrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'
              } ${location.pathname === link.path ? 'text-blue-500' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant={scrolled ? 'primary' : 'outline'}
            size="sm"
            to="/rooms"
            className={
              !scrolled
                ? 'border-white text-white hover:bg-white hover:text-blue-900 overflow-hidden'
                : ''
            }
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 relative p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-slate-900" />
          ) : (
            <Menu
              className={`w-6 h-6 ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`text-3xl font-light tracking-wide hover:text-blue-600 transition-colors ${
                    location.pathname === link.path
                      ? 'text-blue-600 font-normal'
                      : 'text-slate-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="primary"
                size="lg"
                to="/rooms"
                className="mt-8 px-8 py-3 text-lg shadow-xl shadow-blue-500/20"
                onClick={() => setIsOpen(false)}
              >
                Book Your Stay
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
    <>
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
      </nav>
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] bg-white text-slate-900 flex flex-col"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <span className="text-2xl font-bold tracking-tight">
                  Blue<span className="text-blue-500">Cove</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2 text-slate-500 hover:text-slate-900"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* Mobile Menu Links */}
              <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-2xl font-light tracking-wide block py-2 ${
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
                  transition={{ delay: 0.4 }}
                  className="pt-6"
                >
                  <Button
                    variant="primary"
                    size="lg"
                    to="/rooms"
                    className="w-full justify-center text-lg shadow-xl shadow-blue-500/20"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Your Stay
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Navbar;

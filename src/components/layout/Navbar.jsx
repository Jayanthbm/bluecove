import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Anchor
            className={`w-8 h-8 transition-colors ${scrolled ? 'text-blue-600' : 'text-blue-600'}`}
          />
          <span
            className={`text-2xl font-bold tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}
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
              className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                scrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'
              } ${location.pathname === link.path ? 'text-blue-500' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant={scrolled ? 'primary' : 'primary'}
            size="sm"
            to="/rooms"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X
              className={`w-6 h-6 ${scrolled ? 'text-slate-900' : 'text-white'}`}
            />
          ) : (
            <Menu
              className={`w-6 h-6 ${scrolled ? 'text-slate-900' : 'text-white'}`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-2xl font-light text-white hover:text-blue-400 transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Button variant="primary" size="lg" to="/rooms" className="mt-4">
          Book Your Stay
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

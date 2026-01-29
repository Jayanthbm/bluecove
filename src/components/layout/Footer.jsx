import React from 'react';
import { Link } from 'react-router-dom';
import {
  Anchor,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { COMMON_DATA } from '../../data/common';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Anchor className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-bold">
                Shivani<span className="text-amber-400">SunsetBay</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Experience the ultimate luxury at Shivani Sunset Bay Beach Resort.
              Tranquility, elegance, and unforgettable ocean views await.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-400">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/rooms"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link
                  to="/amenities"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-400">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                <span>{COMMON_DATA.address}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span>{COMMON_DATA.mobile[0]}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span>{COMMON_DATA.email[0]}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-400">
              Stay Updated
            </h3>
            <p className="text-slate-400 mb-4">
              Subscribe to our newsletter for exclusive offers.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Shivani Sunset Bay Beach Resort. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-slate-400 hover:text-amber-400 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-amber-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-amber-400 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import ContactHero from '../components/contact/ContactHero';
import Button from '../components/ui/Button';
import { useSeo } from '../seo/useSeo';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { COMMON_DATA } from '../data/common';

const Contact = () => {
  useSeo({
    title: 'Contact Us | BlueCove Resort',
    description: 'Get in touch with us for reservations and inquiries.',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for submission logic
    console.log('Form Submitted', formData);
    alert('Thank you for getting in touch! We will respond shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [COMMON_DATA.address],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: COMMON_DATA.mobile,
    },
    {
      icon: Mail,
      title: 'Email',
      details: COMMON_DATA.email,
    },
    {
      icon: Clock,
      title: 'Check-in / Check-out',
      details: [
        `Check-in: ${COMMON_DATA.CHECK_IN}`,
        `Check-out: ${COMMON_DATA.CHECK_OUT}`,
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-50"
    >
      <ContactHero />
      <Section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-slate-900">
                Contact Information
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Have questions about your upcoming stay? Need help planning your
                itinerary? Our concierge team is here to assist you 24/7.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      {item.title}
                    </h4>
                    {item.details.map((line, i) => (
                      <p key={i} className="text-sm text-slate-500">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            {/* <div className="h-64 bg-slate-200 rounded-xl w-full flex items-center justify-center text-slate-400">
              Interactive Map Component
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100">
            <h3 className="text-2xl font-serif text-slate-900 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  placeholder="Reservation Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button
                variant="primary"
                size="lg"
                type="submit"
                className="w-full flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default Contact;

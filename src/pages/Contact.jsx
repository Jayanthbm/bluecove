import React from 'react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import { useSeo } from '../seo/useSeo';

const Contact = () => {
  useSeo({
    title: 'Contact Us | BlueCove Resort',
    description: 'Get in touch with us for reservations and inquiries.',
  });

  return (
    <div className="pt-20">
      <Section>
        <SectionTitle title="Contact Us" subtitle="Get in Touch" />
        <p className="text-center text-slate-600">Contact form coming soon.</p>
      </Section>
    </div>
  );
};

export default Contact;

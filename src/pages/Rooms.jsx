import React from 'react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import { useSeo } from '../seo/useSeo';

const Rooms = () => {
  useSeo({
    title: 'Luxury Rooms & Suites | BlueCove Resort',
    description:
      'Explore our luxurious rooms and suites with breathtaking ocean views.',
  });

  return (
    <div className="pt-20">
      <Section>
        <SectionTitle title="Our Rooms" subtitle="Stay in Comfort" />
        <p className="text-center text-slate-600">Room listing coming soon.</p>
      </Section>
    </div>
  );
};

export default Rooms;

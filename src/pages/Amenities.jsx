import React from 'react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import { useSeo } from '../seo/useSeo';

const Amenities = () => {
  useSeo({
    title: 'Amenities | BlueCove Resort',
    description:
      'Discover our world-class amenities including spa, pool, and dining.',
  });

  return (
    <div className="pt-20">
      <Section>
        <SectionTitle title="Amenities" subtitle="Relax & Unwind" />
        <p className="text-center text-slate-600">
          Amenities content coming soon.
        </p>
      </Section>
    </div>
  );
};

export default Amenities;

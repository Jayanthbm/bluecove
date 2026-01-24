import React from 'react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import { useSeo } from '../seo/useSeo';

const Gallery = () => {
  useSeo({
    title: 'Photo Gallery | BlueCove Resort',
    description:
      'View photos of our beautiful resort, amenities, and ocean views.',
  });

  return (
    <div className="pt-20">
      <Section>
        <SectionTitle title="Gallery" subtitle="Visual Experience" />
        <p className="text-center text-slate-600">
          Gallery content coming soon.
        </p>
      </Section>
    </div>
  );
};

export default Gallery;

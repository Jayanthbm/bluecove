import React from 'react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import { useSeo } from '../seo/useSeo';

const About = () => {
  useSeo({
    title: 'About Us | BlueCove Resort',
    description:
      'Learn about the story of BlueCove Resort and our commitment to luxury.',
  });

  return (
    <div className="pt-20">
      <Section>
        <SectionTitle title="About Us" subtitle="Our Story" />
        <p className="text-center text-slate-600">About content coming soon.</p>
      </Section>
    </div>
  );
};

export default About;

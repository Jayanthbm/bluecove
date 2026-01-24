import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    text: 'The most beautiful resort I have ever visited. The staff was incredibly welcoming and the views are unmatched.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    text: 'A perfect honeymoon destination. The overwater bungalow was a dream come true. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Watson',
    location: 'London, UK',
    text: "The spa services were exceptional and the food was divine. Can't wait to come back next year.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Section className="bg-blue-50">
      <SectionTitle title="Guest Reviews" subtitle="What People Say" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((review) => (
          <div
            key={review.id}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex gap-1 mb-4 text-yellow-400">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-slate-600 italic mb-6">"{review.text}"</p>
            <div>
              <h4 className="font-bold text-slate-900">{review.name}</h4>
              <span className="text-sm text-slate-400">{review.location}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;

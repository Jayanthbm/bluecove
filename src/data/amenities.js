import {
  Utensils,
  Sun,
  Coffee,
  Waves,
  Wifi,
  MapPin,
  Trees,
  Dumbbell,
} from 'lucide-react';

export const amenitiesPageData = [
  {
    title: 'Gourmet Coastal Dining',
    description:
      'Savor the freshest seafood and international cuisines at our oceanfront restaurant. Our chefs curate menus that blend local flavors with global sophistication, all enjoyed with a panoramic view of the sea.',
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop',
    icon: Utensils,
    reverse: false,
  },
  {
    title: 'The BlueCove Spa',
    description:
      'Rejuvenate your senses in our world-class spa. Offering a range of holistic treatments, massages, and wellness therapies designed to restore balance and harmony to your body and mind.',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop',
    icon: Coffee,
    reverse: true,
  },
  {
    title: 'Infinity Pool & Lounge',
    description:
      'Immerse yourself in our infinity pool that blends seamlessly with the horizon. Enjoy playful cocktails at the swim-up bar or relax on our private sun deck.',
    image:
      'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=2727&auto=format&fit=crop',
    icon: Sun,
    reverse: false,
  },
  {
    title: 'Private Beach Access',
    description:
      'Step directly from the resort onto the pristine white sands of our private beach. Perfect for morning walks, sunset gazing, or simply listening to the rhythm of the waves.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop',
    icon: Waves,
    reverse: true,
  },
];

export const amenitiesFeatures = [
  { icon: Wifi, label: 'High-Speed Wifi' },
  { icon: Dumbbell, label: '24/7 Fitness Center' },
  { icon: Trees, label: 'Lush Gardens' },
  { icon: MapPin, label: 'Concierge Service' },
];

export const homeAmenities = [
  {
    icon: Waves,
    title: 'Private Beach',
    description: 'Exclusive access to pristine white sand beaches.',
  },
  {
    icon: Utensils,
    title: 'Fine Dining',
    description: 'Experience world-class culinary delights.',
  },
  {
    icon: Sun,
    title: 'Infinity Pool',
    description: 'Relax in our climate-controlled outdoor pools.',
  },
  {
    icon: Coffee,
    title: 'Luxury Spa',
    description: 'Rejuvenate with our premium spa treatments.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Wifi',
    description: 'Stay connected with complimentary high-speed internet.',
  },
  {
    icon: MapPin,
    title: 'Island Tours',
    description: 'Explore the local beauty with guided tours.',
  },
];

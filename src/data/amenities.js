import {
  Utensils,
  Sun,
  Coffee,
  Waves,
  Wifi,
  MapPin,
  Trees,
  Dumbbell,
  Gamepad2,
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
  { icon: Dumbbell, label: 'Fitness Center' },
  { icon: Trees, label: 'Lush Gardens' },
  { icon: MapPin, label: 'Concierge Service' },
];

export const homeAmenities = [
  {
    icon: Waves,
    title: 'Private Beach',
    description:
      'Step onto our exclusive, pristine white sands where the ocean meets tailored luxury. Enjoy private cabanas, beachside service, and the soothing rhythm of the waves without the crowds.',
    image:
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2670&auto=format&fit=crop',
  },
  {
    icon: Utensils,
    title: 'Fine Dining',
    description:
      'Embark on a culinary journey with our world-class chefs. Using fresh, locally sourced ingredients to create exquisite coastal and international dishes that delight the palate.',
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop',
  },
  {
    icon: Sun,
    title: 'Infinity Pool',
    description:
      'Immerse yourself in our temperature-controlled infinity pool that blends seamlessly with the azure horizon. Features a swim-up bar and private lounge decks for ultimate relaxation.',
    image:
      'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=2727&auto=format&fit=crop',
  },
  {
    icon: Coffee,
    title: 'Luxury Spa',
    description:
      'Revitalize your body and mind with our premium holistic treatments. From deep-tissue massages to rejuvenating facials, our expert therapists ensure a state of pure bliss.',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop',
  },
  {
    icon: Gamepad2,
    title: 'Indoor Play Area',
    description:
      'A dedicated space for fun and excitement, featuring modern gaming consoles, arcade classics, and interactive activities to keep children and teens engaged and entertained.',
    image:
      'https://images.unsplash.com/photo-1596952865768-15444ca76571?q=80&w=2670&auto=format&fit=crop', // Playful image
  },
  {
    icon: MapPin,
    title: 'Island Tours',
    description:
      'Discover the hidden gems of Murudeshwara with our curated guided tours. Explore ancient temples, scenic viewpoints, and lush landscapes with our knowledgeable local guides.',
    image:
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2698&auto=format&fit=crop',
  },
];

import { Wifi, Coffee, Sun } from 'lucide-react';

export const rooms = [
  {
    id: 1,
    title: 'Ocean View Suite',
    description:
      'Wake up to the sound of waves in our premium ocean view suites with private balcony. Featuring a king-size bed and a spacious living area.',
    images: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2525&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574&auto=format&fit=crop',
    ],
    price: '₹35,000 / night',
    size: '65m²',
    adults: 2,
    children: 1,
    amenities: [Wifi, Coffee, Sun],
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Garden Villa',
    description:
      'Surrounded by lush tropical gardens, offering ultimate privacy and tranquility. Includes a private patio and outdoor rain shower.',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-6e53ce41be03?q=80&w=2670&auto=format&fit=crop',
    ],
    price: '₹28,000 / night',
    size: '80m²',
    adults: 2,
    children: 2,
    amenities: [Wifi, Coffee],
    isFeatured: true,
  },
  {
    id: 3,
    title: 'Overwater Bungalow',
    description:
      'Direct ocean access from your private deck. The ultimate luxury experience with glass floor panels and infinity plunge pool.',
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=2727&auto=format&fit=crop',
    ],
    price: '₹75,000 / night',
    size: '110m²',
    adults: 2,
    children: 0,
    amenities: [Wifi, Coffee, Sun],
    isFeatured: false,
  },
  {
    id: 4,
    title: 'Family Coastal Suite',
    description:
      'Designed for families, this spacious suite offers two bedrooms, a large living area, and easy access to the kids club and main pool.',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512918760383-568802a3c369?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2670&auto=format&fit=crop',
    ],
    price: '₹45,000 / night',
    size: '95m²',
    adults: 2,
    children: 2,
    amenities: [Wifi, Sun],
    isFeatured: false,
  },
  {
    id: 5,
    title: 'Presidential Penthouse',
    description:
      'Top-floor exclusivity with panoramic ocean views, private jacuzzi, butler service, and a dedicated dining room for in-suite meals.',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop',
    ],
    price: '₹1,20,000 / night',
    size: '200m²',
    adults: 4,
    children: 2,
    amenities: [Wifi, Coffee, Sun],
    isFeatured: true,
  },
];

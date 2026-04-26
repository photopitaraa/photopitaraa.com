export interface PackageFeature {
  text: string;
  included: boolean;
}

export interface Package {
  id: string;
  name: string;
  tagline: string;
  startingPrice: string;
  priceNote: string;
  deliveryTimeline: string;
  isPopular?: boolean;
  features: PackageFeature[];
  idealFor: string;
  color: 'silver' | 'gold' | 'platinum';
}

export const packages: Package[] = [
  {
    id: 'essential',
    name: 'Essential',
    tagline: 'Every beautiful beginning.',
    startingPrice: '₹75,000',
    priceNote: 'Starting price — customised to your event',
    deliveryTimeline: '4–6 weeks',
    color: 'silver',
    idealFor: 'Intimate ceremonies & small celebrations',
    features: [
      { text: '8 hours of photography coverage', included: true },
      { text: '1 lead photographer + 1 assistant', included: true },
      { text: '500+ edited high-resolution images', included: true },
      { text: 'Private online gallery (1 year)', included: true },
      { text: 'Pre-event consultation call', included: true },
      { text: 'Cinematic film / videography', included: false },
      { text: 'Premium lay-flat album', included: false },
      { text: 'Drone aerial footage', included: false },
      { text: 'Same-week preview (20 images)', included: false },
      { text: 'Engagement session', included: false },
    ],
  },
  {
    id: 'signature',
    name: 'Signature',
    tagline: 'The complete love story.',
    startingPrice: '₹1,40,000',
    priceNote: 'Starting price — customised to your event',
    deliveryTimeline: '3–5 weeks',
    isPopular: true,
    color: 'gold',
    idealFor: 'Multi-day weddings & full celebrations',
    features: [
      { text: '12 hours of photography coverage', included: true },
      { text: '2 lead photographers', included: true },
      { text: '800+ edited high-resolution images', included: true },
      { text: 'Private online gallery (2 years)', included: true },
      { text: 'In-person planning session', included: true },
      { text: 'Cinematic highlight film (3–5 min)', included: true },
      { text: 'Premium lay-flat album (40 pages)', included: true },
      { text: 'Drone aerial footage', included: false },
      { text: 'Same-week preview (30 images)', included: true },
      { text: 'Engagement session (2 hrs)', included: true },
    ],
  },
  {
    id: 'royal',
    name: 'Royal',
    tagline: 'An heirloom, not just a memory.',
    startingPrice: '₹2,50,000',
    priceNote: 'Starting price — customised to your event',
    deliveryTimeline: '2–4 weeks',
    color: 'platinum',
    idealFor: 'Grand destination weddings & palace events',
    features: [
      { text: 'Multi-day full coverage (up to 3 days)', included: true },
      { text: '3 photographers + dedicated cinematographer', included: true },
      { text: '1,200+ edited high-resolution images', included: true },
      { text: 'Private online gallery (lifetime)', included: true },
      { text: 'Dedicated coordination & planning', included: true },
      { text: 'Feature cinematic film (25–40 min) + highlight reel', included: true },
      { text: 'Luxury leather album (60 pages)', included: true },
      { text: 'Drone aerial footage', included: true },
      { text: 'Same-week preview (50 images)', included: true },
      { text: 'Full engagement session + print set', included: true },
    ],
  },
];

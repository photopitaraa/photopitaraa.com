export interface Service {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  description: string;
  startingPrice?: string;
  features: string[];
  coverImage: string;
  category: string;
}

export const services: Service[] = [
  {
    slug: 'wedding-photography',
    title: 'Wedding Photography',
    icon: 'Favorite',
    shortDescription:
      'Timeless, editorial storytelling from your first look to the last slow dance.',
    description:
      'We arrive before the henna dries and stay until the stars come out. Every detail — the trembling hands before the pheras, the grandmother dabbing her eyes, the flower girl who forgot her cue — is woven into a visual narrative that is entirely, unrepeatably yours.',
    startingPrice: '₹75,000',
    features: [
      'Full-day coverage (up to 12 hrs)',
      '2 lead photographers',
      'Pre-wedding consultation',
      'Private online gallery',
      'High-resolution edited images (800+)',
      'Rush delivery available',
    ],
    coverImage: '/images/wedding-1.jpg',
    category: 'Wedding',
  },
  {
    slug: 'cinematic-films',
    title: 'Cinematic Films',
    icon: 'Videocam',
    shortDescription:
      'Feature-length wedding films scored to your love story — not a slideshow, a cinematic memoir.',
    description:
      'Our cinematographers think in frames and feel in music. The result is a film your grandchildren will sit down to watch — one that captures how it sounded, how the evening air felt, how the room erupted when you walked in.',
    startingPrice: '₹60,000',
    features: [
      'Full-day cinematic coverage',
      'Highlight reel (3–5 min)',
      'Feature film (25–40 min)',
      'Drone aerial footage',
      'Dolby-mixed audio',
      'Digital delivery + USB',
    ],
    coverImage: '/images/wedding-2.jpg',
    category: 'Wedding',
  },
  {
    slug: 'pre-wedding',
    title: 'Pre-Wedding Shoot',
    icon: 'CameraAlt',
    shortDescription:
      'Location shoots crafted around your chemistry — mountains, markets, or monsoon streets.',
    description:
      'Before the ceremony comes the story of the two of you. Our pre-wedding sessions are unhurried conversations with a camera — we find locations that reflect your personality and create images that make you forget anyone was watching.',
    startingPrice: '₹25,000',
    features: [
      'Half-day or full-day session',
      'Location scouting included',
      'Outfit change assistance',
      '150+ edited images',
      'Same-week preview gallery',
    ],
    coverImage: '/images/prewedding-1.jpg',
    category: 'Pre-Wedding',
  },
  {
    slug: 'birthday-photography',
    title: 'Birthday Celebrations',
    icon: 'Cake',
    shortDescription:
      'From the first slice of cake to the confetti-filled finale — every joy, documented.',
    description:
      "Milestone birthdays are chapters, not just dates. Whether it's a first birthday filled with smashed cake and wide eyes, or a 50th surrounded by everyone you love, we bring the same cinematic eye to every candle-lit moment.",
    startingPrice: '₹15,000',
    features: [
      '4–6 hours of coverage',
      '300+ edited images',
      'Candid + portrait mix',
      'Online gallery in 7 days',
    ],
    coverImage: '/images/birthday-1.jpg',
    category: 'Celebration',
  },
  {
    slug: 'baby-shower',
    title: 'Baby Shower',
    icon: 'ChildCare',
    shortDescription:
      'Soft light, soft smiles — the morning a family becomes a little larger.',
    description:
      "There's a particular magic in a room where everyone is waiting to love someone they haven't met yet. We document the warmth, the laughter, the shared excitement — every image glowing with anticipation.",
    startingPrice: '₹12,000',
    features: [
      '3–4 hours of coverage',
      '200+ edited images',
      'Flatlay & detail shots',
      'Gallery delivered in 5 days',
    ],
    coverImage: '/images/events-1.jpg',
    category: 'Celebration',
  },
  {
    slug: 'maternity',
    title: 'Maternity Photography',
    icon: 'PregnantWoman',
    shortDescription:
      'The in-between — soft and sacred and worth holding onto forever.',
    description:
      'Nine months is both forever and a blink. Our maternity sessions are intimate, unhurried, and guided entirely by your comfort. Studio or outdoor, draped or natural — every image honours the quiet miracle of becoming.',
    startingPrice: '₹18,000',
    features: [
      'Studio or outdoor session',
      '2 hours of coverage',
      'Wardrobe & prop guidance',
      '100+ edited images',
      'Printed minibook (optional)',
    ],
    coverImage: '/images/maternity-1.jpg',
    category: 'Celebration',
  },
  {
    slug: 'corporate-events',
    title: 'Corporate Events',
    icon: 'BusinessCenter',
    shortDescription:
      'Conference launches, product reveals, and team milestones — captured with precision and polish.',
    description:
      'Corporate photography that feels alive, not staged. We blend into your event, reading the room to capture the handshakes that close deals, the speaker who electrifies a hall, and the behind-the-scenes energy that drives your brand.',
    startingPrice: '₹20,000',
    features: [
      'Full or half-day coverage',
      'On-site culling & selects',
      'Brand-consistent editing',
      'Fast 48-hour turnaround',
      'Commercial usage licence',
    ],
    coverImage: '/images/corporate-1.jpg',
    category: 'Corporate',
  },
  {
    slug: 'albums-prints',
    title: 'Albums & Fine Prints',
    icon: 'MenuBook',
    shortDescription:
      'Handcrafted heirloom albums and museum-quality prints made to outlast a lifetime.',
    description:
      'A screen holds pixels. An album holds memories. Our lay-flat albums are designed with the same care as the photographs inside — acid-free papers, leather covers, and a sequencing that reads like a film. These are meant for coffee tables and inheritance.',
    features: [
      'Lay-flat flush-mount albums',
      'Custom leather covers',
      'Fine art print sets',
      'Canvas & metal prints',
      'Worldwide shipping',
    ],
    coverImage: '/images/album-1.jpg',
    category: 'Products',
  },
];

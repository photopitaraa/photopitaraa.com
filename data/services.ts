export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  coverImage: string;
  category: string;
}

export const services: Service[] = [
  {
    slug: '',
    title: '',
    shortDescription:
      'Photopitaraa – Where moments become magic.',
    description:
      'We arrive before the henna dries and stay until the stars come out. Every detail — the trembling hands before the pheras, the grandmother dabbing her eyes, the flower girl who forgot her cue — is woven into a visual narrative that is entirely, unrepeatably yours.',
    features: [
      'Full-day coverage (up to 12 hrs)',
      '2 lead photographers',
      'Pre-wedding consultation',
      'Private online gallery',
      'High-resolution edited images (800+)',
      'Rush delivery available',
    ],
    coverImage: '/images/weddings/Couple1-Landscape.jpg',
    category: 'Wedding',
  },
  {
    slug: '',
    title: '',
    shortDescription:
      'Not just photos, we create feelings.',
    description:
      'Our cinematographers think in frames and feel in music. The result is a film your grandchildren will sit down to watch — one that captures how it sounded, how the evening air felt, how the room erupted when you walked in.',
    features: [
      'Full-day cinematic coverage',
      'Highlight reel (3–5 min)',
      'Feature film (25–40 min)',
      'Drone aerial footage',
      'Dolby-mixed audio',
      'Digital delivery + USB',
    ],
    coverImage: '/images/weddings/Couple2-Landscape.jpg',
    category: 'Engagement',
  },
  {
    slug: '',
    title: '',
    shortDescription:
      'Every click tells your story.',
    description:
      'Before the ceremony comes the story of the two of you. Our pre-wedding sessions are unhurried conversations with a camera — we find locations that reflect your personality and create images that make you forget anyone was watching.',
    features: [
      'Half-day or full-day session',
      'Location scouting included',
      'Outfit change assistance',
      '150+ edited images',
      'Same-week preview gallery',
    ],
    coverImage: '/images/prewedding/Pre-Wedding1-Landscape.jpg',
    category: 'Pre-Wedding',
  },
  {
    slug: '',
    title: '',
    shortDescription:
      'We don’t shoot photos, we capture emotions.',
    description:
      "Milestone birthdays are chapters, not just dates. Whether it's a first birthday filled with smashed cake and wide eyes, or a 50th surrounded by everyone you love, we bring the same cinematic eye to every candle-lit moment.",
    features: [
      '4–6 hours of coverage',
      '300+ edited images',
      'Candid + portrait mix',
      'Online gallery in 7 days',
    ],
    coverImage: '/images/New%20Images/1000000183.jpg.jpeg',
    category: 'Celebration',
  },
  {
    slug: '',
    title: '',
    shortDescription:
      'Your story deserves more than just pictures.',
    description:
      "There's a particular magic in a room where everyone is waiting to love someone they haven't met yet. We document the warmth, the laughter, the shared excitement — every image glowing with anticipation.",
    features: [
      '3–4 hours of coverage',
      '200+ edited images',
      'Flatlay & detail shots',
      'Gallery delivered in 5 days',
    ],
    coverImage: '/images/New%20Images/1000325276.jpg.jpeg',
    category: 'Celebration',
  },
  {
    slug:'',
    title: '',
    shortDescription:
      'The in-between — soft and sacred and worth holding onto forever.',
    description:
      'Nine months is both forever and a blink. Our maternity sessions are intimate, unhurried, and guided entirely by your comfort. Studio or outdoor, draped or natural — every image honours the quiet miracle of becoming.',
    features: [
      'Studio or outdoor session',
      '2 hours of coverage',
      'Wardrobe & prop guidance',
      '100+ edited images',
      'Printed minibook (optional)',
    ],
    coverImage: '/images/New%20Images/1000047980.jpg.jpeg',
    category: 'Celebration',
  },
  {
    slug: '',
    title: '',
    shortDescription:
      'Conference launches, product reveals, and team milestones — captured with precision and polish.',
    description:
      'Corporate photography that feels alive, not staged. We blend into your event, reading the room to capture the handshakes that close deals, the speaker who electrifies a hall, and the behind-the-scenes energy that drives your brand.',
    features: [
      'Full or half-day coverage',
      'On-site culling & selects',
      'Brand-consistent editing',
      'Fast 48-hour turnaround',
      'Commercial usage licence',
    ],
    coverImage: '/images/New%20Images/1000053370.jpg.jpeg',
    category: 'Corporate',
  },
  {
    slug: '',
    title: '',
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
    coverImage: '/images/New%20Images/1000163046.jpg.jpeg',
    category: 'Products',
  },
];

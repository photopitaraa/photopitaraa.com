export type GalleryCategory =
  | 'All'
  | 'Weddings'
  | 'Pre-Wedding'
  | 'Birthday'
  | 'Events'
  | 'Maternity'
  | 'Kids';

export interface GalleryItem {
  id: string;
  slug: string;
  title: string;
  category: GalleryCategory;
  location: string;
  date: string;
  /** Landscape / desktop-primary cover */
  coverImage: string;
  /** Optional portrait-oriented cover for phones & upright tablets */
  coverImagePortrait?: string;
  images: string[];
  story?: string;
  couple?: string;
  venue?: string;
  width: number;
  height: number;
}

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    slug: 'priya-arjun-udaipur',
    title: '',
    category: 'Weddings',
    location: '',
    date: 'February 2025',
    couple: '',
    venue: 'Taj Lake Palace, Udaipur',
    coverImage: '/images/weddings/Couple1-Landscape.jpg',
    coverImagePortrait: '/images/weddings/Couple1-Portrait.jpg',
    images: [
      '/images/wedding-1.jpg',
      '/images/wedding-2.jpg',
      '/images/wedding-3.jpg',
      '/images/prewedding-1.jpg',
    ],
    story:
      'Arjun spotted Priya across a crowded terrace at a cousin\'s wedding three years before their own. He spent 40 minutes working up the courage to say hello. When he finally did, she already knew his name. We told their story in the golden light of the lake palace — every glance, every stolen laugh, every moment that proved some things are worth waiting for.',
    width: 800,
    height: 600,
  },
  {
    id: '2',
    slug: 'celebration-two',
    title: '',
    category: 'Weddings',
    location: '',
    date: 'January 2025',
    couple: '',
    venue: '',
    coverImage: '/images/weddings/Couple2-Landscape.jpg',
    coverImagePortrait: '/images/weddings/Couple2-Portrait.jpg',
    images: [
      '/images/weddings/Couple2-Landscape.jpg',
      '/images/weddings/Couple2-Portrait.jpg',
    ],
    story:
      'Sun fell across textured walls and carved wood in long strokes — a ceremony held close, laughter echoing off stone, and the kind of quiet pride families wear when everything feels exactly right.',
    width: 800,
    height: 600,
  },
  {
    id: '3',
    slug: 'ananya-rohit-goa',
    title: 'Ananya & Rohit',
    category: 'Pre-Wedding',
    location: 'Goa',
    date: 'December 2024',
    couple: 'Ananya & Rohit',
    coverImage: '/images/prewedding-1.jpg',
    images: [
      '/images/prewedding-1.jpg',
      '/images/prewedding-2.jpg',
    ],
    story:
      'Monsoon Goa. Empty beaches, golden hour light spilling across the water, and two people completely at ease with being themselves. This session was about the silence between the laughs — the comfortable kind.',
    width: 800,
    height: 600,
  },
  {
    id: '4',
    slug: 'divya-birthday-50',
    title: "Divya's Golden 50",
    category: 'Birthday',
    location: 'Pune, Maharashtra',
    date: 'November 2024',
    coverImage: '/images/birthday-1.jpg',
    images: [
      '/images/birthday-1.jpg',
    ],
    story:
      'Fifty years of grace, grit, and joy — celebrated with the people who made her who she is. We documented every toast, every tear, every grandchild rushing in for a hug.',
    width: 800,
    height: 600,
  },
  {
    id: '5',
    slug: 'naina-maternity',
    title: 'Naina — The Wait',
    category: 'Maternity',
    location: 'Mumbai, Maharashtra',
    date: 'October 2024',
    coverImage: '/images/maternity-1.jpg',
    images: [
      '/images/maternity-1.jpg',
    ],
    story:
      'Seven months of quiet anticipation, captured in soft morning light at their home. Naina told us she wanted to remember exactly how it felt — the weight, the wonder, the certainty that her whole world was about to change.',
    width: 800,
    height: 1067,
  },
  {
    id: '6',
    slug: 'sharma-baby-shower',
    title: 'Sharma Family Baby Shower',
    category: 'Events',
    location: 'Delhi',
    date: 'September 2024',
    coverImage: '/images/events-1.jpg',
    images: [
      '/images/events-1.jpg',
    ],
    story:
      'Three generations of the Sharma family gathered to welcome the newest member. The room was filled with colour, food, and the kind of happiness that spills out of people when they\'re not trying to contain it.',
    width: 800,
    height: 600,
  },
  {
    id: '7',
    slug: 'ishaan-first-birthday',
    title: "Ishaan's First",
    category: 'Kids',
    location: 'Bangalore, Karnataka',
    date: 'August 2024',
    coverImage: '/images/kids-1.jpg',
    images: [
      '/images/kids-1.jpg',
    ],
    story:
      'He had no idea what the fuss was about. But the second that cake arrived, his eyes said everything. First birthdays aren\'t really for the baby — they\'re for the parents who made it through the first year and deserve a proper celebration.',
    width: 800,
    height: 1067,
  },
  {
    id: '8',
    slug: 'kavya-vivek-jaipur',
    title: 'Kavya & Vivek',
    category: 'Weddings',
    location: 'Jaipur, Rajasthan',
    date: 'March 2025',
    couple: 'Kavya & Vivek',
    venue: 'Amer Fort, Jaipur',
    coverImage: '/images/wedding-3.jpg',
    images: [
      '/images/wedding-3.jpg',
      '/images/wedding-1.jpg',
    ],
    story:
      'A palace wedding bathed in marigold and candlelight. The ancient walls of Amer Fort held their vows like they\'d been waiting centuries for this particular love story.',
    width: 800,
    height: 600,
  },
];

export const galleryCategories: GalleryCategory[] = [
  'All',
  'Weddings',
  'Pre-Wedding',
  'Birthday',
  'Events',
  'Maternity',
  'Kids',
];

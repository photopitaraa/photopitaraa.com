export const siteConfig = {
  name: 'Photo Pitaara',
  tagline: 'Where Every Frame Tells a Love Story',
  description:
    'Award-winning wedding & celebration photography studio based in Mumbai. We capture the quiet glances, the tears of joy, and the laughter between dances — the moments that make your story yours.',
  phone: '+91 98765 43210',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919XXXXXXXXX',
  email: 'photopitaraa@gmail.com',
  address: {
    line1: '42, Linking Road, Bandra West',
    city: 'Mumbai',
    state: 'Maharashtra',
    pin: '400050',
    country: 'India',
  },
  workingHours: {
    weekdays: 'Mon – Sat: 10:00 AM – 7:00 PM',
    sunday: 'Sunday: By appointment only',
  },
  social: {
    instagram: 'https://instagram.com/photopitaraa',
    youtube: 'https://youtube.com/@photopitaara',
    facebook: 'https://facebook.com/photopitaara',
    pinterest: 'https://pinterest.com/photopitaara',
  },
  ogImage: '/og-image.jpg',
  url: 'https://www.photopitaara.com',
  founded: 2016,
  stats: [
    { value: 500, suffix: '+', label: 'Weddings Captured' },
    { value: 8, suffix: ' yrs', label: 'Years of Craft' },
    { value: 12, suffix: '', label: 'Awards Won' },
    { value: 100, suffix: '%', label: '5-Star Reviews' },
  ],
};

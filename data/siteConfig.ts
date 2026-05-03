export const siteConfig = {
  name: 'Photopitaraa',
  tagline: 'Where Every Frame Tells a Love Story',
  description:
    'Award-winning wedding & celebration photography studio based in Indore, Madhya Pradesh. We capture the quiet glances, the tears of joy, and the laughter between dances — the moments that make your story yours.',
  phone: '+91 90390 19193',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919XXXXXXXXX',
  email: 'photopitaraa@gmail.com',
  address: {
    line1: '201, Johri mansion, 56 Dukaan',
    city: 'Indore',
    state: 'Madhya Pradesh',
    pin: '',
    country: 'India',
  },
  workingHours: {
    weekdays: 'Mon – Sat: 10:00 AM – 7:00 PM',
    sunday: 'Sunday: By appointment only',
  },
  social: {
    instagram: 'https://instagram.com/photopitaraa',
    youtube: 'https://youtube.com/@photopitaraa',
    facebook: 'https://facebook.com/photopitaraa',
    pinterest: 'https://pinterest.com/photopitaraa',
  },
  ogImage: '/og-image.jpg',
  url: 'https://www.photopitaraa.com',
  founded: 2016,
  stats: [
    { value: 500, suffix: '+', label: 'Weddings Captured' },
    { value: 8, suffix: ' yrs', label: 'Years of Craft' },
    { value: 12, suffix: '', label: 'Awards Won' },
    { value: 100, suffix: '%', label: '5-Star Reviews' },
  ],
};

/** Full studio address for maps, contact cards, and embed search. */
export function getStudioAddressLine() {
  const { line1, city, state, pin, country } = siteConfig.address;
  const locality = [city, state].filter(Boolean).join(', ');
  return [line1, locality, pin, country].filter(Boolean).join(', ');
}

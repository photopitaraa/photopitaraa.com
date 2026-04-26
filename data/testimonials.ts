export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
  eventType: string;
  date: string;
  platform: 'Google' | 'WeddingWire' | 'Direct';
  videoUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya & Arjun Mehta',
    role: 'Wedding clients',
    location: 'Udaipur',
    rating: 5,
    text: "Words genuinely fail me. When I first saw our wedding gallery, I sat down on the floor and cried for twenty minutes. Not because I was sad — because I was overwhelmed that someone had captured things I didn't even know happened. The moment my dad looked at me before walking me down the aisle. The way Arjun's hands were shaking. Photo Pitaara didn't photograph our wedding. They told our story.",
    eventType: 'Wedding',
    date: 'February 2025',
    platform: 'Google',
    image: '/images/avatar-1.jpg',
  },
  {
    id: '2',
    name: 'Meera & Kabir Shah',
    role: 'Wedding clients',
    location: 'Mumbai',
    rating: 5,
    text: "We were nervous about having photographers around all day — we're private people and didn't want it to feel like a photoshoot. Within the first hour, we forgot they were there. The images look like stolen moments, not posed portraits. The cinematic film made my mother-in-law sob at the premiere screening. That's the review we needed.",
    eventType: 'Wedding + Film',
    date: 'January 2025',
    platform: 'Google',
    image: '/images/avatar-2.jpg',
  },
  {
    id: '3',
    name: 'Sunita Sharma',
    role: 'Birthday client',
    location: 'Delhi',
    rating: 5,
    text: "I hired Photo Pitaara for my mother's 70th birthday and they treated it with the same reverence as a royal wedding. The photos are absolutely gorgeous — every detail, every tear, every spontaneous group hug. My mother carries a print of one photograph in her purse everywhere she goes.",
    eventType: 'Birthday',
    date: 'September 2024',
    platform: 'Google',
  },
  {
    id: '4',
    name: 'Ananya & Rohit Kapoor',
    role: 'Pre-wedding clients',
    location: 'Goa',
    rating: 5,
    text: "Our pre-wedding shoot was meant to be a quick box-tick. It ended up being the best afternoon of our engagement. The team knew exactly when to give direction and when to disappear. The images feel like us — not like a catalogue. We've been stopped three times by strangers who recognised us from an Instagram post.",
    eventType: 'Pre-Wedding',
    date: 'December 2024',
    platform: 'Google',
    image: '/images/avatar-3.jpg',
  },
  {
    id: '5',
    name: 'Naina Gupta',
    role: 'Maternity client',
    location: 'Mumbai',
    rating: 5,
    text: "I almost didn't book a maternity shoot because I felt so unlike myself during pregnancy. The team made me feel genuinely beautiful — not in a forced way, but in the way that makes you realise you're doing something miraculous. The images are the most honest portraits I've ever had taken.",
    eventType: 'Maternity',
    date: 'October 2024',
    platform: 'WeddingWire',
  },
  {
    id: '6',
    name: 'Kavya & Vivek Iyer',
    role: 'Wedding clients',
    location: 'Jaipur',
    rating: 5,
    text: "We gave them a massive venue, 600 guests, and a 4-day celebration. They handled it all with a calm professionalism that was deeply reassuring. But what truly sets Photo Pitaara apart is the editing — each image has a mood, a light quality, that makes our wedding look like it happened in a film. Which, in a way, it did.",
    eventType: 'Wedding',
    date: 'March 2025',
    platform: 'Google',
    image: '/images/avatar-4.jpg',
  },
  {
    id: '7',
    name: 'Rohan & Divya Nair',
    role: 'Wedding clients',
    location: 'Kochi',
    rating: 5,
    text: "Three things stood out: communication (always available, always reassuring), creativity (they scouted two new angles I would never have thought of), and the final album which is genuinely the most beautiful object in our home. Zero hesitation recommending them to every couple we know.",
    eventType: 'Wedding',
    date: 'November 2024',
    platform: 'Direct',
  },
];

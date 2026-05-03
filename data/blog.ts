export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  content: BlogBlock[];
  tags: string[];
}

export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'quote'; text: string; attribution?: string };

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'how-to-prepare-for-your-wedding-day-shoot',
    title: 'How to Prepare for Your Wedding Day Shoot (Without Losing Your Mind)',
    excerpt:
      "The secret to great wedding photography isn't perfect hair or flawless light — it's the hour before the ceremony when everything feels like it might fall apart. Here's how to make that hour work for you.",
    category: 'Wedding Tips',
    author: 'Kartik Patidar',
    date: 'April 10, 2025',
    readTime: '6 min read',
    coverImage: '/images/New%20Images/1000000169.jpg.jpeg',
    tags: ['Wedding', 'Tips', 'Preparation', 'Photography'],
    content: [
      {
        type: 'paragraph',
        text: "Your wedding morning will move faster than you expect. The makeup artist will run 15 minutes late. Someone's dupatta will need a last-minute press. Your mother will start crying before anyone's ready for her to. And in the middle of all of it, there we'll be — cameras ready, documenting every beautiful, chaotic second.",
      },
      {
        type: 'heading',
        text: 'Give yourself a buffer hour',
      },
      {
        type: 'paragraph',
        text: "The number one thing couples tell us after their wedding: 'I wish we'd had more time.' Build a full hour of nothing into your schedule between getting ready and the ceremony. This isn't laziness — it's the space where the real photographs happen.",
      },
      {
        type: 'quote',
        text: "The most beautiful images don't happen when everyone is ready. They happen in the ten minutes before, when the emotion is still unguarded.",
        attribution: 'Kartik Patidar, Founder',
      },
      {
        type: 'heading',
        text: 'Trust the light, not the location',
      },
      {
        type: 'paragraph',
        text: "Couples often fixate on iconic backdrops. But a spectacular venue with bad light at the wrong hour will always lose to a simple staircase bathed in golden afternoon sun. Talk to us early about timing — we plan our day around the light.",
      },
    ],
  },
  {
    id: '2',
    slug: 'golden-hour-why-it-matters',
    title: 'Golden Hour: Why the Last 45 Minutes of Light Are Worth Rearranging Your Schedule For',
    excerpt:
      'If you could move your portrait session anywhere in the day, we\'d tell you to move it to 45 minutes before sunset. Every single time. Here\'s why.',
    category: 'Photography Insights',
    author: 'Riya Kapoor',
    date: 'March 22, 2025',
    readTime: '4 min read',
    coverImage: '/images/New%20Images/1000000287.jpg.jpeg',
    tags: ['Golden Hour', 'Lighting', 'Photography', 'Tips'],
    content: [
      {
        type: 'paragraph',
        text: "Professional photographers speak about golden hour the way chefs talk about truffle season — it's brief, it's extraordinary, and nothing else quite replaces it. The soft, directional light that falls in the 40 minutes before sunset wraps around a face differently from any studio light in the world.",
      },
      {
        type: 'heading',
        text: 'What actually changes at golden hour',
      },
      {
        type: 'paragraph',
        text: "At midday, the sun sits high and casts harsh shadows under eyes and noses. At golden hour, it sits low, throwing long, warm light across the landscape horizontally. Skin glows. Backgrounds separate. Even a plain field becomes a scene.",
      },
      {
        type: 'image',
        src: '/images/New%20Images/1000000183.jpg.jpeg',
        alt: 'Couple photographed in golden hour light',
        caption: '',
      },
    ],
  },
  {
    id: '3',
    slug: 'what-makes-a-great-wedding-album',
    title: "What Makes a Great Wedding Album (It's Not What You Think)",
    excerpt:
      "Most couples choose images for their album based on how they look in them. The best albums are sequenced for how they make you feel. That distinction changes everything.",
    category: 'Albums & Prints',
    author: 'Kartik Patidar',
    date: 'February 14, 2025',
    readTime: '5 min read',
    coverImage: '/images/New%20Images/1000163046.jpg.jpeg',
    tags: ['Albums', 'Wedding', 'Design', 'Storytelling'],
    content: [
      {
        type: 'paragraph',
        text: "An album is the only wedding investment that lives outside a screen. It sits on your coffee table. Your children's children will pick it up. It will be the first thing your family grabs if the house ever floods. Choosing images for it based purely on flattering angles is like casting a film based on who looks best in a headshot.",
      },
      {
        type: 'heading',
        text: 'Sequence is the story',
      },
      {
        type: 'paragraph',
        text: "Great albums open slowly — details and atmosphere — then build through emotion to the ceremony, the release of the reception, and quieter images at the end. They breathe. They have rhythm. When you design yours with us, we'll spend as much time on sequencing as image selection.",
      },
    ],
  },
  {
    id: '4',
    slug: 'destination-wedding-photography-guide',
    title: 'Destination Wedding Photography: Everything You Need to Know Before You Book',
    excerpt:
      "Rajasthan palaces. Goa beaches. Kerala backwaters. A destination wedding is a gift to your guests and your photographs — if you plan it right. Here's our complete guide.",
    category: 'Wedding Tips',
    author: 'Riya Kapoor',
    date: 'January 30, 2025',
    readTime: '8 min read',
    coverImage: '/images/New%20Images/1000000290.jpg.jpeg',
    tags: ['Destination Wedding', 'Travel', 'Planning', 'Rajasthan'],
    content: [
      {
        type: 'paragraph',
        text: "A destination wedding gives your photographer something a local event rarely can: time. When we travel with you, we aren't rushing to the next booking. We arrive a day early to scout light. We stay for the final morning chai. The images that result are different — slower, more immersive, more true.",
      },
    ],
  },
];

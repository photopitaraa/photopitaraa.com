import type { GalleryItem } from '@/data/gallery';
import { galleryItems } from '@/data/gallery';

/** Display line for featured tiles (HOTC-style: date + couple + place). */
export interface HotcFeaturedItem {
  displayDate: string;
  title: string;
  subtitle?: string;
  image: string;
  href: string;
  width: number;
  height: number;
}

function toFeatured(g: GalleryItem, displayDate: string): HotcFeaturedItem {
  return {
    displayDate,
    title: g.title,
    subtitle: g.location,
    image: g.coverImage,
    href: `/portfolio/${g.slug}`,
    width: g.width,
    height: g.height,
  };
}

/** Featured grid: clustered dates like editorial homepages. */
export const hotcFeaturedItems: HotcFeaturedItem[] = [
  toFeatured(galleryItems[0], 'Feb 14, 2025'),
  toFeatured(galleryItems[1], 'Feb 14, 2025'),
  toFeatured(galleryItems[7], 'Feb 14, 2025'),
  toFeatured(galleryItems[2], 'Jan 28, 2025'),
  toFeatured(galleryItems[3], 'Jan 28, 2025'),
  toFeatured(galleryItems[4], 'Dec 6, 2024'),
  toFeatured(galleryItems[5], 'Dec 6, 2024'),
  toFeatured(galleryItems[6], 'Nov 2, 2024'),
  toFeatured(galleryItems[0], 'Nov 2, 2024'),
];

export const hotcIntro = {
  lead:
    'Considered among the new wave of modern wedding photography in India, Photopitaraa has spent years building photographs and films that feel timeless — etched in memory long after the last song.',
  awards:
    'Recognised for editorial storytelling and featured across leading wedding journals. We travel for love stories — from our home in Indore to palace courtyards across India.',
};

export const hotcBlogTeaser = {
  title: 'Photography Blog',
  body:
    'Every wedding is unique — and so is every frame we chase. For years we have pushed how stills and motion can sit together: quiet mornings, chaotic baraats, the glance that says everything. These notes from the field are for couples who care about craft.',
};

export const hotcFilms = {
  heading: 'Award-Winning Films',
  films: [
    {
      title: 'Light Across the Courtyard.',
      copy:
        'A single-day edit that refuses to rush. Two families, one old haveli, and the slow arc of a monsoon sky — we let silence stay in the cut because that is where the vows actually land.',
    },
    {
      title: 'Letters Before the Monsoon.',
      copy:
        'Shot across three cities, this film was never going to fit a three-minute reel. We followed handwritten letters, childhood photographs, and a reception that ended in barefoot dancing — a story about returning home to each other.',
    },
  ],
  ctaLabel: 'Watch All Our Films',
  ctaHref: 'https://youtube.com/@photopitaraa',
};

export const hotcManifesto =
  'We celebrate the wild ones — the rule breakers, the travellers, the couples who are not afraid to experiment. The goal is simple: honour the vibe of your day and the truth of who you are. That approach has taken us from intimate living-room vows to celebrations stretched across continents.';

export const hotcSelectedIntro =
  'Here are selected weddings from the past few seasons — two people, one union, told as honestly as we know how.';

export const hotcSignature = {
  title: 'Heirloom — our finest stills offering.',
  body:
    'Heirloom is our quiet, fine-art editorial direction: bright when the room is bright, soft when the moment asks for air. Classic coverage without performance — made for couples who want photographs that still feel like themselves in twenty years. We accept a limited number of Heirloom commissions each season.',
  ctaLabel: 'Discover Heirloom',
  ctaHref: '/contact',
};

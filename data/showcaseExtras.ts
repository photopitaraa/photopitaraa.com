import type { GalleryCategory } from '@/data/gallery';
import { picsumUrl, SHOWCASE_DUMMY_SEEDS } from '@/lib/mediaPlaceholders';

export interface ShowcaseTile {
  id: string;
  title: string;
  location: string;
  date: string;
  category: GalleryCategory;
  coverImage: string;
  images: string[];
  width: number;
  height: number;
}

/** Editorial-only dummy stories for dense grids (picsum). */
export const showcaseExtraTiles: ShowcaseTile[] = SHOWCASE_DUMMY_SEEDS.map((seed, i) => {
  const w = 800;
  const h = i % 3 === 0 ? 1100 : i % 3 === 1 ? 720 : 960;
  const url = picsumUrl(seed, w, h);
  return {
    id: `extra-${seed}`,
    title: `Celebration ${i + 1}`,
    location: ['Mumbai', 'Udaipur', 'Goa', 'Jaipur', 'Delhi'][i % 5],
    date: ['Oct 2024', 'Aug 2024', 'Jun 2024', 'Apr 2024', 'Feb 2024'][i % 5],
    category: (['Weddings', 'Pre-Wedding', 'Events'] as const)[i % 3] as GalleryCategory,
    coverImage: url,
    images: [url],
    width: w,
    height: h,
  };
});

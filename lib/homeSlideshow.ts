import { galleryItems } from '@/data/gallery';
import type { ResponsiveCoverPick } from '@/lib/responsiveGalleryCover';

export type HomeHeroSlideEntry = ResponsiveCoverPick & {
  slug: string;
  location: string;
  slideshowHideCaptions?: boolean;
};

/** Keeps landing slideshow data in one module (pairs with paginated grids — fewer duplicate filters). */
export const homeHeroSlideEntries: HomeHeroSlideEntry[] = galleryItems
  .filter(
    (g) =>
      (g.category === 'Weddings' || g.category === 'Pre-Wedding') && !g.hideFromHomeSlideshow,
  )
  .slice(0, 6)
  .map((g) => ({
    slug: g.slug,
    title: g.title,
    location: g.location,
    coverImage: g.coverImage,
    coverImagePortrait: g.coverImagePortrait,
    slideshowHideCaptions: g.slideshowHideCaptions,
  }));

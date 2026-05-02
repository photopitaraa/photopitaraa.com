import { galleryItems } from '@/data/gallery';
import type { ResponsiveCoverPick } from '@/lib/responsiveGalleryCover';

/** Advert-style slide: no cover image, tagline only (rotates with featured work). */
export type HomeHeroPromoSlide = {
  promo: true;
  slug: string;
};

export type HomeHeroGallerySlide = ResponsiveCoverPick & {
  slug: string;
  location: string;
  slideshowHideCaptions?: boolean;
};

export type HomeHeroSlideEntry = HomeHeroGallerySlide | HomeHeroPromoSlide;

export function isHomeHeroPromoSlide(entry: HomeHeroSlideEntry): entry is HomeHeroPromoSlide {
  return 'promo' in entry && entry.promo === true;
}

const PROMO_BE_OUR_NEXT_COVER: HomeHeroPromoSlide = {
  promo: true,
  slug: 'be-our-next-cover',
};

/** Keeps landing slideshow data in one module (pairs with paginated grids — fewer duplicate filters). */
export const homeHeroSlideEntries: HomeHeroSlideEntry[] = [
  ...galleryItems
    .filter(
      (g) =>
        (g.category === 'Weddings' || g.category === 'Pre-Wedding') && !g.hideFromHomeSlideshow,
    )
    .slice(0, 6)
    .map(
      (g): HomeHeroGallerySlide => ({
        slug: g.slug,
        title: g.title,
        location: g.location,
        coverImage: g.coverImage,
        coverImagePortrait: g.coverImagePortrait,
        slideshowHideCaptions: g.slideshowHideCaptions,
      }),
    ),
  PROMO_BE_OUR_NEXT_COVER,
];
